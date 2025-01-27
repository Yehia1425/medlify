import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet , RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolling: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolling = window.scrollY >2;
  }


//  private readonly ID=Inject(PLATFORM_ID);
//  darkmode=false;

//   ngOnInit():void{
//     if(isPlatformBrowser( this.ID)){

// dectecycolorscheme() {
//   if(window.matchMedia&& window.matchMedia('(prefer-color-scheme:dark)').matches){
//     this.darkmode=true;
//     document.documentElement.setAttribute('data-theme',this.darkmode? 'dark' : 'light');
//   }
// }

// toggleletheme(){
//   this.darkmode = !this.darkmode;
//   document.documentElement.setAttribute('data-theme', this.darkmode? 'dark':'light');


//     }
//   }

//   }
}



