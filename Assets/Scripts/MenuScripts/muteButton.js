#pragma strict

public var muteButton : Sprite;
public var muteButton2 : Sprite;
public var volumeButtonObject : GameObject;

private var isMuteOn : int;
private var mouseIsDown : boolean;
private var notOffScreen : boolean;

function Start(){
	isMuteOn = PlayerPrefs.GetInt("muteOn");
	if(isMuteOn == 0){
		PlayerPrefs.SetInt("muteOn", 1);
		PlayerPrefs.Save();
		AudioListener.pause = false;
		gameObject.SetActive(false);
		volumeButtonObject.gameObject.SetActive(true);
	}
}

function Update(){
	if(mouseIsDown == true){
		GetComponent(SpriteRenderer).sprite = muteButton2;
	}else if(mouseIsDown == false){
		GetComponent(SpriteRenderer).sprite = muteButton;
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
		PlayerPrefs.SetInt("muteOn", 0);
		PlayerPrefs.Save();
		AudioListener.pause = false;
		gameObject.SetActive(false);
		volumeButtonObject.gameObject.SetActive(true);
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}