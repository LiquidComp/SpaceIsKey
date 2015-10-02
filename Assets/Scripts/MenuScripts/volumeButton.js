#pragma strict

public var volumeButton : Sprite;
public var volumeButton2 : Sprite;
public var muteButtonObject : GameObject;

private var isMuteOn : int;
private var mouseIsDown : boolean;
private var notOffScreen : boolean;

function Start(){
	isMuteOn = PlayerPrefs.GetInt("muteOn");
	if(isMuteOn == 1){
		AudioListener.pause = true;
		gameObject.SetActive(false);
		muteButtonObject.gameObject.SetActive(true);
	}
}

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
		PlayerPrefs.SetInt("muteOn", 1);
		PlayerPrefs.Save();
		AudioListener.pause = true;
		gameObject.SetActive(false);
		muteButtonObject.gameObject.SetActive(true);
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}