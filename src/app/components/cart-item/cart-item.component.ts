import { Component, input, inject } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { CardButtonComponent } from '../card-button/card-button.component';
@Component({
  selector: 'app-cart-item',
  imports: [CardButtonComponent],
  template: `
    <div class="flex gap-4 justify-between border-b py-4">
      <div class="flex gap-4 items-center">
        <img
          [src]="product().image"
          class="w-[100px] h-[50px] object-contain"
        />
        <div class="flex flex-col gap-4">
          <span class="font-bold">{{ product().title }}</span>
          <div class="flex gap-4">
            <span>EUR</span> <span>{{ product().price }}</span>
          </div>
        </div>
      </div>
      <app-card-button
        label="Remove"
        (btnClicked)="cartService.removeFromCart(product())"
      />
    </div>
  `,
  styles: ``,
})
export class CartItemComponent {
  product = input.required<Product>();
  cartService = inject(CartService);
}
