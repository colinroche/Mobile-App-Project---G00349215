import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {Question1Page} from "../question1/question1";
import {Question2Page} from "../question2/question2";
import {Question3Page} from "../question3/question3";
import {Question4Page} from "../question4/question4";
import {Question5Page} from "../question5/question5";


/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage1: Storage, private storage2: Storage, private storage3: Storage, private storage4: Storage, private storage5: Storage) {
  }

  Result1: String;
  Result2: String;
  Result3: String;
  Result4: String;
  Result5: String;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

ionViewWillEnter(){
    this.storage1.get("Result1").then((data) => {
      this.Result1=data;
    })
    .catch((err) => {
      console.log(err);
    })

    this.storage2.get("Result2").then((data) => {
      this.Result2=data;
    })
    .catch((err) => {
      console.log(err);
    })

    this.storage3.get("Result3").then((data) => {
      this.Result3=data;
    })
    .catch((err) => {
      console.log(err);
    })

    this.storage4.get("Result4").then((data) => {
      this.Result4=data;
    })
    .catch((err) => {
      console.log(err);
    })

    this.storage5.get("Result5").then((data) => {
      this.Result5=data;
    })
    .catch((err) => {
      console.log(err);
    })
  }

}
