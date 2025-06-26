
let flag = 0;
let timmy;
let timmy2;
function timer(){
  let time = new Date();
let hours = time.getHours();
let minutes =time.getMinutes().toString().padStart(2, '0');
  if (hours >= 19 || hours < 5){
    timmy2 = "🌙";
  }
  else{
    timmy2 = "☀️";
  }
  if (hours > 12){
    hours -= 12;
    timmy = "PM";
    }
  else {
    timmy = "AM";
  }
  
document.querySelector(".clock").innerHTML = hours + ":" + minutes ;
  document.querySelector(".timmy").innerHTML = timmy;
  document.querySelector(".timmy2").innerHTML = timmy2;

            }
setInterval(timer, 1000);