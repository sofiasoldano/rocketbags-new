<?php $page_name = "contact" ?>
<?php include('header.php'); ?>

<section class="main">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="title-description">
                    <p>Got a question about Stock or Tailor-Made Bags?<br class="hidde-xs"> <b> We'll get back to you within 2 hours</b></p>
                </div>
            </div>
        </div>
        <div class="row form-container">
            <div class="col-lg-6">
                <div class="title">Contact Form</div>
                <div class="input-container">
                    <input id="name" type="text" name="name" placeholder="Name">
                </div>

                <div class="input-container">
                    <input id="company" type="text" name="company" placeholder="Company">
                </div>
                
                <div class="input-container">
                    <input id="email" type="email" name="email" placeholder="Email">
                </div>

                <div class="input-container">
                    <input id="telephone" type="tel" name="telephone" placeholder="Phone">
                </div>
                <div class="input-container">
                    <p class="subtitle">How would you like to be contacted?</p>
                    <input id="contact-email" type="radio" name="contact" value="email"> <label for="contact-email">Email</label>
                    <input id="contact-phone" type="radio" name="contact" value="phone"> <label for="contact-phone">Phone</label>
                </div>
                <div class="input-container">
                    <label for="message" class="subtitle">How can we help?</label>
                    <textarea id="message" name="message" placeholder="Feel free to add as much information as you'd like"></textarea>
                </div>
                <input type="submit" class="submit btn-full upper" value="Send quote">
            </div>
            <div class="col-lg-6">
                <div class="title">Prefer to talk in Person?</div>
                <div class="text-center">
                    <a href="tel:03337000133" class="btn-full upper">Call us on <b>03 33 7000 133</b></a>
                    <div class="box">
                        <p class="blue">Unit 15, Spectrum House,<br> 32-34 Gordon House Road, <br>London, NW5 1LP</p>
                    </div>
                    <div class="box">
                        <a href="mailto:sales@rocketbags.co.uk" class="red"><b>sales@rocketbags.co.uk</b></a>
                    </div>
                    <div class="box">
                        <p class="red">Opening Hours:<br> Mon-Fri: 9am - 6pm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.6156409146315!2d-0.1495632536099376!3d51.556138422362416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761af8bd000db5%3A0x39b493b84ab9a25d!2sSpectrum+House%2C+32-34+Gordon+House+Rd%2C+Highgate%2C+London+NW5+1LP%2C+Reino+Unido!5e0!3m2!1ses!2sar!4v1554137815932!5m2!1ses!2sar"  style="border:0"></iframe>
</section>

<section class="partners">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="title">We Have Created 100% Unique Tailor-Made Bags for <b>These Well-Known Brands: </b> </div>
                <div class="partners-slider">
                    <ul class="slides">
                        <li>
                            <img src="img/partners/01-British_Gas_logo.png" alt="British Gas">
                            <img src="img/partners/02-pfizer_logo.png" alt="Pfizer">
                            <img src="img/partners/03-Wimbledon_logo.png" alt="Wimbledon">
                            <img src="img/partners/04-client-logo-deutschebank.png" alt="Deutsche Bank">
                            <img src="img/partners/05-Marks-and-Spencer-Logo.png" alt="Marks and Spencer">
                            <img src="img/partners/06-logo-herbalife.png" alt="Herbalife">
                        </li>
                        <li>
                            <img src="img/partners/07-Boots_logo.png" alt="Boots">
                            <img src="img/partners/08-client-logo-thomson.png" alt="Thomson">
                            <img src="img/partners/09-client-logo-capita.png" alt="Capita">
                            <img src="img/partners/10-AstonMartin_logo.png" alt="Aston Martin">
                            <img src="img/partners/11-client-logo-champneys.png" alt="Champneys">
                            <img src="img/partners/12-client-logo-metro.png" alt="Metro">
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</section>
<?php include('footer.php'); ?>