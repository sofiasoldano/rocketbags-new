$(document).ready(function() {
    $(".menu-icon").click(function(){
        if($(this).hasClass("open")){
            $("header .navigation").removeClass("show");  
            $(this).removeClass("open");
        } else{
            $("header .navigation").addClass("show");  
            $(this).addClass("open");
        }
    });
    
    $(".scroll-to-lnk").click( function(){
		event.preventDefault();
		$('html, body').animate({
		    scrollTop: $(".scroll-to").offset().top
		}, 800);
	});

    selectedOnScroll('.main', '#lnk-bags');
    selectedOnScroll('.easy-process', '#lnk-process');
    selectedOnScroll('.features', '#lnk-why')
    selectedOnScroll('.what-do', '#lnk-what-we-do')
    selectedOnScroll('.items', '#lnk-what-we-believe')
    selectedOnScroll('.team', '#lnk-team')
    selectedOnScroll('.get-quote', '#lnk-touch')
    
    var hide = false;
    $('body').click( function(){
        if (hide) $('.search-input').removeClass('active');
        hide = true;
    });
    $(".search-btn").click( function(){
		event.preventDefault();
		$(".search-input").addClass('active');
        hide = false;
	});
    $(".search-input").click( function(){
		$(".search-input").addClass('active');
        hide = false;
	});
    
    $(".categories-lnk").click( function(){
        event.preventDefault();
    });
    
    arrowDropdown();
    fixedElement('.scroll-menu', 0)

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

    functionsMobile();
    functionsDesktop();
    
     $( window ).resize(function() {
        arrowDropdown();
        functionsMobile();
        functionsDesktop();
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
        speed: 200,
        collapsedHeight: charQuantity,
        embedCSS: false,
        blockCSS: 'display: block; width: 100%;',
        moreLink: '<div class="morelink"><a href="#" class="red-lnk arrow-down">Read more</a></div>',
        lessLink: '<div class="morelink"><a href="#" class="arrow-up red-lnk">Read less</a></div>'
    });
}

function arrowDropdown(){
    var categoriesPosition = $(".categories-lnk").position().left;
    var value = categoriesPosition - (($(window).width()/2) - ($(".categories-dropdown").width()/2)) + 30;
    $(".categories-dropdown .arrow").css("left", value);
}

function functionsDesktop(){
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
}

function functionsMobile(){
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
        
        
        
    }
    
    if($( window ).width() < 990){
        var dropdownHeight = $('.categories-dropdown').outerHeight();
        $('.categories-dropdown').css('height', 0);
        
        $(".categories-lnk").click( function(){
            if($('.categories-dropdown').hasClass("active")){
                $('.categories-dropdown').removeClass("active");
                $('.categories-dropdown').css('height', 0);
            } else{
                $('.categories-dropdown').addClass("active");
                $('.categories-dropdown').css('height', dropdownHeight);
            }
        });
        
        
        if( $('#features-list').length ) {
            $('#features-list').removeClass('show');
        }
        
        if( $('.features-list').length || $('#features-list').length ) {
            $('.feature').click(function() {
                if($(this).hasClass("active")){
                    $('.feature').removeClass("active");
                } else{
                    $('.feature').removeClass("active");
                    $(this).addClass("active");
                }
            });
        }
    }
}

function scrollTo(go){
    $('html, body').animate({
        scrollTop: $(go).offset().top - 50
    }, 800);
}

function selectedOnScroll(element, selected, y_point){
    
    if( $(selected).length ) {
        $(window).scroll( function(){
            var top_of_object =  $(element).offset().top - 50;
            var top_of_window = $(window).scrollTop();
            var bottom_of_object =  $(element).offset().top + $(element).outerHeight() - 50;

            $(selected).removeClass('selected');
            if( top_of_window > top_of_object){
                $(selected).addClass('selected');
            }
            if( bottom_of_object < top_of_window ){
               $(selected).removeClass('selected');
            }
        });
    }
}
 
function fixedElement(element, y_point){
    $(window).scroll( function(){
        $(element).each( function(i){
            var top_of_object =  $(this).offset().top - y_point;
            var top_of_window = $(window).scrollTop();

            if( top_of_window < top_of_object ){
                $(element).removeClass('fixed');
            }
            else{
                $(element).addClass('fixed');
            } 
        });
    });
}

function changeColor(url, lnk){
    event.preventDefault();
    $(lnk).attr('src', url);
}