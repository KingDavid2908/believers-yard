const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const menuLinksClicked = document.querySelector(".navbar__links");

const menu__toggle = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", menu__toggle);

menuLinksClicked.addEventListener("click", menu__toggle);
