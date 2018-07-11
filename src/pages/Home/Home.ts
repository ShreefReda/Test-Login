import { Component,ViewChild } from '@angular/core';

import { NavController, NavParams,MenuController,Nav  } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'page-list',
  templateUrl: 'home.html'
})
export class Home {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  pages: Array<{title: string, component: any}>;
  content : ['Home','List of items', 'Close'];

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController,) {
    menu.enable(true);

  }

  /*itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }*/

}