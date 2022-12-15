(function ($) {

  $(document).ready(function () {
    svg4everybody({});
  });

  new Swiper('.swiper', {
    speed: 1000,
    spaceBetween: 100,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

})(jQuery);
