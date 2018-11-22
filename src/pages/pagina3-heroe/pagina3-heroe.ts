import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pagina3-heroe',
  templateUrl: 'pagina3-heroe.html',
})
export class Pagina3HeroePage {

  heroe: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.heroe = this.navParams.get("heroe");
  }
}
