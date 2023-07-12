import { Component } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-newspapper-news',
  templateUrl: './newspapper-news.component.html',
  styleUrls: ['./newspapper-news.component.css']
})
export class NewspapperNewsComponent {

    constructor(private title:Title , private meta: Meta){}
    ngOnInit(): void {
      //  AOS.init();
      this.title.setTitle("عن الجمعية  ");
      this.meta.addTag({name : "descripion" , content : "اخبار جمعية سفرة فى الصحف" }) 
      this.meta.addTag({name : "keywords" , content : "صحيفة نور الإخبارية ,  صحيفة وهج الإلكترونية  , صحيفة الأنباء العربية آن"   }) 
     }
  newspapperList:any = 
  [ { heading: "صحيفة الأنباء العربية آن" , link: "https://aan-news.com/270737.html/#.YdW2jasRtX4.twitter"} , { heading: "صحيفة نور الإخبارية" , link: "https://nour-news.com/?p=151161"} , { heading: "صحيفة وهج الإلكترونية" , link: "http://wahjnews.com/71956/"} , { heading: "جريدة الشعلة الإلكترونية" , link: "http://wahjnews.com/71956/"}]
}
