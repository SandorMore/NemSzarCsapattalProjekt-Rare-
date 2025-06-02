using UnityEngine;

public class Player : MonoBehaviour
{
    [Header("Movement Settings")]
    public float baseSpeed = 50f;
    public float speedChangeRate = 10f;
    public float mouseSensitivity = 2f;
    public float verticalSpeed = 3f;

    [Header("Speed Control")]
    public float minSpeedMultiplier = 0.1f;
    public float maxSpeedMultiplier = 100000f;
    public float speedMultiplierStep = 1.5f;

    private Transform cameraTransform;
    private float currentSpeed;
    private float normalSpeedMultiplier = 1f;
    private float sprintSpeedMultiplier;
    private float rotationX = 0f;
    private float rotationY = 0f;
    private PlanetFollower planetFollower;

    void Start()
    {
        Cursor.lockState = CursorLockMode.Locked;
        cameraTransform = GetComponentInChildren<Camera>().transform;
        currentSpeed = baseSpeed;
        planetFollower = GetComponent<PlanetFollower>();
        sprintSpeedMultiplier = normalSpeedMultiplier * speedMultiplierStep;
    }

    void Update()
    {
        if (!planetFollower.isFollowingPlanet) {
            HandleRotation();
            HandleSpeedMultiplier();
        }
        HandleMovement();
    }

    void HandleRotation()
    {
        float mouseX = Input.GetAxis("Mouse X") * mouseSensitivity;
        float mouseY = Input.GetAxis("Mouse Y") * mouseSensitivity;

        rotationY += mouseX;
        rotationX -= mouseY;
        rotationX = Mathf.Clamp(rotationX, -90f, 90f);

        transform.localRotation = Quaternion.Euler(0, rotationY, 0);
        cameraTransform.localRotation = Quaternion.Euler(rotationX, 0, 0);
    }

    void HandleSpeedMultiplier()
    {
        float scrollInput = Input.GetAxis("Mouse ScrollWheel");
        
        if (scrollInput != 0)
        {
            float multiplierChange = scrollInput > 0 ? speedMultiplierStep : 1f / speedMultiplierStep;
            
            if (Input.GetKey(KeyCode.LeftShift))
            {
                float newMultiplier = sprintSpeedMultiplier * multiplierChange;
                // float newMultiplier = Mathf.Lerp(sprintSpeedMultiplier, sprintSpeedMultiplier * multiplierChange, Time.deltaTime * speedChangeRate*10);
                sprintSpeedMultiplier = Mathf.Clamp(newMultiplier, minSpeedMultiplier, maxSpeedMultiplier);
            }
            else
            {
                float newMultiplier = normalSpeedMultiplier * multiplierChange;
                // float newMultiplier = Mathf.Lerp(normalSpeedMultiplier, normalSpeedMultiplier * multiplierChange, Time.deltaTime * speedChangeRate*10);
                normalSpeedMultiplier = Mathf.Clamp(newMultiplier, minSpeedMultiplier, maxSpeedMultiplier);
            }
        }
    }

    void HandleMovement()
    {
        float xInput = Input.GetAxisRaw("Horizontal");
        float zInput = Input.GetAxisRaw("Vertical");
        float yInput = 0f;

        if (Input.GetKey(KeyCode.Q)) yInput = -1f;
        if (Input.GetKey(KeyCode.E)) yInput = 1f;

        Vector3 move = (transform.right * xInput + transform.forward * zInput + transform.up * yInput).normalized;

        float targetSpeed = baseSpeed;
        
        if (Input.GetKey(KeyCode.LeftShift))
        {
            targetSpeed *= sprintSpeedMultiplier;
        }
        else
        {
            targetSpeed *= normalSpeedMultiplier;
        }

        currentSpeed = Mathf.Lerp(currentSpeed, targetSpeed, Time.deltaTime * speedChangeRate);

        transform.position += move * currentSpeed * Time.deltaTime;
    }
}
