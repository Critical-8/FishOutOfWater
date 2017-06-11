#pragma strict
//variables
public var timer = 0;
public var speed = 2.5;

public var fish : GameObject;
public var shark : GameObject;

function Start () {
	
}

function Update () {
	//move
	shark.transform.position.x += speed / 60;

	//update speed
	if(timer >= 120 && shark.transform.position.x >= fish.transform.position.x - 4){
		speed = 2;
	}
	if(shark.transform.position.x < fish.transform.position.x - 4){
		speed = 2.5;
	}

	//update timer
	timer ++;
}
