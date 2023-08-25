const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector(".hero-header");
const hero = document.querySelector(".hero");

openMenu.addEventListener("click", () => {
    hero.classList.add("menu-active");
    menu.classList.add("menu-active");
    closeMenu.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("menu-active");
    hero.classList.remove("menu-active");
    closeMenu.classList.remove("active");
})