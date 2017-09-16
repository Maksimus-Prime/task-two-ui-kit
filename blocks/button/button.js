require("./button.less");

$(".button").each(function(i){
    $(this).click(function(e){
        var ripple = $(this);
        if(ripple.find(".effect").length == 0) {
            ripple.append("<span class='effect'></span>");
        }
        var efekt = ripple.find(".effect");
        efekt.removeClass("replay");
        if(!efekt.height() && !efekt.width())
        {
            var d = Math.max(ripple.outerWidth(), ripple.outerHeight());
            efekt.css({height: d/4, width: d/4});
        }
        var x = e.pageX - ripple.offset().left - efekt.width()/2;
        var y = e.pageY - ripple.offset().top - efekt.height()/2;
        efekt.css({
            top: y+'px',
            left:x+'px'
        }).addClass("replay");
    })
});