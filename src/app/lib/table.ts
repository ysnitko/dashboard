export const DATA = [
  {
    id: 1,
    name: "Yuri",
    userStatus: "Blocked",
    paymentStatus: "Paid",
    amount: 200,
    view_more: "view more",
    email: "example@email.com",
  },
  {
    id: 2,
    name: "John",
    userStatus: "Active",
    paymentStatus: "Unsalaried",
    amount: 100,
    view_more: "view more",
    email: "John@email.com",
  },
  {
    id: 3,
    name: "Mike",
    userStatus: "Blocked",
    paymentStatus: "Overdue",
    amount: 150,
    view_more: "view more",
    email: "Mike@email.com",
  },
  {
    id: 4,
    name: "Nik",
    userStatus: "Blocked",
    paymentStatus: "Unsalaried",
    amount: 3000,
    view_more: "view more",
    email: "Nik@email.com",
  },
  {
    id: 5,
    name: "Nik",
    userStatus: "Active",
    paymentStatus: "Overdue",
    amount: 3000,
    view_more: "view more",
    email: "Nik@email.com",
  },
  {
    id: 6,
    name: "Nik",
    userStatus: "Active",
    paymentStatus: "Overdue",
    amount: 3000,
    view_more: "view more",
    email: "Nik@email.com",
  },
  {
    id: 7,
    name: "Nik",
    userStatus: "Active",
    paymentStatus: "Unsalaried",
    amount: 3000,
    view_more: "view more",
    email: "Nik@email.com",
  },
  {
    id: 8,
    name: "Nik",
    userStatus: "Active",
    paymentStatus: "Unsalaried",
    amount: 3000,
    view_more: "view more",
    email: "Nik@email.com",
  },
  {
    id: 9,
    name: "Nik",
    userStatus: "Active",
    paymentStatus: "Unsalaried",
    amount: 3000,
    view_more: "view more",
    email: "Nik@email.com",
  },
  {
    id: 10,
    name: "Nik",
    userStatus: "Active",
    paymentStatus: "Unsalaried",
    amount: 3000,
    view_more: "view more",
    email: "Nik@email.com",
  },
  {
    id: 11,
    name: "Nik",
    userStatus: "Active",
    paymentStatus: "Unsalaried",
    amount: 3000,
    view_more: "view more",
    email: "Nik@email.com",
  },
  {
    id: 12,
    name: "Nik",
    userStatus: "Active",
    paymentStatus: "Unsalaried",
    amount: 3000,
    view_more: "view more",
    email: "Nik@email.com",
  },
];

export const statusPayment = [
  { id: 1, name: "Paid" },
  { id: 2, name: "Unsalaried" },
  { id: 3, name: "Overdue" },
];

const stylesPaymentStyles = {
  paid: {
    textClr: "text-clr-paid-status",
    bgClr: "bg-bg-paid-status",
    src: "/assets/status-paid.svg",
  },
  unsalaried: {
    textClr: "text-clr-unsalaried-status",
    bgClr: "bg-bg-unsalaried-status",
    src: "/assets/status-unpaid.svg",
  },
  overdue: {
    textClr: "text-clr-overdue-status",
    bgClr: "bg-bg-overdue-status",
    src: "/assets/status-overdue.svg",
  },
};

export const textStatusPayment = (value: string) => {
  return value === "Paid"
    ? stylesPaymentStyles.paid.textClr
    : value === "Unsalaried"
    ? stylesPaymentStyles.unsalaried.textClr
    : value === "Overdue"
    ? stylesPaymentStyles.overdue.textClr
    : "";
};

export const bgStatusPayment = (value: string) => {
  return value === "Paid"
    ? stylesPaymentStyles.paid.bgClr
    : value === "Unsalaried"
    ? stylesPaymentStyles.unsalaried.bgClr
    : value === "Overdue"
    ? stylesPaymentStyles.overdue.bgClr
    : "";
};

export const srcStatusPayment = (value: string) => {
  return value === "Paid"
    ? stylesPaymentStyles.paid.src
    : value === "Unsalaried"
    ? stylesPaymentStyles.unsalaried.src
    : value === "Overdue"
    ? stylesPaymentStyles.overdue.src
    : "";
};
