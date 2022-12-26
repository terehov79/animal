(function ($) {

  $(document).ready(function () {
    svg4everybody({});
  });

  new Swiper('.welcome--wrap .swiper', {
    speed: 500,
    spaceBetween: 0,
    loop: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: '.welcome--wrap .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });

})(jQuery);
