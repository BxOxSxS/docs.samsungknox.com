$(document).ready(function () {
    const scrollCheck = function() {
      if (300 < $(window).scrollTop()) {
        $('#back-to-top').css({'visibility': 'visible', 'opacity': '1'})
      } else {
        $('#back-to-top').css({'visibility': 'hidden', 'opacity': '0'});
      }
    };

    if ($('#back-to-top').length > 0) {
      $(window).on('scroll', scrollCheck).trigger('scroll');

      $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0},'normal');
      });
    };
});
