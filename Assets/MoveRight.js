#pragma strict

var speed : float;
var jumpSpeed : float;
private var jump : boolean = true;
private var up : boolean = false;
private var down : boolean = false;

function Start () {

}

function Update () {
 transform.Translate(Vector3.right * speed * Time.deltaTime);
 
 do {
 transform.Translate(Vector3.up * jumpSpeed * Time.deltaTime);
 }
 while(up == true);    
 
 
 do {
 transform.Translate(Vector3.down * jumpSpeed * Time.deltaTime);
 }
 while(down == true);
 
 if (Input.GetKey("a") && jump==true){
	 jumping();
	}
}

function jumping (){
    Debug.Log("0");
    jump = false;
    up = true;
    yield WaitForSeconds(2);
    Debug.Log("1");
    up = false;
    down = true;
    yield WaitForSeconds(2);
    Debug.Log("2");
    down = false;
    jump = true;
}