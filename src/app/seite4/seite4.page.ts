import { Component } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-seite4',
  templateUrl: './seite4.page.html',
  styleUrls: ['./seite4.page.scss'],
})
export class Seite4Page {

  public readonly LAENDER_UND_WIKIURL_ARRAY = [
    {
      land: "Deutschland",
      url_de: "https://de.wikipedia.org/wiki/Deutschland",
      url_en: "https://en.wikipedia.org/wiki/Germany"
    },
    {
      land: "Frankreich",
      url_de: "https://de.wikipedia.org/wiki/Frankreich",
      url_en: "https://en.wikipedia.org/wiki/France"
    },
    {
      land: "Schweiz",
      url_de: "https://de.wikipedia.org/wiki/Schweiz",
      url_en: "https://en.wikipedia.org/wiki/Switzerland"
    },
    {
      land: "Spanien",
      url_de: "https://de.wikipedia.org/wiki/Spanien",
      url_en: "https://en.wikipedia.org/wiki/Spain"
    }
  ];


  /**
   * Event-Handler für Buttons zum Öffnen einer URL in *Sliding Item*.
   *
   * @param url  URL der zu öffnenden Wikipedia-Seite.
   *
   * @param slider  Slider-Element, das zu schliessen ist.
   */
  public onWikiSeiteOeffnen(url: string, slider: IonItemSliding) {

    window.open(url, "_system", "location=yes");

    slider.close();
  }

}