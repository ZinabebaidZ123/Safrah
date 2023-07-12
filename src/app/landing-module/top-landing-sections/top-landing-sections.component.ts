import { Component } from '@angular/core';

@Component({
  selector: 'app-top-landing-sections',
  templateUrl: './top-landing-sections.component.html',
  styleUrls: ['./top-landing-sections.component.css']
})
export class TopLandingSectionsComponent {
images = ['../../../assets/imgs/افطار جماعى.png' , '../../../assets/imgs/تعاقد.jpg', '../../../assets/imgs/افطار.jpg'];
  currentIndex = 0;
  currentImage = this.images[this.currentIndex];

  previousSlide() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
    this.currentImage = this.images[this.currentIndex];
  }

  nextSlide() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.currentImage = this.images[this.currentIndex];
  }
}
