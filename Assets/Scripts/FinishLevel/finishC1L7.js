﻿#pragma strict

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Player"){
		 PlayerPrefs.SetInt("finishC1L7", 1);
		 PlayerPrefs.Save();
	}
}