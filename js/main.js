const menuBtn = document.querySelector('.menu__btn');
const menuCls = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');
menuBtn.addEventListener('click', ()=>{
   menuList.classList.toggle('menu__list--open');
   menuShadow.classList.toggle('menu--open');
});

menuCls.addEventListener('click', () =>{
   menuList.classList.remove('menu__list--open');
   menuShadow.classList.remove('menu--open');
});

