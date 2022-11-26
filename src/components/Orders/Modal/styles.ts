import styled from 'styled-components'

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(1px);
  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 24px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 40px;

    background-color: transparent;

    border: 0;
    padding: 0;
  }
`

export const ModalBody = styled.div`
  background-color: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  .status-container {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    span {
      margin-right: 6px;
    }
  }
`

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .total {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
  }
`

export const Items = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Item = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`


export const Image = styled.div<{ src: string }>`
  height: 64px;
  width: 64px;
  background-image: ${({ src }) => `url(${src})`};

  background-position: center center;
  background-size: cover;
  border-radius: 6px;
`

export const Actions = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .primary {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background-color: #333;
    border-radius: 48px;
    color: #fff;
    padding: 12px 24px;
  }

  .secondary {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: #D73035;

    background-color: #fff;
    border: 0;
    padding: 12px 24px;
  }
`
