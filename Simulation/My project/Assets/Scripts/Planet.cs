using UnityEngine;

public class Planet : MonoBehaviour
{
    [Header("Orbital Parameters")]

    [Tooltip("The body this object orbits around (e.g., Sun for planets, Earth for Moon)")]
    public Planet centralBody;

    [Tooltip("Semi-major axis in kilometers")]
    public double semiMajorAxis = 0; // km (149.598e6 for Earth)

    [Tooltip("Orbital eccentricity (0 = circular, 0-1 = elliptical)")]
    [Range(0f, 0.99f)]
    public double eccentricity = 0; // 0.0167 for Earth

    [Tooltip("Mass of the body in kilograms")]
    public double mass = 0; // kg (5.9722e24 for Earth)

    [Header("Physical Parameters")]
    [Tooltip("Radius in kilometers")]
    public double radius = 0; // km (6371 for Earth)

    [Header("Rotation Parameters")]
    [Tooltip("Rotation period in hours")]
    public double rotationPeriod = 0; // hours (23.9345 for Earth)

    [Tooltip("Axis tilt in degrees")]
    public float axisTilt = 0; // (23.44 for Earth)

    private LineRenderer orbitLine;
    private double currentTime = 0;

    private void Start()
    {
        orbitLine = GetComponent<LineRenderer>();

        transform.rotation = Quaternion.Euler(0, 0, axisTilt);
        
        if (orbitLine != null)
        {
            if (centralBody == null) {
                orbitLine.startWidth = 0;
                orbitLine.endWidth = 0;
            }

            orbitLine.useWorldSpace = true;
            orbitLine.loop = true;
            orbitLine.positionCount = SimulationManager.Instance.orbitResolution;
        }
        
        UpdateScale();
    }

    private void Update()
    {
        currentTime += Time.deltaTime * SimulationManager.Instance.timeScale;

        UpdateScale();

        if (centralBody != null)
        {
            UpdatePosition();
        }

        if (rotationPeriod > 0) {
            float rotationSpeed = (float)((360 / (rotationPeriod * 3600)) * SimulationManager.Instance.timeScale);
            transform.Rotate(Vector3.up, rotationSpeed * Time.deltaTime);
        }
    }

    private void UpdatePosition()
    {
        double mu = SimulationManager.G * (centralBody.mass + mass);
        double orbitalPeriod = 2 * System.Math.PI * System.Math.Sqrt(System.Math.Pow(semiMajorAxis * 1000, 3) / mu);

        double meanAnomaly = (2 * System.Math.PI * currentTime) / orbitalPeriod;
        
        double eccentricAnomaly = SolveKeplerEquation(meanAnomaly);
        
        double trueAnomaly = 2 * System.Math.Atan(System.Math.Sqrt((1 + eccentricity) / (1 - eccentricity)) * System.Math.Tan(eccentricAnomaly / 2));

        double distance = semiMajorAxis * (1 - eccentricity * eccentricity) / (1 + eccentricity * System.Math.Cos(trueAnomaly));

        double x = distance * System.Math.Cos(trueAnomaly);
        double y = distance * System.Math.Sin(trueAnomaly);

        transform.position = centralBody.transform.position + new Vector3(
            (float)(x * SimulationManager.Instance.scaleFactor),
            0,
            (float)(y * SimulationManager.Instance.scaleFactor)
        );
    }

    private double SolveKeplerEquation(double meanAnomaly, double tolerance = 1e-10, int maxIterations = 50)
    {
        double eccentricAnomaly = meanAnomaly;

        for (int i = 0; i < maxIterations; i++)
        {
            double nextEccentricAnomaly = eccentricAnomaly - (eccentricAnomaly - eccentricity * System.Math.Sin(eccentricAnomaly) - meanAnomaly) / (1 - eccentricity * System.Math.Cos(eccentricAnomaly));

            if (System.Math.Abs(nextEccentricAnomaly - eccentricAnomaly) < tolerance) return nextEccentricAnomaly;

            eccentricAnomaly = nextEccentricAnomaly;
        }
        
        return eccentricAnomaly;
    }

    public void DrawOrbit()
    {
        if (centralBody == null || orbitLine == null) return;

        orbitLine.startWidth = SimulationManager.Instance.orbitLineWidth;
        orbitLine.endWidth = SimulationManager.Instance.orbitLineWidth;

        double semiMinorAxis = semiMajorAxis * System.Math.Sqrt(1 - eccentricity * eccentricity);
        double focusDistance = semiMajorAxis * eccentricity;

        for (int i = 0; i < SimulationManager.Instance.orbitResolution; i++)
        {
            double angle = (i * 2 * System.Math.PI) / SimulationManager.Instance.orbitResolution;
            
            double trueAnomaly = angle;
            
            double radius = semiMajorAxis * (1 - eccentricity * eccentricity) / (1 + eccentricity * System.Math.Cos(trueAnomaly));
            
            double x = radius * System.Math.Cos(trueAnomaly);
            double y = radius * System.Math.Sin(trueAnomaly);
            
            Vector3 position = centralBody.transform.position + new Vector3(
                (float)(x * SimulationManager.Instance.scaleFactor),
                -SimulationManager.Instance.orbitLineWidth,
                (float)(y * SimulationManager.Instance.scaleFactor)
            );
            
            orbitLine.SetPosition(i, position);
        }
    }

    public void UpdateScale()
    {
        if (radius > 0)
        {
            float scale = (float)(radius * SimulationManager.Instance.scaleFactor);
            transform.localScale = new Vector3(scale, scale, scale);
        }

        DrawOrbit();
    }
}