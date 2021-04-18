function Person (name, age) {
    this.name = name
    this.age = age  
}
Person.prototype.isAdult = function () {return this.age >= 17}
Person.prototype.city = "Mumnbai"

let p2 = new Person('Antim Maurya', 16)
let p = new Person('Ankit Maurya', 18)

console.log(p.isAdult()); // true
console.log();
console.log(p2.isAdult()); // false
console.log();
console.log(p.isAdult == p2.isAdult); // false

// 2 

"assdaasd".substr(4)
