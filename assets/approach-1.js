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

let users_1 = [];
for (i = 0; i < users.length; i++) {
  let { id, name } = users[i];
  let usersArr = { usersId: id, usersName: name, order: [] };
  users_1.push(usersArr);
}
// console.log(users_1);

const orders_1 = [];
for (j = 0; j < orders.length; j++) {
  let { id, name, price } = orders[j];
  let ordersArr = { ordersId: id, productName: name, productPrice: price };
  orders_1.push(ordersArr);
}
// console.log(orders_1);

let result = [];
for (i = 0; i < users.length; i++)
  for (j = 0; j < orders.length; j++) {
    if (users[i].id === orders[j].customerId) {
      users_1[i].order = [orders_1[j]];
      // console.log("ln1000", users_1)
      result = [...users_1];
    }
  }
console.log(result);
