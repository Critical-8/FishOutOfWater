#pragma strict
//This is the script that both tracks the score of the player but also spawns and destroys the ground chuncks.
public var fish : GameObject;

public var ground1 : GameObject;
public var ground2 : GameObject;

public var GroundLength : float;

public var oneBeforeTwo = true;

public var hiddenScore = 0.0;
public var currentScore = 0;
public var scoreCounter : UI.Text;

public var tiles : GameObject[];

function Start () {
    
}

function Update () {
    /*
        I didn't use just the integer counter because it would've counted too fast.
        Instead I used a float that counted up slower and then just trunkated it 
        to make it look better and more classic.
    */
    hiddenScore += 0.1;
    currentScore = hiddenScore;
    currentScore *= 10;
    scoreCounter.text = "" + currentScore;
    
    var randomTile : int;
    //If one is before two, destroys one after the fish is far enough and makes a new one.
    if(oneBeforeTwo && fish.transform.position.x >= ground2.transform.position.x + (GroundLength/2)){
        randomTile = (Random.Range(0,tiles.length+1));
        
        Destroy(ground1);
        ground1 = Instantiate(tiles[randomTile-1], Vector3 (ground2.transform.position.x + GroundLength, 0, 0), Quaternion.identity);
        oneBeforeTwo = false;
    }
    //If two is before one, destroys two after the fish is far enough and makes a new two.
    if(!oneBeforeTwo && fish.transform.position.x >= ground1.transform.position.x + (GroundLength/2)){
        randomTile = (Random.Range(0,tiles.length+1));
        
        Destroy(ground2);
        ground2 = Instantiate(tiles[randomTile-1], Vector3 (ground1.transform.position.x + GroundLength, 0, 0), Quaternion.identity);
        oneBeforeTwo = true;
    }
}