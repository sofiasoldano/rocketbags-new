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
    
    $('.partners-slider').flexslider({
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
    
    $(".lnk-unique").click(function() {
        setTimeout(function(){
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
        }, 70);
    });


});
    
function activeNumber(){
     var str = $( ".flex-active" ).text();
    $('.active-number').html( str );
    console.log(str); 
}
$(".number-change").click(function() {
        activeNumber();
        console.log("hola");
    });