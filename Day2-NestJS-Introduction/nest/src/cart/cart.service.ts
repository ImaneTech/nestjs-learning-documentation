import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

export type CartItem = {
    id: number;
    productName: string;
    quantity: number;
    pricePerUnit: number;
  };
@Injectable()
export class CartService {
     private cart: CartItem[] = [];

  findAll(): CartItem[] {
    return this.cart;
  }

  findOne(id: number): CartItem {
    const item = this.cart.find(item => item.id === id);
  if (!item) {
    throw new NotFoundException(`Item with ID ${id} not found`);
  }
  return item;
  }

  create(item: CartItem) {
    this.cart.push(item);
  }

  update(id: number, updatedItem: Partial<CartItem>) {
    const index = this.cart.findIndex(item => item.id === id);
    if (index > -1) {
      this.cart[index] = { ...this.cart[index], ...updatedItem };
    }
  }

  remove(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
  }
}
