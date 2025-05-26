using UnityEngine;

public class UranusOrbit : MonoBehaviour
{
    public Transform sun;

    private const float sunMass = 1.989e30f;
    private const float G = 6.67430e-11f;
    private const float AU = 1.496e11f;

    private float timeScale = 5000f;

    private Vector3 position;
    private Vector3 velocity;

    void Start()
    {
        float originalDistanceAU = 19.18f;
        float scaleFactor = 0.9f;

        position = new Vector3(originalDistanceAU * scaleFactor * AU, 0f, 0f);

        float originalSpeed = 6800f;
        float velocityScale = Mathf.Sqrt(scaleFactor);
        velocity = new Vector3(0f, 0f, originalSpeed * velocityScale);

        velocity /= AU;

        transform.position = sun.position + position / AU;
    }

    void Update()
    {
        float deltaTime = Time.deltaTime * timeScale;

        Vector3 direction = -position;
        float distance = direction.magnitude;
        Vector3 forceDir = direction.normalized;

        float accelerationMagnitude = G * sunMass / (distance * distance);
        Vector3 acceleration = forceDir * accelerationMagnitude;

        acceleration /= AU;

        velocity += acceleration * deltaTime;
        position += velocity * deltaTime;

        transform.position = sun.position + position / AU;
    }
}
