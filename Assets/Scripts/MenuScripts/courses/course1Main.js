﻿#pragma strict

private var mouseDown : boolean = false;

function OnMouseDown(){
     if(mouseDown == false){
   		Application.LoadLevel("Course1Main");
     	mouseDown = true;
 	 }
}

function OnMouseUp(){
	if(mouseDown == true){
		mouseDown = false;
	}
}