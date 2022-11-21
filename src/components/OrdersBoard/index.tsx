import { IOrder } from '../../types/IOrder';
import { Container, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders?: IOrder[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {

  return (
    <Container>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders ? orders.length : 0})</span>
      </header>

      {orders && (
        <OrdersContainer>
          {orders?.map(order => (
            <button type='button' key={order._id}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} Itens</span>
            </button>
          ))}
        </OrdersContainer>

      )}

    </Container>
  );
}
