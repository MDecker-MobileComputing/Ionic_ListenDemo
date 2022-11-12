import { Component } from '@angular/core';

@Component({
  selector: 'app-seite2',
  templateUrl: './seite2.page.html',
  styleUrls: ['./seite2.page.scss'],
})
export class Seite2Page {

  /**
   * Array mit Objekten, die in `<ion-list>` dargestellt werden sollen.
   */
  private readonly LAENDER_UND_HAUPTSTAEDTE_ARRAY = [
    {
      land: "Deutschland",
      hauptstadt: "Berlin"
    },
    {
      land: "Frankreich",
      hauptstadt: "Paris"
    },
    {
      land: "Schweiz",
      hauptstadt: "Bern",
    },
    {
      land: "Spanien",
      hauptstadt: "Madrid",
    },
  ];

}