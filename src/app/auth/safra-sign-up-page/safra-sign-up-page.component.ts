import { Component , OnInit } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-safra-sign-up-page',
  templateUrl: './safra-sign-up-page.component.html',
  styleUrls: ['./safra-sign-up-page.component.css']
})
export class SafraSignUpPageComponent implements OnInit {

  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {
    //  AOS.init();
    this.title.setTitle("   إنشاء حساب   ");
    this.meta.addTag({name : "descripion" , content : "إنشاء حساب فى جمعية سفرة القرءانية" }) 
    this.meta.addTag({name : "keywords" , content : " إنشاء حساب "  }) 
   }

  isToggled1:boolean = false ;
  isToggled2:boolean = false ;
  isToggled3:boolean = false ;
  isToggled4:boolean = false ;

   toggle1(){
      this.isToggled1 = !this.isToggled1;
      // if(this.isToggled1 == false){
      //   this.isToggled1 = true;
      // }
      // else{
      //   this.isToggled1 = false;
      // }

  }


  toggle2(){
    // this.isToggled2 != this.isToggled;
    if(this.isToggled2 == false){
      this.isToggled2 = true;
    }
    else{
      this.isToggled2 = false;
    }
}


toggle3(){

  if(this.isToggled3 == false){
    this.isToggled3 = true;
  }
  else{
    this.isToggled3 = false;
  }

}

toggle4(){
  if(this.isToggled4 == false){
    this.isToggled4 = true;
  }
  else{
    this.isToggled4 = false;
  }

}
}
