//
//  SecondViewController.swift
//  Critical 8!
//
//  Created by Michael Tang on 5/19/17.
//  Copyright © 2017 Critical 8!. All rights reserved.
//

import UIKit

class SecondViewController: UIViewController {
    //ability Scores
    @IBOutlet weak var updateButton: UIButton!
    //Strength
    @IBOutlet weak var strScore: UITextField!
    @IBOutlet weak var strBon: UILabel!
    @IBOutlet weak var dexScore: UITextField!
    @IBOutlet weak var dexBon: UILabel!
    @IBOutlet weak var conScore: UITextField!
    @IBOutlet weak var conBon: UILabel!
    @IBOutlet weak var intScore: UITextField!
    @IBOutlet weak var intBon: UILabel!
    @IBOutlet weak var wisScore: UITextField!
    @IBOutlet weak var wisBon: UILabel!
    @IBOutlet weak var chaScore: UITextField!
    @IBOutlet weak var chaBon: UILabel!

    
    //Update
    @IBAction func updateScores(_ sender: AnyObject?) {
        var strBonus:Int = (strScore.text! as NSString).integerValue
        strBonus -= 10
        strBonus /= 2
        if(strBonus < 0){
            strBon.text = String(strBonus)
        }else{
            strBon.text = "+" + String(strBonus)
        }
        
        var dexBonus:Int = (dexScore.text! as NSString).integerValue
        dexBonus -= 10
        dexBonus /= 2
        if(dexBonus < 0){
            dexBon.text = String(dexBonus)
        }else{
            dexBon.text = "+" + String(dexBonus)
        }
        
        var conBonus:Int = (conScore.text! as NSString).integerValue
        conBonus -= 10
        conBonus /= 2
        if(conBonus < 0){
            conBon.text = String(conBonus)
        }else{
            conBon.text = "+" + String(conBonus)
        }
        
        var intBonus:Int = (intScore.text! as NSString).integerValue
        intBonus -= 10
        intBonus /= 2
        if(intBonus < 0){
            intBon.text = String(intBonus)
        }else{
            intBon.text = "+" + String(intBonus)
        }
        
        var wisBonus:Int = (wisScore.text! as NSString).integerValue
        wisBonus -= 10
        wisBonus /= 2
        if(wisBonus < 0){
            wisBon.text = String(wisBonus)
        }else{
            wisBon.text = "+" + String(wisBonus)
        }
        
        var chaBonus:Int = (chaScore.text! as NSString).integerValue
        chaBonus -= 10
        chaBonus /= 2
        if(chaBonus < 0){
            chaBon.text = String(chaBonus)
        }else{
            chaBon.text = "+" + String(chaBonus)
        }
        
        //saves the scores for later
        UserDefaults.standard.set(strScore.text, forKey: "str")
        UserDefaults.standard.set(dexScore.text, forKey: "dex")
        UserDefaults.standard.set(conScore.text, forKey: "con")
        UserDefaults.standard.set(intScore.text, forKey: "int")
        UserDefaults.standard.set(wisScore.text, forKey: "wis")
        UserDefaults.standard.set(chaScore.text, forKey: "cha")
        
        dismissKeyboard()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        //Looks for single or multiple taps.
        let tap: UITapGestureRecognizer = UITapGestureRecognizer(target: self, action: #selector(SecondViewController.dismissKeyboard))
        
        //Uncomment the line below if you want the tap not not interfere and cancel other interactions.
        //tap.cancelsTouchesInView = false
        
        view.addGestureRecognizer(tap)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func viewDidAppear(_ animated: Bool) {
        if let s = UserDefaults.standard.object(forKey: "str") as? String{
            strScore.text =  s
        }
        if let d = UserDefaults.standard.object(forKey: "dex") as? String{
            dexScore.text = d
        }
        if let c = UserDefaults.standard.object(forKey: "con") as? String{
            conScore.text = c
        }
        if let i = UserDefaults.standard.object(forKey: "int") as? String{
            intScore.text = i
        }
        if let w = UserDefaults.standard.object(forKey: "wis") as? String{
            wisScore.text = w
        }
        if let ch = UserDefaults.standard.object(forKey: "cha") as? String{
            chaScore.text = ch
        }
        
        updateScores(nil)
    }
    
    func dismissKeyboard() {
        //Causes the view (or one of its embedded text fields) to resign the first responder status.
        view.endEditing(true)
    }
}

