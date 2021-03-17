let sign = navigator.language;
let date = new Date();

let daynum = date.getDate();
let month = date.getMonth();
let day = date.toLocaleString(sign,{weekday: 'long'});
let monthname = date.toLocaleString(sign,{month: 'long'});
let year = date.getFullYear();

document.getElementById('monthname').innerHTML = monthname;
document.getElementById('day').innerHTML = day;
document.getElementById('daynum').innerHTML = daynum;
document.getElementById('year').innerHTML = year;