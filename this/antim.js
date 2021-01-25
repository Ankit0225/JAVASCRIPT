function checkthis() {
    console.log(this)
}

let obj = {
    a : 12,
    b : 'asdsa',
    c: 'ankit',
    d: true,
    e: function () {
        console.log(this)
    },
    f: {
        l: 234,
        m: 'antim',
        n: function () {
            console.log(this)
        },
    },
}