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
private var colorCounter = false;
private var startGame = false;
public var bottomAndTopColour : Color32;
public var middleColour : Color32;
var style : GUIStyle;
var style2 : GUIStyle;
private var jumpNow : boolean = false;

private var keyDown : boolean;

function Start () {
	startGame = true;
	style.normal.textColor = middleColour;
	style2.normal.textColor = bottomAndTopColour;
	particles = GameObject.Find("deathParticle");
	transform.localPosition.x = startX;
	transform.localPosition.y = startY;
	var allChildren = gameObject.GetComponentsInChildren(Transform);
	for (var child : Transform in allChildren) {
		child.GetComponent.<Renderer>().material.color = bottomAndTopColour;	
	}
}

function Update () {
if(startGame == true){
transform.Translate(Vector3.right * speed * Time.deltaTime);

if(theObject.transform.localPosition.y == startY) {

	if(jumpNow == true){
	keyDown = true;
	var go = true;
	done = true;
	}

}

if(done) {
	x += jumpSpeed;
}
if(keyDown == true){
	 theObject.transform.localPosition.y = startY+0.5*-Mathf.Pow(x,  Mathf.Sqrt(4)) +  2;
}
}
}
function LateUpdate(){
if(done == true && theObject.transform.localPosition.y <= startY){
go = false;
done = false;
jumpNow = false;
x = -2.0;
theObject.transform.localPosition.y = startY;
}
}

function changeColor() {
	var allChildren = gameObject.GetComponentsInChildren(Transform);
	for (var child : Transform in allChildren) {
		if(colorCounter == false){
			child.GetComponent.<Renderer>().material.color = bottomAndTopColour;	
		}else{
			child.GetComponent.<Renderer>().material.color = middleColour;	
		}
	}

}
function particleSpawn() {
	var particleVector : Vector3 = transform.localPosition;
	var newParticles = Instantiate(particles, particleVector, transform.rotation);
	yield WaitForSeconds(0.60);
	Destroy(newParticles);
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Finish"){
		 speed = -speed;
		 keyDown = false;
		 startY = -1.44;
		 startX = 8.6;
		 transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 colorCounter = true;
		 changeColor();
		 GetComponent.<Rigidbody2D>().mass = 1;
		 
		 }
		if (coll.gameObject.tag == "Finish2"){
		 speed = -speed;
		 keyDown = false;
		 startY = -4.67;
		 startX = -8.6;
		 transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 colorCounter = false;
		 changeColor();
		 GetComponent.<Rigidbody2D>().mass = 2;
	}
		if (coll.gameObject.tag == "Finish3"){
		Application.LoadLevel("mainMenu");
	}
	
	if (coll.gameObject.tag == "obstacle"){
		 particleSpawn();
		 keyDown = false;
		 transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 Deaths +=1;
		 }

	if (coll.gameObject.tag == "Jump"){
		jumpNow = true;
		transform.localRotation.z = 0;
		transform.localPosition.y = startY;		
	}
}

function OnGUI () {
	  //GUI.Label(Rect(10,10,100,200),"<size=20>" + Deaths + "</size>",style2);
	  if(startGame == false){
	  GUI.Label(Rect(Screen.width/2-215, Screen.height/2-25, 250, 500),"<size=40>Touch the screen to start</size>",style);
	  }
}