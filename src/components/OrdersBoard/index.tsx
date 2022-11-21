import { useState } from 'react';
import { IOrder } from '../../types/IOrder';
import { OrderModal } from '../OrderModal';
import { Container, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders?: IOrder[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [orderSelected, setOrderSelected] = useState<IOrder>({} as IOrder);

  function handleOpenOrder(order: IOrder) {
    setOrderSelected(order);
    setIsModalVisible(true);
  }

  return (
    <Container>
      <OrderModal visible={isModalVisible} order={orderSelected} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders ? orders.length : 0})</span>
      </header>

      {orders && (
        <OrdersContainer>
          {orders?.map(order => (
            <button type='button' key={order._id} onClick={() => handleOpenOrder(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} Itens</span>
            </button>
          ))}
        </OrdersContainer>

      )}

    </Container>
  );
}
