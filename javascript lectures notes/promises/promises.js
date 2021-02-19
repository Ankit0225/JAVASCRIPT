function fakedownload(done) {
    setTimeout(function () {
        let downloadedData = "Some data we ripped of the interwebs"
        done(downloadedData)
    }, 2000)
    
}

fakedownload(function (data) {
    console.log("We downloaded a file. which had this data -->")
    console.log(data)
    
})

function fakedownloadPromise() {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            let downloadedData = 'Some Data from the net'
            resolve(downloadedData)
            
        },5000)
        
    })
    
}
fakedownloadPromise().then(function (data) {
    console.log('The data that we downloaded is -->')
    console.log(data)
    
})

function fakedownloadPromise(correct) {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            let downloadedData = 'Some Data from the net'
            if (correct){
            resolve(downloadedData)
            }
            else{
                reject(new Error('Could not download file'))
            }
        },5000)
        
    })
    
}

fakedownloadPromise(false).then(function (data) {
    console.log('The data that we downloaded is -->')
    console.log(data)
    
}).catch(function (error) {
  console.log(error)
})


function fakedownloadPromise(correct) {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            let downloadedData = 'Some Data from the net'
            console.log('downloading has completed')
            if (correct){
            resolve(downloadedData)
            }
            else{
                reject(new Error('Could not download file'))
            }
        },5000)
        
    })   
}

let downloaded = fakedownloadPromise(true);
downloaded.catch(function (error) {
    console.log(error)
})

setTimeout(function () {
    downloaded.then(function (data) {
        console.info('The data that we downloaded is this -->')
        console.log(data)
    })
},3000)
