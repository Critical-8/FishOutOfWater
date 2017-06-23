#pragma strict

public var fish : GameObject;
public var fishRigid : Rigidbody2D;
public var speed : float;

public var jumpPow = 3;
public var jumpAllowance : float;

public var groundTrigger : BoxCollider2D;

function Start () {
	
}

function Update () {
	fish.transform.position.x += speed / 60;

	if(Input.GetKeyDown("space") && fish.transform.position.y <= jumpAllowance){
		fishRigid.AddForce(new Vector2(0, jumpPow	), ForceMode2D.Impulse);
	}
}