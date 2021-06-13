/* Animaciones */
$(document).ready(function(){
   $("#caja").delay(500).fadeIn(2000);
   $("#texto").delay(1500).fadeIn(1500);
   $("#top-nav").delay(3000).slideDown(500);
   $("#autor").delay(3000).fadeIn(500);

   $("#manana-texto").delay(500).fadeIn(1000);

   $("#top-nav-button").click(function(){
       $("#top-nav-ul").slideToggle();
   });
   $('#top-nav-button').click(function(){
      $(this).toggleClass('open');
   });
});

if ($(window).width() >= 800) {
   $(window).scroll(function() {
       var scroll = $(window).scrollTop();
       var scrollAnimationSpeed = 4;
       $('#manana-caja').css({'opacity':( 100-scroll/scrollAnimationSpeed )/100});
       $('.manana .banner').css({'-webkit-filter': 'grayscale(' + ( 100-scroll/scrollAnimationSpeed )/100}) + '%)';
   });
}

/* RESIZE */
$(window).resize(function(){
    // If there are multiple elements with the same class, "main"
    $('.esfera').each(function() {
        $(this).height($(this).width());
    });
}).resize();

$(".siguiente, .button-link").hover(
   function() {
      $(this).addClass("button-link-hover");
   },
   function() {
      $(this).removeClass("button-link-hover");
   }
);

$(".siguiente, .button-link").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

/* Abbr en móviles http://aninnovativeweb.tumblr.com/post/754483543/using-abbr-on-touch-devices */
if ($(window).width() < 800) {
   $('abbr').each(function() {
      $(this).click(function() {
         alert($(this).attr('title'));
      });
   });
}
