#pragma strict
import UnityEngine.SceneManagement;

public var currOption = 0;
public var lastOption = 0;

//Title screen options
public var startGame : UI.Text;
public var select : UI.Text;
public var exit : UI.Text;
public var ach : UI.Text;
public var scores : UI.Text;

public var info:Transform;
public var fishOption = 0;

function Start () {
    var isSignedIn = GameJolt.API.Manager.Instance.CurrentUser;
    if (!isSignedIn){
        GameJolt.UI.Manager.Instance.ShowSignIn();
    }
}

function Update () {
    fishOption = info.position.x;
    
	if(Input.GetKeyDown("space")){
        if(currOption == 0){
            if(fishOption == 0){
                SceneManager.LoadScene(1);
            }else if(fishOption == 1){
                SceneManager.LoadScene(3);
            }else if(fishOption == 2){
            	SceneManager.LoadScene(4);
            }
        }else if(currOption == 1){
            SceneManager.LoadScene(2);
        }else if(currOption == 2){
            Application.Quit();
        }else if(currOption == 3){
            GameJolt.UI.Manager.Instance.ShowTrophies();
        }else if(currOption == 4){
            GameJolt.UI.Manager.Instance.ShowLeaderboards();
        }
	}
    
    if (Input.GetKey ("escape")) {
        var isSignedIn = GameJolt.API.Manager.Instance.CurrentUser != null;
        if (isSignedIn){
            GameJolt.API.Manager.Instance.CurrentUser.SignOut();
        }
        Application.Quit();
    }
    
    if(Input.GetKeyDown("down")){
        currOption ++;
    }
    if(Input.GetKeyDown("up")){
        currOption --;
    }
    if(currOption > 4){
        currOption = 0;
    }else if(currOption < 0){
        currOption = 4;
    }
    
    if(lastOption != currOption){
        if(currOption == 0){
            startGame.text = "> Start Game";
            select.text = "fish select";
            exit.text = "Exit";
            ach.text = "achievments";
            scores.text = "highscores";
        }
        if(currOption == 1){
            startGame.text = "Start Game";
            select.text = "> fish select";
            exit.text = "Exit";
            ach.text = "achievments";
            scores.text = "highscores";
        }
        if(currOption == 2){
            startGame.text = "Start Game";
            select.text = "fish select";
            exit.text = "> Exit";
            ach.text = "achievments";
            scores.text = "highscores";
        }
        if(currOption == 3){
            startGame.text = "Start Game";
            select.text = "fish select";
            exit.text = "Exit";
            ach.text = "> achievments";
            scores.text = "highscores";
        }
        if(currOption == 4){
            startGame.text = "Start Game";
            select.text = "fish select";
            exit.text = "Exit";
            ach.text = "achievments";
            scores.text = "> highscores";
        }
        
        lastOption = currOption;
    }
}