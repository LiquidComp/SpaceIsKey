﻿#pragma strict

public var rateUsButton : Sprite;
public var rateUsButton2 : Sprite;
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
		gameObject1.gameObject.SetActive(false);
		gameObject2.gameObject.SetActive(false);
		gameObject3.gameObject.SetActive(false);
		gameObject4.gameObject.SetActive(false);
		gameObject5.gameObject.SetActive(false);
		gameObject6.gameObject.SetActive(false);
		
		settingsMenu.gameObject.SetActive(true);
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}