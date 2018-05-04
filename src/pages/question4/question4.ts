import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Question5Page} from './../question5/question5';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the Question4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question4',
  templateUrl: 'question4.html',
})
export class Question4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage4: Storage) {
  }

  quest4: String;

  ionViewDidLoad() {
    console.log('ionViewDidLoad Question4Page');
  }

   openQuestion5() {
     console.log(this.quest4);
    this.storage4.set("Result4", this.quest4);
    this.navCtrl.push(Question5Page);
  }

  ionViewWillEnter(){
    this.storage4.get("Result4").then((data) => {
      this.quest4 = data;
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
