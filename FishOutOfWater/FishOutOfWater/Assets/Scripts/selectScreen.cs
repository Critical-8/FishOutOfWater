using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class selectScreen : MonoBehaviour {
public Transform info;
	// Use this for initialization
	void Start () {
		GameJolt.API.DataStore.Get("highscore", false, (string value) => {
            if (value != null){
                info.position = new Vector3(int.Parse(value),info.position.y, info.position.z);
            }
        });
	}
	
	// Update is called once per frame
	void Update () {
		if(info.position.z == 1){
            GameJolt.API.DataStore.Set("fish", "" + info.position.y, false, (bool success) => {});
        }
	}
}
