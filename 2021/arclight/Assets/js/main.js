"use strict";

window.addEventListener("DOMContentLoaded", function () {
  /* set margin top */
  function setMainMargin() {
    const headerHeight =
      document.getElementsByTagName("header")[0].clientHeight;
    const main = document.getElementsByTagName("main")[0];
    main.style.marginTop = headerHeight + "px";
  }

  window.addEventListener("load", setMainMargin, false);
  window.addEventListener("resize", setMainMargin, false);

  /* add checkmar icon in list */
  const svg =
    '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="14" fill="#E7E8FE"/>  <path d="M17.8014 9.08112L12.1081 15.0703L9.4413 12.4757L7.56757 14.3998L12.1081 18.919L19.6757 11.0047L17.8014 9.08112Z" fill="#413DF6"/></svg>';
  const listItems = document.querySelectorAll(
    "main section:not(.hero__banner) ul li"
  );
  for (const li of listItems) {
    const text = li.textContent;
    li.innerHTML = `${svg} ${text}`;
  }

  /* mobile menu open */
  const menuBtn = document.querySelector(".btn--menu");
  menuBtn.addEventListener("click", function () {
    const body = document.body;
    if (body.classList.contains("menu-open")) {
      body.classList.remove("menu-open");
    } else {
      body.classList.add("menu-open");
    }
  });
});
