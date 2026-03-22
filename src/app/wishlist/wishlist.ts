import { Component } from '@angular/core';
import { WishlistService } from '../service/wishlist-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  wishlist: any[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlist = this.wishlistService.getWishlist();
  }

  remove(id: number) {
    this.wishlistService.removeFromWishlist(id);
    this.wishlist = this.wishlistService.getWishlist();
  }
}
