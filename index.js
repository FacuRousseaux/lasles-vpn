const body = document.querySelector('.body');
const toggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const navItem = document.querySelectorAll('.nav__item');


toggle.addEventListener('click', () => {
  body.classList.toggle('overflow');
  navList.classList.toggle('nav__list--mobile');
  
  navItem.forEach(elem => {
    elem.addEventListener('click', () => {
      body.classList.remove('overflow');
      navList.classList.remove('nav__list--mobile');
    })
  }); 
});

new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: true,
    dots: '.dots',
    rewind : true,
    arrows: {
      prev: '.slider-prev',
      next: '.slider-next'
    },
    responsive: [
        {
          // screens greater than >= 576px
          breakpoint: 576,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToScroll: 1,
            slidesToShow: 2,
          }
        },{
          // screens greater than >= 992px
          breakpoint: 992,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2.5,
          }
        }
      ]
  });