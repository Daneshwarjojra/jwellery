$(document).ready(function() {
   // Banner Slider
   $('.imageCarousel').on('click', 'img', function() {
    $('.imageCarousel img.carousel_center').removeClass('carousel_center');
    $(this).addClass('carousel_center');
  });

  var _CURRENT_ANGLE = 0;
  $('.rotate_img').each(function() {
    $(this).on('click', function() {
      if ($(this).hasClass('carousel_center')) {
        $(".imageCarousel").css({ transform: 'rotate(' + _CURRENT_ANGLE + 'deg)' });
        $(this).css({ transform: 'rotate(-' + _CURRENT_ANGLE + 'deg)' }); 
      } else {
        _CURRENT_ANGLE += 180;
        $(".imageCarousel").css({ transform: 'rotate(' + _CURRENT_ANGLE + 'deg)' });
        $('.rotate_img').css({ transform: 'rotate(-' + _CURRENT_ANGLE + 'deg)' });
      }
    });
  })
});