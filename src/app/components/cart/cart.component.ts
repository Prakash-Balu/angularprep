import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  //Writable signal holding cart items
  cartItems = signal<Product[]>([
    { id: 1, name: 'Laptop', price: 1299.99, quantity: 1 },
    { id: 2, name: 'Mouse', price: 29.99, quantity: 2 },
    { id: 3, name: 'Keyboard', price: 79.99, quantity: 3 }
  ]);

  //computed() - auto updates when cartItems signal changes
  totalItems = computed(() =>
    this.cartItems().reduce((sum, p) => sum + p.quantity, 0)
  );

  totalPrice = computed(() => 
    this.cartItems().reduce((sum, p) => sum + p.price * p.quantity, 0)
  );

  discount = computed(() => 
    this.totalPrice() > 1000 ? this.totalPrice() * 0.1 : 0
  );

  finalPrice = computed(() => 
    this.totalPrice() -  this.discount()
  );

  updateQty(id: number, qty: number) {
    this.cartItems.update(items => 
      items.map(p => p.id  === id ? { ...p, quantity: Math.max(1, qty) } : p)
    );
  }

  removeItem(id: number) {
    this.cartItems.update(items => items.filter(p => p.id !== id));
  }
}
