#pragma strict

public var fish : GameObject;
public var object1 : GameObject;
public var object2 : GameObject;

public var itteration = true;
public var distance : float;

public var speed = 0.0;

function Start () {
	
}

function Update () {
	if(fish.transform.position.x >= object2.transform.position.x && itteration == true){
        object1.transform.position.x += 2 * distance;
        itteration = false;
    }
    
	if(fish.transform.position.x >= object1.transform.position.x && itteration == false){
        object2.transform.position.x += 2 * distance;
        itteration = true;
    }
    
    object1.transform.position.x += speed / 60;
    object2.transform.position.x += speed / 60;
}
