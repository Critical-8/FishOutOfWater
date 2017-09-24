using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class highloader : MonoBehaviour {
    public UnityEngine.UI.Text highscoreText;
    
	// Use this for initialization
	void Start () {
		GameJolt.API.DataStore.Get("highscore", false, (string value) => {
            if (value != null){
                highscoreText.text = "" + value;
            }
        });
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
