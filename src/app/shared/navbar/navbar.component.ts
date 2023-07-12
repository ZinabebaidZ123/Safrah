import { Component , OnInit ,HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

   ngOnInit(): void {
     
   }
   activeLink: string = '';

   setActiveLink(link: string) {
     this.activeLink = link;
   }

   header_variable = false;
   @HostListener("document:scroll")
   scrollFunction(){
    if(document.body.scrollTop > 776|| document.documentElement.scrollTop > 776){
      this.header_variable = true;
    }
    else{
      this.header_variable = false;
    }
   }

   isToggled = false;
   isToggle(){
    this.isToggled = !this.isToggled;
   }

   
   visitorsCount:number = 0;

   counterNum:any = setInterval(()=>{
     this.visitorsCount++ ;
 
     if(this.visitorsCount == 400){
       clearInterval(this.counterNum);
     }
   } , 10)
}
