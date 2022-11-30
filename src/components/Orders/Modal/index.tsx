import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { formatCurrency } from '../../../utils/formatCurrency'
import { Order, OrderStatus } from '../../../types/Order'
import closeIcon from '../../../assets/images/close-icon.svg'

import { useCancelOrder, useUpdateOrderStatus } from '../../../service'

import * as S from './styles'

interface OrderModal {
  visible: boolean
  order: Order | null
  onClickClose: () => void
  onCancelOrderSuccess: () => void
  onChangeOrderStatus: () => void
}

export default function OrderModal({ order, visible, onClickClose, onCancelOrderSuccess, onChangeOrderStatus }: OrderModal) {
  if (!visible || !order) return null

  const { mutate: cancelOrder, isLoading: cancelOrderLoading } = useCancelOrder({
    onSuccess: () => {
      toast.success(`Pedido mesa ${order.table} foi cancelado.`)
      onCancelOrderSuccess()
    },
    onError: () => {
      toast.success('Erro ao tentar cancelar pedido.')
    }
  })

  const { mutate: updateOrderStatus, isLoading: updateOrderStatusLoading } = useUpdateOrderStatus({
    onSuccess: () => {
      toast.success(`Pedido mesa ${order.table} iniciou preparo.`)
      onChangeOrderStatus()
    },
    onError: () => {
      toast.success('Erro ao tentar iniciar preparo.')
    }
  })

  const getPriceTotal = order.products.reduce((acc, { product, quantity }) => {
    return acc += product.price * quantity
  }, 0)

  function handleUpdateOrderStatus() {
    const nextStep: OrderStatus =
      order?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE'

    updateOrderStatus({
      orderId: order!._id,
      status: nextStep
    })
  }

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') onClickClose()
    })
  }, [])

  return (
    <S.Overlay>
      <S.ModalBody>
        <S.ModalHeader>
          <strong>Mesa {order.table}</strong>
          <button onClick={onClickClose}>
            <img src={closeIcon} alt="Ícone de fechar" />
          </button>
        </S.ModalHeader>
        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Mesa esperando'}
              {order.status === 'IN_PRODUCTION' && 'Pedido na cozinha'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>
        <S.OrderDetails>
          <strong>Itens</strong>
          <S.Items>
            {order.products.map(({_id, product, quantity}) => {
              return (
                <S.Item key={`${_id}-${product.name}`}>
                  <S.Image src={`http://54.94.46.47:3000/uploads/${product.imagePath}`}
                  />
                  <small>{quantity}x</small>
                  <div>
                    <strong>{product.name}</strong>
                    <strong>{formatCurrency(product.price)}</strong>
                  </div>
                </S.Item>
              )
            }) }
          </S.Items>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(getPriceTotal)}</strong>
          </div>
        </S.OrderDetails>
        <S.Actions>
          <button
            className='primary'
            disabled={updateOrderStatusLoading}
            onClick={() => handleUpdateOrderStatus()}
          >
            <strong>
              {order.status === 'WAITING' && (<span>🧑‍🍳 Iniciar preparo</span>)}
              {order.status === 'IN_PRODUCTION' && (<span>✅ Concluir preparo</span>)}
              {order.status === 'DONE' && (<span>-</span>)}
            </strong>
          </button>
          <button
            className='secondary'
            onClick={() => cancelOrder(order._id)}
            disabled={cancelOrderLoading}
          >
            <strong>Cancelar pedido</strong>
          </button>
        </S.Actions>
      </S.ModalBody>
    </S.Overlay>
  )
}
