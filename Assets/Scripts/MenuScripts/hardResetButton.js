#pragma strict

public var resetButton : Sprite;
public var resetButton2 : Sprite;
private var mouseIsDown : boolean;
private var notOffScreen : boolean;
public var hardResetConfirmScript : hardResetConfirm;
public var object1 : GameObject;
public var object2 : GameObject;

function Update(){
	if(mouseIsDown == true){
		GetComponent(SpriteRenderer).sprite = resetButton2;
	}else if(mouseIsDown == false){
		GetComponent(SpriteRenderer).sprite = resetButton;
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
	    object1.gameObject.SetActive(false);
	    object2.gameObject.SetActive(false);
		Time.timeScale = 0;
		hardResetConfirmScript.hardResetIsPressed = true;
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}