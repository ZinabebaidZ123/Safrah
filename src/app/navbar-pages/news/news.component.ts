import { Component } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {
    //  AOS.init();
    this.title.setTitle(" أخبار الجمعية ");
    this.meta.addTag({name : "descripion" , content : "أخبار جمعية سفرة القرءانية" }) 
    this.meta.addTag({name : "descripion" , content : "   الأخبار" }) 
   }

  display:boolean = false;

  seeMore(){
      this.display = ! this.display ;
  }

  newsList:any = [
    {imgSrc: "../../../assets/imgs/logo-classera.png" , content : "  أول جمعية فى مكة المكرمة تتعاقد مع كلاسيرا" , date: "15 يناير"},

    {imgSrc: "../../assets/imgs/new1.png" ,
     content : "   احتفاء جمعية الدراسات القرءانية بالأداء المتميز فى أعمال الحوكمة" , date: "15 يناير"},

     {imgSrc: "../../assets/imgs/new2.png" ,
     content : "   احتفاء جمعية الدراسات القرءانية بالأداء المتميز فى أعمال الحوكمة" , date: "15 يناير"},

     {imgSrc: "../../assets/imgs/new3.png" ,
     content : "   احتفاء جمعية الدراسات القرءانية بالأداء المتميز فى أعمال الحوكمة" , date: "15 يناير"},

     {imgSrc: "../../assets/imgs/new5.png" ,
     content : "   احتفاء جمعية الدراسات القرءانية بالأداء المتميز فى أعمال الحوكمة" , date: "15 يناير"},
   

     {imgSrc: "../../assets/imgs/new4.png" ,
     content : "   احتفاء جمعية الدراسات القرءانية بالأداء المتميز فى أعمال الحوكمة" , date: "15 يناير"},
  ]
}
