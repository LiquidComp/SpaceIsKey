#pragma strict
var speed : float;
var player2 : GameObject;
private var setBack : boolean = false;
function Start () {
speed = -speed;
}

function Update () {
if(player2.GetComponent.<Rigidbody2D>().mass == 2){
transform.Translate(Vector3.right * speed * Time.deltaTime);
setBack = false;
}
if(player2.GetComponent.<Rigidbody2D>().mass != 2 && setBack == false){
transform.localPosition = new Vector3(16.0,-4.6,0);
setBack = true;
}
}
function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Player"){
	transform.localPosition = new Vector3(16.0,-4.6,0);
	}
}
