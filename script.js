let numbers = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(numbers, 'Sonlar');

let jufti = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        jufti.push(numbers[i]);
    }
}

console.log(jufti, 'Juft sonlar');