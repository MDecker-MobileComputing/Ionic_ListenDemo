import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {

  public menueEintraegeArray: Array<any> = [
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
