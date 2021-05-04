import { Product } from "./products"

interface InventoryItem {
    product: Product[];
    quantity: number;
}

let inventory: InventoryItem[] = [
    {product: , quantity: 5 },
    {product: , quantity: 5 },
    {product: , quantity: 5 },
    {product: , quantity: 5 },
    {product: , quantity: 5 },
    {product: , quantity: 5 },
    {product: , quantity: 5 },
    {product: , quantity: 5 },
    {product: , quantity: 5 },
    {product: , quantity: 5 },
]

function calcInventoryValue(array: InventoryItem[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < array.length; i++) {
      sum += array[i].product.price * array[i].quantity;
    }
    return sum;
  }

console.log(inventory);