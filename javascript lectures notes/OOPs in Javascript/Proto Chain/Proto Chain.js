 let a = {p: 20 ,q: 'asdasd' ,r: 'true'}

 console.log('1. ', a);

 let b = Object.create(a)
 
 let c = Object.create(b)

 console.log('2. ',b)  // empty string
 console.log('3. ',b.p) // Gives 10
 console.log('4. ',b.q) // Gives value of q

 console.log('5. ',b.__proto__) // Gives object a
 
 console.log('6. ',c.__proto__) // Empty String
 
 console.log('7. ',c.__proto__.__proto__) // Gives object a
 
 console.log('8. ',b.__proto__ == a) // true
 
 console.log('9. ',c.__proto__ == a) // false
 
 console.log('10. ',c.__proto__ == b) // true
 
 console.log('11. ',c.__proto__.__proto__ == b) // false
 
 console.log('12. ',c.__proto__.__proto__ == a) // true
 console.log()
 console.log('13. ',a.isPrototypeOf(b)) // true
 console.log()
 console.log('14. ',a.isPrototypeOf(c)) // true
 
let d = {k: 10}
console.log()
console.log('15. ', a.isPrototypeOf(d)) // false
console.log()
console.log('16. ',b.__proto__.p++) // 20
console.log();
console.log('17. ',a);

let x = "ASADDkjaneiw"
console.log()
console.log('18. ',x.__proto__) // empty string
console.log();
console.log('19. ',x.__proto__ == String.prototype); //true
console.log();
console.log('20. ',(true).__proto__ == Boolean.prototype); // true
console.log();
console.log('21. ',(10).__proto__ == Number.prototype); // true
console.log();
console.log('22. ',d); // Object d 
console.log();
console.log('23. ',d.__proto__); // object {}
console.log();
console.log('24. ',d.__proto__ == Object.prototype);  // true
console.log();
let e  = {l: 30}

console.log('25. ', e); // object e
console.log();
console.log('26. ',e.__proto__); // object{}
console.log();
console.log('27. ',e.__proto__.__proto__); //null
console.log();
let f = "Elon Musk"
console.log('28. ', f.__proto__); // empty string
console.log();
console.log('29. ',f.__proto__.__proto__); // object {}
console.log();
console.log('30. ', Object.prototype.isPrototypeOf(String.prototype)); // true
console.log();
console.log('31. ', Object.prototype.isPrototypeOf(Number.prototype)); // true
console.log();
console.log('32. ', Object.prototype.isPrototypeOf(Boolean.prototype)); // true
console.log();
console.log('33. ', Object.prototype.isPrototypeOf(Function.prototype)); // true
console.log();
console.log('34. ', Object.prototype.isPrototypeOf(undefined)); // false
console.log("              That's all about Proto Chain");