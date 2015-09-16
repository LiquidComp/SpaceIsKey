#pragma strict

private var mouseDown : boolean = false;

function OnMouseDown(){
     if(mouseDown == false){
   		Application.LoadLevel("C1L4");
     	mouseDown = true;
 	 }
}

function OnMouseUp(){
	if(mouseDown == true){
		mouseDown = false;
	}
}