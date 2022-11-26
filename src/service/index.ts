import { AxiosError } from 'axios'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { OrderStatus } from '../types/Order'
import { cancelOrder, getOrders, updateOrderStatus } from './api'

const QUERIES_CONFIG = {
  staleTime: 120000,
  refetchOnWindowFocus: true,
  refetchOnReconnect: true,
  retry: 1,
  retryDelay: 1000,
}

interface IHandleReturn {
  onSuccess?: (status?: number) => void
  onError?: (status?: number) => void
}

export function useGetOrders() {
  return useQuery(['getOrders'], () => getOrders(), {
    ...QUERIES_CONFIG,
  })
}

interface UseUpdateOrderStatus {
  orderId: string
  status: OrderStatus
}

export function useUpdateOrderStatus({ onSuccess, onError }: IHandleReturn) {
  const queryClient = useQueryClient()

  return useMutation(['updateOrderStatus'], ({ orderId, status }: UseUpdateOrderStatus) => updateOrderStatus(orderId, status), {
    onSuccess: () => {
      if (onSuccess) onSuccess()
      queryClient.invalidateQueries({ queryKey: ['getOrders'] })
    },
    onError: (error: AxiosError) => {
      if (onError) onError(error.response?.status)
    },
  })
}

export function useCancelOrder({ onSuccess, onError }: IHandleReturn) {
  const queryClient = useQueryClient()

  return useMutation(['cancelOrder'], (orderId: string) => cancelOrder(orderId), {
    onSuccess: () => {
      if (onSuccess) onSuccess()
      queryClient.invalidateQueries({ queryKey: ['getOrders'] })
    },
    onError: (error: AxiosError) => {
      if (onError) onError(error.response?.status)
    },
  })
}
