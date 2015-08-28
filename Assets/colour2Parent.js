#pragma strict

public var floorColors : Color32;

/*
public var colorParent : Transform;
public var floorSprite : Sprite;

private var floorGameObject : GameObject[];
*/


function Start () {
/*
	floorGameObject = new GameObject[1];
		
	for (var i = 0; i < floorGameObject.Length; i++) {
    	    var go = GameObject();
        	var floorPosition0 = Vector2(0, 0);
         	go.AddComponent.<SpriteRenderer>().sprite = floorSprite;
        	go.GetComponent.<Renderer>().sortingLayerName = "Player";
		 	go.GetComponent.<Renderer>().sortingOrder = 3;
			go.name = "Floor" + i;
		 	go.transform.parent = colorParent;
			go.GetComponent.<Renderer>().material.color = floorColors;
			go.transform.position = floorPosition0;
			go.transform.position.z = 1.0;
			go.transform.tag = "floor";
         	floorGameObject[i] = go;
		}
		*/
var allChildren = gameObject.GetComponentsInChildren(Transform);
for (var child : Transform in allChildren) {
   		child.GetComponent.<Renderer>().material.color = floorColors;
	}
}

function Update () {

}