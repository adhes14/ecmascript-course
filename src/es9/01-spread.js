const user = {
    username: 'adhes',
    age: 40,
    country: 'BO'
};

const { username, ...values} = user;

console.log(username);
console.log(values);