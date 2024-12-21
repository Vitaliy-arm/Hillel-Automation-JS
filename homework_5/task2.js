function ageCheck (age) {
   let adult = age >= 18 ? 'the person is an adult' : 'the person is NOT an adult';
   return adult;
};

console.log (ageCheck(25));
console.log (ageCheck(15));