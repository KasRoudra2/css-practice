window.onload = function () {
  const hourDot = document.querySelector(".hours div:first-child");
  const minuteDot = document.querySelector(".minutes div:first-child");
  const secondDot = document.querySelector(".seconds div:first-child");
  const hourCircle = document.querySelector(".hours circle:last-child");
  const minuteCircle = document.querySelector(".minutes circle:last-child");
  const secondCircle = document.querySelector(".seconds circle:last-child");
  const hours = document.querySelector(".hours div:last-child");
  const minutes = document.querySelector(".minutes div:last-child");
  const seconds = document.querySelector(".seconds div:last-child");
  const ampm = document.querySelector(".ampm");
  
  setInterval(function () {
    const now = new Date();
    const h =
      now.getHours() < 10
        ? "0" + now.getHours()
        : now.getHours() > 12
        ? "0" + now.getHours() - 12
        : now.getHours();
    const m = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    const s = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
    const ap = h >= 12 ? "PM" : "AM";
    hours.innerHTML = h + `<span>Hours</span>`;
    minutes.innerHTML = m + `<span>Minutes</span>`;
    seconds.innerHTML = s + `<span>Seconds</span>`;
    ampm.innerText = ap;
    hourCircle.style.strokeDashoffset = 440 - ( 440 * h ) / 12;
    minuteCircle.style.strokeDashoffset = 440 - ( 440 * m ) / 60;
    secondCircle.style.strokeDashoffset = 440 - ( 440 * s ) / 60;
    hourDot.style.transform = `rotate(${h * 30}deg)`
    minuteDot.style.transform =  `rotate(${m * 6 }deg)`
    secondDot.style.transform =  `rotate(${s * 6}deg)`
  });
};
