/* Счетчик */

let is_animate = false;

const limit = 5700;  /* максимальное число до которого ведётся счёт */
const step  = 50;   /* количество на которое увеличивается счётчик за один раз*/
const ms    = 90;    /* время за которое увеличивается число */

document.body.addEventListener('scroll', ev => {
  const counter = document.querySelector('div.form__counter-counterdown.count');
  const y = counter.getBoundingClientRect().top;

  /* 300 - значение от скольки начнется счет, когда элемент станет виден */
  if (y < window.innerHeight - 300 && !is_animate)
    {
      is_animate = true;

      const timerID = setInterval(() => {
        let x = Number(counter.innerHTML);
        x += step;

        counter.innerHTML = x;

        if (x > limit)
          {
            counter.innerHTML = limit;
            clearInterval(timerID);
          }

      }, ms);
    }
});


/*плагин Swiper*/

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".swiper", {
     autoHeight: true,
     slidesPerView: 1,
     spaceBetween: 30,
     loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

/* Выбор service */

const cards = document.querySelectorAll('div.service__card');

cards.forEach(card => {
  card.addEventListener('click', ev => {
    let target = ev.target;

    while (target.classList[0] !== 'service__card')
      target = target.parentElement;
      
    /* убрать из всех service__card класс service__card__active */
    cards.forEach(card => card.classList.remove('service__card__active'));
    /* добавить класс service__card__active на тот элемент по которому произошел клик мышью service__card */
    target.classList.add('service__card__active');

    /* получить ссылку из свойства data-link объекта service__card */
    const link = target.dataset.link;

    /* 
      в кнопку "learn more" записывается свойство href,
      ссылка из data-link выбраного объекта service__card
    */
    const btn = document.querySelector('a#btn');
    btn.href = link;
  });
});



/* Импортируем webpack */
 import * as flsFunctions from "./modules/function.js";

 flsFunctions.isWebp();


