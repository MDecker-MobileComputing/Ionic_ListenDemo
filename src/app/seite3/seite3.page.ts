import { Component } from '@angular/core';

@Component({
  selector: 'app-seite3',
  templateUrl: './seite3.page.html',
  styleUrls: ['./seite3.page.scss'],
})
export class Seite3Page {

  /**
   * Array mit Objekten, die in `<ion-list>` dargestellt werden sollen.
   * Das Attribut `staedte` referenziert einen Array mit den drei größten
   * Städten im jeweiligen Land.<br><br>
   *
   * Quellen für größte Städte in den genannten Ländern:
   *
   * * Deutschland: https://de.statista.com/statistik/daten/studie/1353/umfrage/einwohnerzahlen-der-grossstaedte-deutschlands/
   *
   * * Frankreich: https://de.statista.com/statistik/daten/studie/200607/umfrage/groesste-staedte-in-frankreich/
   *
   * * Spanien: https://de.statista.com/statistik/daten/studie/200622/umfrage/groesste-staedte-in-spanien/
   *
   * * Schweiz: https://de.statista.com/statistik/daten/studie/216783/umfrage/groesste-staedte-in-der-schweiz/
   */
  public readonly LAENDER_UND_GROESSTE_STAEDTE_ARRAY = [
    {
      land: "Deutschland",
      staedte: [ "Berlin", "Hamburg", "München" ]
    },
    {
      land: "Frankreich",
      staedte: [ "Paris", "Marseille", "Lyon" ]
    },
    {
      land: "Schweiz",
      staedte: [ "Zürich", "Genf", "Basel" ]
    },
    {
      land: "Spanien",
      staedte : [ "Madrid", "Barcelona", "Valencia" ]
    },
  ];

}