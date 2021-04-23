function helloslayer(times,name) {
    let count = 0
    let loop = setInterval(() => {
        count++
        console.log('Hello ' + name);
        if(count === times) {
            clearInterval(loop)
        }

        while(true){
            
            // Due to While it get stuck and runs infinite loop
    }
}, 100)
}

helloslayer(5, 'Ankit')
helloslayer(4, 'Aditya')

module.exports = {
    helloslayer
}