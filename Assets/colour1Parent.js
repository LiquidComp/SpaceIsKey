﻿#pragma strict
<<<<<<< HEAD
/*
var color1 : Color32;
var childs : float;
=======

>>>>>>> d96518eb2bfc08508d1dcced0dd849679a6fc1b0

public var floorSprite : Sprite;
public var colorParent : Transform;
public var floorColors : Color32;

private var floorGameObject : GameObject[];



function Start () {

	floorGameObject = new GameObject[2];
		
	for (var i = 0; i < floorGameObject.Length; i++) {
    	    var go = GameObject();
        	var floorPosition0 = Vector2(0, 4.40);
        	var floorPosition1 = Vector2(0, -4.00);
         	go.AddComponent.<SpriteRenderer>().sprite = floorSprite;
        	go.GetComponent.<Renderer>().sortingLayerName = "Player";
		 	go.GetComponent.<Renderer>().sortingOrder = 4;
			go.name = "Floor" + i;
		 	go.transform.parent = colorParent;
			go.GetComponent.<Renderer>().material.color = floorColors;
			if(go.name == "Floor0"){
			go.transform.position = floorPosition0;
			}else{
			go.transform.position = floorPosition1;
			}
			go.transform.position.z = 2.0;
			go.transform.tag = "floor";
         	floorGameObject[i] = go;
		}
		
}

function Update() {


} */ 