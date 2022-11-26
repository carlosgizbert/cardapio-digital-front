export type OrderStatus = 'WAITING' | 'IN_PRODUCTION' | 'DONE'

interface Product {
  _id: string
  quantity: number
  product: {
    name: string
    imagePath: string
    price: number
  }
}

export interface Order {
  _id: string
  table: string
  status: OrderStatus
  products: Product[]
}
