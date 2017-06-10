#pragma strict

public var fish : GameObject;
public var speed : float;

function Start () {
	
}

function Update () {
	fish.transform.position.x += speed / 60;
}
