import { useEffect, useState } from 'react';

import { Container } from './styles';

import { OrdersBoard } from '../OrdersBoard';
import { api } from '../../services/api';
import { IOrder } from '../../types/IOrder';

export function Orders() {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/orders');
      console.log(response.data);
      setOrders(response.data);
    }
    loadOrders();
  }, []);

  return (
    <Container>
      <OrdersBoard
        icon='🕒'
        title='Fila de espera'
        orders={orders.filter(order => order.status === 'WAITING')}
      />
      <OrdersBoard
        icon='👨‍🍳'
        title='Em preparação'
      />
      <OrdersBoard
        icon='✅'
        title='Pronto'
        orders={orders.filter(order => order.status === 'IN_PRODUCTION')}
      />
    </Container>
  );
}
