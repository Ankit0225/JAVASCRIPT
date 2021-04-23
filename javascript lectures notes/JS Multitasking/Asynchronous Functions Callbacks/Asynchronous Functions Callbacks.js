function helloslayer(times,name,donesaying) {
    let count = 0
    let loop = setInterval(() => {
        count++

        console.log('Hello ' + name);
        if(count === times) {
            clearInterval(loop)
            donesaying()
        }
    }, 100)
}

helloslayer(5, 'Ankit' , () => {
    helloslayer(4, 'Aditya', () => {
        helloslayer(3, 'Adam', () => {
           helloslayer(4, 'Rishab', () => {

           })
        })
    })

})

module.exports = {
    helloslayer
}