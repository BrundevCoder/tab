const showTime = document.getElementById("time");

function updateTime() {
  let newDate = new Date();

  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();

  let timeString = `${hours}:${minutes}:${seconds}`;

  showTime.innerText = timeString
}

setInterval(() => {
  updateTime()
}, 1000);

updateTime()