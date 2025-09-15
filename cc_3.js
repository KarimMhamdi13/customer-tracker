const customers = [
  { name: "Alice Anderson", email: "Alicea@gmail.com", purchases: ["Laptop", "Power Cord"] },
  { name: "Billy Bob", email: "BillyBob@yahoo.com", purchases: ["Vacuum", "Frying Pan"] },
  { name: "Candace Clark", email: "CClark@nintendo.com", purchases: ["Soldering Iron", "Monster Energy"] },
];

const newCostumer = { name: "Dean David", email: "DoubleD@gmail.com", purchases: ["Smartphone", "Phone Case"] };
customers.push(newCostumer);

customers.shift();

customers[0].email = "billy.bob97@google.com";

customers[1].purchases.push("Bluetooth Speaker");

customers.forEach((customers) => {
  console.log(
    `Name: ${customers.name}, E-mail: ${customers.email}, Total Purchases: ${customers.purchases.length}`
  );
});
