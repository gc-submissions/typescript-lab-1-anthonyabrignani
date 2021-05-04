import { Product } from "./products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "Sekiro: Shadows Die Twice", price: 60 }, quantity: 5 },
  { product: { name: "Resident Evil Remake", price: 20 }, quantity: 9 },
  { product: { name: "Demon Souls", price: 70 }, quantity: 2 },
  { product: { name: "Silent Hill 2", price: 35 }, quantity: 1 },
  { product: { name: "ES5: Skyrim", price: 40 }, quantity: 12 },
  { product: { name: "Shogun 2: Total War", price: 30 }, quantity: 3 },
  { product: { name: "Subnautica", price: 30 }, quantity: 8 },
  { product: { name: "Death Stranding", price: 60 }, quantity: 7 },
  { product: { name: "Bloodborne", price: 20 }, quantity: 11 },
  { product: { name: "Divinity 2: Original Sin", price: 45 }, quantity: 6 },
];

let noInventory: InventoryItem[] = [];

export function calcInventoryValue(array: InventoryItem[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < array.length; i++) {
    sum += array[i].product.price * array[i].quantity;
  }
  return sum;
}

console.log(calcInventoryValue(inventory));
console.log(calcInventoryValue(noInventory));
