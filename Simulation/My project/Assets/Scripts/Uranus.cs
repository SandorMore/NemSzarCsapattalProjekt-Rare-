using UnityEngine;
using System;
public class Uranus : PlanetLegacy
{
    void Start()
    {
        this.mass = 8.6811e25;
        this.orbitalRadius = 250559;
        this.orbitalPeriod = 30685.4;
        this.sizeScale = 119;
        this.rotationSpeed = CalculateRotationSpeed();
    }

    void Update()
    {
        transform.Rotate(Vector3.up, (float)(rotationSpeed * Time.deltaTime));
    }
    private double CalculateRotationSpeed()
    {
        return (2 * Math.PI * orbitalRadius) / orbitalPeriod / 11.24;
    }
}
