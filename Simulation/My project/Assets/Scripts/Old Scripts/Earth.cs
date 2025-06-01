using UnityEngine;
using System;
public class Earth : PlanetLegacy
{
    void Start()
    {
        this.mass = 5.972e24;
        this.orbitalRadius = 1.495e11;
        this.orbitalPeriod = 31557600;
        this.sizeScale = 1;
        this.rotationSpeed = CalculateRotationSpeed();
    }

    void Update()
    {
        transform.Rotate(Vector3.up, (float)(rotationSpeed * Time.deltaTime));
    }

    private double CalculateRotationSpeed()
    {
        return (2 * Math.PI * orbitalRadius) / orbitalPeriod / 360 / 24 ;
    }
}

