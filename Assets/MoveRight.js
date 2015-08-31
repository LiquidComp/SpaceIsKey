#pragma strict

var speed : float;
var jumpSpeed : float;
private var x = -2.0;
public var theObject : GameObject;
private var done = false;
private var particles : GameObject;
private var go = false;
public var startY : float;
public var startX = -15.5;

function Start () {
	particles = GameObject.Find("deathParticle");
}

function Update () {
transform.Translate(Vector3.right * speed * Time.deltaTime);



if(theObject.transform.localPosition.y == startY && Input.GetKey("a")) {
	var go = true;
	done = true;

}

if(done) {
	x += jumpSpeed;
}
	 theObject.transform.localPosition.y = startY+-Mathf.Pow(x, 2) + 4;
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
		 startY = -1.434;
		 startX = 17.6;
		 transform.localPosition.x = 17.6;
		 transform.localRotation.z = 0;
		 }
	if (coll.gameObject.tag == "obstacle"){
		 var particleVector : Vector3 = transform.localPosition;
		 var newParticles = Instantiate(particles, particleVector, transform.rotation);
		 transform.localPosition.x = startX;
		 transform.localRotation.z = 0;
		 }
}