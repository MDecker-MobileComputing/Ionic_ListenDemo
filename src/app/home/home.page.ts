import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * Array mit elementen Werten (d.h. keine Objekte mit Unterkomponenten),
   * die in `<ion-list>` dargestellt werden sollen.
   */
  private readonly LAENDER_ARRAY = [ "Deutschland", "Frankreich", "Schweiz", "Spanien" ];

}
