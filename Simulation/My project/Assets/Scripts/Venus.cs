using UnityEngine;
using System;
public class Venus : PlanetLegacy
{
    void Start()
    {
        this.mass = 4.8673e24;
        this.orbitalRadius = 6052.8;
        this.orbitalPeriod = 2802;
        this.sizeScale = 119;   
        this.rotationSpeed = CalculateRotationSpeed();
    }

    void Update()
    {
        transform.Rotate(Vector3.up, (float)(rotationSpeed * Time.deltaTime));
    }
    private double CalculateRotationSpeed()
    {
        return (2 * Math.PI * orbitalRadius) / orbitalPeriod ;
    }
}
