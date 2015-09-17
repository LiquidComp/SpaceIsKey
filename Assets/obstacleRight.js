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
/*if(player2.GetComponent.<Rigidbody2D>().mass != 2){
transform.localPosition = new Vector3(16.0,-4.6,0);
}*/
}
function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Player"){
	transform.localPosition = new Vector3(16.0,-4.6,0);
	}
}
