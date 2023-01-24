(function ($) {

  $(document).ready(function () {
    svg4everybody({});
  });

  new Swiper('.welcome--wrap .swiper', {
    speed: 500,
    spaceBetween: 0,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.welcome--wrap .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    },
  });

  new Swiper('.history__specialists .swiper', {
    speed: 500,
    spaceBetween: 0,
    slidesPerView: 2,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    // when window width is >= 1366px
    1366: {
      slidesPerView: 4,
      spaceBetween: 0
    },
    // when window width is >= 1400px
    1400: {
      slidesPerView: 6,
      spaceBetween: 0
    }
    }   
  });

  $('.burger').on('click', function () {
    $('.header__menu').toggleClass('active');
    $(this).toggleClass('active');
  })

})(jQuery);
