$("#img-scroll").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

$(document).ready(function(){
    windowwidth = $(document).width();
    console.log(windowwidth);
});