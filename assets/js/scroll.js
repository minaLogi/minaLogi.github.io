var _window = $(window)
scr();

function scr(){
    var scrollTop = _window.scrollTop();
    if (scrollTop > 260){
        $("header").css({"height" : "60px"});
        $("#headerBackground").css({"filter" : "blur(13px)"});
    }else{
        $("header").css({"height" : 320 - scrollTop +"px"});
        $("#headerBackground").css({"filter" : "blur("+(scrollTop/20)+"px)"});
    }
};

window.onscroll = scr;