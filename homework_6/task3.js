function Divide(numerator, denominator) {
    // Проверка на числовые значения
    if (denominator === 0) {
        throw new Error ('You can\'t divide by zero');
    } else if (typeof numerator !== 'number' || typeof denominator !== 'number' || isNaN(numerator) || isNaN(denominator)) {
        throw new Error('The value is not a number');
    } else {
        let result = numerator / denominator;
        console.log(result);
    }
}

try {
    Divide(50, 0);

} catch (error){
    console.error('Something is wrong...', error.message);
}