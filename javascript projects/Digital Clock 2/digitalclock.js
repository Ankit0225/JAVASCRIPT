function clock() {
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
  
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = 'AM';

    if(h > 12){
        h = h - 12;
        var am = 'PM'
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

}

 let interval = setInterval(clock, 1000)