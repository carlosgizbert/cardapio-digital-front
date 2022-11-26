import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  gap: 1.5rem;

  padding: 1rem;
  border: 1px solid rgb(204, 204, 204, 0.4);
  border-radius: 1rem;
`

export const Header = styled.header`
  padding: 0.5rem;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .message-empty {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666666;
      font-size: 14px;
      font-weight: 400;
  }

  button {
    height: 128px;
    background-color: #fff;
    padding: 0.5rem;
    border: 1px solid rgb(204, 204, 204, 0.4);
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      color: #666666;
      font-size: 14px;
      font-weight: 400;
    }

    & + button {
      margin-top: 16px;
    }
  }
  `
