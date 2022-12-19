export {};
let numbers: number[] = [1, 2, 3];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigenhairetsu: number[][] = [
    [50, 100],
    [150, 300],
];

// ユニオン型
let hairetsu: (string | number | boolean)[] = [1, false, 'JavaScript'];
// console.log(nijigenhairetsu);
console.log(hairetsu);

