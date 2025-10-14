document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#toggle").onclick = toggle;
})

function toggle() {
  [...document.querySelectorAll(".marquee-move")].forEach((elem, i) => {
    if (elem.classList.contains("started")) {
      elem.stop();
      elem.classList.remove("started");
      elem.classList.add("stopped");
      document.querySelector("#toggle").innerHTML = "Start";
    } else if (elem.classList.contains("stopped")) {
      elem.start();
      elem.classList.remove("stopped");
      elem.classList.add("started");
      document.querySelector("#toggle").innerHTML = "Stop";
    }
  })
}