import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public menueEintraegeArray: Array<any> | undefined;

  ngOnInit() {

    this.fuelleMenueEintrageArray();
  }

  /**
   * Füllt Member-Variable `menueEintraegeArray` mit einem
   * Element pro Navigationsziel/Seite.
   */
  public fuelleMenueEintrageArray() {

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
