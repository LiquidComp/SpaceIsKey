#pragma strict

public var courseButton : Sprite;
public var courseButton2 : Sprite;
private var mouseIsDown : boolean;
private var notOffScreen : boolean;

function Update(){
	if(mouseIsDown == true){
		GetComponent(SpriteRenderer).sprite = courseButton2;
	}else if(mouseIsDown == false){
		GetComponent(SpriteRenderer).sprite = courseButton;
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
		//OPEN COURSE SELECT
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}