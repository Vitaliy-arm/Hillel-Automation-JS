let person = {
    firstName: "Keyt",
    lastName: "Jonson",
    age: 25
}

person.email = "test@mail.com";
delete person.age;

console.log(person);