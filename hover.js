$(document).ready(function(){
    $("img").hover(function(){
        var x = $(this).attr("src");
        var y = $(this).attr("data-alt-src");
        $(this).attr("src", y);
        $(this).attr("data-alt-src", x);
    })
    
});