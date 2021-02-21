// function sayhello() {
//     console.log('Hello 😎')  OLD METHOD
    
// }
// sayhello();

(function () {
    console.log('Hello 😎')  // IIFEs METHOD
    
})();

(function () {
  var a = 20;
  var b = a / 5;
  console.log(a + b);  
})();
//  3
var a = 10;
if(true){
    console.log(a);
}
// Or
if(true){
var a = 10;
}
console.log(a);
//  4
if(true){
    (function () {
        var a= 10;
    })();
}
console.log(a);

//  5
function doMath() {
   
    console.log("3^4 = " + Math.pow(3,4));
    console.log("5^3 = " + Math.pow(5,3));
    console.log("root(3) = " + Math.sqrt(3));
    console.log("sin(9) = " + Math.sin(9));
}
doMath();
// 5 By IIFEs
console.log("By IIFEs");
(function (a,b,c,d) {
    a("3^4 = " + b(3,4));
    a("6^3 = " + b(6,3));
    a("root(3) = " + c(3));
    a("sin(9) = " + d(9));
    
})(console.log, Math.pow, Math.sqrt, Math.sin);

// 6 
for(var i=0;i<30;i++){
    setTimeout(function () {
        console.log(i);
    },100)
}
console.log("By IIFEs For Loop");
for(var i=1;i<=20;i++){
    (function (j) {
        setTimeout(function (){
            console.log(j);
        },100)  
    })(i);
}
    
            
        
// Simple Method for For loop
console.log("Simple Method For Loop");
for(let a=0;a<20;a++)
{
    setTimeout(function (){
        console.log(a);
    },100)
}
// Another Method for For loop 
console.log("Another Method for For loop");

for(var i=1;i<=10;i++){
    setTimeout(console.log, 100,i)
}











