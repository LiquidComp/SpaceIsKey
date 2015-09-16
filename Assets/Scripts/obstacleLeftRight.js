#pragma strict
var speed : float;
var player2 : GameObject;

function Start () {
	//speed = -speed;
}

function Update () {
	if(player2.GetComponent.<Rigidbody2D>().mass == 1){
		//transform.Translate(Vector3.right * speed * Time.deltaTime);
	}
		
}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "obstacleGoLeft"){
		transform.Translate(Vector3.left * speed * Time.deltaTime);
	}else if(coll.gameObject.tag == "obstacleGoRight"){
		transform.Translate(Vector3.right * speed * Time.deltaTime);
	}
}