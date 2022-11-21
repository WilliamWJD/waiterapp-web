import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0,0,0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  padding: 32px;
  border-radius: 8px;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 24px;
    }

    button{
      border:0;
      background: transparent;
      display: flex;
    }
  }

  .status-container{
    margin-top: 32px;

    small{
      font-size: 14px;
      opacity: 0.8;
    }

    div{
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong{
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }
`;
