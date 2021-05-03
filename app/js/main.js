$(document).ready(function(){
    $('.header__right-slider').slick({
      arrows:false,
      dots: true,
      autoplay: true,
    });
  });
  $('.services__tabs').each(function() {
    let ths = $(this);
    ths.find('.tabs__block').not(':first').hide();
    ths.find('.tabs__item').click(function() {
      ths.find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tabs__block').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });