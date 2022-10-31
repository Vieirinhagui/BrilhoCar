$("#img-scroll").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
});



$(document).ready(function(){
    const windowwidth = $(document).width();
    if(windowwidth<=450 && windowwidth>=390){
        $("#img-menu").css("display","flex");
        $(".bnt-navbar").css("display","none");
    }
    $("#img-menu").click(function(){
        $("#img-menu").css("display","none");
        $(".bnt-navbar").css("display","block");
        $(".bnt-navbar").addClass("hide");
    });
    $("a").click(function(){
        $("#img-menu").css("display","flex");
        $(".bnt-navbar").css("display","none");
    });
});

$(document).ready(function(){
    const windowwidth = $(document).width();
    if(windowwidth<=389 && windowwidth>=350 ){
        $("#img-menu").css("display","flex");
        $(".bnt-navbar").css("display","none");
        $("#img-menu").click(function(){
            $("#img-menu").css("display","none");
            $(".bnt-navbar").css("display","block");
            $(".bnt-navbar").addClass("hide");
            $(".bnt-navbar.hide").css("margin","600px -10px 0 0");
            $(".navbar-bnt").css("margin-right","0");
        });
        $("a").click(function(){
            $("#img-menu").css("display","flex");
            $(".bnt-navbar").css("display","none");
        });
    }
   
});