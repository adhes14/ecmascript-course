const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, banaba, kiwi, tx, adfa Apple , afkjetl';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}