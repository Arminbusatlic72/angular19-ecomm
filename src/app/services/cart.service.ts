import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  addToCart = (product: Product) => {
    this.cart.set([...this.cart(), product]);
  };

  removeFromCart = (product: Product) => {
    const currentCart = this.cart();
    const index = currentCart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCart = [...currentCart];
      newCart.splice(index, 1);
      this.cart.set(newCart);
    }
  };
  constructor() {}
}
