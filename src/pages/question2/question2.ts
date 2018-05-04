import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Question3Page} from './../question3/question3';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Question2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question2',
  templateUrl: 'question2.html',
})
export class Question2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage2: Storage) {
  }

  quest2 : String;

  ionViewDidLoad() {
    console.log('ionViewDidLoad Question2Page');
  }

 openQuestion3() {
   console.log(this.quest2);
    this.storage2.set("Result2", this.quest2);
    this.navCtrl.push(Question3Page);
  }

  ionViewWillEnter(){
    this.storage2.get("Result2").then((data) => {
      this.quest2 = data;
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
