// types.ts
export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  BANK_TRANSFER = 'bank_transfer',
  CASH = 'cash',
}

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

export type Payment = {
  amount: number;
  currency: Currency;
  method: PaymentMethod;
  metadata?: { [key: string]: string };
};