import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Question4Page} from './../question4/question4';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Question3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question3',
  templateUrl: 'question3.html',
})
export class Question3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage3: Storage) {
  }

  quest3: String;  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Question3Page');
  }

  openQuestion4() {
    console.log(this.quest3);
    this.storage3.set("Result3", this.quest3);
    this.navCtrl.push(Question4Page);
  }

   ionViewWillEnter(){
    this.storage3.get("Result3").then((data) => {
      this.quest3 = data;
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
