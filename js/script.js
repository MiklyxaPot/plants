console.log("для фиксированой верстки:\n 1. Вёрстка валидная +10.\n 2. Вёрстка семантическая +20.\n 3. Вёрстка соответствует макету +48-4(в блоке контакт картинка меньше).\n 4. Требования к css + 12.\n 5. Интерактивность, реализуемая через css +20.\n итого 106 баллов");

console.log("для адаптированой верстки:\n 1.Вёрстка соответствует макету. Ширина экрана 768px +24\n2.Вёрстка соответствует макету. Ширина экрана 380px +24\n3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n4.На ширине экрана 380рх и меньше реализовано адаптивное меню +22-8\nTotal: 77");


window.addEventListener('DOMContentLoaded', () => {
   const menu = document.querySelector('.menu__list'),
   menuItem = document.querySelectorAll('.menu__item'),
   hamburger = document.querySelector('.icon-menu'),
   close = document.querySelector('.close'),
   btmServes = document.querySelectorAll('.servise__btn'),
   serviseCarts = document.querySelectorAll('.servise__card'),
   serviseItem = document.querySelector('.servise__item'),
   gardrns = document.querySelectorAll('.garden'),
   selestPrices = document.querySelectorAll('.selest-prices'),
   priceBtn = document.querySelector('.selest-prices__btn') ;


   hamburger.addEventListener('click', () => {
      menu.classList.toggle('menu__list_active');
   });
   close.addEventListener('click', () => {
      menu.classList.remove('menu__list_active');
   });
      menuItem.forEach(item => {
      item.addEventListener('click', () => {
         menu.classList.toggle('menu__list_active');
      });
   });

   // ***********price
   const priceText = (element, text ) =>{
      element.innerHTML = text;
   }

   const priceCheng = (e) =>{
      const element = e.target;
      priceText(element, `jhjjghhghgh`)
   }

   priceBtn.addEventListener('click', priceCheng);



// *************servise
   btmServes.forEach(item => {
      item.addEventListener('click', () =>{
      item.classList.toggle('btn-activ');
      
      serviseCarts.forEach(i =>{
         console.log(i);
         
         // serviseItem.classList.contains('garden').classList.toggle('blur');
         // if( serviseItem.classList.contains('garden'))
         // {i.classLiclosest('garden').classList.toggle('blur');
         // }
         // i.classList.contains('garden').classList.toggle('blur');
      });
 
      });
   });
});