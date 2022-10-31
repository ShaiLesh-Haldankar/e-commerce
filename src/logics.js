

// 1. Find a product from the list
let productList = [
  { id: 1, name: "Iphone 11" },
  { id: 2, name: "Iphone 12" },
  { id: 3, name: "Iphone 13" },
  { id: 4, name: "Iphone 14" },
  { id: 5, name: "Iphone 15" },
];

// Suppose we he need to find Iphone 12, and we have it's ID which is 2

let result = null;
let needToFind = 2;

// Solution 1

result = productList.find((product) => {
  return product.id === needToFind;
});
//This will return whole object if found. Undefined otherwise
console.log("result 1", result);
// Solution 2
result = productList.filter((product) => {
  return product.id === needToFind;
});
console.log("result 2", result);
//If the object is present it will return [{}] otherwise []

// 2. Find total amount from the items added in cart
let cartData = [
  { id: 1, name: "Iphone 11", price: 65000 },
  { id: 2, name: "Iphone 12", price: 75000 },
  { id: 3, name: "Iphone 13", price: 95000 },
  { id: 4, name: "Iphone 14", price: 105000 },
];

let totalSum = 0; //Variable to store total sum data

// You can use, for, forEach or for loop.
cartData.map((cart) => {
  totalSum = totalSum + cart.price;
});

console.log("total sum", totalSum);

// 3.
let data = [
  { brand: "Samsung", phones: [1, 2, 3, 4] },
  { brand: "Redmi", phones: [5, 6, 7, 8] },
  { brand: "Google", phones: [10, 13, 14] },
];
//From the given data we need to check if PHONE with ID "7" is present in the above data of not.
let found = false;
data.map((brand) => {
  // this map is for iterating brands
  //for every iteration we will have object in this form , {brand: "", phones: []}

  //As we can see phones is array. So we can iterate over phones to find if 7 is there or not
  brand.phones.map((phone) => {
    if (phone == 7) found = true;
  });
});

console.log("Found", found);

// 4. Same Problem as above but, phone is object now and not and number
let data = [
  { brand: "Samsung", phones: [{ id: 1 }, { id: 2 }, { id: 3 }] },
  { brand: "Redmi", phones: [{ id: 4 }, { id: 5 }] },
  { brand: "Google", phones: [{ id: 6 }, { id: 7 }] },
];

let foundTwo = false;
data.map((brand) => {
  // this map is for iterating brands
  //for every iteration we will have object in this form , {brand: "", phones: []}

  //As we can see phones is array. So we can iterate over phones to find if 7 is there or not
  brand.phones.map((phone) => {
    if (phone.id == 7) foundTwo = true;
  });
});
console.log("Found", foundTwo);