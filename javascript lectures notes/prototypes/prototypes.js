
let str = 'Ankit Maurya'                            // 3 levels from null
let num = 2508                                      // 3 levels from null
let boolean = true                                  // 3 levels from null
let arr = [333,345,212,33]                          // 3 levels from null
let obj = {a:10,b: 'Sneaker'}                       // 2 levels from null
let fun = function (){ console.log('Hello!😊') }   // 3  levels from null

// If x and y are not primitiive
//  x and y : true <-- what does this mean ?
//  this means they are reference to the same object in memory

console.log('====== types ======')
console.log('typeof String',typeof String)
console.log('typeof Boolean',typeof Boolean)
console.log('typeof Object',typeof Object)
console.log('typeof Number',typeof Number)
console.log('typeof Array',typeof Array)
console.log('typeof Function',typeof Function)

console.log('====== proto chain  ======')
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(boolean.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)


// Everything indirectly inherits from same thing
// that obj is inherited from
// i.e in Javascript,
// everything is essentially an object 

console.log('====== prototypes ======')
console.log(obj.__proto__ == Object.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(str.__proto__ == String.prototype)
console.log(boolean.__proto__ == Boolean.prototype)
console.log(fun.__proto__ == Function.prototype)

// String.prototype inherits from Object.prototype

// typeof Object.create(Boolean.prototype) --> ??
// What does prototype mean in javascript?

// Ans It is a template or blueprint

console.log(str.charAt(5))
console.log(typeof str.charAt) // yeh function hai

let str2 = "Ankit Maurya"
console.log(str.charAt == str2.charAt) 

str.charAt = function () { return 'Y' } //does not make any difference 
                                        //  in str.charAt

String.prototype.charAt = function () { return 'Y' }
console.log(str.charAt(2))

// String.prototype contians all default string functions
// like charAt, indexOf, substring, slice etc

Array.prototype.joinOriginal = Array.prototype.join
Array.prototype.join = function (){
    console.log('join called on', this)
    return this.joinOriginal(...arguments)
}

/*
*Array.prototype
*{
*  ....
*  joinOriginal: function(){},
*  join: function () { our fun },
*  ....
* }
*/