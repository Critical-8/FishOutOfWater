#pragma strict

function Start () {
	
}

function Update () {
	if(Input.GetKey(KeyCode.Escape)){
        Application.Quit();
    }
}
