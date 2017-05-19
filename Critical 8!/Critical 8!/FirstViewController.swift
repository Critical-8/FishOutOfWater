//
//  FirstViewController.swift
//  Critical 8!
//
//  Created by Michael Tang on 5/19/17.
//  Copyright © 2017 Critical 8!. All rights reserved.
//

import UIKit

class FirstViewController: UIViewController {
    //Dice Bag
    //Read outs
    @IBOutlet weak var rollRead: UILabel!
    @IBOutlet weak var dieRead: UILabel!
    //Buttons
    @IBOutlet weak var d20Butt: UIButton!
    @IBOutlet weak var d4Butt: UIButton!
    @IBOutlet weak var d6Butt: UIButton!
    @IBOutlet weak var d8Butt: UIButton!
    @IBOutlet weak var d10Butt: UIButton!
    @IBOutlet weak var d12Butt: UIButton!
    @IBOutlet weak var d100Butt: UIButton!
    //Roller
    @IBAction func d20Click(_ sender: Any) {
        let res = Int(arc4random_uniform(20) + 1)
        rollRead.text = String(res)
        dieRead.text = "d20"
    }
    @IBAction func d4Click(_ sender: Any) {
        let res = Int(arc4random_uniform(4) + 1)
        rollRead.text = String(res)
        dieRead.text = "d4"
    }
    @IBAction func d6Click(_ sender: Any) {
        let res = Int(arc4random_uniform(6) + 1)
        rollRead.text = String(res)
        dieRead.text = "d6"
    }
    @IBAction func d8Click(_ sender: Any) {
        let res = Int(arc4random_uniform(8) + 1)
        rollRead.text = String(res)
        dieRead.text = "d8"
    }
    @IBAction func d10Click(_ sender: Any) {
        let res = Int(arc4random_uniform(10) + 1)
        rollRead.text = String(res)
        dieRead.text = "d10"
    }
    @IBAction func d12Click(_ sender: Any) {
        let res = Int(arc4random_uniform(12) + 1)
        rollRead.text = String(res)
        dieRead.text = "d12"
    }
    @IBAction func d100Click(_ sender: Any) {
        let res = Int(arc4random_uniform(100) + 1)
        rollRead.text = String(res)
        dieRead.text = "100"
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

