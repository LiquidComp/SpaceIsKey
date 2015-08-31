#pragma strict

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "obstacle")
		 transform.localPosition.x = -15.15;
		 transform.localRotation.z = 0;
}