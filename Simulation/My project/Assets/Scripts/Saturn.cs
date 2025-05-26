using UnityEngine;
using System;
public class Saturn : PlanetLegacy
{
    void Start()
    {
        this.mass = 5.6832e26;
        this.orbitalRadius = 60268;
        this.orbitalPeriod = 10755.699;
        this.sizeScale = 119;
        this.rotationSpeed = CalculateRotationSpeed();
    }

    void Update()
    {
        transform.Rotate(Vector3.up, (float)(rotationSpeed * Time.deltaTime));
    }
    private double CalculateRotationSpeed()
    {
        return (2 * Math.PI * orbitalRadius) / orbitalPeriod / 10.656;
    }
}
