#pragma strict

var playerColour : Color32;

function Start () {
var renderer = gameObject.GetComponent(SpriteRenderer);
renderer.color = playerColour;
}

function Update () {

}