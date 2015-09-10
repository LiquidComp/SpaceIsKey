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
public var text1 : GameObject;
public var text2 : GameObject;
public var text3 : GameObject;

function Start () {
	text1.SetActive(false);
	text2.SetActive(false);
	text3.SetActive(false);
	startGame = false;
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
if((Input.GetKey("a") || Input.touches.Length > 0) && startGame == false){
text1.SetActive(true);
startGame = true;
}
if(startGame == true){
transform.Translate(Vector3.right * speed * Time.deltaTime);

if(theObject.transform.localPosition.y == startY) {

	if(Input.GetKey("a") || Input.touches.Length > 0){
	var go = true;
	done = true;
	}
PlayerPrefs.Save();
}

if(done) {
	x += jumpSpeed;
}
	 theObject.transform.localPosition.y = startY+0.5*-Mathf.Pow(x,  Mathf.Sqrt(4)) +  2;
}
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

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Finish"){
		 speed = -speed;
		 startY = -1.44;
		 startX = 8.56;
		 transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 colorCounter = true;
		 changeColor();
		 text1.SetActive(false);
		 text2.SetActive(true);
		 GetComponent.<Rigidbody2D>().mass = 1;
		 
		 }
		if (coll.gameObject.tag == "Finish2"){
		 speed = -speed;
		 startY = -4.67;
		 startX = -8.56;
		 transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 colorCounter = false;
		 changeColor();
		 text2.SetActive(false);
		 text3.SetActive(true);
		 GetComponent.<Rigidbody2D>().mass = 2;
	}
		if (coll.gameObject.tag == "Finish3"){
		Application.LoadLevel("mainMenu");
	}
	
	if (coll.gameObject.tag == "obstacle"){
		 var particleVector : Vector3 = transform.localPosition;
		 var newParticles = Instantiate(particles, particleVector, transform.rotation);
		 transform.localPosition.x = startX;
		 transform.localPosition.y = startY;
		 transform.localRotation.z = 0;
		 Deaths +=1;
		 PlayerPrefs.SetInt("PDeaths", Deaths);
		 }
}


function OnGUI () {
	  GUI.Label(Rect(10,10,100,200),"<size=20>" + PlayerPrefs.GetInt("PDeaths") + "</size>",style2);
	  if(startGame == false){
	  GUI.Label(Rect(Screen.width/2-215, Screen.height/2-25, 250, 500),"<size=40>Touch the screen to start</size>",style);
	  }
}