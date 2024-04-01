export const statusPayment = [
  { id: 1, name: 'Paid' },
  { id: 2, name: 'Unsalaried' },
  { id: 3, name: 'Overdue' },
];

const stylesPaymentStyles = {
  paid: {
    textClr: 'text-clr-paid-status',
    bgClr: 'bg-bg-paid-status',
    src: '/assets/status-paid.svg',
  },
  unsalaried: {
    textClr: 'text-clr-unsalaried-status',
    bgClr: 'bg-bg-unsalaried-status',
    src: '/assets/status-unpaid.svg',
  },
  overdue: {
    textClr: 'text-clr-overdue-status',
    bgClr: 'bg-bg-overdue-status',
    src: '/assets/status-overdue.svg',
  },
};

export const textStatusPayment = (value: string) => {
  return value === 'Paid'
    ? stylesPaymentStyles.paid.textClr
    : value === 'Unsalaried'
    ? stylesPaymentStyles.unsalaried.textClr
    : value === 'Overdue'
    ? stylesPaymentStyles.overdue.textClr
    : '';
};

export const bgStatusPayment = (value: string) => {
  return value === 'Paid'
    ? stylesPaymentStyles.paid.bgClr
    : value === 'Unsalaried'
    ? stylesPaymentStyles.unsalaried.bgClr
    : value === 'Overdue'
    ? stylesPaymentStyles.overdue.bgClr
    : '';
};

export const srcStatusPayment = (value: string) => {
  return value === 'Paid'
    ? stylesPaymentStyles.paid.src
    : value === 'Unsalaried'
    ? stylesPaymentStyles.unsalaried.src
    : value === 'Overdue'
    ? stylesPaymentStyles.overdue.src
    : '';
};
