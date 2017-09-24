using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class title : MonoBehaviour {
    public Transform info;
    
	// Use this for initialization
	void Start () {
        
	GameJolt.API.DataStore.Get("fish", false, (string value) => {
        if (value != null){
            info.position = new Vector3(int.Parse(value),0,0);
        }
    });
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
