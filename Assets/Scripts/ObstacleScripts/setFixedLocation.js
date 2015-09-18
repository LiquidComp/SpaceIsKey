#pragma strict
var startX : float;
var startY : float;
var RotZ : float;
var player : GameObject;

function Start () {
}

function Update () {
	Debug.Log(startX);
	transform.localPosition.x = startX;
	transform.localPosition.y = startY;
	transform.localRotation.z = RotZ;
}