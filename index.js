// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    const allCats = cats.push(name);
    return allCats;
}

function destructivelyPrependCat(name) {
    const allCats = cats.unshift(name);
    return allCats;
}

function destructivelyRemoveLastCat() {
    const lastCat = cats.pop();
    return lastCat;
}

function destructivelyRemoveFirstCat() {
    const firstCat = cats.shift();
    return firstCat;
}

function appendCat(name) {
    const copyCats = [...cats, name];
    return copyCats;
}

function prependCat(name) {
    const copyCats = [name, ...cats];
    return copyCats;
}

function removeLastCat() {
    const copyCats = cats.slice(0, -1);
    return copyCats;
}

function removeFirstCat() {
    const copyCats = cats.slice(1);
    return copyCats;
}


