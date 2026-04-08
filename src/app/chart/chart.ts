import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.html',
  styleUrl: './chart.css'
})
export class Chart implements AfterViewInit {
  @ViewChild('widgetContainer', { static: true })
  widgetContainer!: ElementRef;

  ngAfterViewInit(): void {
    const script = document.createElement('script');

    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';

    script.type = 'text/javascript';
    script.async = true;

    script.innerHTML = JSON.stringify({
      lineWidth: 2,
      chartType: 'area',
      colorTheme: 'light',
      autosize: true,
      width: '100%',
      height: 400,
      symbols: ['Gold']
      
    });

    this.widgetContainer.nativeElement.appendChild(script);
  }

}