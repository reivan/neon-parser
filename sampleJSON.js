const sampleJSON = {
  name: "John Smith",
  sku: "20223",
  price: 23.95,
  shipTo: {
    name: "Jane Smith",
    address: "123 Maple Street",
    city: "Pretendville",
    state: "NY",
    zip: "12345"
  },
  billTo: {
    name: "John Smith",
    address: "123 Maple Street",
    city: "Pretendville",
    state: "NY",
    zip: "12345"
  },
  items: [1, 2, 3, 4, 5]
};

module.exports = sampleJSON;
