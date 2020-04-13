//Мобильное меню
const menuButton = document.querySelector(".header__burger");
const close = document.querySelector(".header__burger--close");
const nav = document.querySelector(".nav");
const contacts = document.querySelector(".contacts");
const logo = document.querySelector(".header__logo");
const basket = document.querySelector(".basket");

menuButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (menuButton.classList.contains("header__burger--open")) {
    menuButton.classList.remove("header__burger--open");
    menuButton.classList.add("header__burger--close");
    contacts.classList.add("vissible");
    logo.classList.add("hidden");
    basket.classList.add("hidden");
    nav.classList.add("nav--mobile");
  } else {
    menuButton.classList.add("header__burger--open");
    menuButton.classList.remove("header__burger--close");
    contacts.classList.remove("vissible");
    logo.classList.remove("hidden");
    basket.classList.remove("hidden");
    nav.classList.remove("nav--mobile");
  }
});

//Форма обратной связи
const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.querySelectorAll(".form__close");

openModal.forEach((el) => {
  el.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (nav.classList.contains("nav--mobile")) {
      nav.classList.remove("nav--mobile");
      menuButton.classList.add("header__burger--open");
      menuButton.classList.remove("header__burger--close");
    }
    modal.classList.add("modal--vissible");
  });
});

closeModal.forEach((el) => {
  el.addEventListener("click", (ev) => {
    ev.preventDefault();
    modal.classList.remove("modal--vissible");
  });
});

//Обработка формы
const checkbox = document.getElementById("politics");
function check() {
  const submit = document.querySelector(".form__submit");
  if (checkbox.checked) {
    submit.disabled = "";
  } else {
    submit.disabled = "disabled";
  }
}

checkbox.addEventListener("click", check);
