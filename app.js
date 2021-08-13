const btn = document.getElementById("start");
const video = document.getElementById("video");
const date = document.getElementById("date");
const result = document.getElementById("result");
btn.addEventListener("click", () => {
  let now = new Date();
  let t = date.value;
  video.play();
  video.style.transform = "scale(1.2)";
  if (t) {
    let year = Number(t.slice(0, 4));
    let age = now.getFullYear() - year;
    result.innerHTML = `
      <h1>You are ${age} years old...</h1>
      <div style="display:flex;">
      <h4 id="days"></h4>
      <h4 id="hours"></h4>
      <h4 id="minutes"></h4>
      <h4 id="seconds"></h4>
      </div>
      <h1>Left to birthday</h1>
      `;
    t = new Date(t);
    t.setYear(now.getFullYear());
    if (t < now) {
      t.setYear(now.getFullYear() + 1);
    }
    t.setHours(0);
    counter();
    function counter() {
      let now = new Date();
      let seconds = Math.floor((t - now) / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);
      hours = hours - days * 24;
      minutes = minutes - days * 24 * 60 - hours * 60;
      seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
      document.getElementById("days").innerText = days + " Days";
      document.getElementById("hours").innerText = hours + " Hours";
      document.getElementById("minutes").innerText = minutes + " Minutes";
      document.getElementById("seconds").innerText = seconds + " Seconds";
    }
    setInterval(counter, 1000);
  } else {
    alert("Input must filled !");
  }
});
