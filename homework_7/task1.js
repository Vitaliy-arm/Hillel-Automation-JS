const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const num of numbers) {
    switch (true) {
        case num > 0:
            positiveCount++;
            break;
        case num < 0:
            negativeCount++;
            break;
        case num === 0:
            zeroCount++;
            break;
    }
}

console.log (`Positive - ${positiveCount}`);
console.log (`Negative - ${negativeCount}`);
console.log (`Zero - ${zeroCount}`);