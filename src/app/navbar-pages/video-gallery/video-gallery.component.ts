import { Component , OnInit } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {

  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {
    //  AOS.init();
    this.title.setTitle("   معرض المرئيات ");
    this.meta.addTag({name : "descripion" , content : "معرض المرئيات الخاصة بجمعية سفرة" }) 
    this.meta.addTag({name : "keywords" , content : "معرض المرئيات" }) 
   }
}
