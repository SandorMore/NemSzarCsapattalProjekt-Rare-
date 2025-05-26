using UnityEngine;
using System;
public class Jupiter : PlanetLegacy
{
    void Start()
    {
        this.mass = 1.89813e27;
        this.orbitalRadius = 66854;
        this.orbitalPeriod = 4332;
        this.sizeScale = 119;
        this.rotationSpeed = CalculateRotationSpeed();
    }

    void Update()
    {
        transform.Rotate(Vector3.up, (float)(rotationSpeed * Time.deltaTime));
    }
    private double CalculateRotationSpeed()
    {
        return (2 * Math.PI * orbitalRadius) / orbitalPeriod / 9.9259;
    }
}
