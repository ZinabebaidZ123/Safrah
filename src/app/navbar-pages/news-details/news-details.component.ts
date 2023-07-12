import { Component } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {


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

  ]
}

