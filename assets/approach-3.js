/******** by Array.reduce method *******/
const users = [
  {
    id: 123,
    name: "Sagar",
    city: "Indore",
  },
  {
    id: 124,
    name: "Arun",
    city: "Morena",
  },
  {
    id: 125,
    name: "Nikhil",
    city: "Dhule",
  },
];

const orders = [
  {
    id: 1234,
    name: "iPhone 13 Pro Max",
    price: "123000",
    customerId: 123,
  },
  {
    id: 1235,
    name: "Apple iWatch",
    price: "49000",
    customerId: 124,
  },
];

const result = [
  {
    userId: 123,
    userName: "Sagar",
    orders: [
      {
        orderId: 1234,
        productName: "iPhone 13 Pro Max",
        productPrice: "123000",
      },
    ],
  },
  {
    userId: 124,
    userName: "Arun",
    orders: [
      {
        orderId: 1235,
        productName: "Apple iWatch",
        productPrice: "49000",
      },
    ],
  },
  {
    userId: 125,
    userName: "Nikhil",
    orders: [],
  },
];

const result_1 = [];
