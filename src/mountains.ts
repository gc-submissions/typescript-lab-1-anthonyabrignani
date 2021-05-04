export interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

let noMountains: Mountain[] = [];

export function findNameOfTallestMountain(mountains: Mountain[]): string {
  let tallest = mountains[2];
  mountains.forEach(function (mountain) {
    if (mountain.height > tallest.height) {
      tallest = mountain;
    }
  });
  return tallest.name;
}

console.log(findNameOfTallestMountain(mountains));
console.log(findNameOfTallestMountain(noMountains));
