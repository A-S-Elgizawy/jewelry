import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  product: any;

  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 15000,
      description: 'High performance laptop',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      name: 'Phone',
      price: 8000,
      description: 'Smart phone with great camera',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 1200,
      description: 'Noise cancelling headphones',
      image: 'https://via.placeholder.com/300'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.products.find(p => p.id === id);
  }
}
