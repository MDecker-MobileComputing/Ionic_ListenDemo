import { Component } from '@angular/core';

@Component({
  selector: 'app-seite5',
  templateUrl: './seite5.page.html',
  styleUrls: ['./seite5.page.scss'],
})
export class Seite5Page {

  private stringArrayPromise = this.getStringArray();


  public async getStringArray(): Promise<String[]> {

    let resultArray:string[] = [];

    const promise = new Promise<String[]>(function(resolveCallback, rejectCallback) {

      for (let i = 1; i <= 100; i++) {
        resultArray.push(`Eintrag ${i}`);
      }

      resolveCallback( resultArray );

    });

    return promise;
  }

}
