class Person {
    constructor(name , age) {
        this.name = name 
        this.age = age 
    }
}

class Student extends Person {
    constructor(name , age , school){
        super(name , age)
        this.school = school
    }
}

let p = new Person('Zayn Malik', 28)
let s = new Student('Harry Potter', 16, 'Hogwarts University')
console.log(p);
console.log(s);
