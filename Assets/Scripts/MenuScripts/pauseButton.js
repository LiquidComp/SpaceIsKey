#pragma strict

public var menuScreen : GameObject;
public var moveRightScript : MoveRight;

function Start(){
	menuScreen.gameObject.SetActive(false);
}

function OnMouseUp(){
	menuScreen.gameObject.SetActive(true);
	moveRightScript.pauseGame = true;
	gameObject.SetActive(false);
}