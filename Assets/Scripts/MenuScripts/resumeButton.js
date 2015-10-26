#pragma strict

public var playButton : Sprite;
public var playButton2 : Sprite;
private var mouseIsDown : boolean;
private var notOffScreen : boolean;
public var moveRightScript : MoveRight;
public var menuScreen : GameObject;
public var pauseButtonObject : GameObject;

function Update(){
	if(mouseIsDown == true){
		GetComponent(SpriteRenderer).sprite = playButton2;
	}else if(mouseIsDown == false){
		GetComponent(SpriteRenderer).sprite = playButton;
	}

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
		moveRightScript.pauseGame = false;
		menuScreen.gameObject.SetActive(false);
		pauseButtonObject.gameObject.SetActive(true);
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}