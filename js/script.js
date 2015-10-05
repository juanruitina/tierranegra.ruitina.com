/* PARALLAX */
$(window).stellar();

/* Show menu on scroll */
$(document).ready(function(){
    var toplimit = $( window ).height() * 0.8;
    var bottomlimit = $( document ).height() - $( window ).height() * 1.2;
    $(window).scroll(function(){
        if ($(this).scrollTop() > toplimit && $(this).scrollTop() < bottomlimit ) {
            $('#top-nav').fadeIn(500);
        } else {
            $('#top-nav').fadeOut(500);
        }
    });
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
