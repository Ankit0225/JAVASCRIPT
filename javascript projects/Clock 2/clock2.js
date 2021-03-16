let deg = 6;
let hr = document.querySelector('#hr');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

setInterval(() => {

let day = new Date();
let h = day.getHours() * 30;
let m = day.getMinutes() * deg;
let s = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(h) + (m/12)}deg)`;
min.style.transform = `rotateZ(${m}deg)`;
sec.style.transform = `rotateZ(${s}deg)`;
},1000)