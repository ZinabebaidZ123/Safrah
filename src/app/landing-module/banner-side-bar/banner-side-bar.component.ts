import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-side-bar',
  templateUrl: './banner-side-bar.component.html',
  styleUrls: ['./banner-side-bar.component.css']
})
export class BannerSideBarComponent {
  showPrayerTime: boolean = false;
  prayerTimeUrl: string = "https://prayer-times.info/show_prayertimes_new.php?city_link=mecca&box_style=2&nodate=1&nonext=1";

  togglePrayerTime() {
    this.showPrayerTime = !this.showPrayerTime;
  }
  visitorsCount:number = 0;

  counterNum:any = setInterval(()=>{
    this.visitorsCount++ ;

    if(this.visitorsCount == 400){
      clearInterval(this.counterNum);
    }
  } , 10)
}
