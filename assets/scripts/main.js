// nav icon
document.querySelector(".nav-icon").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("show-nav");
});

// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
