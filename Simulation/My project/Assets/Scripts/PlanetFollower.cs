using UnityEngine;

public class PlanetFollower : MonoBehaviour
{
    private GameObject[] planets;
    private int currentPlanetIndex = -1;
    private Vector3 lastPlayerPosition;
    private Vector3 cameraOffset = new Vector3(5.7921824f, 2.84f, 0);
    private Camera mainCamera;

    [Header("Camera Settings")]
    public float rotationSpeed = 100f;
    public float minVerticalAngle = -80f;
    public float maxVerticalAngle = 80f;
    public float surfaceDistance = 10f;
    public float zoomSpeed = 10f;
    public float minSurfaceDistance = 2f;
    public float maxSurfaceDistance = 100f;

    private float currentRotationX = 0f;
    private float currentRotationY = 0f;
    private Vector3 orbitCenter;

    public bool isFollowingPlanet = false;

    void Start()
    {
        planets = GameObject.FindGameObjectsWithTag("Planet");
        System.Array.Sort(planets, (a, b) => {
            Planet planetA = a.GetComponent<Planet>();
            Planet planetB = b.GetComponent<Planet>();
            return planetA.semiMajorAxis.CompareTo(planetB.semiMajorAxis);
        });
        
        mainCamera = GetComponentInChildren<Camera>();
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.LeftArrow))
        {
            if (currentPlanetIndex > 0)
            {
                currentPlanetIndex--;
                isFollowingPlanet = true;
                ResetCameraRotation();
            }
        }
        else if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            if (currentPlanetIndex < planets.Length - 1)
            {
                currentPlanetIndex++;
                isFollowingPlanet = true;
                ResetCameraRotation();
            }
        }

        if (Input.GetAxisRaw("Horizontal") != 0 || Input.GetAxisRaw("Vertical") != 0)
        {
            isFollowingPlanet = false;
        }

        if (isFollowingPlanet && currentPlanetIndex >= 0)
        {
            GameObject targetPlanet = planets[currentPlanetIndex];
            orbitCenter = targetPlanet.transform.position;

            float scrollInput = Input.GetAxis("Mouse ScrollWheel");
            if (scrollInput != 0)
            {
                surfaceDistance -= scrollInput * zoomSpeed;
                surfaceDistance = Mathf.Clamp(surfaceDistance, minSurfaceDistance, maxSurfaceDistance);
            }

            Planet planetComponent = targetPlanet.GetComponent<Planet>();
            float planetRadius = 0f;
            if (planetComponent != null)
            {
                planetRadius = (float)(planetComponent.radius * SimulationManager.Instance.scaleFactor);
            }
            float totalOrbitDistance = planetRadius + surfaceDistance;

            float mouseX = Input.GetAxis("Mouse X") * rotationSpeed * Time.deltaTime;
            float mouseY = Input.GetAxis("Mouse Y") * rotationSpeed * Time.deltaTime;

            currentRotationY += mouseX;
            currentRotationX -= mouseY;
            currentRotationX = Mathf.Clamp(currentRotationX, minVerticalAngle, maxVerticalAngle);

            Vector3 direction = Quaternion.Euler(currentRotationX, currentRotationY, 0) * Vector3.forward;
            Vector3 targetPosition = orbitCenter - direction * totalOrbitDistance;
            transform.position = targetPosition;

            if (mainCamera != null)
            {
                mainCamera.transform.LookAt(orbitCenter);
            }
        }

        lastPlayerPosition = transform.position;
    }

    private void ResetCameraRotation()
    {
        currentRotationX = 0f;
        currentRotationY = 0f;
    }
}