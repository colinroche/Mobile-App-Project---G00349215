import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {
  hidden1 = true;
  hidden2 = true;
  hidden3 = true;
  hidden4 = true;
  hidden5 = true;
  hidden6 = true;
  hidden7 = true;
  hidden8 = true;
  hidden9 = true;
  hidden10 = true;
  hidden11 = true;
  hidden12 = true;
  hidden13 = true;
  hidden14 = true;

  show1(){
    if(this.hidden1 == false)
    {
    this.hidden1 = true;
    }
    else{
    this.hidden1 = false;
    }
  }
  show2(){
    if(this.hidden2 == false)
    {
    this.hidden2 = true;
    }
    else{
    this.hidden2 = false;
    }
  }
  show3(){
    if(this.hidden3 == false)
    {
    this.hidden3 = true;
    }
    else{
    this.hidden3 = false;
    }
  }
  show4(){
    if(this.hidden4 == false)
    {
    this.hidden4 = true;
    }
    else{
    this.hidden4 = false;
    }
  }
  show5(){
    if(this.hidden5 == false)
    {
    this.hidden5 = true;
    }
    else{
    this.hidden5 = false;
    }
  }
  show6(){
    if(this.hidden6 == false)
    {
    this.hidden6 = true;
    }
    else{
    this.hidden6 = false;
    }
  }
  show7(){
    if(this.hidden7 == false)
    {
    this.hidden7 = true;
    }
    else{
    this.hidden7 = false;
    }
  }
  show8(){
    if(this.hidden8 == false)
    {
    this.hidden8 = true;
    }
    else{
    this.hidden8 = false;
    }
  }
  show9(){
    if(this.hidden9 == false)
    {
    this.hidden9 = true;
    }
    else{
    this.hidden9 = false;
    }
  }
  show10(){
    if(this.hidden10 == false)
    {
    this.hidden10 = true;
    }
    else{
    this.hidden10 = false;
    }
  }
  show11(){
    if(this.hidden11 == false)
    {
    this.hidden11 = true;
    }
    else{
    this.hidden11 = false;
    }
  }
  show12(){
    if(this.hidden12 == false)
    {
    this.hidden12 = true;
    }
    else{
    this.hidden12 = false;
    }
  }
  show13(){
    if(this.hidden13 == false)
    {
    this.hidden13 = true;
    }
    else{
    this.hidden13 = false;
    }
  }
  show14(){
    if(this.hidden14 == false)
    {
      this.hidden14 = true;
    }
    else{
      this.hidden14 = false;
    }
  }

  constructor(public navCtrl: NavController) {

  }

}
