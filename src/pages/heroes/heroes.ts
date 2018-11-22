import { Pagina3HeroePage } from '../pages.index';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HEROES} from '../../data/data.heroes'

@IonicPage()
@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html',
})
export class HeroesPage {

  heroes: any[] = HEROES;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pagina3(heroe: any){

    this.navCtrl.push(Pagina3HeroePage, {'heroe':heroe});
  }
}
