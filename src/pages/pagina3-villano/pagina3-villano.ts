import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pagina3-villano',
  templateUrl: 'pagina3-villano.html',
})
export class Pagina3VillanoPage {

  villano: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.villano = this.navParams.get('villano');
  }
}
