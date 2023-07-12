import { Component   , OnInit} from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.css']
})
export class ImgGalleryComponent implements OnInit {
   
  constructor(private title:Title , private meta: Meta){}
  ngOnInit(): void {
    //  AOS.init();
    this.title.setTitle(" معرض الصور");
    this.meta.addTag({name : "descripion" , content : "معرض الصور الخاص بجمعية سفرة القرءانية" }) 
    this.meta.addTag({name : "descripion" , content : "معرض الصور" })
   }
  imgList:any = [
    "../../assets/imgs/img1.png" , "../../assets/imgs/img2.png" , "../../assets/imgs/img3.png" ,   "../../assets/imgs/img4.png" , "../../assets/imgs/img5.png" , "../../assets/imgs/img6.png" , "../../assets/imgs/img7.png" , "../../assets/imgs/img8.png" , "../../assets/imgs/img9.png" 
  ]
}
