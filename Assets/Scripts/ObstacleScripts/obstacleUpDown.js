#pragma strict
var speed : float;
var player : GameObject;
var startX : float;

function Start () {

}

function Update () {
	transform.Translate(Vector3.up * speed * Time.deltaTime);
	transform.localRotation.z = 0;
	player.transform.localRotation.z = 0;
	transform.localPosition.x = startX;
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "obstacleGoLeft"){
		speed = -speed;
	}else if(coll.gameObject.tag == "obstacleGoRight"){
		speed = -speed;
	}
}