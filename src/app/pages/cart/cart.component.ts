import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { OrderSummaryComponent } from '../../components/order-summary/order-summary.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold">Cart</h2>
      @if (cartService.cart().length === 0) {
      <div class="text-center py-8 text-gray-500">Your cart is empty</div>
      } @for (item of cartService.cart(); track item.id) {
      <app-cart-item [product]="item" />
      }
      <app-order-summary />
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);
}
