import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  
  images: string[] = [
    "/images/hero-img (1).png",
    "/images/menu-item-2.png",
    "/images/menu-item-3.png",
    "/images/menu-item-4.png",
    "/images/menu-item-5.png",
    "/images/menu-item-6.png",

  ]
  indexx: number = 0;
  srcimg: string = '';
  flag: boolean = true;
  showContainer(src: string, index: number): void {
    this.srcimg = src;
    this.flag = false;
    this.indexx = index;
  }

  slide(step: number): void {
    this.indexx = this.indexx + step;
    if (this.indexx < 0) {
      this.indexx = this.images.length - 1;
    }
    else if (this.indexx === this.images.length) {
      this.indexx = 0;
    }
    this.srcimg = this.images[this.indexx];
  }

  closeSlie(eInfo: MouseEvent): void {
    this.flag = true;
  }

  notCloseSlie(eInfo: MouseEvent): void {
    eInfo.stopPropagation();
  }



  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.slide(1);
    } else if (event.key === 'ArrowLeft') {
      this.slide(-1);
    }
  }
}
