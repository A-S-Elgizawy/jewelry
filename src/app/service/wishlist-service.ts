import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {

  // ====== local storage =====
    wishlist: any[] = [];

  constructor() {
    // تحميل البيانات أول ما السيرفيس يشتغل
    const data = localStorage.getItem('wishlist');

    if (data) {
      this.wishlist = JSON.parse(data);
    }

    // ==== theme ===
    const saved = localStorage.getItem('theme') as 'light' | 'dark';
    if (saved) {
      this.theme.next(saved);
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


  // ====== theme ======
  private theme = new BehaviorSubject<'light' | 'dark'>('light');
  theme$ = this.theme.asObservable();

  toggleTheme() {
    const current = this.theme.value === 'light' ? 'dark' : 'light';
    this.theme.next(current);
    localStorage.setItem('theme', current);
  }
}
