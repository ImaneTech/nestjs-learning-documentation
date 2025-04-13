
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CartService, CartItem } from './cart.service';

@Controller('cart')
export class CartController {

    constructor(private readonly cartService: CartService) {}

  @Get()
  getAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @Post()
  create(@Body() item: CartItem) {
    this.cartService.create(item);
    return { message: 'Item added to cart' };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() item: Partial<CartItem>) {
    this.cartService.update(+id, item);
    return { message: 'Item updated' };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.cartService.remove(+id);
    return { message: 'Item removed' };
  }
}
