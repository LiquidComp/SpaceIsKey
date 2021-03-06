﻿#pragma strict

var mainCam : Camera;

var rightWall : BoxCollider2D;
var leftWall : BoxCollider2D;
var leftWall2 : BoxCollider2D;
var block : GameObject;
var xOffset : float = 1.0;
var yOffset : float = 1.0;
var smoothTime = 0.3;
var player : GameObject;
function Start () {
	rightWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height*1f, 0f)).y);
	rightWall.offset = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width, 0f, 0f)).x + 0.5f, 4.4f);

	leftWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height*0.8f, 0f)).y);
	leftWall.offset = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).x - 0.5f, 0f);

	leftWall2.size = new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height*1f, 0f)).y);
	leftWall2.offset = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width, 0f, 0f)).x + 0.5f, -4.4f);
	
}

