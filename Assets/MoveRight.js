#pragma strict

var speed : float;
var jumpSpeed : float;
private var x = -2.0;
public var theObject : GameObject;
private var done = false;
private var go = false;

function Start () {
theObject.transform.localPosition = Vector3.zero;
}

function Update () {
var nx = theObject.transform.localPosition.x; 
transform.Translate(Vector3.right * speed * Time.deltaTime);



if(theObject.transform.localPosition.y == 0 && Input.GetKey("a")) {
 Debug.Log("6");
 var go = true;
 done = true;

}

if(done) {
x += 0.1f;
Debug.Log("Done");
}

//if(go == true) {
theObject.transform.localPosition.y = -Mathf.Pow(x, 2) + 4; 
//}
}

function LateUpdate(){
if(done == true && theObject.transform.localPosition.y <=0){
go = false;
done = false;
x = -2.0;
Debug.Log("go");
theObject.transform.localPosition.y = 0;
}
}

