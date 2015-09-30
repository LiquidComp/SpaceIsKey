#pragma strict

public var playButton : Sprite;
public var playButton2 : Sprite;
private var mouseIsDown : boolean;
private var hitler : boolean;

function Update(){
	if(mouseIsDown == true){
		GetComponent(SpriteRenderer).sprite = playButton2;
	}else if(mouseIsDown == false){
		GetComponent(SpriteRenderer).sprite = playButton;
	}

}

function OnMouseOver(){
	hitler = true;
}

function OnMouseExit(){
	hitler = false;
}


function OnMouseUp(){
	mouseIsDown = false;
	if(hitler == true){
		Debug.Log("joden");
				Application.LoadLevel("CourseSelect");
	}
}

function OnMouseDown(){
		mouseIsDown = true;
}