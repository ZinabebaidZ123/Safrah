import { Component  , OnInit } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
import * as AOS from 'aos';
@Component({
  selector: 'app-about-charity',
  templateUrl: './about-charity.component.html',
  styleUrls: ['./about-charity.component.css']
})
export class AboutCharityComponent {
  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {
     AOS.init();
    this.title.setTitle("عن الجمعية  ");
    this.meta.addTag({name : "descripion" , content : "عن الجمعية" }) 
    this.meta.addTag({name : "keywords" , content : " أهداف الجمعية , رؤية ورسالة الجمعية" }) 
    
   }
}
