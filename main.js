$(function(){
    
    $(".header-box").hammer().bind("tap",function (){
        console.log("点击");

        $("header").css({
            height: 0,
            overflow: "hidden"
        })
    })

    $(".header-more").hammer().bind("tap",function (res) {
        $(".menu").css({
            display:"block"
        })
        res.stopPropagation();
    })
    $(":not(.header-more)").hammer().bind("tap",function (res) {
        $(".menu").css({
            display:"none"
        })
    })


    //导航拖拽

    drag(".nav-box");
    drag(".shops");
    function drag(selector){
        
        var startpleace;
        $(selector).hammer().bind("panstart",function(res){
            console.log(1)
            startpleace=$(this).position().left;
            
        })
        $(selector).hammer().bind("panleft",function(res){
            var lefts=startpleace+res.gesture.deltaX;
            if(Math.abs(lefts)>$(this).width()-$(this).parent().width()){
                lefts=-($(this).width()-$(this).parent().width())
            }
           $(this).css({
                left:lefts
           })
        })
        $(selector).hammer().bind("panright",function(res){
            var rights=startpleace+res.gesture.deltaX;
            if(rights> 0){
                rights=0;
            }
           $(this).css({
                left:rights
           })
        })


    }
    //选项卡

    $(".hot-btn li").hammer().bind("tap",function(){
        var index=$(".hot-btn li").index($(this));
        console.log(index);
        $(".hot-btn li").css({
            width:"0.2rem",
            height:"0.2rem"
        })
        $(this).css({
            width:"0.3rem",
            height:"0.3rem"
        })
        $(".hot-box-list").css({
            display:"none",
        })
        $($(".hot-box-list")[index]).css({
            display:"block",
        })
    })




})