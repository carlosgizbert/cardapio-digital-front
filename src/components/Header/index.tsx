import logo from '../../assets/images/logo.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.Wrapper>
      <S.Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>
        <img src={logo} alt="Garçons" />
      </S.Content>
    </S.Wrapper>
  )
}
