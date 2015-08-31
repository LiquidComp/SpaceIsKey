#pragma strict

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Player")
		 transform.localPosition.x = -15.15; 
}