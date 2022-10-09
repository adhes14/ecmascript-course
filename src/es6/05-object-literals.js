// enhaced object literals
function newUser(user, age, country, uID) {
    return {
        user,
        age,
        country,
        id: uID
    }
}

console.log(newUser('adhes', 35, 'MX', 1));