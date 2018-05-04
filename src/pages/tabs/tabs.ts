import { Component } from '@angular/core';

import { InfoPage } from '../info/info';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InfoPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
