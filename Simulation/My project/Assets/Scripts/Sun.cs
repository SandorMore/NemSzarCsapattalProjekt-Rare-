using UnityEngine;
using System;
public class Sun : PlanetLegacy
{ 
    void Start()
    {
        this.mass = 1.989e30;
        this.orbitalRadius = 1;
        this.orbitalPeriod = 609.12;
        this.sizeScale = 119;
        this.rotationSpeed = CalculateRotationSpeed();
    }

    void Update()
    {
        transform.Rotate(Vector3.up, (float)(rotationSpeed * Time.deltaTime));
    }
    private double CalculateRotationSpeed()
    {
        return (2 * Math.PI * orbitalRadius) / orbitalPeriod;
    }
}
