/* Tabla de partidos */
if ($(window).width() >= 800) {
   var partidodestacado;

   $(".partidos-psoe").hover(function() {partidodestacado = $(".partidos-psoe");partidosHover();},function() {partidosHoverOut()});
   $(".partidos-iu").hover(function() {partidodestacado = $(".partidos-iu");partidosHover();},function() {partidosHoverOut()});
   $(".partidos-pp").hover(function() {partidodestacado = $(".partidos-pp");partidosHover();},function() {partidosHoverOut()});
   $(".partidos-otros").hover(function() {partidodestacado = $(".partidos-otros");partidosHover();},function() {partidosHoverOut()});

   function partidosHover() {
      partidodestacado.addClass("partido-destacado");
      $(".tabla-partidos").addClass("tabla-partido-destacado")
   }

   function partidosHoverOut() {
      partidodestacado.removeClass("partido-destacado");
      $(".tabla-partidos").removeClass("tabla-partido-destacado")
   }
}
