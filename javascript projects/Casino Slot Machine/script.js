let go1 = document.getElementById('go1')
let go2 = document.getElementById('go2')
let go3 = document.getElementById('go3')

let input = document.getElementById('input');

let values = [
    '😯','😴','😛','😅','😝','🤤','😭','😨','🥵','😡'
]
function getRandomValue() {
    return values[Math.floor(Math.random() * 10)]
}
let animationId;

function updateanimation(newspeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {
        
        go1.innerText = getRandomValue()
        go2.innerText = getRandomValue()
        go3.innerText = getRandomValue()

    }, 1000 / newspeed)
}

input.onchange = function (ev) {
    // document.documentElwement => this is ":root" of CSS
    document.documentElement.style.setProperty('--speed',ev.target.value)

    updateanimation(ev.target.value)
}
