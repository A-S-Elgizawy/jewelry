import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from '../chart/chart';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-gold',
  imports: [Chart],
  templateUrl: './gold.html',
  styleUrl: './gold.css',
})
export class Gold implements OnInit ,AfterViewInit{
  ngAfterViewInit(): void {
        AOS.init({
      duration: 1000,
      once: true
    });
    AOS.refresh();
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

}
