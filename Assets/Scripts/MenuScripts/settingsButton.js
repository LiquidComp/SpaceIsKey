#pragma strict

public var rateUsButton : Sprite;
public var rateUsButton2 : Sprite;
private var mouseIsDown : boolean;
private var notOffScreen : boolean;

function Update(){
	if(mouseIsDown == true){
		GetComponent(SpriteRenderer).sprite = rateUsButton2;
	}else if(mouseIsDown == false){
		GetComponent(SpriteRenderer).sprite = rateUsButton;
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
		//OPEN SETTINGS INTERFACE
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}