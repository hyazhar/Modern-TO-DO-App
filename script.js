// Hamburger Menu Toggle
const menu = document.querySelector(".menus");
const hamburger = document.getElementById("hamburger-icon");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// Dark / Light Theme Toggle
const lightIcon = document.getElementById("light-mode-icon");
const darkIcon = document.getElementById("dark-mode-icon");

darkIcon.addEventListener("click", () => {
    document.body.classList.add("dark");
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
});

lightIcon.addEventListener("click", () => {
    document.body.classList.remove("dark");
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
});
