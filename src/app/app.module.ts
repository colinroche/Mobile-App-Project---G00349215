import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InfoPage } from '../pages/info/info';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {Question1Page} from '../pages/question1/question1';
import {Question2Page} from '../pages/question2/question2';
import {Question3Page} from '../pages/question3/question3';
import {Question4Page} from '../pages/question4/question4';
import {Question5Page} from '../pages/question5/question5';
import {ResultsPage} from '../pages/results/results';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    ContactPage,
    HomePage,
    TabsPage,
    Question1Page,
    Question2Page,
    Question3Page,
    Question4Page,  
    Question5Page,
    ResultsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    ContactPage,
    HomePage,
    TabsPage,
    Question1Page,
    Question2Page,
    Question3Page,
    Question4Page,
    Question5Page,
    ResultsPage
      ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
