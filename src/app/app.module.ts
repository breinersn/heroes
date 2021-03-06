
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {
  HeroesPage,
  VillanosPage,
  HomePage,
  Pagina3HeroePage,
  Pagina3VillanoPage
} from "../pages/pages.index";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeroesPage,
    VillanosPage,
    Pagina3HeroePage,
    Pagina3VillanoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HeroesPage,
    VillanosPage,
    Pagina3HeroePage,
    Pagina3VillanoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
