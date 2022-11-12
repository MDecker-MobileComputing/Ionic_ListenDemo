import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private menueEintraegeArray: Array<Object>;

  constructor() {

    this.fuelleMenueEintrageArray();
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
      },
      {
        titel: "Länder und Wiki-Seite",
        ziel: "/seite4"
      },
      {
        titel: "Lange Liste",
        ziel: "/seite5"
      }
    ];
  }

}
