const menuBtn = document.querySelector(".menu__btn");
const menuCls = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const menuShadow = document.querySelector(".menu--close");
menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--open");
  menuShadow.classList.toggle("menu--open");
});

menuCls.addEventListener("click", () => {
  menuList.classList.remove("menu__list--open");
  menuShadow.classList.remove("menu--open");
});

const opinionSwiper = new Swiper(".opinion-slider", {
  spaceBetween:20,
  slidesPerView: 1,
  loop: true,
  navigation: 
  {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
    },
    662: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
  },
});
