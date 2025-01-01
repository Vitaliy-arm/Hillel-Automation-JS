const car1 = {
    brand: "BMW",
    model: "M5",
    year: 2004
};

const car2 = {
    brand: "Audi",
    model: "A4",
    owner: "Duke"
};

const car3 = {...car1, ...car2};

console.log(car3);