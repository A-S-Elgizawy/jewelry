import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import { Keyboard } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { EffectFade  } from 'swiper/modules';
import { Mousewheel } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectCoverflow, Keyboard, Mousewheel,EffectFade]);
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit ,AfterViewInit{
    ngAfterViewInit(): void {
          AOS.init({
        duration: 1000,
        once: true
      });
      AOS.refresh();
    }
ngOnInit(): void {
  this.swiper()
    AOS.init({
    duration: 1000,
    once: true
  });
}
  // === swiper ===
swiper(){
      //   var swipercatigories = new Swiper(".swiper", {
      //     spaceBetween:24,
      //     loop:true,
      //     grabCursor:true,
      //     navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //     },
      //       pagination: {
      //       el: ".swiper-pagination",
      //       clickable: true
      //     },
      
      //     breakpoints: {
      //         640: {
      //         slidesPerView: 3,
      //         spaceBetween: 10,
      //         },
      //         768: {
      //         slidesPerView: 4,
      //         spaceBetween: 15,
      //         },
      //         1000: {
      //         slidesPerView: 4,
      //         spaceBetween: 20,
      //         },
      //     },
      // });

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}

}
