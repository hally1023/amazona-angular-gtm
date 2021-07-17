import { ShippingAddress } from './shipping-address.model';

export interface Order {
  shippingAddress: ShippingAddress;
  paymentResult: PaymentResult;
  isPaid: boolean;
  isDelivered: boolean;
  isRefunded: boolean;
  _id: string;
  orderItems: OrderItem[];
  paymentMethod: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  user: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
  paidAt: string;
  deliveredAt?: string;
  refundedAt?: string;
}

interface User {
  _id: string;
  name: string;
}

interface OrderItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  product: string;
  qty: number;
}

interface PaymentResult {
  id: string;
  status: string;
  update_time: string;
  email_address?: any;
}
