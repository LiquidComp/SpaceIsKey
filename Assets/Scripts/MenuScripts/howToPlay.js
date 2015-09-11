#pragma strict
import UnityEngine.Advertisements;

private var mouseDown : boolean = false;

function OnMouseDown(){
     if(mouseDown == false){
     	Application.LoadLevel("howToPlay");
     	mouseDown = true;
 	 }
}

function OnMouseUp(){
	if(mouseDown == true){
		mouseDown = false;
	}
}