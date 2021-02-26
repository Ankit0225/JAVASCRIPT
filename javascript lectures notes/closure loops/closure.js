// 1

function print(){
    var a = 10;
    console.log(a);
}
print();


// function print(){
//     var a = 10;
//     console.log(a);
// }
// console.log(a);

// print();
// 2
function count(){
    var initial = 1
    function plus() {
        console.log(++initial)
    }
    plus();
}
count();

// 3
function metadata(){
    var initial = 1
    function plus() {                   
        console.log(++initial)       
    }
     return plus;
}
var c = metadata();
c();
c();
c();
c();

// 4
function counter(init){
    var value = init;
    function minus() {
        console.log(++init);
    }
    return minus;
}
var d = counter(10)
d();
d();

//  5
console.log(" ");
function createcounter(ini,del){
    return{
        up(){ 
            ini += del ;
            console.log(ini)
        },
        down(){
            ini -=  del;
            console.log(ini)
        }
    }
}
var e = createcounter(10 ,5)
 e.up();
 e.up();
 e.down();