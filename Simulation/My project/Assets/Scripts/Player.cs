using UnityEngine;

public class Player : MonoBehaviour
{
    public float moveSpeed = 5f;
    public float mouseSensitivity = 2f;
    Transform nigga;
    float rotationX = 0f;
    float rotationY = 0f;

    void Start()
    {
        Cursor.lockState = CursorLockMode.Locked; 
        nigga = GetComponentInChildren<Camera>().transform;
    }

    void Update()
    {
        float mouseX = Input.GetAxis("Mouse X") * mouseSensitivity;
        float mouseY = Input.GetAxis("Mouse Y") * mouseSensitivity;

        rotationY += mouseX;
        rotationX -= mouseY;
        rotationX = Mathf.Clamp(rotationX, -90f, 90f); 


        transform.localRotation = Quaternion.Euler(0, rotationY, 0);


        nigga.localRotation = Quaternion.Euler(rotationX, 0, 0);

        float xInput = Input.GetAxisRaw("Horizontal");
        float zInput = Input.GetAxisRaw("Vertical");
        Vector3 move = (transform.right * xInput + transform.forward * zInput).normalized;
        transform.position += move * moveSpeed * Time.deltaTime;
    }
}
