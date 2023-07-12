import { Component , OnInit } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {
    //  AOS.init();
    this.title.setTitle(" التقارير");
    this.meta.addTag({name : "descripion" , content : "التقارير" }) 
    this.meta.addTag({name : "keywords" , content : "التقارير الإدارية ,  التقرير السنوى" }) 
   }

  list :any = 
  [
     { heading: "التقرير السنوى" , btnId : "1" ,  content :[{li:'التقرير السنوي لعام 2021 م' , pdf:'https://drive.google.com/file/d/1hU2JRpN01jzakpIPGmXhlqgg3GI278YP/view'}]},

     { heading: "التقارير الإدارية" , btnId : "2" ,  content : [ {li:"        تقارير متابعة وإنفاذ قرارات وتوصيات مجلس الإدارة للجمعية العمومية      " , pdf: "https://drive.google.com/file/d/1S0rrMZ2gdj1qy2IJwSdLG4PEJ-nsie-9/view"}] },

     { heading: "تقييم المخاطر المتأصلة والكامنة" , btnId : "3" , content: [{li:'تقييم المخاطر المتأصلة والكامنة' , pdf:'https://drive.google.com/file/d/1xEWk88JwRb059HspcKHckzLoBpn6yXQD/view'} , {li: 'قرارات مجلس الإدارة في التعامل مع المخاطر الكامنة والمتأصلة' , pdf: 'https://drive.google.com/file/d/1bPYcso5BjedQWmfZK1_3XYzDCrLscXYD/view'} , {li:'محضر مجلس الإدارة' , pdf:'https://drive.google.com/file/d/149XdRgfKPHzUs-1QAdqS1U3I1QLLAeB-/view'}]  },

     { heading: "تقارير المراجع الداخلي " , btnId : "4" , content:[{li: "تقرير المراجع الداخلي" , pdf: "https://drive.google.com/file/d/1ZCUii3cI47yrAKFxTybmKWfAQhV3NeZZ/view"} , {li: 'تقرير المراجع الداخلي لعام 2022' , pdf: 'https://drive.google.com/file/d/1XZGaL8UDA1HpfnP4nI0bR3_UnXM3feke/view'}]},

     { heading: " تقارير التواصل مع المستهدفين" , btnId : "5" , content: [{li:'تقارير التواصل مع المستهدفين' , pdf: 'https://drive.google.com/file/d/1FgAd-pP70KcopbQvkLgv4nDc1v9ggylB/view'}]},

     { heading: "  التقارير المالية  " , btnId : "6" ,content: [{li: 'التقرير المالي لعام 2021 م' , pdf: 'https://drive.google.com/file/d/14lb6cfL7MLvzaNvBh0XW1UvSQF0iwtbr/view'} , {li: 'الربع الأول لعام 2021 م' , pdf: 'https://drive.google.com/file/d/1CAs9rpD5KZ6nA_B49EUTZtLAHx7GOnq7/view'} , {li:'الربع الثاني لعام 2021 م' , pdf: 'https://drive.google.com/file/d/1pOCkaqU62i35fiL2nWVi2QYQ64AxnT4D/view'} , {li: 'الربع الثالث لعام 2021 م' , pdf: 'https://drive.google.com/file/d/12MDuIa12I-5O-qbvo8VHHjranAz6skiF/view'} , {li: 'التقرير المالي لعام 2022 م' , pdf : 'https://drive.google.com/file/d/1VTAMDfXQPfqcWIK2TWs0sbNvIl0Zwvpk/view'} , {li:'الربع الأول لعام 2022 م' , pdf: 'https://drive.google.com/file/d/1H7eaeY6VQrkVRhNoepP26pk8Hrgr8dLU/view'} , {li: 'الربع الثاني لعام 2022 م' , pdf: 'https://drive.google.com/file/d/17JsnOniaGUJMEiBh239zF07-S4pQ9ZEk/view'} , {li : 'الربع الثالث لعام 2022 م' , pdf: 'https://drive.google.com/file/d/18di93lhYPKvHt-6asEkaXwxgKGZBKtzW/view'} , {li: 'الموازنة التقديرية لعام 2023 م' , pdf: 'https://drive.google.com/file/d/1EC71AiGS-qVTWIYsdjvNFL7t7gmLkCG7/view'}] } ,

     { heading: "التقارير التوعوية " , btnId : "7" ,  content: [ {li: ' ورش عمل الجمعية والواجبات والمهام وفق نظام الجمعيات والمؤسسات الاهلية' , pdf: 'https://drive.google.com/file/d/1KAbst-csWyOSaLbdtg_YPPo3VoAI0KEl/view'}  , {li: ' ورشة عمل تعزيز الموازنة بين البرامج والأداء 1' , pdf: 'https://drive.google.com/file/d/1fBfdzkEi1ytkJJRimBFwqmtnxlORPXmX/view'} , {li: ' ورشة عمل تعزيز الموازنة بين البرامج والأداء  2'   , pdf :'https://drive.google.com/file/d/1ZZ4NAKHe--yHHm4mT_4AJtmARJ5GtiI2/view'} , {li:'ورشة عمل  المفاهيم الأساسية للمالية والمحاسبية  ', pdf : 'https://drive.google.com/file/d/16ahQhbykWywQ18K_KCwUhJjaqnLjMR6Y/view'} , {li: ' ورشة عمل مكافحة غسيل الأموال وتمويل الإرهاب ' , pdf:'https://drive.google.com/file/d/11fgaUORorbGJX1QAM1y1rDa_m69NUejp/view'} , {li:' ورشة عمل الإكسل وتطبيقاته في بيئة العمل ' , pdf: 'https://drive.google.com/file/d/1TddpFypHyHEbuiwc0RHcWmrvfUguICDo/view'}]},

     { heading: "تقارير البرامج والأنشطة " , btnId : "8" ,  content :[{li: "    تقرير البرامج والأنشطة " ,pdf: 'https://drive.google.com/file/d/1gQv9QIo3I9if9mlc_YI9ucMxwFPXP4ZZ/view' } ]},


  ]


  downloadPDF(filePath: string){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', `${filePath}`);
    link.setAttribute('download', `${filePath}`);
    link.dispatchEvent(new MouseEvent('click'));
  }
}


