// setTimeout
function sayhello() {
 console.log("Hello 😉")    
}
console.log("Thanktyou for waiting ... ");
setTimeout(sayhello, 3000)


// setInterval
function sayhi() {
    console.log("Hello 😉")    
   }
   console.log("Thanktyou for waiting ... ");
   setInterval(sayhi, 5000);
   

//  how to cancel the interval
function sayyep() {
    console.log("Hello 😉")    
   }
   console.log("Thanktyou for waiting ... ");
var intervalid =  setInterval(sayyep, 1000);   
clearInterval(intervalid)

// another way to cancel the interval

var IntervalId ;
var runCount = 0;
function saynamaste() {
    runCount++;
    if (runCount > 15){
        clearInterval(IntervalId);
    }
    console.log("Namaste 😁!")
}
console.log("And the Wait starts  . . . ");
IntervalId = setInterval(saynamaste, 100);

// using setInterval to call function
setInterval(function () {
    console.log("Hello This side Ankit ")
}, 1000);

// using predefined function
var myfun = function () {
    console.log("This Run after 1 sec ")
}
setInterval(myfun, 1000);


