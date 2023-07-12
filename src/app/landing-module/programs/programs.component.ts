import { Component } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {
    //  AOS.init();
    this.title.setTitle("  البرامج والدورات ");
    this.meta.addTag({name : "descripion" , content : "" }) 
   }
list:any = [
{ heading: "الدبلوم العالي" ,   btnId : "1" ,   content :[{li: " برنامج القراءات العشر"  , pdf:'https://drive.google.com/file/d/14UDjHhawCjTDotOacljXgOxt0krSODCW/view' , },
{li:"برنامج إعداد الداعيات" , pdf:'https://drive.google.com/file/d/1R5Jw7XN2WC6y0_-8kU6dAHobAMftZI9x/view'}  ,{li: "برنامج إعداد معلمات التدبر" , pdf: 'https://drive.google.com/file/d/1w4JyGxqpnQsB79qSgexCRedZzyFloZqx/view' } ,{li: "   برنامج إعداد مديرات المدارس القرآنية" ,pdf:'https://drive.google.com/file/d/1P8VpQNtfvb-MrEr6MQry4AsowAahMo_i/view'}]  , btnCont : 'التسجيل في برامج الدبلوم العالي' , progLink:''},

{ heading: " الدبلوم المتوسط" , btnId : "2" ,  content :[ {li: "  برنامج السنة التأهيلية" , pdf: 'https://drive.google.com/file/d/13ffc947cBGS-KHtZgKnogOvZ4_WQ7mni/view' }, { li:"برنامج الدراسات القرآنية" , pdf:'https://drive.google.com/file/d/1pNu9Ogw5rf77cUxnMXUBRqeYn-T4mgHf/view' } ,{li: "برنامج العلوم الشرعية" ,pdf: 'https://drive.google.com/file/d/1T8_A8qkI_SstPSYs6b4Bf_bdLJlmwbdn/view' } ] , btnCont : 'التسجيل في برامج الدبلوم المتوسط' , progLink:'' },

{ heading: " الدورات القرآنية" ,btnId : "3" , content :[{li: " مشروع العمر حفظ القرآن الكريم كاملاً خلال عام واحد" , pdf: 'https://drive.google.com/file/d/1ts_7lTgIXHhNDnAEhPkOOQtPa2JZTjFo/view'} , {li:"حفظ القرآن الكريم كاملاً في عامين" , pdf: 'https://drive.google.com/file/d/1GQgs3Fc8N-X6JbkkgE64QCtTdBQeVox_/view'} ,{li: "المعالي تتمة حفظ القرآن الكريم" , pdf: 'https://drive.google.com/file/d/1BsLZuRsP6v482xNvd2fNb8axkgSEPoMD/view'} ,{li: "الإرتقاء تثبيت حفظ القرآن الكريم"  , pdf:'https://drive.google.com/file/d/1r-aS3N1wPQHLYFqbsW1SF44VWEPU9F2y/view'} ,{ li:"الإتقان تحسين تلاوة القرآن الكريم" , pdf: 'https://drive.google.com/file/d/17nxYS1dLt30N1AhC-H4u7ue9UPV_sr5e/view' }, {li :"المقرأة القرآنية" , pdf: 'https://drive.google.com/file/d/1nfra6X_o8PIsrAQJGXh8klUEIoaXxrrX/view?usp=sharing' },{li: "التأسيسية لمعلمات الحلقات القرآنية" , pdf:'https://drive.google.com/file/d/1JnuefFSpqc30ec48DUxU-3JQ47MSuji1/view'} ] , btnCont : 'التسجيل في الدورات القرآنية' , progLink:''},

{ heading: "الدورات العامة " , btnId : "4" ,  content :[ {li:"الدورات التأهيلية لمسابقة حفظ القرآن على جائزة خادم الحرمين الشريفين "  , pdf: 'https://drive.google.com/file/d/1XYF_lPEP4yFjkl8VuU1MsIVRf7GxILRq/view'},{li:  "القاعدة النورانية" , pdf : 'https://drive.google.com/file/d/1FzCVt_5XWFDuPz7UwxuD3_8FhZT7edyn/view' }  ] , btnCont : 'التسجيل في الدورات العامة' , progLink:'' },


{ heading: " دورات القراءات" , btnId : "5" ,  content :[{ li:"   مفاتيح الإتقان  " , pdf: 'https://drive.google.com/file/d/1eROJNSQavuUTs-C97e005HzW9cMYlbaU/view'} ,{li: "الإجازة في قراءة عاصم أو القراءات العشر" , pdf: 'https://drive.google.com/file/d/1GZEaSR448Yi8oteHVXFEWF8OGpR_OyXh/view'} ,{ li:"سلسلة برنامج الدرر الحسان في إفراد القراءات العشر للقرآن" , pdf:'https://drive.google.com/file/d/1yY5U6Mbb-7RfZvYGVjNDBkgWw2GRl40x/view'}  ] , btnCont : 'التسجيل في دورات القراءات' , progLink:'' }


];
  downloadPDF(fileName: string){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', `${fileName}`);
    link.setAttribute('download', `${fileName}`);
    link.dispatchEvent(new MouseEvent('click'));
  }
}


