using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class trophyHandler : MonoBehaviour {
    public Transform scorer;
    
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
        //Highscore
        if(scorer.position.z == -1){
            //Not highscore
        }else if(scorer.position.z == 1){
            //Highscore
            GameJolt.API.DataStore.Set("highscore", "" + scorer.position.x, false, (bool success) => {});
            
            GameJolt.API.Scores.Add((int)scorer.position.x, "" + scorer.position.x + "m", 287082, "", (bool success) => {
                Debug.Log(string.Format("Score Add {0}.", success ? "Successful" : "Failed"));
            });
        }
        
        //10000m Dash
        if(scorer.position.x>=10000){
		GameJolt.API.Trophies.Unlock(82551, (bool success) => {
            if (success){
                Debug.Log("Success!");
            }else{
                Debug.Log("Something went wrong");
            }
        });
        }
        //20000m Dash
        if(scorer.position.x>=20000){
		GameJolt.API.Trophies.Unlock(82566, (bool success) => {
            if (success){
                Debug.Log("Success!");
            }else{
                Debug.Log("Something went wrong");
            }
        });
        }
	}
}
