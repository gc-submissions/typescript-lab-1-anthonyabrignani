export interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Sekiro: Shadows Die Twice", price: 60 },
  { name: "Resident Evil Remake", price: 20 },
  { name: "Demon Souls", price: 70 },
  { name: "Silent Hill 2", price: 35 },
  { name: "ES5: Skyrim", price: 40 },
  { name: "Shogun 2: Total War", price: 30 },
  { name: "Subnautica", price: 30 },
  { name: "Death Stranding", price: 60 },
  { name: "Bloodborne", price: 20 },
  { name: "Divinity 2: Original Sin", price: 45 },
];

let noProducts: Product[] = [];

export function calcAverageProductPrice(array: Product[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < array.length; i++) {
    sum += array[i].price / array.length;
  }
  return sum;
}

console.log(calcAverageProductPrice(products));
console.log(calcAverageProductPrice(noProducts));
