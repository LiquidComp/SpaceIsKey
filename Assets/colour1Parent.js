#pragma strict

var color1 : Color32;
var childs : SpriteRenderer[];

function Start () {
childs = GetComponentInChildren(SpriteRenderer);

for(int i = 0; i < childs.Length; i++){
	childs[i].enabled = false;
	childs[i].color = color1;
}


//var renderer = gameObject.GetComponent(SpriteRenderer);
//renderer.color = playerColour;
}

function Update () {

}