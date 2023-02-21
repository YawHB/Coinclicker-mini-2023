window.addEventListener("load", start);

function start() {
  document
    .querySelector("#coin1_container")
    .addEventListener("click", pausedZoomOut);
}

function pausedZoomOut() {
  document.querySelector("#coin1_container").classList.add("paused");
  document.querySelector("#coin1_sprite").classList.add("zoom_out");
  document.querySelector("#falling").classList.remove("falling");
  document
    .querySelector("#coin1_sprite")
    .addEventListener("animationend", reset);
}

function reset() {
  console.log("Hej Jack");
  document.querySelector("#coin1_container").classList.remove("paused");
  document.querySelector("#coin1_sprite").classList.remove("zoom_out");

  void document.querySelector("#coin1_container").offsetWidth;
  document.querySelector("#coin1_container").classList.add("falling");
}
