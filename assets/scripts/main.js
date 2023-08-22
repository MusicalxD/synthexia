// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", () => loader.style.display = "none");

// nav icon
document.querySelector(".nav-icon").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("show-nav");
    document.querySelector(".nav-icon").classList.toggle("rotate");
});
