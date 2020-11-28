import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


/**
 * Programmatische Definition von Navigations-Menü in Methode
 * `fuelleMenueEintrageArray()`, siehe:
 * https://www.tutorialandexample.com/ionic-menu/
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private menueEintraegeArray: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.fuelleMenueEintrageArray();
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /**
   * Füllt Member-Variable `menueEintraegeArray` mit einem
   * Element pro Navigationsziel/Seite.
   */
  private fuelleMenueEintrageArray() {

    this.menueEintraegeArray = [
      {
        titel: "Länder",
        ziel: "/home"
      },
      {
        titel: "Länder und Hauptstädte",
        ziel: "/seite2"
      },
      {
        titel: "Länder und größte Städte",
        ziel: "/seite3"
      }
    ];
  }

}
