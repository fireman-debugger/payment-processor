// types.ts
import { PaymentMethod, TransactionStatus } from './enum';

export type Transaction = {
  id: string;
  amount: number;
  paymentMethod: PaymentMethod;
  status: TransactionStatus;
  createdAt: Date;
};

export type PaymentMethod = 'credit_card' | 'bank_transfer' | 'paypal';

export type TransactionStatus = 'pending' | 'success' | 'failed';