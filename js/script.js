$(document).ready(function() {
    var autoplaySlider = $('#autoWidth').lightSlider({
        item:4,
        auto:true,
        loop:true,
        pauseOnHover: true,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:992,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },
            {
                breakpoint:500,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ],
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        }, 
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    }); 
    $('#total').text(autoplaySlider.getTotalSlideCount());
  });