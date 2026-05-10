function showtime() { 
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h >= 12) {
        session = "PM";
    }
    if (h > 12) {
        h = h - 12;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    const time = h + ":" + m + ":" + s + " " + session;
    const clockElement = document.getElementById("MyClockDisplay"); 
    if (clockElement) {
        clockElement.innerText = time;
    }
    setTimeout(showtime, 1000);
}
showtime(); 
