import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Question1Page} from './../question1/question1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }
openQuestion1() {
  this.navCtrl.push(Question1Page);
  }
}