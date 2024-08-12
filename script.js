let menu1 = document.querySelector(".main-menu");
let menu2 = document.querySelector(".main-menu-2");

function menu() {
    menu1.classList.add("menu-open");
    menu2.classList.add("menu-close");
}

function closeMenu() {
  menu1.classList.remove("menu-open");
  menu2.classList.remove("menu-close");
}
