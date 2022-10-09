function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Adhe', 'Oscar', 'Ana', 'Ulises', 'Luthien']);

console.log(it.next().value);