import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { WishlistService } from '../service/wishlist-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { Keyboard } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Mousewheel } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectCoverflow, Keyboard, Mousewheel]);
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit , AfterViewInit , OnDestroy{

  ngOnInit(): void {
    this.swiper()
  }


  products = [
  {
    id: 1,
    name: 'Laptop',
    price: 15000,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Phone',
    price: 8000,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Headphones',
    price: 1200,
    image: 'https://via.placeholder.com/150'
  }
];

currentTheme: 'light' | 'dark' = 'light';
constructor(private wishlistService: WishlistService) {
    this.wishlistService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
}

addToWishlist(product: any) {
  this.wishlistService.addToWishlist(product);
}
// ==== change photo ====

// === swiper ===


swiper(){
         this.swiper1 = new Swiper(".swiper1", {
          spaceBetween:24,
          loop:true,
          grabCursor:true,
          navigation: {
          nextEl: ".swiper1-next",
          prevEl: ".swiper1-prev",
          },
      
          breakpoints: {
              // 40:{
              // slidesPerView: 2,
              // spaceBetween: 10,
              // },
              640: {
              slidesPerView: 2,
              spaceBetween: 10,
              },
              768: {
              slidesPerView: 3,
              spaceBetween: 15,
              },
              1000: {
              slidesPerView: 4,
              spaceBetween: 20,
              },
          },
      });

        this.swiper2 = new Swiper(".swiper2", {
          spaceBetween:24,
          loop:true,
          grabCursor:true,
          navigation: {
          nextEl: ".swiper2-next",
          prevEl: ".swiper2-prev",
          },
      
          breakpoints: {
              640: { 
              slidesPerView: 1,
              spaceBetween: 10,
              },
              768: {
              slidesPerView: 1,
              spaceBetween: 10,
              },
              1000: {
              slidesPerView: 2,
              spaceBetween: 10,
              },
          },
      });
}

// === autoSlide ===
swiper1!: Swiper;
swiper2!: Swiper;
private autoSlideInterval: any;
private restartTimeout: any;

ngAfterViewInit() {
  this.startAutoSlide();
}

ngOnDestroy() {
  clearInterval(this.autoSlideInterval);
  clearTimeout(this.restartTimeout);
}

startAutoSlide() {
  this.stopAutoSlide();

  this.autoSlideInterval = setInterval(() => {
    this.slidePrev();
    this.slidePrev2();
  }, 3000);
}

stopAutoSlide() {
  if (this.autoSlideInterval) {
    clearInterval(this.autoSlideInterval);
  }
}

pauseAndRestartAutoSlide() {
  this.stopAutoSlide();

  clearTimeout(this.restartTimeout);

  this.restartTimeout = setTimeout(() => {
    this.startAutoSlide();
  }, 6000);
}

slideNext() {
  this.swiper1?.slideNext();
  this.pauseAndRestartAutoSlide();
}

slidePrev() {
  this.swiper1?.slidePrev();
  this.pauseAndRestartAutoSlide();
}

slideNext2() {
  this.swiper2?.slideNext();
  this.pauseAndRestartAutoSlide();
}

slidePrev2() {
  this.swiper2?.slidePrev();
  this.pauseAndRestartAutoSlide();
}
}
