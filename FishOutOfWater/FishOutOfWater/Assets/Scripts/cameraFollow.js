#pragma strict

public var fish : GameObject;
public var cam : GameObject;

function Start () {
	
}

function Update () {
	cam.transform.position.x = fish.transform.position.x;
}
