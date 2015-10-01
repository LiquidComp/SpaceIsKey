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
private var startGame2 = false;
public var bottomAndTopColour : Color32;
public var middleColour : Color32;
var style : GUIStyle;
var style2 : GUIStyle;
public var text1 : GameObject;
public var text2 : GameObject;
public var text3 : GameObject;
private var keyDown : boolean;
public var rotateJumpScript : rotateJump;
public var colour1ParentScript : colour1Parent;
public var colour2ParentScript : colour2Parent;
private var Touching : boolean;
private var Release : boolean;

function Start () {
	middleColour = colour1ParentScript.floorColors;
	bottomAndTopColour = colour2ParentScript.floorColors;
	text1.SetActive(false);
	text2.SetActive(false);
	text3.SetActive(false);
	startGame = false;
	startGame2 = false;
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

	if(Input.touches.Length > 0){
		Touching = true;
	}
	if(Touching == true && Input.touches.Length == 0){
		Release = true;
		Touching = false;
	}
	
	if(((Input.GetKeyDown("space") || Input.GetKeyDown("a")) || Release == true) && startGame == false){
		text1.SetActive(true);
		startGame2 = true;
	}
	if(startGame2 == true && Input.GetKeyUp("space")|| Release == true){
		startGame = true;
	}
	if(startGame == true){
		transform.Translate(Vector3.right * speed * Time.deltaTime);

	if(theObject.transform.localPosition.y == startY) {

		if((Input.GetKey("space") || Input.GetKey("a")) || Input.touches.Length > 0){
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
	checkCollision();
}

function LateUpdate(){
	if(done == true && theObject.transform.localPosition.y <= startY){
		go = false;
		done = false;
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


function checkCollision() {
	if (rotateJumpScript.coll1 == true){
		 speed = -speed;
		 keyDown = false;
		 startY = -1.44;
		 startX = 8.6;
	     transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 rotateJumpScript.transform.localPosition.x = 0;
		 rotateJumpScript.transform.localPosition.y = 0;
		 colorCounter = true;
		 changeColor();
		 text1.SetActive(false);
		 text2.SetActive(true);
		 GetComponent.<Rigidbody2D>().mass = 1;
		 
	}
	if (rotateJumpScript.coll2 == true){
		 speed = -speed;
		 keyDown = false;
		 startY = -4.67;
		 startX = -8.6;
		 transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 rotateJumpScript.transform.localPosition.x = 0;
		 rotateJumpScript.transform.localPosition.y = 0;
		 colorCounter = false;
		 changeColor();
		 text2.SetActive(false);
		 text3.SetActive(true);
		 GetComponent.<Rigidbody2D>().mass = 2;
	}
	if (rotateJumpScript.coll3 == true){
		Application.LoadLevel("mainMenu");
	}
	
	if (rotateJumpScript.coll4 == true){
		 particleSpawn();
		 keyDown = false;
		 transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 rotateJumpScript.transform.localPosition.x = 0;
		 rotateJumpScript.transform.localPosition.y = 0;
		 Deaths +=1;
		 }
}


function OnGUI () {
	  GUI.Label(Rect(10,10,100,200),"<size=20>" + Deaths + "</size>",style2);
	  if(startGame == false){
	  	GUI.Label(Rect(Screen.width/2-215, Screen.height/2-25, 250, 500),"<size=40>Touch the screen to start</size>",style);
	  }
}