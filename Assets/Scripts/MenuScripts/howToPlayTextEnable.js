#pragma strict

public var touchToJump : GameObject;
public var fromRightToLeftNow : GameObject;
public var goodLuck : GameObject;



function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Finish"){
		fromRightToLeftNow.SetActive(true);	 
	}
	if (coll.gameObject.tag == "Finish2"){
		goodLuck.SetActive(true);
	}
}