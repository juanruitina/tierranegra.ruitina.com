/* Parallax */
if ($(window).width() >= 800) {
   $(window).stellar();
};

/* Animaciones */
$(document).ready(function(){
   $("#top-nav,#caja,#texto,#autor").hide();

   $("#top-nav").delay(2800).slideDown(500);
   $("#caja").delay(1500).fadeIn(1000);
   //$(".inicio .banner,.lucha .banner,.triunfo .banner").delay(1500).queue(function(next) {$(this).addClass("bn-dark");next();});
   $("#texto").delay(1800).fadeIn(1000);
   $("#autor").delay(2800).fadeIn(500);

   $("#intro-caja,#intro-texto").hide();
   $("#intro-caja").delay(1500).fadeIn(2000);
   $("#intro-texto").delay(2000).fadeIn(1500);

   $("#manana-texto").hide();
   $("#manana-texto").delay(500).fadeIn(1000);

   $("#top-nav-button").click(function(){
       $("#top-nav-ul").slideToggle();
   });
   $('#top-nav-button').click(function(){
      $(this).toggleClass('open');
   });
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('#manana-caja').css({'opacity':( 100-scroll/4 )/100});
    $('.manana .banner').css({'-webkit-filter': 'grayscale(' + ( 100-scroll/4 )/100}) + '%)';
});

/* Fix alto de pantalla para móviles */
if ($(window).width() < 800) {
   $(document).ready(function(){
      $('.inicio header,.lucha header,.triunfo header,.manana .content-a').css({'height': $(window).height()});
      $('.manana .banner').css({'height': $(window).height() * 1.5 });
   });
}

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
