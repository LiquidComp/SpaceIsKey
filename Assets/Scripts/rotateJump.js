#pragma strict
public var player : GameObject;
private var myInt : float;
private var rot1 : boolean;
private var rot2 : boolean;
private var startY : float;
private var test : float;
private var rot3 : boolean;
private var rot4 : boolean;


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