#pragma strict

public var volumeButton : Sprite;
public var volumeButton2 : Sprite;

private var mouseIsDown : boolean;
private var notOffScreen : boolean;

function Update(){
	if(mouseIsDown == true){
		GetComponent(SpriteRenderer).sprite = volumeButton2;
	}else if(mouseIsDown == false){
		GetComponent(SpriteRenderer).sprite = volumeButton;
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
		//SET VOLUME TO 0
		
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}