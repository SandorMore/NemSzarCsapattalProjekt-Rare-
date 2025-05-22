using UnityEngine;
using System;
public class Mercury : PlanetLegacy
{
    void Start()
    {
        this.mass = 3.30104e23;
        this.orbitalRadius = 5.7909e7;
        this.orbitalPeriod = 87.969;
        this.sizeScale = 1;
        this.rotationSpeed = CalculateRotationSpeed();
    }

    void Update()
    {
        transform.Rotate(Vector3.up, (float)(rotationSpeed * Time.deltaTime));
    }

    private double CalculateRotationSpeed()
    {
        return (2 * Math.PI * orbitalRadius) / orbitalPeriod / 87 / 4222.6;
    }
}

