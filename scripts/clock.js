setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let day = time.getDay();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
   
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    } else if (hour == 12) {
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let date = weekday[day] + " " + currentTime;
  
    document.getElementById("clock").innerHTML = date;
}
showTime();