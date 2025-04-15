let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandom (arr) {
    let min = 0;
    let max = arr.length - 1;
    let generate = randomNumber(min, max);
    return arr[generate];
}
window.onload = function() {
    document.querySelector('#excuse').innerHTML = getRandom(who) + " " +  getRandom(action) + " " + getRandom(what) + " " +  getRandom(when);
  };