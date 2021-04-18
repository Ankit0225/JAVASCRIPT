function Person (name, age) {
    this.name = name
    this.age = age
    return 12
}

let p = new Person('Ankit Maurya', 18)
let p2 = new Person('Antim Maurya', 16)
console.log('Value of p is ' + JSON.stringify(p))
console.log(p2)
