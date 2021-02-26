function ceo(){
    console.log("The new ceo of this company is");
    cto()
}

function cto() {
    console.log("The new cto of this company is ");
    vpengg()
}
function vpengg() {
    console.log("We are hiring for new positions");
    techlead()
}
function techlead() {
    console.log("The New techlead of this team is");
    SDE()
}
function SDE() {
    console.log("The New memeber of SDE is");
    throw new Error("This Code didn't work");
}
ceo();
console.log(' ');   
cto();