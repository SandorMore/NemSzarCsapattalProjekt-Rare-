using UnityEngine;
using System;
public class Mars : PlanetLegacy
{
    void Start()
    {
        this.mass = 6.4169e23;
        this.orbitalRadius = 3376.2;
        this.orbitalPeriod = 686.98;
        this.sizeScale = 119;
        this.rotationSpeed = CalculateRotationSpeed();
    }

    void Update()
    {
        transform.Rotate(Vector3.up, (float)(rotationSpeed * Time.deltaTime));
    }
    private double CalculateRotationSpeed()
    {
        return (2 * Math.PI * orbitalRadius) / orbitalPeriod / 24.6597;
    }
}
