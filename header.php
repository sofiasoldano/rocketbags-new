<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Rocket Bags</title>

    <!-- Style -->
    <link href="css/vendors/bootstrap.min.css" rel="stylesheet">
       <link href="css/vendors/flexslider.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
      
  </head>

  <body class="page-<?php echo $page_name; ?>">

    <header>
        <div class="logo">
            <img src="img/logo.png" width="210" alt="Rocket Bags" class="img-responsive">
        </div>
        <div class="navigation">
            <div class="info">
                <a class="mail-lnk" href="mailto:sales@rocketbags.co.uk">sales@rocketbags.co.uk</a>
                <a class="tel-lnk" href="tel:03337000133">0333 7000 133</a>
                <img src="img/header-logos.png" width="150" alt="Certifications">
            </div>
            <div class="sections">
                <ul>
                    <li><a <?php if ( $page_name == "home" ) echo 'class="active"'; ?> href="page-home.php">Home</a></li>
                    <li><a <?php if ( $page_name == "bags" ) echo 'class="active"'; ?> href="">Bags</a></li>
                    <li><a <?php if ( $page_name == "tailor-made" ) echo 'class="active"'; ?> href="">Tailor-made bags</a></li>
                    <li><a <?php if ( $page_name == "about" ) echo 'class="active"'; ?> href="">About</a></li>
                    <li><a <?php if ( $page_name == "blog" ) echo 'class="active"'; ?> href="">Blog</a></li>
                    <li><a <?php if ( $page_name == "contact" ) echo 'class="active"'; ?> href="">Contact</a></li>
                    <li><a href="" class="btn-full upper">Quick Quote</a></li>
                    <li><a href="" class="search-btn">Search</a></li>
                </ul>
            </div>
        </div>
        <div class="mobile-navigation">
            <a class="tel-lnk" href="tel:03337000133">0333 7000 133</a>
            <div class="menu-icon">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </header>
