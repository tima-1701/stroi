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

  $({blurRadius: 5}).animate({blurRadius: 0}, {
    duration: 5000,
    easing: 'swing',
    step: function() {
      $(".counter__numb").css({
        "-webkit-filter": "blur("+this.blurRadius+"px)",
        "filter": "blur("+this.blurRadius+"px)"
      });
    }
  });
  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
  $(".counter__numb").each(function() {
    var tcount = $(this).data("count");
    $(this).animateNumber({ number: tcount,
      easing: 'easeInQuad',
      "font-size": "40px",
      numberStep: comma_separator_number_step},
      5000);
  });