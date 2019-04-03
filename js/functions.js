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
    
    if($( window ).width() > 768){
        $('.slider-prod').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: false,
            animationLoop: false,
            slideshow: false,
            sync: ".slider-prod-thumbs"
        });

        $('.slider-prod-thumbs').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 210,
            minItems: 3,
            maxItems: 3,
            itemMargin: 5,
            asNavFor: '.slider-prod'
        });
    }
  
    
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
        
        $('.slider-prod').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: true,
            animationLoop: false,
            slideshow: false
        });
        
        $('.related-slider').addClass('flexslider');
        $('.related-slider').flexslider({
            selector: '.slides > .col-6',
            animation: "slide",
            animationLoop: false,
            slideshow: true,
            animationLoop: true,
            directionNav: false,
            controlNav: true,
            itemWidth: 250,
            minItems: 2,
            maxItems: 2,
            itemMargin: 20,
        });
        
         $('.team-slider').addClass('flexslider');
        $('.team-slider').flexslider({
            selector: '.row > .col-md-6',
            animation: "slide",
            animationLoop: false,
            slideshow: true,
            animationLoop: true,
            directionNav: false,
            controlNav: true,
            itemWidth: 500,
            minItems: 1,
            maxItems: 1
        });
        
        
        if( $('#features-list').length ) {
            $('#features-list').removeClass('show');
        }
        
    }
    
    if( $('.gallery').length ) {
        $('.gallery-container').masonry({
          itemSelector: '.gallery-image'
        });
    }
    
    if( $('.content-show-more').length ) {
       initReadMore();
    }

    if( $('.product-container').length ) {
        initReadMore();
        $('.product-container .nav-tabs a').click(function() {
            setTimeout(function(){
                initReadMore();
            }, 160);
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

function initReadMore(){
    var charQuantity = $('.content-show-more').attr('data-chars');
    charQuantity = parseInt(charQuantity);

    $('.content-show-more').readmore({
        speed: 75,
        collapsedHeight: charQuantity,
        embedCSS: false,
        blockCSS: 'display: block; width: 100%;',
        moreLink: '<div class="morelink"><a href="#" class="red-lnk arrow-down">Read more</a></div>',
        lessLink: '<div class="morelink"><a href="#" class="arrow-up red-lnk">Read less</a></div>'
    });
}