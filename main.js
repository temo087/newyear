const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes =  document.getElementById("minutes");
const seconds = document.getElementById("seconds");


const ThisYear = new Date().getFullYear();
const NewYearTime = new Date(`january 1  ${ThisYear + 1} 00:00:00`);

//COUNTDOWN

function updateCountdownTime(){
    const ThisYear = new Date()
    const diff = NewYearTime - ThisYear;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h =  Math.floor(diff / 1000 / 60 / 60) %24;
    const m =  Math.floor(diff / 1000 / 60) % 60;
    const s =  Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;

}
setInterval(updateCountdownTime, 1000)