#pragma strict
//variables
public var timer = 0;
public var speed = 2.5;
public var fastSpeed = 3.5;
public var normSpeed = 2.5;
public var slowSpeed = 1.5;

public var fish : GameObject;
public var shark : GameObject;

function Start () {
	
}

function Update () {
	//move
	shark.transform.position.x += speed / 60;

	//update speed
	if(timer >= 120 && shark.transform.position.x >= fish.transform.position.x - 4){
		speed = slowSpeed;
	}
	if(shark.transform.position.x < fish.transform.position.x - 4){
		speed = normSpeed;
	}

	//update timer
	timer ++;
}