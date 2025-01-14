function areaDec(width, height) {
  return width * height;
}
console.log(`function declaration - ${areaDec(5, 7)}`);

let areaExp = function (width, height) {
  return width * height;
};
console.log(`function expression - ${areaExp(6, 3)}`);

let areaArrow = (width, height) => width * height;
console.log(`arrow function - ${areaArrow(7, 4)}`);
