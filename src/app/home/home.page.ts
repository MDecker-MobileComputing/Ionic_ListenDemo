import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /** Array mit Werten, die in <ion-list> dargestellt werden sollen.  */
  private readonly LAENDER = [ "Deutschland", "Frankreich", "Spanien", "Schweiz" ];

  constructor() {}

}
