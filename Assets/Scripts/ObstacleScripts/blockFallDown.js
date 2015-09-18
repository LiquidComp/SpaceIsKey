#pragma strict
var speed : float;
var player : GameObject;
var startX : float;

function Start () {
 speed = 0.0;
}

function Update () {
	transform.Translate(Vector3.down * speed * Time.deltaTime);
	transform.localRotation.z = 0;
	player.transform.localRotation.z = 0;
	transform.localPosition.x = startX;
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "obstacleGoLeft"){
		speed = 20.0;
	}else if(coll.gameObject.tag == "obstacleGoRight"){
		speed = 0.0;
	}
}