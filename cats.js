$(function(){
    $(".darkcat").hover(function(){
        $(".darkcat span.click").css({
            "display":"block",
        });
    },function(){
        $(".darkcat span.click").css({
            "display":"none",
        });
    });
    $(".darkcat").hover(function(){
        $(".eyes").css({
            "display":"none",
        });
    },function(){
        $(".eyes").css({
            "display":"block",
        });
    });
});
$(function(){
    $(".darkcat").on("click", function(){
        $(".all").css({"display":"block"}).animate({
            width: 600,
            opacity:1,
        },1000);
    });
    $(".darkcat").on("click", function(){
        $(".navcat").delay(500).animate({
            opacity: 1,
            top:123,
        },1000);
    });
    $(".darkcat").on("click", function(){
        $(".darkcat").animate({
            opacity:0,
        });
    });
    $(".darkcat").on("click", function(){
        $(".eyes").hide();
    });
});