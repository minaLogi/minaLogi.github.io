var _window = $(window)
scr();

function scr(){
    var scrollTop = _window.scrollTop();
    if (scrollTop > 260){
        $("header").css({"height" : "60px"});
    }else{
        $("#site-header").css({"height" : 320 - scrollTop +"px"});
    }
};

window.onscroll = scr;