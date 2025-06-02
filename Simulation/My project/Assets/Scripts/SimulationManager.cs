using UnityEngine;

public class SimulationManager : MonoBehaviour
{
    public static SimulationManager Instance { get; private set; }

    [Header("Global Simulation Settings")]
    [Tooltip("Speed multiplier for the whole simulation")]
    public double timeScale = 1; // A timeScale of 1 means in real time

    [Header("Time Scale Control")]
    [Tooltip("How quickly the time scale changes when using arrow keys")]
    public float timeScaleChangeSpeed = 1.5f;
    [Tooltip("Minimum time scale")]
    public float minTimeScale = 1f;

    [Header("Orbit Visualization Settings")]
    [Tooltip("Number of points to draw each orbit")]
    public int orbitResolution = 100;

    [Tooltip("Scale factor to convert kilometers to Unity units")]
    public double scaleFactor = 1/1000000;

    [Tooltip("Width of the orbit lines")]
    public float orbitLineWidth = 0.1f;

    public static double G = 6.6743e-11; // Gravitational constant

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(this);
        }
        else
        {
            Instance = this;
        }
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.UpArrow))
        {
            timeScale *= timeScaleChangeSpeed;
        }
        else if (Input.GetKeyDown(KeyCode.DownArrow))
        {
            timeScale /= timeScaleChangeSpeed;
            timeScale = System.Math.Max(timeScale, minTimeScale);
        }
    }
}
