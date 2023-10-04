var countDownDate = new Date ("oct 15, 2023 00:00:00").getTime();
var x = setInterval (function(){
    var now = new Date(). getTime();
    var distance = countDownDate - now;

    var Days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var Seconds = Math.floor((distance % (1000 * 60)) / 1000);


document.getElementById("Days").innerHTML = Days;
document.getElementById("Hours").innerHTML = Hours;
document.getElementById("Minutes").innerHTML = Minutes;
document.getElementById("Seconds").innerHTML = Seconds;



},1000);