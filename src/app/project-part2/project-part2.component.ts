import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-part2',
  templateUrl: './project-part2.component.html',
  styleUrls: ['./project-part2.component.sass']
})
export class ProjectPart2Component implements OnInit {

  constructor() { }
  url = ['https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/B%C5%82aszczyk_Mateusz_320.psd?alt=media&token=a60fe7d9-fd12-43d2-94ff-f84ba2ecd1d9',
  'https://github.com/mbabanes/pizeryja/tree/master/src/main/resources/static'];
  ngOnInit() {
  }
  upenURL(n) {
    if (n === 0) {
      window.open(this.url[n], '_blank', 'resizable=yes,top=200,left=500,width=400,height=400');
    } else {
      window.open(this.url[n], '_blank');
    }
  }


}
