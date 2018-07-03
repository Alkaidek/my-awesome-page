import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }
  url = ['https://www.linkedin.com/in/mateusz-b%C5%82aszczyk-83a96a163/', 'https://github.com/Alkaidek', 'https://drive.google.com/file/d/1EPai3nOsH6K_4Ra7iiZxX7uq6XdMZ3nb/view']
  ngOnInit() {
  }
  showLink(n) {
    if ( n === 3) {
      (<HTMLElement>document.querySelector('.mailinfo')).style.display = 'inline-block';
      (<HTMLElement>document.querySelector('#pmImg')).style.opacity = '1';
    } else if ( n === 4) {
      (<HTMLElement>document.querySelector('.phoneinfo')).style.display = 'inline-block';
      (<HTMLElement>document.querySelector('#phImg')).style.opacity = '1';
    } else {
      window.open(this.url[n], '_blank');
    }
  }
}
