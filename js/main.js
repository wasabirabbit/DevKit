$(document).ready(function () {


 $('.flex-vertical').flexslider({
    animation: "slide",
    slideshow: true,
    reverse: true, 
    animationLoop: true,   
    touch: false,
    keyboard: true 
    // mousewheel: true
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

// Init SmoothScroll

    $('.smoothscroll').smoothScroll({offset: -95});


$(function(){    
   var urlHash = window.location.href.split("#")[1];
    if (urlHash.length > 0)
        $('html,body').animate({
            scrollTop: $('#' + urlHash).offset().top -95
        }, 2000);    
});

});