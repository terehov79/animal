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
    slidesPerView: 6,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

})(jQuery);
