using UnityEngine;
using System.Collections;
using UnityEngine.Advertisements;

public class adsTest : MonoBehaviour {
	bool test1 = false;
	// Use this for initialization
	void Start () {
		Advertisement.Initialize ("72828", true);
	}
	
	// Update is called once per frame
	void Update () {
		if(Advertisement.IsReady() && test1 == false){
			Advertisement.Show();
			test1 = true;
		}
	}
}
