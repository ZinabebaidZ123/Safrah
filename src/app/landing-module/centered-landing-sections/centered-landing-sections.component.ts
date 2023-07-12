import { Component  , OnInit} from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-centered-landing-sections',
  templateUrl: './centered-landing-sections.component.html',
  styleUrls: ['./centered-landing-sections.component.css']
})
export class CenteredLandingSectionsComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
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
