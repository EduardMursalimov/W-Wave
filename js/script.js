// бургер
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__top-nav');
let nav = document.querySelector('.header__bottom-nav');
let menuLinks = menu.querySelectorAll('.header__link');
let navLinks = nav.querySelectorAll('.header__link')

burger.addEventListener('click', function () {
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__top-nav--active');
  nav.classList.toggle('header__bottom-nav--active');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__top-nav--active');
    nav.classList.remove('header__bottom-nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

navLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__top-nav--active');
    nav.classList.remove('header__bottom-nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

// search button
let searchBtn = document.querySelector('.header__btn-search');
let search = document.querySelector('.header__form');

searchBtn.addEventListener('click',
  function () {
    search.classList.toggle('header__form--active');
  });

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.header__form') && !target.closest('.header__btn-search')) {
    search.classList.remove('header__form--active')
  }
});

// modal window
let loginBtn = document.querySelector('.header__btn-login');
let modal = document.querySelector('.header__modal');
let modalContainer = document.querySelector('.modal-overlay');
let closeBtn = document.querySelector('.header__modal-btn');

loginBtn.addEventListener('click',
  function () {
    document.body.classList.toggle('stop-scroll');
    modal.classList.toggle('header__modal--active');
    modalContainer.classList.toggle('modal-overlay--active');
  });

closeBtn.addEventListener('click',
  function () {
    document.body.classList.remove('stop-scroll');
    modal.classList.remove('header__modal--active');
    modalContainer.classList.remove('modal-overlay--active');
  });

// validate
const validation = new JustValidate('#form',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: false,
  },
);

validation
  .addField('#message', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели сообщение',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Сообщение содержит меньше двух символов',
    },
  ])
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя содержит меньше двух символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя содержит больше тридцати символов',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'e-mail указан неверно!',
    },
  ])
  .addField('#checkbox', [
    {
      rule: 'required',
      errorMessage: 'Вы не приняли политику обработки персональных данных',
    },
  ]);

const validationModal = new JustValidate('#form-modal',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid-modal',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: false,
  },
);

validationModal
  .addField('#login', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели логин',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Логин содержит меньше двух символов',
    },
  ])
  .addField('#password', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели пароль',
    },
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'Пароль содержит меньше шести символов',
    },
  ]);

// play&pause button
let btnPlay = document.querySelectorAll('.svg-btn');
let svgPause = document.querySelectorAll('.svg-pause');
let svgPlay = document.querySelectorAll('.svg-play');

btnPlay.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const button = e.currentTarget.dataset.button;

    svgPlay.forEach(function (element) {
      element.classList.remove('svg-play--hidden');
    });
    e.currentTarget.classList.toggle('svg-pause--active');
    document.querySelector(`[data-play="${button}"]`).classList.toggle('svg-play--hidden');

    svgPause.forEach(function (el) {
      el.classList.remove('svg-pause--active');
    });
    document.querySelector(`[data-pause="${button}"]`).classList.toggle('svg-pause--active');
  })
})

// more list
let btnMore = document.querySelector('.podcasts__btn-more')
let podcastsItem = document.querySelectorAll('.podcasts__item');

btnMore.addEventListener('click', () => {
  podcastsItem.forEach(el => {
    el.classList.add('podcasts__item--visible')
  });

  btnMore.closest('.podcasts__btn-wrap').classList.add('podcasts__btn-wrap--hidden');
})

// custom select
const defaultSelect = () => {
  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
  });

  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);
};

defaultSelect();

// accordion
new Accordion('.accordion-container', {
  event: 'Enter click',
  openOnInit: '0'
});

// tab
let tabsBtn = document.querySelectorAll('.guests__item-btn');
let tabsItem = document.querySelectorAll('.guests__card');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('guests__item-btn--active') });
    e.currentTarget.classList.add('guests__item-btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('guests__card--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__card--active');

  });
});

// swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  loopedSlides: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 2.31,
      spaceBetween: 20,
    },

    660: {
      slidesPerView: 2.31,
      spaceBetween: 18,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    1280: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

// счетчик в подкастах
document.querySelectorAll('.podcasts__link').forEach(function (el) {
  el.addEventListener('click', function () {
    let count = this.querySelector('.podcasts__link-descr');
    if (this.classList.contains('increace') !== true) {
      count.textContent = parseInt(count.innerText, 10) + 1;
      this.classList.add('increace');
    } else {
      count.textContent = parseInt(count.innerText, 10) - 1;
      this.classList.remove('increace');
    }
  })
})
