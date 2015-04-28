$(document).ready(function () {
    //Plugin check - flexslider
    if ($(".flexslider").length > 0) {
        if (!jQuery().flexslider) {
            $.getScript("/Scripts/jquery.flexslider-min.js", function () {
                initFlexSliderPlugin();
            });
        }
        else {
            initFlexSliderPlugin();
        }
    }

 $('.flex-vertical').flexslider({
    animation: "slide",
    slideshow: true,
    reverse: true, 
    animationLoop: true,   
    touch: false,
    keyboard: true 
    // mousewheel: true
    }); 
});
 

// Init SmoothScroll

$('.smoothscroll').smoothScroll({offset: -95});


$(function(){    
   var urlHash = window.location.href.split("#")[1];
    if (urlHash.length > 0)
        $('html,body').animate({
            scrollTop: $('#' + urlHash).offset().top -130
        }, 500);    
});


// Menu
$('.menu-toggle').on('click', function() {
  $(this).toggleClass('open');
});


$('.menu-toggle').click(function () {
    $('section.menu-slideout').toggleClass('show');
});

$('.menu-toggle.open').click(function () {
    $('section.menu-slideout').removeClass('show');
});