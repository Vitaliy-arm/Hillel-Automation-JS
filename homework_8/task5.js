const users = [
    {name: "Nikolas", email: "test@mail.com", age: 34},
    {name: "Robbie", email: "robbie@mail.com", age: 25},
    {name: "Joan", email: "joan@mail.com", age: 31},
    {name: "Ted", email: "ted@mail.com", age: 28},
]

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}