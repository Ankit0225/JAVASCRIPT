 class person {
     constructor(name,age) {
         this.name = name
         this.age = age
     }

     isAdult() {
         return this.age > 19
     }
 }
 let p1 = new person('Ankit Maurya',18)
 let p2 = new person('Antim Maurya',17)
 let p3 = new person('Ankita Maurya',21)

 console.log(typeof person) // function; there is no new datatypes called 'class'
 console.log(p1.__proto__ == person.prototype) // true
 console.log(p1.__proto__.__proto__ == Object.prototype) //true

 class student extends person {
     constructor(name, age, grade){
         super(name, age)
         this.grade = grade
     }
 }

 let s1 = new student ('Harry Potter',13,5)
 let s2 = new student ('Hermoine Gtanger',14,6)
 
console.log(s1.__proto__ == student.prototype)
console.log(s1.__proto__.__proto__ == person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)

// inheritance chain
// Object.prototype --> person.prototype --> student.prototype

// no inheritance between the classes (actually they are functions)
// object -x --> person -x --> student