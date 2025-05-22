using System.Numerics;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.Rendering;

public abstract class PlanetLegacy : MonoBehaviour
{
    #region Adatok
    public double mass;
    public double radius;
    public double circumference;
    public double rotationSpeed;
    public double orbitalPeriod;
    public double orbitalRadius; // distance form sun
    public double sizeScale;
    #endregion

}