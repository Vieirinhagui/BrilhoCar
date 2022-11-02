$("#img-scroll").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

$(document).ready(function(){
    windowwidth = $(document).width();
    if (windowwidth<=420){
        $(".bnt-navbar").css("display","none");
        $(".bnt-menu").css("display","flex");
        $(".bnt-menu").click(function(){
            $(".bnt-navbar-tell").css("display","flex");
            $(".scroll").css("display","none");
        });
        $(".bnt-navbar-tell button").click(function(){
            $(".bnt-navbar-tell").css("display","none");
            $(".scroll").css("display","block");
        });
        $(".bnt-navbar-tell a").click(function(){
            $(".bnt-navbar-tell").css("display","none");
        });
    }
    
});
