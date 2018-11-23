import { Pagina3VillanoPage } from './../pages.index';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {VILLANOS} from '../../data/data.villanos';

@IonicPage()
@Component({
  selector: 'page-villanos',
  templateUrl: 'villanos.html',
})
export class VillanosPage {

  villanos: any[] = VILLANOS;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irvillanoPage(villano:any){

    this.navCtrl.push(Pagina3VillanoPage, {'villano':villano});
  }
}
