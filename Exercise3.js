const item = {
  "name": "Biscuits",
  "type": "regular",
  "category": "food",
  "price": 2.0
}

const applyCoupon = category => discount => item => {
  if (item.category === category)
    item.price = item.price - discount * item.price;
  return item;
};

console.log(applyCoupon("food")(0.1)(item).price);
