// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);

}
function destructivelyPrependCat(name){
    return cats.unshift(name);

}
function destructivelyRemoveFirstCat(name){
    return cats.shift();

}
function destructivelyRemoveLastCat(name){
    return cats.pop();

}
function appendCat(name){
    const copycats=[...cats];
    copycats.push(name);
    return copycats;

}
function prependCat(name){
    const copycats = [...cats];
    copycats.unshift(name);
    return copycats;

}
function removeLastCat(name){
    const copycats = [...cats];
    copycats.pop();
    return copycats;

}
function removeFirstCat(name){
    const copycats = [...cats];
    copycats.shift();
    return copycats;

}