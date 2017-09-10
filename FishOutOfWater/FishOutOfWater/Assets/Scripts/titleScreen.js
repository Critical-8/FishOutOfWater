#pragma strict
import UnityEngine.SceneManagement;

public var currOption = 0;
public var lastOption = 0;

//Title screen options
public var startGame : UI.Text;
public var exit : UI.Text;

function Start () {
	
}

function Update () {
	if(Input.GetKeyDown("space")){
        if(currOption == 0){
            SceneManager.LoadScene(1);
        }else if(currOption == 1){
            Application.Quit();
        }
	}
    
    if (Input.GetKey ("escape")) {
        Application.Quit();
    }
    
    if(Input.GetKeyDown("down")){
        currOption ++;
    }
    if(Input.GetKeyDown("up")){
        currOption --;
    }
    if(currOption > 1){
        currOption = 0;
    }else if(currOption < 0){
        currOption = 1;
    }
    
    if(lastOption != currOption){
        if(currOption == 0){
            startGame.text = "> Start Game";
            exit.text = "Exit";
        }
        if(currOption == 1){
            startGame.text = "Start Game";
            exit.text = "> Exit";
        }
        
        lastOption = currOption;
    }
}