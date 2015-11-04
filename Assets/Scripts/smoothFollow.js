#pragma strict
public var center : GameObject;
public var xOffset : float;
public var smoothTime : float;
function Start () {

}

function Update () {
	transform.position.x = Mathf.Lerp( transform.position.x, center.transform.position.x + xOffset, Time.deltaTime * smoothTime);
}