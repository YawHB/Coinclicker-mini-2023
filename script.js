window.addEventListener("load", start);

function start() {
  console.log("Start");
  document.querySelector("#coin1_container").classList.add("falling");
  document
    .querySelector("#coin1_container")
    .addEventListener("click", pausedZoomOut);
}

function pausedZoomOut() {
  console.log("zoom og pause");
  document.querySelector("#coin1_container").classList.add("paused");
  document.querySelector("#coin1_sprite").classList.add("zoom_out");
  // document.querySelector("#falling").classList.remove("falling");

  document
    .querySelector("#coin1_container")
    .addEventListener("animationend", reset);
}

function reset() {
  console.log("Hej Jack");
  // document
  //   .querySelector("#coin1_container")
  //   .removeEventListener("animationend", reset);
  document.querySelector("#coin1_container").classList.remove("paused");
  document.querySelector("#coin1_container").classList.remove("falling");
  document.querySelector("#coin1_sprite").classList.remove("zoom_out");

  document.querySelector("#coin1_container").offsetWidth;
  document.querySelector("#coin1_container").classList.add("falling");
}
