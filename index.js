const storeName = 'Pretty Baby Store';
const storeType = 'Baby Store';
const product1 = 'Baby Food';
const product2 = 'Baby Clothes';
const product3 = 'Baby Toys';
const product4 = 'Baby Shoes';
const product5 = 'Baby Accessories';



const price1 =  15.99;
const price2 =  10.99; 
const price3 =  20.99;
const price4 =  5.99;
const price5 =  8.99;


const storeHours = "Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM, Sunday: Closed";

console.log(storeName, storeType);
console.log(product1, price1);
console.log(product2, price2);
console.log(product3, price3);
console.log(product4, price4);
console.log(product5, price5);
console.log(storeHours);

// Build arrays from the product and price variables
let products = [product1, product2, product3, product4, product5];
let prices = [price1, price2, price3, price4, price5];

console.log(`Welcome to ${storeName}! We are the best ${storeType} in town.`);
console.log("Here are the products we currently offer:");

// Display the initial product list
console.log("Products:", products);
console.log("Prices:", prices);
// Example of push: Add a new product to the store
products.push("baby clothes");
prices.push(5.99);
console.log("We've added a new product! Products:", products);
console.log("Updated Prices:", prices);

// Example of pop: Remove the last product from the store
products.pop();
prices.pop();
console.log("Unfortunately, Shampoo is out of stock. Products:", products);
console.log("Updated Prices:", prices);

console.log(`Thanks for visiting ${storeName}`);
console.log(`Here are our store hours for reference: ${storeHours}`);