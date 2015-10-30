#pragma strict

private var mouseIsDown : boolean;
private var notOffScreen : boolean;

function OnMouseOver(){
	notOffScreen = true;
}

function OnMouseExit(){
	notOffScreen = false;
}

function OnMouseUp(){
	mouseIsDown = false;
	if(notOffScreen == true){
		Application.LoadLevel(Application.loadedLevel);
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}