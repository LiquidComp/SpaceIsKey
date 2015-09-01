#pragma strict

var speed = 5.0;
var jumpSpeed : float;
private var x = -2.0;
public var theObject : GameObject;
private var done = false;
private var go = false;
public var startY : float;
public var startX : float ;
private var particles : GameObject;
private var Deaths : int;
public var myDisplay : Rect; 

function Start () {
	particles = GameObject.Find("deathParticle");
	transform.localPosition.x = startX;
	transform.localPosition.y = startY;
}

function Update () {
transform.Translate(Vector3.right * speed * Time.deltaTime);


if(theObject.transform.localPosition.y == startY) {

	if(Input.GetKey("a") || Input.touches.Length > 0){
	var go = true;
	done = true;
	}

}

if(done) {
	x += jumpSpeed;
}
	 theObject.transform.localPosition.y = startY+0.5*-Mathf.Pow(x,  Mathf.Sqrt(4)) +  2;
}

function LateUpdate(){
if(done == true && theObject.transform.localPosition.y <= startY){
go = false;
done = false;
x = -2.0;
theObject.transform.localPosition.y = startY;
}
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Finish"){
		Debug.Log("done");
		 speed = -speed;
		 startY = -1.44;
		 startX = 14.4;
		 transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 }
		if (coll.gameObject.tag == "Finish2"){
		 speed = -speed;
		 startY = -4.67;
		 startX = -13.8;
		 transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 }
	if (coll.gameObject.tag == "obstacle"){
		 var particleVector : Vector3 = transform.localPosition;
		 var newParticles = Instantiate(particles, particleVector, transform.rotation);
		 transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 Deaths += 1;
		 }
}

function OnGUI () {
	  GUI.Label( Rect (10, 10, 100, 20), "Deaths: " + Deaths);
}