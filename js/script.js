/* PARALLAX */
$(window).stellar();

/* Show menu on scroll */
/*$(document).ready(function(){
    var toplimit = $( window ).height() * 0.8;
    var bottomlimit = $( document ).height() - $( window ).height() * 1.2;
    $(window).scroll(function(){
        if ($(this).scrollTop() > toplimit && $(this).scrollTop() < bottomlimit ) {
            $('#top-nav').fadeIn(500);
        } else {
            $('#top-nav').fadeOut(500);
        }
    });
});*/

/* Slide menu after 2s */
$(document).ready(function(){
   $("#top-nav").hide();
   $("#caja").hide();
   $("#texto").hide();
   $("#autor").hide();
   $("#top-nav").delay(2800).slideDown(500);
   $("#caja").delay(1500).fadeIn(1000);
   $("#texto").delay(1800).fadeIn(1000);
   $("#autor").delay(2800).fadeIn(500);

   $("#intro-caja").hide();
   $("#intro-texto").hide();
   $("#intro-caja").delay(1500).fadeIn(2000);
   $("#intro-texto").delay(2000).fadeIn(1500);

   $("#manana-texto").hide();
   $("#manana-texto").delay(500).fadeIn(1000);
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
        $('#manana-caja').css({'opacity':( 100-scroll/4 )/100});
});

/* RESIZE */
$(window).resize(function(){
    // If there are multiple elements with the same class, "main"
    $('.esfera').each(function() {
        $(this).height($(this).width());
    });
}).resize();

/* smooth scroll (eg title) */
$(document).ready(function($) {
    $(".smooth").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });
});

$("a[href^=#]").on("click", function(e) {
    e.preventDefault();
    history.pushState("", document.title, window.location.pathname);
});
