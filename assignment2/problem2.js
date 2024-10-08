const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

const proDet = products.forEach((product) =>
  console.log(product.name, product.price)
);

const priceInc = products.forEach(
  (products) => (products.price = Math.round(products.price * 1.1))
);

console.log("\n");
const updDet = products.forEach((product) =>
  console.log(product.name, product.price)
);

const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log(categories);

console.log("\n");
const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log(electronics);

console.log("\n");
const expensiveProducts = products.filter((product) => product.price > 300);
console.log(expensiveProducts);
