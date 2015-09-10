#pragma strict
public var player : GameObject;
private var myInt : float;
function Start () {

}

function Update () {
myInt = player.transform.position.y;
myInt = myInt - 2.08;
myInt = myInt * 45;
//Debug.Log(myInt);
transform.eulerAngles = Vector3(0, 0, myInt);
myInt = -myInt;
transform.eulerAngles = Vector3(0, 0, myInt);

}