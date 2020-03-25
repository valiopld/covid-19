const casesSpan = document.querySelector(".cases span");
const deathSpan = document.querySelector(".death span");

var d = new Date();
let y = d.getFullYear() - 2000;
let day = (d.getDate() - 1).toString();

let month = (d.getMonth() + 1).toString();

let yestarday = month + "/" + day + "/" + y;

let valio = () => {
  const url = "https://corona.lmao.ninja/v2/historical/bulgaria";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.onload = () => {
    data = xhr.response;

    casesSpan.innerHTML = data.timeline.cases[yestarday];
    deathSpan.innerHTML = data.timeline.deaths[yestarday];
    console.log(data.timeline);
  };
  xhr.send();
};

valio();
