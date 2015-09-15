#pragma strict
var speed : float;
var player2 : GameObject;
function Start () {
speed = -speed;
}

function Update () {
if(player2.GetComponent.<Rigidbody2D>().mass == 2){
transform.Translate(Vector3.right * speed * Time.deltaTime);
}
}