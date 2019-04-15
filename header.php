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
                <a class="tel-lnk btn-full" href="tel:03337000133">0333 7000 133</a>
                <img src="img/header-logos.png" class="certifications" width="150" alt="Certifications">
            </div>
            <div class="sections">
                <ul>
                    <li><a <?php if ( $page_name == "home" ) echo 'class="active"'; ?> href="page-home.php">Home</a></li>
                    <li class="categories">
                        <a class="<?php if ( $page_name == "category" || $page_name == "categories") echo 'active'; ?> categories-lnk" href="page-category.php"> Bags</a>
                        <div class="categories-dropdown">
                            <div class="arrow"></div>
                            <div class="description">
                                <img src="img/dropdown.png" width="220">
                                <div>
                                    <p>Get your brand on the <b>UK's biggest range of  'ready-to-go'</b> promotional bags!</p>
                                    <a class="red-lnk arrow-right" href="#">Find out more</a>
                                </div>
                            </div>
                            <div class="links">
                                <a href="page-category.php">Backpacks & Rucksacks </a>
                                <a href="page-category.php">Bags for life</a>
                                <a href="page-category.php">Beach bags</a>
                                <a href="page-category.php">Conference & Exhibition</a>
                                <a href="page-category.php">Cooler Bags </a>
                                <a href="page-category.php">Cosmetic Bags</a>
                                <a href="page-category.php">Drawstring Bags</a>
                                <a href="page-category.php">Duffel Bags</a>
                                <a href="page-category.php">Eco Friendly Bags</a>
                                <a href="page-category.php">Laptop Bags</a>
                                <a href="page-category.php">Paper Bags</a>
                                <a class="red-lnk arrow-right" href="page-categories.php">View more</a>
                            </div>
                        </div>
                    </li>
                    <li><a <?php if ( $page_name == "tailor-made" ) echo 'class="active"'; ?> href="page-tailor-made.php">Tailor-made bags</a></li>
                    <li><a <?php if ( $page_name == "about" ) echo 'class="active"'; ?> href="page-about.php">About</a></li>
                    <li><a <?php if ( $page_name == "blog" ) echo 'class="active"'; ?> href="index.php">Blog</a></li>
                    <li><a <?php if ( $page_name == "contact" ) echo 'class="active"'; ?> href="page-contact.php">Contact</a></li>
                    <li><button type="button" class="btn-full upper" data-toggle="modal" data-target="#quick-quote">Quick Quote</button></li>
                    <li><a href="#" class="search-btn">Search</a><input class="search-input" type="search" placeholder="Search"></li>
                </ul>
            </div>
            <div class="info-mobile">
                <a class="tel-lnk" href="tel:03337000133">Call us now</a>
                <a class="mail-lnk" href="mailto:sales@rocketbags.co.uk">Email us</a>
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