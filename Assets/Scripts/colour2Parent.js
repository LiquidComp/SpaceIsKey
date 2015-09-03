#pragma strict

public var floorColors : Color32;/*
public var floorSprite : Sprite;
public var colorParent : Transform;

private var floorGameObject : GameObject[];
*/
function Start () {
/*
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
		}*/
var allChildren = gameObject.GetComponentsInChildren(Transform);
for (var child : Transform in allChildren) {
		child.GetComponent.<Renderer>().material.color = floorColors;
    	
	
	}
}



function Update() {

}
