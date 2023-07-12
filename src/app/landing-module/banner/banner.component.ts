import { Component, OnInit , ViewChild } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})


export class BannerComponent implements OnInit {

  isPlaying = false;
  isMuted = true;
  // @ViewChild('video') videoElement: ElementRef;
ngOnInit(): void {
  AOS.init();
 
}
playVideo() {
  this.isPlaying = !this.isPlaying;
  this.videoRef.play();
}

muteVideo() {
  this.isMuted = !this.isMuted;
  this.videoRef.muted = this.isMuted;
}

get videoRef() {
  return this.videoElement.nativeElement;
}

}




