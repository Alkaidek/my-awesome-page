import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  down = 0;
  up = 1;
  goTo(n) {
    if ( n === 1 && n < 4) {
      (<HTMLElement>document.querySelector('#line' + this.up)).style.backgroundColor = 'rgba(0,0,0,0.2)';
      (<HTMLElement>document.querySelector('#line' + (this.up - 1))).style.backgroundColor = 'rgba(0,0,0,0)';
      (<HTMLElement>document.querySelector('.infoRight')).style.display = 'none';
      (<HTMLElement>document.querySelector('.infoLeft')).style.display = 'none';
    } else {
      if ( this.up > 1 ) {
        (<HTMLElement>document.querySelector('#line' + (this.up - 1))).style.backgroundColor = 'rgba(0,0,0,0)';
        (<HTMLElement>document.querySelector('#line' + (this.up - 2))).style.backgroundColor = 'rgba(0,0,0,0.2)';
      }
    }
    if ( this.up === 1 || (n === 0 && this.up === 3) ) {
      (<HTMLElement>document.querySelector('.spanbox')).style.display = 'inline-block';
    }
    if ( n === 1 ) {
      document.getElementById( '' + this.up ).scrollIntoView({behavior: 'smooth', block: 'start'});
      this.up = this.up + 1;
    } else {
      document.getElementById( '' + (this.up - 2) ).scrollIntoView({behavior: 'smooth', block: 'start'});
      this.up = this.up - 1;
    }
    if (n === 0 && this.up === 1) {
      const elements = document.getElementsByClassName('later');
      for (let i = 1; i < elements.length + 1; i++) {
        (<HTMLElement>document.querySelector('#l' + i)).style.display = 'inline-block';
      }
    } else {
      const elements = document.getElementsByClassName('later');
      for (let i = 1; i < elements.length + 1; i++) {
        (<HTMLElement>document.querySelector('#l' + i)).style.display = 'none';
      }
    }
  }
}
