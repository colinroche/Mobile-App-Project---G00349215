import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Question2Page} from "./../question2/question2";
import { Storage } from '@ionic/storage';


/**
 * Generated class for the Question1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question1',
  templateUrl: 'question1.html',
})
export class Question1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage1: Storage) {
  }

  quest1 : string;

  openQuestion2() {
    console.log(this.quest1);
    this.storage1.set("Result1", this.quest1);
    this.navCtrl.push(Question2Page);
  }

 ionViewDidLoad() {
    console.log('ionViewDidLoad Question1Page');
  }

  ionViewWillEnter(){
    this.storage1.get("Result1").then((data) => {
      this.quest1 = data;
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
