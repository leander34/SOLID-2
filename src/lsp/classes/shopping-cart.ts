import { CartItem } from '../interfaces/cart-item'
import { OrderStatus } from '../interfaces/order-status'
import { Discount } from './discount'

export class ShoppingCart {
  private readonly _items: CartItem[] = []

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  get items(): Readonly<CartItem>[] {
    return this._items
  }

  total(): number {
    return Number(
      this._items.reduce((total, item) => total + item.price, 0).toFixed(2)
    )
  }

  totalWithDiscount(): number {
    return this.discount.claculate(this.total())
  }

  isEmpyt(): boolean {
    return this._items.length === 0
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo')
    this._items.length = 0
  }
}
