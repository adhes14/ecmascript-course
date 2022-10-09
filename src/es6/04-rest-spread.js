//arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

//Objec destructuring
let user = {
    username: 'Adhemar',
    age: 35
};
let { username, age } = user;
console.log(username, age);

//spread operator
let person = {
    name: 'Adhemar',
    age: 26
};
let country = 'MX';
let data = { id: 1, ...person, country};
console.log(data);

//rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 3, 5, 6, 8);