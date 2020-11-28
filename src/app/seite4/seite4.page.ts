import { Component } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-seite4',
  templateUrl: './seite4.page.html',
  styleUrls: ['./seite4.page.scss'],
})
export class Seite4Page {

  private readonly LAENDER_UND_WIKI_URL = [
    {
      land: "Deutschland",
      url: "https://de.wikipedia.org/wiki/Deutschland"
    },
    {
      land: "Frankreich",
      url: "https://de.wikipedia.org/wiki/Frankreich"
    },
    {
      land: "Spanien",
      url: "https://de.wikipedia.org/wiki/Spanien"
    },
    {
      land: "Schweiz",
      url: "https://de.wikipedia.org/wiki/Schweiz"
    }
  ];

  constructor() { }


  /**
   * Event-Handler
   *
   * @param url  URL der zu öffnenden Wikipedia-Seite.
   *
   * @param slider  Slider-Element, da zu schliessen ist.
   */
  private onWikiSeiteOeffnen(url: string, slider: IonItemSliding) {

    window.open(url,'_system', 'location=yes');

    slider.close();
  }

}
