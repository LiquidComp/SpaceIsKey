#pragma strict
var speed : float;
function Start () {

}

function Update () {
 transform.Translate(Vector3.right * speed * Time.deltaTime);
}