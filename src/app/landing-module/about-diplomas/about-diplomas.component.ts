import { Component } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-about-diplomas',
  templateUrl: './about-diplomas.component.html',
  styleUrls: ['./about-diplomas.component.css']
})
export class AboutDiplomasComponent {
  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {
    //  AOS.init();
    this.title.setTitle("  عن الدبلومات   ");
    this.meta.addTag({name : "descripion" , content : ""}) 
    this.meta.addTag({name : "keywords" , content : " عن الدبلومات "  }) 
   }
}
