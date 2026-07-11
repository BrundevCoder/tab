const showTime = document.getElementById("time");
const showJoke = document.getElementById("jokeMessage");
const rerrolButton = document.getElementById("reroll-joke-btn");

const jokeAPIUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function updateTime() {
  let newDate = new Date();

  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();

  let timeString = `${hours}:${minutes}:${seconds}`;

  showTime.innerText = timeString
}

function getJoke() {

  fetch(jokeAPIUrl)
    .then(response => response.json())
    .then( (json) => {
      let joke = json.joke;
      showJoke.innerText = joke
    })
}

setInterval(() => {
  updateTime();
}, 1000);

updateTime();

rerrolButton.addEventListener("click", getJoke);

getJoke();