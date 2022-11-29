import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useGetOrders } from '../../service'
import socketIo from 'socket.io-client'
import { Order } from '../../types/Order'
import { Board } from './Board'

import * as S from './styles'

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([])

  const { data: getOrders, refetch: getOrdersRefetch } = useGetOrders()

  const waiting = orders.filter((order) => order.status === 'WAITING')
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION')
  const done = orders.filter((order) => order.status === 'DONE')

  useEffect(() => {
    const socket = socketIo('https://18.231.110.184:3001', {
      transports: ['websocket'],
    })
    socket.on('orders@new', () => {
      getOrdersRefetch()
      toast.warning('Novo pedido da mesa recebido.')
    })
  }, [])

  useEffect(() => {
    if (getOrders) setOrders(getOrders)
  }, [getOrders])

  return (
    <S.Wrapper>
      <Board
        title='Mesas esperando'
        icon='🕑'
        orders={waiting}
      />
      <Board
        title='Pedidos na cozinha'
        icon='👨‍🍳'
        orders={inProduction}
      />
      <Board
        title='Pronto!'
        icon='✅'
        orders={done}
      />
    </S.Wrapper>
  )
}
