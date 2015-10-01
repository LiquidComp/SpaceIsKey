#pragma strict

public var floorColors : Color32;

function Start () {
var allChildren = gameObject.GetComponentsInChildren(Transform);
for (var child : Transform in allChildren) {
		child.GetComponent.<Renderer>().material.color = floorColors;
    	
	
	}
}



function Update() {

}
