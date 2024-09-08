
function addItem(inventory, item) {
    const existingItem = inventory.find(i => i.id === item.id);
    if (existingItem) {
        console.log(`Item with id ${item.id} already exists!`);
    } else {
        inventory.push(item);
    }
}

function updateItem(inventory, id, newDetails) {
    const item = inventory.find(i => i.id === id);
    if (item) {
        Object.assign(item, newDetails);
    }
}

function deleteItem(inventory, id) {
    const index = inventory.findIndex(i => i.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
}

function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

let inventory = [
  { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
  { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];

console.log("Initial Inventory:");
printInventory(inventory);

addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });
console.log("\nAdding item:");
printInventory(inventory);

updateItem(inventory, 2, { quantity: 30 });
console.log("\nUpdating item:");
printInventory(inventory);

deleteItem(inventory, 2);
console.log("\nDeleting item:");
printInventory(inventory);
