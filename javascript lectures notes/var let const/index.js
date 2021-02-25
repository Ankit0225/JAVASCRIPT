var a;
a=11;
a++;
console.log('a = ' + a);

console.log('');
let b =20;
b++;
console.log("b = " + b);

const obj ={
    a1: 'ankit',
    a2: 10,
    a3: true
};
obj.a4 =12345;
console.log('');  // just for space b/w two output & timepass
console.log(obj.a4)

delete obj.a1;
console.log('');
console.log(obj.a1);

const arr = [1,2,3,4];

arr.push(88);
console.log(arr);

// const x = [1];
// x = 1,212,21;
// console.log(x);

var myvar = 10;
function alpha(){
    var myvar = 12;
    if (true){
        var myvar = 31;
        var myvar = 18;
        console.log(myvar);
    }
    console.log(myvar);
}
alpha();
console.log('');

let mylet = 10;            
function beta(){
    let mylet = 12;
    if (true){
        let mylet = 31;
        console.log(mylet);
    }
    console.log(mylet);
}
beta();


console.log('');

const myconst = 10;            
function gamma(){
    const myconst = 12;
    if (true){
        const myconst = 31;
        if(true){
            const myconst = 51;
           
            console.log(myconst); // line 65
        }
        console.log(myconst);  //line 63
    }
    console.log(myconst);   // line 61
}
gamma();

// let and const have block scope
// var has entire scope hence it prints the latest value