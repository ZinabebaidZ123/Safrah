import { Component } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {
    //  AOS.init();
    this.title.setTitle("تسجيل الدخول");
    this.meta.addTag({name : "descripion" , content : "تسجيل الدخول فى جمعية سفرة القرءانية" }) 
    this.meta.addTag({name : "keywords" , content : "تسجيل الدخول" }) 
   }
}
