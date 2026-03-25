import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { WishlistService } from './service/wishlist-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // === menu ===
  IsOpened = false
  hiddin = false
  state = false
  Menu(){
    this.state = !this.state
    if(this.state  == true){
      this.hiddin = !this.hiddin
    setTimeout(()=>{
      this.IsOpened = !this.IsOpened
    },0)
    }else{
      this.IsOpened = !this.IsOpened
      setTimeout(()=>{
      this.hiddin = false
      },300)
    }

  }



// === theme ===
isDark = false;
currentTheme: 'light' | 'dark' = 'light';

  constructor(public themeService: WishlistService) {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.themeService.toggleTheme();
  }

// === scroll-up ===
  scrollPercent = 0;
  isSticky = false;
  lastScrollY = 0;
  hideHeader = true;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const totalScrollable = scrollHeight - clientHeight;

    this.scrollPercent = (scrollTop / totalScrollable) * 100;
  // ==sticky==
    this.isSticky = window.scrollY > 200;
  // ==fixed==
    const currentScrollY = window.scrollY;

    if (currentScrollY > this.lastScrollY) {
      // Scroll Down 👇
      this.hideHeader = false;
      // this.IsOpened = false
    } else {
      // Scroll Up 👆
      this.hideHeader = true;
      
    }

    this.lastScrollY = currentScrollY;
  }
  

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
