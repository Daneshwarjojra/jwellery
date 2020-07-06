$(document).ready(function() {
  // Nav Active
  $('.center_nav').on('click', 'li', function() {
    $('.center_nav li.active').removeClass('active');
    $(this).addClass('active');
  });

  // Banner Slider
  $('.imageCarousel').on('click', 'img', function() {
    $('.imageCarousel img.carousel_center').removeClass('carousel_center');
    $(this).addClass('carousel_center');
  });

  //scrollintoview
  $(".btn-trans").click(function(event) {
    var elementtoScrollToID = $(event.currentTarget).data('scroll-to');
    if (elementtoScrollToID) {
      $('html, body').animate({
          scrollTop: $(elementtoScrollToID).offset().top - 62
      }, 800);
    }
  });

  //Owl Carousel
  var $owl = $('.owl-carousel');

  $owl.children().each( function( index ) {
    $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
  });

  $owl.owlCarousel({
    center: true,
    loop: true,
    items: 5,
    autoplay: true,
    dots: true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:5,
      },
      1024: {
        items:5,
      }
    }
  });

  $(document).on('click', '.owl-item>div', function() {
    // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
    var $speed = 300;  // in ms
    $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
  });
})