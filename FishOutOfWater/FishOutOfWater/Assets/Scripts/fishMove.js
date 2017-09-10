#pragma strict
import UnityEngine.SceneManagement;

public var fish : GameObject;
public var fishRigid : Rigidbody2D;
public var speed : float;

public var jumpPow = 3;
public var jumpAllowance : float;

public var anim : Animator;

public var testing = false;

public var meter : float;

function Start () {
    
}

function Update () {
	fish.transform.position.x += speed / 60;
    
    meter = fishRigid.velocity.y;

	if(Input.GetKeyDown("space") && fishRigid.velocity.y < 0.1 && fishRigid.velocity.y > - 0.1){
		fishRigid.AddForce(new Vector2(0, jumpPow	), ForceMode2D.Impulse);
        anim.CrossFade("Jump", 0.0, -1, 0.0);
	}
    
    if(testing){
        fishRigid.AddForce(new Vector2(0, jumpPow   ), ForceMode2D.Impulse);
        testing = false;
    }
    
    if (Input.GetKey ("escape")) {
        SceneManager.LoadScene(0);
    }
}