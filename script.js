const timeEl = document.getElementById("currentTime");

function updateTime() {
  timeEl.textContent = new Date().toLocaleTimeString(undefined);
}

updateTime();
setInterval(updateTime, 1000);