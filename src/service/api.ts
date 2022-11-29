import axios from 'axios'
import { Order, OrderStatus } from '../types/Order'

export const api = axios.create({
  baseURL: 'http://192.168.15.12:3001/',
})

export async function getOrders() {
  const response = await api.get<Order[]>('/orders')
  const { data } = response

  return data
}

export async function updateOrderStatus(orderId: string, newStatus: OrderStatus) {
  const response = await api.patch(`/orders/${orderId}`, {
    status: newStatus
  })
  const { data } = response

  return data
}


export async function cancelOrder(orderId: string) {
  const response = await api.delete(`/orders/${orderId}`)
  const { data } = response

  return data
}
