import { Product } from "./Products"

export interface CartItem extends Product {
  quantity: number
}

export interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  removeFromCart: (id: number) => void
  cartTotal: number
}