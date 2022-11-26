import { useState } from 'react'
import { Order } from '../../../types/Order'
import OrderModal from '../Modal'

import * as S from './styles'

interface Board {
  icon: string
  title: string
  orders?: Order[]
 }

export function Board({ icon, title, orders }: Board) {
  const [showOrderModal, setShowOrderModal] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null)

  function handleOpenModal(order: Order) {
    setSelectedOrder(order)
    setShowOrderModal(true)
  }

  return (
    <S.Wrapper>
      <OrderModal
        order={selectedOrder}
        visible={showOrderModal}
        onClickClose={() => setShowOrderModal(false)}
        onCancelOrderSuccess={() => setShowOrderModal(false)}
        onChangeOrderStatus={() => setShowOrderModal(false)}
      />
      <S.Header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders?.length || '0'})</span>
      </S.Header>
      <S.OrdersContainer>
        {orders?.length ? orders.map((order) => {
          return (
            <button key={order._id} type="button" onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          )
        }) : (
          <span className='message-empty'>Nenhum pedido nessa etapa.</span>
        )}
      </S.OrdersContainer>
    </S.Wrapper>
  )
}
