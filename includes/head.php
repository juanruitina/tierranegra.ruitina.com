<?php
   $essay_title = "Donde la tierra era negra";
   if ( isset($quote) && isset($entrevistado) )
   {
      $socialtitle = $quote;
      $title = "Entrevista a " . $entrevistado . " · " . $essay_title;
   }
   else {
      if ( empty($title) )
      {
         $title = $essay_title;
      }
      else
      {
         $title = $title . " · " . $essay_title;
      }
      $socialtitle = $title;
   }

   if ( isset($quote) && isset($entrevistado) )
   {
      $socialdescription = "Entrevista a " . $entrevistado . ".";
      $description = $quote;
   }
   else {
      if ( empty($description) )
      {
         $description = "La minería asturiana deberá echar el cierre en 2018. ¿Estarán preparadas las Cuencas Mineras para despedirse del carbón?";
      }
      $socialdescription = $description;
   }

   if ( empty($socialimg) )
   {
      $socialimg = "castillete.jpg";
   }
?>
<title><?php echo $title; ?></title>
   <meta content="text/html; charset=utf-8" http-equiv="content-type">
   <meta charset="utf-8" />
   <meta content="width=device-width,initial-scale=1,user-scalable=0" name="viewport" />
   <meta content="yes" name="mobile-web-app-capable" />
   <meta name="description" content="<?php echo $description; ?>">
   <meta name="keywords" content="Cuencas Mineras, minería, minería del carbón, Asturias, Mieres, Langreo, San Martín del Rey Aurelio, Laviana, Aller, Lena, hulla, carbón, Hunosa, corrupción, José Ángel Fernández Villa, Jose Luis Alperi, José Ignacio Prendes, Nacho Prendes, periodismo de datos, reportaje inmersivo, reportaje" />
   <meta name="apple-mobile-web-app-capable" content="yes">
   <meta name="apple-mobile-web-app-status-bar-style" content="black">
   <link rel="apple-touch-icon" href="/img/icon/launcher-icon-4x.png">
   <link href="manifest.json" rel="manifest" />
   <link rel="canonical" href="https://tierranegra.ruitina.com/<?php
   $url = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
   echo trim(parse_url($url, PHP_URL_PATH), '/'); ?>" />
   <meta property="og:locale" content="es_ES" />
   <meta property="og:title" content="<?php echo $socialtitle; ?>" />
   <meta property="og:type" content="article" />
   <meta property="og:image" content="https://tierranegra.ruitina.com/img/<?php echo $socialimg ?>" />
   <meta property="og:description" content="<?php echo $socialdescription ?>" />
   <meta property="fb:app_id" content="404925759622264" />
   <meta name="author" content="Juan Ruitiña" />
   <meta name="twitter:card" content="summary_large_image"/>
   <meta name="twitter:description" content="<?php echo $socialdescription ?>" />
   <meta name="twitter:title" content="<?php echo $socialtitle ?>"/>
   <meta name="twitter:site" content="@juanruitina" />
   <meta name="twitter:creator" content="@juanruitina" />
   <meta name="twitter:domain" content="ruitina.com"/>
   <link rel="stylesheet" href="css/style.css" />
   <!--[if lt IE 9]>
   <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
   <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
   <link rel="stylesheet" type="text/css" href="css/ie.css" />
   <![endif]-->
   <noscript>
      <link rel="stylesheet" type="text/css" href="css/ie.css" />
   </noscript>
</head>
