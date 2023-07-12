import { Component } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-suggestions-complaints',
  templateUrl: './suggestions-complaints.component.html',
  styleUrls: ['./suggestions-complaints.component.css']
})
export class SuggestionsComplaintsComponent {
  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {
    //  AOS.init();
    this.title.setTitle("    المقترحات والشكاوى ");
    this.meta.addTag({name : "descripion" , content : "الصفحة الخاصة بالمقترحات والشكاوى" }) 
    this.meta.addTag({name : "keywords" , content : "سجل المقترحات والشكاوى " }) 
   }
}
