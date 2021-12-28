/* show more cookie */
const cookieLink = document.getElementById("expand-cookie");
const cookieOption = document.querySelector(".cookie__option");
const addeddClass = "cookie__option--expanded";

cookieLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (cookieOption.classList.contains(addeddClass)) {
    cookieOption.classList.remove(addeddClass);
  } else {
    cookieOption.classList.add(addeddClass);
  }
});

/* disabled cookie */
const popupTime = 3000;
const cookie = document.querySelector(".cookie");
const cookieBtns = document.querySelectorAll(".cookie button");
cookieBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    cookie.classList.remove("fadeIn");
    console.log(e.target.closest(".cookie"));
    e.target.closest(".cookie").classList.add("fadeOut");
    setTimeout(() => {
      cookie.remove;
    }, 1000);
  });
});
setTimeout(() => {
  cookie.classList.add("fadeIn");
}, 3000);

/* mobile nav */
const mobMenuIcon = document.getElementById("menu__icon");
const mobMenuClose = document.querySelector(".btn--close");
mobMenuIcon.addEventListener("click", checkMenuOpen);
mobMenuClose.addEventListener("click", checkMenuOpen);
function checkMenuOpen() {
  if (document.body.classList.contains("menu-open")) {
    document.body.classList.remove("menu-open");
  } else {
    document.body.classList.add("menu-open");
  }
}
