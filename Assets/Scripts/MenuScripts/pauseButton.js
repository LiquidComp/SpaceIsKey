#pragma strict

private var mouseIsDown : boolean;
private var notOffScreen : boolean;
public var menuScreen : GameObject;
public var moveRightScript : MoveRight;

function Start(){
	menuScreen.gameObject.SetActive(false);
}

function OnMouseOver(){
	notOffScreen = true;
}

function OnMouseExit(){
	notOffScreen = false;
}

function OnMouseUp(){
	mouseIsDown = false;
	if(notOffScreen == true){
		menuScreen.gameObject.SetActive(true);
		moveRightScript.pauseGame = true;
		gameObject.SetActive(false);
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}