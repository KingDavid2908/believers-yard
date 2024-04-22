const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const menuLinksClicked = document.querySelectorAll(".navbar__links");

const menu__toggle = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  i;
};

menu.addEventListener("click", menu__toggle);

menuLinksClicked.forEach((menuLinkClicked) => {
  menuLinkClicked.addEventListener("click", menu__toggle);
});
