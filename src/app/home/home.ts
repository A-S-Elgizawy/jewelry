import { Component } from '@angular/core';
import { WishlistService } from '../service/wishlist-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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

constructor(private wishlistService: WishlistService) {}

addToWishlist(product: any) {
  this.wishlistService.addToWishlist(product);
}
}
