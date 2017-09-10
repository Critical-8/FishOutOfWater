#pragma strict
public var background1 : GameObject;
public var background2 : GameObject;
public var fish : GameObject;

public var speed = 0.1;

public var background1Distance = 0.0;
public var background2Distance = 10.62;

function Start () {
	
}

function Update () {
    //updates how far behind the backgrounds should be
    background1Distance -= speed;
    background2Distance -= speed;
    
    //puts them relative to the fish how far back they should be
    background1.transform.position.x = fish.transform.position.x + background1Distance;
    background2.transform.position.x = fish.transform.position.x + background2Distance;
    
    if(background1Distance <= -10.62){
        background1Distance = 10.62;
    }else if(background2Distance <= -10.62){
        background2Distance = 10.62;
    }
}
