import { Component , OnInit } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-governance',
  templateUrl: './governance.component.html',
  styleUrls: ['./governance.component.css']
})


export class GovernanceComponent implements OnInit {
   
  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {

    this.title.setTitle(" الحوكمة");
    this.meta.addTag({name : "descripion" , content : "الحوكمه" }) 
    this.meta.addTag({name : "keywords" , content : "الجمعية العمومية  , السياسات" }) 
   }


  // downloadPDF1() {
  //   const link = document.createElement('a');
  //   link.setAttribute('target', '_blank');
  //   link.setAttribute('href', './assets/pdf.pdf');
  //   link.setAttribute('download', 'pdf.pdf');
  //   link.dispatchEvent(new MouseEvent('click'));
  // }



  btnsList:any = [1,2,3,4,5,6,7,8,9,10];
        list:any = [
          { heading: " الجمعية العمومية" ,   btnId : "1" ,   content :[ {li:" أعضاء الجمعية العمومية  "  , pdf: "https://drive.google.com/file/d/1DygNjgUZun1iVqZDhxwN94P1fTr8tkIy/view"} ,

          {li:" الدليل الإجرائي للمجلس العمومي "  , pdf: "https://drive.google.com/file/d/1APJLrfVxhWDsw8lvgfHBMlvIyJKHh2Tw/view"} ,
          {li:"محضر الجمعية العمومية لعام 2021 م "  , pdf: "https://drive.google.com/file/d/1KsOz8jymeYS1_B0xB5OCzzn7eKdljxug/view"} ,
          {li:" محضر الجمعية العمومية لعام 2022 م"  , pdf: "https://drive.google.com/file/d/1U0ax5mdOOC2ia7M_CypKqt6an0Sr2VxW/view"} ,
          {li:"محضر الجمعية العمومية لعام 2023 م "  , pdf: "https://drive.google.com/file/d/11mZ3YUpduf0WCHMsc7eiZ9u-tuIO_9HW/view"} ,
         ] },

         { heading: " مجلس الإدارة " ,   btnId : "2" ,pdfPath: "pdf"},

         { heading: "  اللوائح والأنظمة " ,   btnId : "3" ,  content: [{li:'اللائحة الأساسية للجمعية' , pdf:'https://drive.google.com/file/d/1KcW-wmjY0XiE_m04qKFysnhgxXzHo4a2/view'} , {li:'اللائحة التعليمية' , pdf:'https://drive.google.com/file/d/1Y6-MDx3Cegnsdtzol19uOuKKDdofDZ9m/view'} , {li:'اللائحة المالية' , pdf:'https://drive.google.com/file/d/1u0UBj8_EOTh8FSyF4-MIjCf0mRlGk8G0/view'}]  },

         { heading: "   السياسات " ,   btnId : "4" , content:[{li:'سياسة مصفوفة الصلاحيات بين مجلس الإدارة والإدارة التنفيذية' , pdf:'https://drive.google.com/file/d/1997apB4SBNcjPdQm1zAbsfAltUJqq8Sh/view'} , {li:'سياسة الإبلاغ عن المخالفات وحماية مقدمي البلاغات' , pdf:'https://drive.google.com/file/d/15rdF7QOcdakd-8UeKU-vShZLhHFBhrpM/view'} 
        ,{li:'سياسة تعارض المصالح' , pdf: 'https://drive.google.com/file/d/1L4ArEd3CwYS0Kc_rrUjt4C8Py58FlMku/view'} , 
      {li:'سياسة خصوصية البيانات' , pdf: 'https://drive.google.com/file/d/1QYJJSJu9oKRpGMl5H5hDMJJLJJNtIYHH/view'} , 
    {li:'سياسة جمع التبرعات' , pdf: 'https://drive.google.com/file/d/1esDsR3o1Ysps7aO-m3msJMgqcIxz5F5J/view'} ,
  {li:'نظام الرقابة الداخلي' , pdf:'https://drive.google.com/file/d/1oxn-LAhZMi1-B04LIBtVFGnQINphbwIh/view'} ,
{li:'سياسة الإحتفاظ بالوثائق واتلافها'  , pdf: 'https://drive.google.com/file/d/1-8DDIsp-KGutFmmsNiYnytA8Re50nOqm/view'} ,
{li:'سياسة تنظيم العلاقة مع المستفيد' , pdf: 'https://drive.google.com/file/d/1V1kjGoUXpnhypsTQ0nNeAWsUpOGikkET/view'} , 
{li:'آلية استحقاق المستفيد' , pdf: 'https://drive.google.com/file/d/1sWt196NGkHhnwxugJjbIfBrFMzUf45pJ/view'} ,
{li:'سياسة إدارة المتطوعين' , pdf:' https://drive.google.com/file/d/1YhmG7eyHiE9ym7ASvGgBAkDcGXlKVvcb/view '} ,
{li:'آلية إدارة المتطوعين' , pdf: 'https://drive.google.com/file/d/1uZhJTP2kBI1JPX8wIl2Ar5mrhrCrfFRA/view'} , 
{li: 'سياسة الإشتباه بعمليات غسل الأموال وجرائم تمويل الإرهاب' , pdf: 'https://drive.google.com/file/d/1N2-QUN45lWV6XSoLnN9uLk-zcRe8Of8Q/view'} ,
{li: 'سياسة الوقاية من عمليات غسل الأموال وجرائم تمويل الإرهاب' , pdf: 'https://drive.google.com/file/d/1AJygPya9ZxNAGRw1Qr7u_ArCZS8-kehL/view'}]},

             { heading: "  الخطة الإستراتيجية " ,   btnId : "5" , content:[{li:'الخطة الإستراتيجية' , pdf: 'https://drive.google.com/file/d/1icoqHcm2wCym_SihgWUL5mWocsuZjYne/view'} , {li:'اهداف الخطة الإستراتيجية' , pdf:'https://drive.google.com/file/d/1icoqHcm2wCym_SihgWUL5mWocsuZjYne/view'}]  },

             { heading: "  الخطة التشغيلية" ,   btnId : "6" ,  content:[{li:'الخطة التشغيلية' , pdf: 'https://drive.google.com/file/d/1hjM10_eXyZsNcnYG83Zx_wFWNlT7toRf/view'} , {li:'اهداف الخطة التشغيلية' , pdf: 'https://drive.google.com/file/d/1MFAxz8R8pDztmbijRF8Xg_pIXmoZdYt5/view'}]},

             { heading: "  إحصائيات البرامج والخدمات " ,   btnId : "7" ,  content:[{li:'إحصائيات البرامج والخدمات' , pdf: 'https://drive.google.com/file/d/17h1jQcRcEIrIu-qhiRfYtjihM_tz6s5G/view'} , {li:'إحصائيات البرامج والخدمات التوعوية' , pdf: 'https://drive.google.com/file/d/1Dkyvswj1gxaBL6g-mxKDmJXo25V8z-ni/view'} ]},

             { heading: "  النموذج الشامل أريب " ,   btnId : "8" ,  content: [ {li:'النموذج الشامل' , pdf:'https://drive.google.com/file/d/1UKp_BeG19jg7LgNxdQDZRok4042rSNHS/view'} , {li:'النموذج على المنصة' , pdf:'https://drive.google.com/file/d/1umta1THzxOb2dzuV5cYzbrzVTtfi8Klt/view'}  , {li:'محضر مجلس الإدارة' , pdf:'https://drive.google.com/file/d/1noRVXGnawoAYnukzCKLKUMCbpxn2WzAn/view'}  ]},

             { heading: "  الإفصاحات " ,   btnId : "9" , content: [ {li: 'الإفصاح عن العلاقات العائلية' , pdf:'https://drive.google.com/file/d/1JayXxPAzwyPsvXbNbWzeqUALui6n6Llx/view'} , {li: 'نموذج التعهد والإقرار' , pdf:'https://drive.google.com/file/d/1aD1OYtMGrn_nfMtTK5Ax_-YQ77o6bD5r/view'} , {li: 'الإفصاح عن وجود عقارات أو استثمارات' , pdf:'https://drive.google.com/file/d/1HXQRVZTM0nY-WEI4TnZb61gwEA9K5PWm/view'}  , {li: 'الإفصاح عن اللجان' , pdf:'https://drive.google.com/file/d/1GaFSOiaZ4z69zNHGYmyvNE-XIDqnmZyf/view'}  , {li: 'الإفصاح عن صلاحيات المجلس' , pdf:'https://drive.google.com/file/d/16sEDspMM2iGFGCsZdjyVR8jMbfKT0JmD/view'} ]},

             { heading: " الجمعيات المعتمدة " ,   btnId : "10" ,   content :[{ li:'الجمعيات المعتمدة' , pdf:'https://drive.google.com/file/d/1braBfxcZGzK7zYz-1NPPHOm8m1KQ0_1L/view'}]},

           

          ];

        
         formList:any = [
          {heading : 'استبانة قياس رضا  الموظفة'  ,  btnId : "11"  , content:[{li: 'محضر مجلس الإدارة' , pdf:'https://drive.google.com/file/d/1mbe3OZR7zKe6Mn3daLLORA6NSVQkG5CJ/view'} , {li: 'القرارات والتوصيات على نتائج التقييم' , pdf:'https://drive.google.com/file/d/1Bv7_KppdZQ1E4m-U8wltlQDImUNeHpDB/view'} , {li: 'التغذية الراجعة' , pdf:'https://drive.google.com/file/d/1y1ljVSsk04PxDNH5UYo3WCXv8kPKMjUm/view'} , {li: 'تقرير تقييم المستفيد' , pdf:'https://drive.google.com/file/d/1BADMFZmIXC-4K6r8Jpv4EDxdRIDftWTb/view'} ,]} ,
  
          {heading : 'استبانة قياس رضا الطالبة'  ,  btnId : "12"  , content:[{li: 'محضر مجلس الإدارة' , pdf:'https://drive.google.com/file/d/1mbe3OZR7zKe6Mn3daLLORA6NSVQkG5CJ/view'} , {li: 'القرارات والتوصيات على نتائج التقييم' , pdf:'https://drive.google.com/file/d/1v2VbY4CHt9zY1DhBqEpk35xIkDFHbyct/view'} , {li: 'التغذية الراجعة' , pdf:'https://drive.google.com/file/d/1y1ljVSsk04PxDNH5UYo3WCXv8kPKMjUm/view'} , {li: 'تقرير تقييم المستفيد' , pdf:'https://drive.google.com/file/d/1BADMFZmIXC-4K6r8Jpv4EDxdRIDftWTb/view'} ,]} ,

          {heading : '  استبانة قياس رضا أعضاء الجمعية العمومية '  ,  btnId : "13"  ,content:[{li: 'محضر مجلس الإدارة' , pdf:'https://drive.google.com/file/d/1bQwRksXL5aFrhUzShxRE4zxQgcAKUbdB/view'} , {li: 'القرارات والتوصيات على نتائج التقييم' , pdf:'https://drive.google.com/file/d/1bQwRksXL5aFrhUzShxRE4zxQgcAKUbdB/view'} , {li: 'التغذية الراجعة' , pdf:'https://drive.google.com/file/d/1Ov3NDfsBMAEAI5mddPH8fX6_KD6D60t0/view'} , {li: 'تقرير تقييم المستفيد' , pdf:'https://drive.google.com/file/d/1GzfgWeJ9nkQ1F3ZMTgUsTbkkm_XbaWDV/view'} ,]} ,

        {heading : ' استبانة قياس رضا أعضاء مجلس الإدارة '  ,  btnId : "14"  ,content:[{li: 'محضر مجلس الإدارة' , pdf:'https://drive.google.com/file/d/1mbe3OZR7zKe6Mn3daLLORA6NSVQkG5CJ/view'} , {li: 'القرارات والتوصيات على نتائج التقييم' , pdf:'https://drive.google.com/file/d/1B8m7utJTnN1pby-WtIiHH0KEXneobLIs/view'} , {li: 'التغذية الراجعة' , pdf:'https://drive.google.com/file/d/1wwu0zc5Wx30Asi8NVx1x_LCX1JFID_cg/view'} , {li: 'تقرير تقييم المستفيد' , pdf:'https://drive.google.com/file/d/186oQquSF-FsZ0tu_zqhhnnS8_OElBcGO/view'} ,]} ,
         ];
  // downloadPDF(fileName: string) {
  //   const link = document.createElement('a');
  //   link.setAttribute('target', '_blank');
  //   link.setAttribute('href', `./assets/${fileName}.pdf`);
  //   link.setAttribute('download', `${fileName}.pdf`);
  //   link.dispatchEvent(new MouseEvent('click'));
  // }
preparatorsList:any = [
  {heading: "محاضر اجتماعات مجلس الإدارة لعام 2021 م" , content: ["محضر رقم 1"  , "محضر رقم 2"  , "محضر رقم 3"  , "محضر رقم 4" , "محضر رقم 5" ] , pdfPath: 'pdf'}
]


  downloadPDF(fileName: string){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', `${fileName}`);
    link.setAttribute('download', `${fileName}`);
    link.dispatchEvent(new MouseEvent('click'));
  }
}



 



