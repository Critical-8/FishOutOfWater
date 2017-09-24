#pragma strict
public var fish : Animator;
public var currName : UI.Text;

public var highScore : int;
public var lock : SpriteRenderer;
public var lockS : Sprite;
public var lockAmount:UI.Text;

public var lastSelection = 0;
public var selection = 0;

public var info : Transform;

//fish & names
public var goldfish : RuntimeAnimatorController;
public var goldfishName = "Fish the Fish";
public var lfsl : AnimatorOverrideController;
public var lfslName = "Long Fish Short Legs";
public var lfslReq = 10000;

function Start () {
	
}

function Update () {
    highScore = info.position.x;
    
	if(Input.GetKeyDown("down")){
        selection ++;
    }
    if(Input.GetKeyDown("up")){
        selection --;
    }
    if(selection < 0){
        selection = 1;
    }
    if(selection > 1){
        selection = 0;
    }
    
    if(selection != lastSelection){
        if(selection == 0){
            fish.runtimeAnimatorController = goldfish;
            currName.text = goldfishName;
            lastSelection = 0;
                lock.sprite = null;
                lockAmount.text = "";
        }
        if(selection == 1){
            fish.runtimeAnimatorController = lfsl;
            currName.text = lfslName;
            lastSelection = 1;
            
            if(highScore<lfslReq){
                lock.sprite = lockS;
                lockAmount.text = "" +lfslReq;
            }else{
                lock.sprite = null;
                lockAmount.text = "";
            }
        }
    }
    
    if(Input.GetKeyDown("space")){
        if(lock.sprite == null){
            info.position.y = selection;
            info.position.z = 1;
        }
        SceneManager.LoadScene(0);
    }
    if(Input.GetKeyDown("escape")){
        SceneManager.LoadScene(0);
    }
}
