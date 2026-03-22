import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  //   wishlist: any[] = [];

  // addToWishlist(product: any) {
  //   const exists = this.wishlist.find(p => p.id === product.id);

  //   if (!exists) {
  //     this.wishlist.push(product);
  //   }
  // }

  // getWishlist() {
  //   return this.wishlist;
  // }

  // removeFromWishlist(id: number) {
  //   this.wishlist = this.wishlist.filter(p => p.id !== id);
  // }

  // ====== local storage =====
    wishlist: any[] = [];

  constructor() {
    // تحميل البيانات أول ما السيرفيس يشتغل
    const data = localStorage.getItem('wishlist');

    if (data) {
      this.wishlist = JSON.parse(data);
    }
  }

  addToWishlist(product: any) {
    const exists = this.wishlist.find(p => p.id === product.id);

    if (!exists) {
      this.wishlist.push(product);
      this.saveToLocalStorage();
    }
  }

  getWishlist() {
    return this.wishlist;
  }

  removeFromWishlist(id: number) {
    this.wishlist = this.wishlist.filter(p => p.id !== id);
    this.saveToLocalStorage();
  }

  // حفظ البيانات
  private saveToLocalStorage() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }
}
