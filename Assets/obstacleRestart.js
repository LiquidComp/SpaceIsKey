#pragma strict

private var particles : GameObject;
private var ps : ParticleSystem;


function Start() {
	particles = GameObject.Find("deathParticle");
	ps = GetComponentInChildren(ParticleSystem);
}

function OnCollisionEnter2D(coll: Collision2D) {
<<<<<<< HEAD
	if (coll.gameObject.tag == "obstacle") {
		 var particleVector : Vector3 = transform.localPosition;
		 var newParticles = Instantiate(particles, particleVector, transform.rotation);
		 transform.localPosition.x = -15.15;
		 transform.localRotation.z = 0;
	/*	 if(!ps.IsAlive())
         {
             Destroy(newParticles);
         }
	*/}
=======

>>>>>>> a64de491acb9aa60773ad361758ca2aaaba89aa9
}