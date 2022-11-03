$("#img-scroll").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

$(document).ready(function(){
    windowwidth= $(document).width();
    if (windowwidth<=380){
        console.log(windowwidth);
        $(".bnt-navbar").css("display","none");
        $(".bnt-menu").css("display","flex");
        $("#about-us").css("height","300vh");
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
            $(".scroll").css("display","block");
        });
    }
});
$(document).ready(function(){
    windowwidth= $(document).width();
    if (windowwidth<=420 && windowwidth>=381){
        console.log(windowwidth);
        $(".bnt-navbar").css("display","none");
        $(".bnt-menu").css("display","flex");
        $("#about-us").css("height","250vh");
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
            $(".scroll").css("display","block");
        });
    }
});
