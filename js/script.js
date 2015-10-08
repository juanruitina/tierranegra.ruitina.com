/* Parallax */
if ($(window).width() >= 800) {
   $(window).stellar();
};

/* Animaciones */
$(document).ready(function(){
   //$("#top-nav,#caja,#texto,#autor,#manana-texto").hide();

   //$(".inicio .banner,.lucha .banner,.triunfo .banner").delay(1500).queue(function(next) {$(this).addClass("bn-dark");next();});

   $("#caja").delay(500).fadeIn(2000);
   $("#texto").delay(1500).fadeIn(1500);
   $("#top-nav").delay(3000).slideDown(500);
   $("#autor").delay(3000).fadeIn(500);

   /*$("#intro-caja,#intro-texto").hide();
   $("#intro-caja").delay(1500).fadeIn(2000);
   $("#intro-texto").delay(2000).fadeIn(1500);*/

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
    var scrollAnimationSpeed = 4;
    $('#manana-caja').css({'opacity':( 100-scroll/scrollAnimationSpeed )/100});
    $('.manana .banner').css({'-webkit-filter': 'grayscale(' + ( 100-scroll/scrollAnimationSpeed )/100}) + '%)';
});

/* Fix alto de pantalla para móviles */
if ($(window).width() < 800) {
   $(document).ready(function(){
      $('.inicio header .content-a,.lucha header,.triunfo header,.manana header .content-a').css({'height': $(window).height()});
      $('.inicio header .banner').css({'height': $(window).height() * 1.2 });
      $('.manana header .banner').css({'height': $(window).height() * 1.5 });
      $('.siguiente').css({'height': $(window).height() * 0.6 });
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

/* Botón de siguiente */
$(".siguiente a").each(function() {
    var href = this.href;
    $(".siguiente").addClass("siguiente-hover").click(function() { location.href = href; });
});
