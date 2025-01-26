import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component, HostListener } from '@angular/core';

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

}
