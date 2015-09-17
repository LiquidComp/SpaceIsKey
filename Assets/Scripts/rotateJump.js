#pragma strict
public var player : GameObject;
private var myInt : float;
private var rot1 : boolean;
private var rot2 : boolean;
private var startY : float;
private var test : float;
private var rot3 : boolean;
private var rot4 : boolean;
public var coll1 : boolean;
public var coll2 : boolean;
public var coll3 : boolean;
public var coll4 : boolean;
public var moveRightScript : MoveRight;

function Start () {
	startY = 2.08;
	rot1 = true;
	rot2 = false;
	rot3 = false;
	rot4 = false;
}

function Update () {
	test = player.GetComponent.<Rigidbody2D>().mass;
	if(test == 1){
		startY = -1.44;
		rot3 = true;
	}
	if(test == 2){
		startY = -4.67;
		rot3 = false;
		rot4 = false;
	}
	if((myInt <= -89) && rot1 == true && (rot3 == false && rot4 == false)) {
		myInt = -90;
		rot1 = false;
		rot2 = true;
	}

	if(myInt == 270 && rot2 == true && (rot3 == false && rot4 == false)) {
		rot2 = false;
		myInt = 0;
		rot1 = true;
	}

	if(rot1 == true && (rot3 == false && rot4 == false)){
		myInt = -player.transform.position.y;
		myInt = myInt + startY;
		myInt = myInt * 45;
		//Debug.Log(myInt);
		transform.eulerAngles = Vector3(0, 0, myInt);
	}

	if(rot2 == true && (rot3 == false && rot4 == false)){
		myInt = player.transform.position.y;
		myInt = myInt - startY;
		myInt = myInt * 45 + 270;
		//Debug.Log(myInt);
		transform.eulerAngles = Vector3(0, 0, myInt);
	}


	if(rot2 == true && (rot3 == false && rot4 == false)){
		myInt = player.transform.position.y;
		myInt = myInt - startY;
		myInt = myInt * 45 + 270;
		//Debug.Log(myInt);
		transform.eulerAngles = Vector3(0, 0, myInt);
	}

	if(rot2 == true && (rot3 == false && rot4 == false)){
		myInt = player.transform.position.y;
		myInt = myInt - startY;
		myInt = myInt * 45 + 270;
		//Debug.Log(myInt);
		transform.eulerAngles = Vector3(0, 0, myInt);
	}

	if((myInt >= 89) && (rot3 == true || rot4 == true)) {
		myInt = 90;
		rot3 = false;
		rot4 = true;
	}

	if(myInt == -180 && (rot3 == true || rot4 == true)) {
		rot3 = true;
		myInt = 0;
		rot4 = false;
	}

	if(rot3 == true){
		myInt = player.transform.position.y;
		myInt = myInt - startY;
		myInt = myInt * 45;
		//Debug.Log(myInt);
		transform.eulerAngles = Vector3(0, 0, myInt);
	}


	if(rot3 == true){
		myInt = player.transform.position.y;
		myInt = myInt - startY;
		myInt = myInt * 45;
		//Debug.Log(myInt);
		transform.eulerAngles = Vector3(0, 0, myInt);
	}


	if(rot3 == true){
		myInt = player.transform.position.y;
		myInt = myInt - startY;
		myInt = myInt * 45;
		//Debug.Log(myInt);
		transform.eulerAngles = Vector3(0, 0, myInt);
	}

	if(rot4 == true){
		myInt = -player.transform.position.y;
		myInt = myInt + startY;
		myInt = myInt * 45 - 180;
		//Debug.Log(myInt);
		transform.eulerAngles = Vector3(0, 0, myInt);
	}

	if(rot4 == true){
		myInt = -player.transform.position.y;
		myInt = myInt + startY;
		myInt = myInt * 45 - 180;
		//Debug.Log(myInt);
		transform.eulerAngles = Vector3(0, 0, myInt);
	}


	if(rot4 == true){
		myInt = -player.transform.position.y;
		myInt = myInt + startY;
		myInt = myInt * 45 - 180;
		//Debug.Log(myInt);
		transform.eulerAngles = Vector3(0, 0, myInt);
	}

}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Finish"){
		coll1 = true;
		yield WaitForEndOfFrame();
		coll1 = false;
	}
		if (coll.gameObject.tag == "Finish2"){
		coll2 = true;
		yield WaitForEndOfFrame();
		coll2 = false;
	}
		if (coll.gameObject.tag == "Finish3"){
		coll3 = true;
		yield WaitForEndOfFrame();
		coll3 = false;
	}
	
	if (coll.gameObject.tag == "obstacle"){
		coll4 = true;
		yield WaitForEndOfFrame();
		coll4 = false;
	}
}