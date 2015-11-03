#pragma strict

	private var StartPos : Vector2;
	private var SwipeID : int = -1;
	private var minMovement : float = 20.0f;
	private var right : boolean = false;
	private var left : boolean = false;
	private var oldX : float = 0;
	private var currentCourseCount : int = 1;
	public var cameraObject : GameObject;
	public var courseCount : int = 3;
	
	// Use this for initialization
	function Start ()
	{
		
	}
	
	function rightIsTrue() {
		right = true;
		yield WaitForEndOfFrame();
		right = false;
	}
	
	function leftIsTrue() {
		left = true;
		yield WaitForEndOfFrame();
		left = false;
	}

	// Update is called once per frame
	function Update ()
	{
		for(var T in Input.touches) {
			var P = T.position;
			if (T.phase == TouchPhase.Began && SwipeID == -1) {
				SwipeID = T.fingerId;
				StartPos = P;
			} else if (T.fingerId == SwipeID) {
				var delta = P - StartPos;
				if (T.phase == TouchPhase.Moved && delta.magnitude > minMovement) {
					SwipeID = -1;
					if (Mathf.Abs (delta.x) > Mathf.Abs (delta.y)) {
						if (delta.x > 0) {
							rightIsTrue();
						} else {
							leftIsTrue();
						}
					} 
					/*else {
						if (delta.y > 0) {
							Debug.Log ("Swipe Up Found");
							var temp2 : Vector3 = new Vector3(0,1.0f,0);
							transform.position += temp2;
						} else {
							Debug.Log ("Swipe Down Found");
							var temp3 : Vector3 = new Vector3(0,-1.0f,0);
							transform.position += temp3;
						}
					}*/
				} else if (T.phase == TouchPhase.Canceled || T.phase == TouchPhase.Ended)
					SwipeID = -1;
			} 
		}
		
		if (right == true || Input.GetKeyUp(KeyCode.RightArrow)){
			if (currentCourseCount < courseCount){
				transform.position.x = Mathf.Lerp(transform.position.x, oldX + 17.8, 1);
				oldX += 17.8;
				currentCourseCount += 1;
			}else{
				transform.position.x = Mathf.Lerp(transform.position.x, 0, 1);
				oldX = 0;
				currentCourseCount = 1;
			}
		}else if(left == true || Input.GetKeyUp(KeyCode.LeftArrow)){
			if (currentCourseCount <= 1) {
				transform.position.x = Mathf.Lerp(transform.position.x, (courseCount - 1) * 17.8, 1);
				oldX = (courseCount - 1) * 17.8;
				currentCourseCount = courseCount;
			}else{
				transform.position.x = Mathf.Lerp(transform.position.x, oldX - 17.8, 1);
				oldX -= 17.8;
				currentCourseCount -= 1;
			}
	
		}
	}