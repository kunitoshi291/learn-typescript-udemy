export {};
// タプル型 -> 型の順序性の制約を持たせることができる
let profile: [string, number] = ['ham', 31];
// profile = [31, 'ham']
console.log(profile);
