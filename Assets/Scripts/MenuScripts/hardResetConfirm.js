#pragma strict

public var skin : GUISkin;
public var object1 : GameObject;
public var object2 : GameObject;
public var hardResetIsPressed : boolean;
public var fontSize : float = 16;
public var ratio : float = 20;

function Start(){
	fontSize = Mathf.Min(Screen.width, Screen.height) / ratio;
}

function OnGUI(){
if(hardResetIsPressed == true){
   GUI.skin = skin;
   GUI.skin.label.fontSize = fontSize;
   GUI.skin.button.fontSize = fontSize;
   //GUI.Box(new Rect(0,0,Screen.width,Screen.height),"Clear progress");
   GUI.Label(new Rect(Screen.width*1/4,Screen.height*2/7,Screen.width*2/2,Screen.height*1/3), "Do you want to reset ALL progress?");
if(GUI.Button(Rect(Screen.width/4,Screen.height*3/8,Screen.width/2,Screen.height/8),"Yes"))
          {
          		PlayerPrefs.DeleteAll();
          		Application.Quit();
          }
          if(GUI.Button(Rect(Screen.width/4,Screen.height*4/8,Screen.width/2,Screen.height/8),"No"))
          {
          object1.gameObject.SetActive(true);
	      object2.gameObject.SetActive(true);
          hardResetIsPressed = false;
          Time.timeScale = 1;
}}}
