import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // === menu ===
  IsOpened = false
  openMenu(){
    this.IsOpened = !this.IsOpened
  }



// === theme ===
isDark = false;

toggleTheme() {
  this.isDark = !this.isDark;

  if (this.isDark) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// === scroll-up ===
  scrollPercent = 0;
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const totalScrollable = scrollHeight - clientHeight;

    this.scrollPercent = (scrollTop / totalScrollable) * 100;
  
    this.isSticky = window.scrollY > 90;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
