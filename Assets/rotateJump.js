#pragma strict
public var player : GameObject;
private var myInt : int;
function Start () {

}

function Update () {

myInt = Mathf.FloorToInt(player.transform.position.y);
transform.Rotate(0.0f, 0.0f, myInt);
myInt = -myInt;
transform.Rotate(0.0f, 0.0f, myInt);

}