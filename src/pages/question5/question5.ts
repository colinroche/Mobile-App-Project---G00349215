import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from './../results/results';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Question5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question5',
  templateUrl: 'question5.html',
})
export class Question5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage5: Storage) {
  }
  quest5 : String;

  ionViewDidLoad() {
    console.log('ionViewDidLoad Question5Page');
  }

   openResults() {
     console.log(this.quest5);
    this.storage5.set("Result5", this.quest5);
    this.navCtrl.push(ResultsPage);
  }

   ionViewWillEnter(){
    this.storage5.get("Result5").then((data) => {
      this.quest5 = data;
    })
    .catch((err) => {
      console.log(err);
    })
  }

}
