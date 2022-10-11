class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
};

const adhes = new User('Adhemar', 10);
console.log(adhes.greeting());

const bebeloper = new User('Jeremias', 20);
console.log(bebeloper.greeting());

console.log(adhes.uAge);
console.log(adhes.uAge = 30);