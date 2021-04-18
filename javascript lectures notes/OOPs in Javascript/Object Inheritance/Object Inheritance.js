let y = {p: 100, q: 'John is killing himself', r: false, s: true}

let z = Object.create(y)
let c = Object.create(z)

console.log(y);
console.log(z);
console.log(z.q);
console.log(c.q);

z.q = 'Harry Clears his exam'
console.log(z)
console.log(c.q)
