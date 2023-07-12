import { Component , OnInit } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
import * as AOS from 'aos';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent  implements OnInit{

  constructor(private title:Title , private meta: Meta ){}
 ngOnInit(): void {
   AOS.init();
  this.title.setTitle("الصفحه الرئيسية");
  this.meta.addTag({name : "descripion" , content : "الصفحة الرئيسية لموقع سفرة"   }) ;
  this.meta.addTag({name : "keywords" , content : "   جمعية الدراسات القرءانية بمكة المكرمة , البرامج القرءانية   , "   }) ;
 }


 count1:number = 0;
 count2:number = 0;
 count3:number = 0;
 count4:number = 0;
 count5:number = 0;
 count6:number = 0;
 counterNum1:any = setInterval(()=>{
   this.count1++ ;
  

   if(this.count1 == 10 ){
     clearInterval(this.counterNum1);
   }
 
 } , 100)


 counterNum2:any = setInterval(()=>{
  this.count2++ ;
 

  if(this.count2 == 28 ){
    clearInterval(this.counterNum2);
  }

} , 10)


counterNum3:any = setInterval(()=>{
  this.count3++ ;
 

  if(this.count3 == 200 ){
    clearInterval(this.counterNum3);
  }

} , 10)

counterNum4:any = setInterval(()=>{
  this.count4++ ;
 

  if(this.count4 == 1400 ){
    clearInterval(this.counterNum4);
  }

} , 10)

counterNum5:any = setInterval(()=>{
  this.count5++ ;
 

  if(this.count5 == 200 ){
    clearInterval(this.counterNum5);
  }

} , 10)

counterNum6:any = setInterval(()=>{
  this.count6++ ;
 

  if(this.count6 == 200 ){
    clearInterval(this.counterNum6);
  }

} , 10)
 list:any = [
  { heading:"  دبلوم العلوم الشرعية" ,   btnId : "1" , progNum: "1" ,  content :[ {li:"  دبلوم العلوم الشرعية"  , pdf: "https://drive.google.com/drive/folders/1EnztNp0QLqkCSuZ3aR4rX2LAVP3XAWe-"} ,

 ] },

 { heading:"  دبلوم  الدراسات القرءانيه" ,   btnId : "2" , progNum: "2" ,  content :[ {li:"  دبلوم  الدراسات القرءانيه" , pdf: "https://drive.google.com/drive/folders/1EnztNp0QLqkCSuZ3aR4rX2LAVP3XAWe-"} ,

] },

{ heading:"الدبلوم العالى" ,   btnId : "3" , progNum: "3" ,  content :[ {li:" دبلوم مديرات المدارس القرأنية" ,    pdf: "https://drive.google.com/drive/folders/1VILf_j9fEPjfCi5CiFXbrtlTD-gGO6NF"} ,

{li:"دبلوم القراءات العشر" ,    pdf: "https://drive.google.com/drive/folders/1VILf_j9fEPjfCi5CiFXbrtlTD-gGO6NF"} ,




{li:"  دبلوم التدبر ومجالس المدارسة القرءانية"  ,    pdf: "https://drive.google.com/drive/folders/1VILf_j9fEPjfCi5CiFXbrtlTD-gGO6NF"} ,


{li:"      دبلوم إعداد الداعيات"  ,    pdf: "https://drive.google.com/drive/folders/1VILf_j9fEPjfCi5CiFXbrtlTD-gGO6NF"} ,


] },


]



downloadPDF(fileName: string){
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', `${fileName}`);
  link.setAttribute('download', `${fileName}`);
  link.dispatchEvent(new MouseEvent('click'));
}
}
