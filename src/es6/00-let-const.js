var lastName = 'Adhemar';
lastName = 'Luthien';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // function scope, it can be accesed along the function
        let fruit2 = 'Kiwi'; // block scope, only it can be accesed inside the block
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();