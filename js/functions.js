$(document).ready(function() {
    /*$(".menu-icon").click(function(){
        if($(this).hasClass("open")){
            $("header .mobile-navigation .sections").removeClass("show");  
            $(this).removeClass("open");
        } else{
            $("header mobile-navigation .sections").addClass("show");  
            $(this).addClass("open");
        }
    });*/
    
    $('.partners-hero-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: true,
        controlNav: false,
        itemMargin: 50,
        itemWidth: 180,
        minItems: 6
    });
    
    if($(".lnk-unique").length){
        $(".lnk-unique").click(function() {
            setTimeout(function(){
                initUniqueSlider();
            }, 70);
        });
    } else {
        initUniqueSlider();
    }
    
    if($( window ).width() < 768){
        $('.partners-slider').addClass('flexslider');
         $('.partners-slider').flexslider({
            animation: "slide",
            animationLoop: false,
            slideshow: true,
            animationLoop: true,
            directionNav: false,
            controlNav: true
        });
        
        $('.customised-slider').addClass('flexslider');
         $('.customised-slider').flexslider({
            animation: "slide",
            animationLoop: false,
            slideshow: true,
            animationLoop: true,
            directionNav: false,
            controlNav: true
        });
    }
    
    if( $('.gallery').length ) {
        $('.gallery-container').masonry({
          itemSelector: '.gallery-image'
        });
    }
    
    if( $('#content-show-more').length ) {
        console.log("works!");

        var content = document.getElementById('content-show-more');
        var charQuantity = content.dataset.chars;
        charQuantity = parseInt(charQuantity);

        $('#content-show-more').readmore({
            speed: 75,
            collapsedHeight: charQuantity,
            embedCSS: false,
            blockCSS: 'display: block; width: 100%;',
            moreLink: '<div class="morelink"><a href="#" class="red-lnk arrow-down">Read more</a></div>',
            lessLink: '<div class="morelink"><a href="#" class="arrow-up red-lnk">Read less</a></div>'
        });
    }


});
    
function activeNumber(){
     var str = $( ".flex-active" ).text();
    $('.active-number').html( str );
    console.log(str); 
}

function initUniqueSlider(){
    $('.unique-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: true,
        animationLoop: true,
        directionNav: true,
        controlNav: true,
        itemWidth: 600,
        minItems: 1,
        after: function(){
            activeNumber();
        }
    });
    $('.unique-slider .flex-control-paging').removeClass('flex-control-paging');
    activeNumber();
}