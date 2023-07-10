import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public fav;
  constructor() {
    this.fav = localStorage.getItem('fav');
    if (this.fav) {
      // this.fav = JSON.parse(this.fav);

      this.fav = JSON.parse(this.fav);
      for (let i = 0; i < this.fav.length; i++) {
        let fav = this.fav[i];
      }
    }
  }
}
