using UnityEngine;
using System;
public class Neptune : PlanetLegacy
{
    void Start()
    {
        this.mass = 1.02409e26;
        this.orbitalRadius = 24764;
        this.orbitalPeriod = 60189.018;
        this.sizeScale = 119;
        this.rotationSpeed = CalculateRotationSpeed();
    }

    void Update()
    {
        transform.Rotate(Vector3.up, (float)(rotationSpeed * Time.deltaTime));
    }
    private double CalculateRotationSpeed()
    {
        return (2 * Math.PI * orbitalRadius) / orbitalPeriod / 16.11;
    }
}
