import { Component } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent {

  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {
    //  AOS.init();
    this.title.setTitle("   التوظيف ");
    this.meta.addTag({name : "descripion" , content : "الصفحة الخاصة بالتوظيف" }) 
    this.meta.addTag({name : "keywords" , content : "التوظيف ,  سكرتيرة  , أخصائية تقنية المعلومات , رئيسة الشؤون التعليمية" }) 
   }
reqList:any = [
  {jobTitle:"سكرتيرة" , btnId:"1" , subHeading:"الشروط"  ,content:['أن تكون سعودية الجنسية' , 'لديها مهارة في أعمال السكرتارية بإحتراف'
   , 'لديها القدرة على استخدام الحاسب الآلي وتطبيقاته' , 'لديها المهارة في الإتصال وإعداد التقارير والمتابعة' , 'أن تجتاز المقابلة الشخصية']}
    ,

   {jobTitle:"أخصائية تقنية المعلومات" , btnId:"2" , subHeading:"المهام" , subHeading2:"مواصفاتها" ,content:[{content1:['gg' , 'kk'] , content2:['kk']}]} ,


   {jobTitle:"رئيسة الشؤون التعليمية" , btnId:"3" , subHeading:"الكفايات"  ,content:['سعودية الجنسية' ,
   ' مؤهل لا يقل عن البكالوريوس في تخصص مناس  وبفضل كونه في الأقسام التربوية أو الشرعية' , 'خبرة لا تقل عن خمسة سنوات في مجال العمل التربوي' , 'خبرة لا تقل عن خمسة سنوات في مجال العمل التربوي' , 'فهم في مجالات تعلم وتعليم القرآن الكريم'
  ]}
   
]


}



