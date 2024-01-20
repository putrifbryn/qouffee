// HUMBURGER MENU
const menu = document.getElementById("menu-toogle");
const menuList = document.getElementById("menu-list");

menu.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// SCROLL CHANGE
const aside = document.getElementById("aside");
const main = document.getElementById("main-content");
const hr = document.getElementById("last");

window.addEventListener("scroll", function (event) {
  let scroll = this.scrollY;

  // LAPTOP L BREAKPOINT
  if (scroll > 476 && this.window.innerWidth >= 1024) {
    aside.style.position = "fixed";
    aside.style.right = "0";

    aside.style.display = "flex";
    aside.style.alignItems = "center";
    aside.style.justifyContent = "center";

    aside.style.borderRadius = "1rem 0 0 1rem";
    hr.style.display = "none";
  } else {
    main.style.position = "relative";
    aside.style.position = "relative";
    aside.style.height = "fit-content";

    hr.style.display = "block";
  }
});
