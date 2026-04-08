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
  ToolsActive = false
  OpenTools (){
    this.ToolsActive = !this.ToolsActive
  }
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



  // ========== calculator ===========
  input: string = '';
  resultDisplayed: boolean = false;

  pressNumber(value: string) {
    const lastChar = this.input[this.input.length - 1];

    if (!this.resultDisplayed) {
      this.input += value;
    } else if (
      this.resultDisplayed &&
      (lastChar === '+' ||
        lastChar === '-' ||
        lastChar === '×' ||
        lastChar === '÷')
    ) {
      this.resultDisplayed = false;
      this.input += value;
    } else {
      this.resultDisplayed = false;
      this.input = value;
    }
  }

  pressOperator(op: string) {
    const lastChar = this.input[this.input.length - 1];

    if (
      lastChar === '+' ||
      lastChar === '-' ||
      lastChar === '×' ||
      lastChar === '÷'
    ) {
      this.input = this.input.slice(0, -1) + op;
    } else if (this.input.length === 0) {
      return;
    } else {
      this.input += op;
    }
  }

  calculate() {
    let inputString = this.input;

    let numbers = inputString.split(/\+|\-|\×|\÷/g);
    let operators = inputString.replace(/[0-9]|\./g, '').split('');

    let divide = operators.indexOf('÷');
    while (divide !== -1) {
      numbers.splice(
        divide,
        2,
        (Number(numbers[divide]) / Number(numbers[divide + 1])).toString()
      );
      operators.splice(divide, 1);
      divide = operators.indexOf('÷');
    }

    let multiply = operators.indexOf('×');
    while (multiply !== -1) {
      numbers.splice(
        multiply,
        2,
        (Number(numbers[multiply]) * Number(numbers[multiply + 1])).toString()
      );
      operators.splice(multiply, 1);
      multiply = operators.indexOf('×');
    }

    let subtract = operators.indexOf('-');
    while (subtract !== -1) {
      numbers.splice(
        subtract,
        2,
        (Number(numbers[subtract]) - Number(numbers[subtract + 1])).toString()
      );
      operators.splice(subtract, 1);
      subtract = operators.indexOf('-');
    }

    let add = operators.indexOf('+');
    while (add !== -1) {
      numbers.splice(
        add,
        2,
        (Number(numbers[add]) + Number(numbers[add + 1])).toString()
      );
      operators.splice(add, 1);
      add = operators.indexOf('+');
    }

    this.input = numbers[0];
    this.resultDisplayed = true;
  }

  clearInput() {
    this.input = '';
    this.resultDisplayed = false;
  }

  CalcActive = false
  OpenCalc(){
  this.CalcActive = !this.CalcActive
  }



  // ======= change main photo ========

}










