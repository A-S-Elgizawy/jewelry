import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import AOS from 'aos';
import Swiper from 'swiper';
import { Keyboard } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Mousewheel } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectCoverflow, Keyboard, Mousewheel]);
@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit , AfterViewInit{
  ngAfterViewInit(): void {
        AOS.init({
      duration: 1000,
      once: true
    });
    AOS.refresh();
  }
  
  location = {
    lat: 30.824252,
    lng: 30.814078
  };

  mapUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${this.location.lat},${this.location.lng}&output=embed`
    );
    this.swiper()
        AOS.init({
        duration: 1000,
        once: true
      });
  }

  // =====
  Isopened = false
  openMap(){
   this.Isopened = !this.Isopened
  }
  toggle = false
  toggleSwiper(){
    this.toggle = !this.toggle
  }
  // === swiper ===
swiper(){
        var swipercatigories = new Swiper(".swiper", {
          spaceBetween:24,
          loop:true,
          grabCursor:true,
          navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          },
      
          breakpoints: {
              // 40: {
              // slidesPerView: 2,
              // spaceBetween: 10,
              // },
              640: {
              slidesPerView: 2,
              spaceBetween: 10,
              },
              768: {
              slidesPerView: 2,
              spaceBetween: 15,
              },
              1000: {
              slidesPerView: 3,
              spaceBetween: 20,
              },
          },
      });
}
}
