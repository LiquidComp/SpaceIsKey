#pragma strict

public var exitButton : Sprite;
public var exitButton2 : Sprite;
private var mouseIsDown : boolean;
private var notOffScreen : boolean;

public var gameObject1 : GameObject;
public var gameObject2 : GameObject;
public var gameObject3 : GameObject;
public var gameObject4 : GameObject;
public var gameObject5 : GameObject;
public var gameObject6 : GameObject;
public var settingsMenu : GameObject;

function Update(){
	if(mouseIsDown == true){
		GetComponent(SpriteRenderer).sprite = exitButton2;
	}else if(mouseIsDown == false){
		GetComponent(SpriteRenderer).sprite = exitButton;
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
		gameObject1.gameObject.SetActive(true);
		gameObject2.gameObject.SetActive(true);
		gameObject3.gameObject.SetActive(true);
		gameObject4.gameObject.SetActive(true);
		gameObject5.gameObject.SetActive(true);
		gameObject6.gameObject.SetActive(true);
		
		settingsMenu.gameObject.SetActive(false);
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}