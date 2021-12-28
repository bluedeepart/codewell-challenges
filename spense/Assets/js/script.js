"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const primaryMenu = document.getElementById("primary-menu");

  menuBtn.addEventListener("click", toggleMobMenu);

  function toggleMobMenu() {
    // const body = document.body;
    // if (body.classList.contains("menu-open")) {
    //   primaryMenu.classList.remove("hidden");
    //   body.classList.remove("menu-open");
    // } else {
    //   primaryMenu.classList.add("hidden");
    //   body.classList.add("menu-open");
    // }

    if (primaryMenu.classList.contains("hidden")) {
      primaryMenu.classList.remove("hidden");
    } else {
      primaryMenu.classList.add("hidden");
    }
  }
});
