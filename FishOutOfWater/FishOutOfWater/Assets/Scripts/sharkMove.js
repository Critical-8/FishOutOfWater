#pragma strict
import UnityEngine.SceneManagement;
import System;
import System.IO;

//variables
public var timer = 0;
public var speed = 2.5;
public var fastSpeed = 3.5;
public var normSpeed = 2.5;
public var slowSpeed = 1.5;

public var timing = true;
public var cruise = false;

public var fish : GameObject;
public var shark : GameObject;

public var Scoreboard : UI.Text;
public var highScore :UI.Text;

public var scoreHolder : Transform;

private var increment = 0.000001;

function Start () {
}

function Update () {
	//update speed
	if(timer >= 120.0){
		speed = slowSpeed;
        timing = false;
        timer = 0;
	}
	if(shark.transform.position.x + 4 <= fish.transform.position.x){
		speed = 2.5;
        cruise = true;
    }else if(cruise){
        timing = true;
        cruise = false;
        timer = 0;
    }
    
	//move
	shark.transform.position.x += speed / 60;
    
	//update timer
    if(timing){
	   timer ++;
    }

    fastSpeed += increment;
    normSpeed += increment;
    slowSpeed += increment;
}

function OnTriggerEnter2D(other: Collider2D) {
    Destroy(fish);
    
    if(parseInt(Scoreboard.text) > parseInt(highScore.text)){
        scoreHolder.position.z = 1;
    }else{
        scoreHolder.position.z = -1;
    }
    SceneManager.LoadScene(0);
}