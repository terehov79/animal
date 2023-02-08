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

  new Swiper('.mini-history__specialists .swiper', {
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

  // Tabs
  function tabsGlobal(on, target, tabsWrap, tabActive, boxWrap, boxItem, fade = 300) {
    $(target).on(on, function (event) {
      event.preventDefault();
      if($(this).hasClass(tabActive)) {
        return false
      }
      $(tabsWrap).find('.' + tabActive).removeClass(tabActive);
      $(this).addClass(tabActive);
      $(boxItem).hide();
      $(boxWrap).find('.' + $(this).attr('data-box')).stop(true).fadeIn(fade);
    });
  };

  tabsGlobal('click', '.pagination a', '.pagination', 'active', '.page-review-wrap', '.page-review');


  // button click
  $('.btn_review').on('click', function (event) {
    event.preventDefault();
    $('.modal-wrap').fadeIn(300);
  });
  
  // modal close
  $('.modal-wrap').on('click', function () {
    $('.modal-wrap').fadeOut(300);
  });

  // modal area not close
  $('.modal').on('click', function (event) {
    event.stopPropagation();
  });

  //show modal thankyou
  $('.modal-form button').on('click', function (event) {
    event.preventDefault();
    $('.modal-form').hide();
    $('.modal-thankyou').show();
  });

})(jQuery);