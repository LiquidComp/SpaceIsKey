﻿#pragma strict
var speed : float;
var player2 : GameObject;
var startY : float;

function Start () {
	//speed = -speed;
}

function Update () {
	transform.Translate(Vector3.right * speed * Time.deltaTime);
	transform.localRotation.z = 0;
	player2.transform.localRotation.z = 0;
	transform.localPosition.y = startY;
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "obstacleGoLeft"){
		speed = -speed;
	}else if(coll.gameObject.tag == "obstacleGoRight"){
		speed = -speed;
	}
}