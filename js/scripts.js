let burgerLinks = document.getElementById("menuLinks");
let burgerMenu = document.getElementById("burger-menu");
let closeBurger = document.getElementById("closeBurger");
let burgerIcon = document.getElementById("burgerIcon");

burgerMenu.addEventListener("click", toggleBurger);

function toggleBurger() {
  if (!burgerLinks.classList.contains("open")) {
    burgerLinks.classList.remove("closed");
    burgerLinks.classList.add("open");
    burgerIcon.classList.remove("open");
    burgerIcon.classList.add("closed");
    closeBurger.classList.remove("closed");
    closeBurger.classList.add("open");
  } else {
    burgerLinks.classList.remove("open");
    burgerLinks.classList.add("closed");
    burgerIcon.classList.remove("closed");
    burgerIcon.classList.add("open");
    closeBurger.classList.remove("open");
    closeBurger.classList.add("closed");
  }
}
