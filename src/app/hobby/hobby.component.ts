import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.sass']
})
export class HobbyComponent implements OnInit {

  constructor() { }
  imgUrl = [
    'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC04561.jpg?alt=media&token=c37fce3a-411b-4f41-a75b-18e7b9b46fce',
    'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC00083.JPG?alt=media&token=a0a26511-fb46-4a30-b5b8-bf386964b48e',
    'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC05752.jpg?alt=media&token=9b9a5e49-2b13-41fb-a661-24bcd3329a22',
    'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC06314.ARW.jpg?alt=media&token=fbbea674-b041-4b4f-ac5a-184d5765d06a',
    'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC08111.JPG?alt=media&token=4887dbb8-9fdb-49d8-bccf-8711abacd2f1',
    'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC09085.JPG?alt=media&token=75b0b2fc-0acc-42a9-b1d8-9758f8d2ad78'
  ]
  imgUrl1 = 'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC04561.jpg?alt=media&token=c37fce3a-411b-4f41-a75b-18e7b9b46fce';
  imgUrl2 = 'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC00083.JPG?alt=media&token=a0a26511-fb46-4a30-b5b8-bf386964b48e';
  imgUrl3 = 'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC05752.jpg?alt=media&token=9b9a5e49-2b13-41fb-a661-24bcd3329a22';
  imgUrl4 = 'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC06314.ARW.jpg?alt=media&token=fbbea674-b041-4b4f-ac5a-184d5765d06a';
  imgUrl5 = 'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC08111.JPG?alt=media&token=4887dbb8-9fdb-49d8-bccf-8711abacd2f1';
  imgUrl6 = 'https://firebasestorage.googleapis.com/v0/b/moja-niesamowita-strona.appspot.com/o/DSC09085.JPG?alt=media&token=75b0b2fc-0acc-42a9-b1d8-9758f8d2ad78';
  currentImgUrl = ''
  randomVal;
  ngOnInit() {
    this.randomVal = Math.floor((Math.random() * 6));
    this.currentImgUrl = this.imgUrl[this.randomVal];
    (<HTMLElement>document.querySelector('#img' + this.randomVal)).className = 'mainMinImg';
  }
  changePhoto(n) {
    (<HTMLElement>document.querySelector('.mainImg')).style.display = 'none';
    this.currentImgUrl = this.imgUrl[n];
    (<HTMLElement>document.querySelector('#img' + n)).className = 'mainMinImg';
    (<HTMLElement>document.querySelector('.mainImg')).style.display = 'inline-block';
    (<HTMLElement>document.querySelector('#img' + this.randomVal)).className = 'minImg';
    this.randomVal = n;
  }
}
