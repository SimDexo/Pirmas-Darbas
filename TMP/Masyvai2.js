let a = ['A', 'B', '1', 1, 2, 'Stasys', '', [], null];

for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
        console.log(a[i]);
    if (a > c && b < d ) {
        x = Math.max(a, c)
        y = Math.min(b, d)
        console.log('Yra sankirta intervale'. x = ' + x + ', y = ' + y + ', [' + x + ';' + y + ']'');
    } else if (a === d) {
    y = a;
    y = d;
    console.log('Yra sankirta taske. y = ' + y + ', [' + y + ']');
    } else if (a < d && c < a) {
        x = a;
        y = d;
        console.log('Yra sankirta intervale. x = ' + x + ' y = ' + y + ', [' + x + ';' + y + '}');
    }
}

    //Atvirai tariant: Nezinau kaip pradet, pratempt, ir uzbaigt.

let interval = 3;

for (let i = 0; i < a.length; i++) {
    if (i % interval === 0) {
        console.log(a[i]);
    }
}

let b = a.filter(element => {
    return typeof element === 'number';
});
console.log(b);

let strings = a.filter(element => {
    return typeof element === 'string';
});

let combinedString = strings.join('');

console.log(combinedString);
