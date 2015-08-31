#pragma strict

var speed : float;
var jumpSpeed : float;
private var x = -2.0;
public var theObject : GameObject;
private var done = false;
private var go = false;
public var startY : float;

function Start () {
}

function Update () {
var nx = theObject.transform.localPosition.x; 
transform.Translate(Vector3.right * speed * Time.deltaTime);



if(theObject.transform.localPosition.y == startY && Input.GetKey("a")) {
 var go = true;
 done = true;

}

if(done) {
x += jumpSpeed;;
}

//if(go == true) {
theObject.transform.localPosition.y = startY+-Mathf.Pow(x, 2) + 4; 
//}
}

function LateUpdate(){
if(done == true && theObject.transform.localPosition.y <= startY){
go = false;
done = false;
x = -2.0;
theObject.transform.localPosition.y = startY;
}
}

