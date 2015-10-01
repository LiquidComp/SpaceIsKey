#pragma strict

public var playButton : Sprite;
public var playButton2 : Sprite;
private var mouseIsDown : boolean;
private var notOffScreen : boolean;

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
		// OPEN RATE US SCREEN SOMEHOW
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}