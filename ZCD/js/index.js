$(function () {
    // fullpage配置代码
    $("#dowebok").fullpage({
        sectionsColor: ["transparent", "skyblue", "purple", "yellow"],
        loopBottom: true,
        verticalCentered: false,
        navigation: false,
        navigationColor: "#ef5c19",
        continuousVertical: true,
        controlArrowColor: "rgba(0, 0, 0, 0.1)",
        anchors: ["page1", "page2", "page3", "page4", "page5","page6","page7","page8"],
        easingcss3: "cubic-bezier(0.175 , 0.3 , 0.320 , 1.5)",
        slidesNavigation: true,
        navigationColor: "#fff",
    });

    // 内容部分
    $(".main_left div").mouseover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index(); //得到当前li的索引号
        $(".main_right .content").eq(index).stop().slideDown(1200).siblings().stop().slideUp(1200);
    });

    // sec2 点击部分
    $(".sec2_main_head ul li").click(function () {
        $(this).addClass("current1").siblings().removeClass("current1");
        var index = $(this).index(); //得到当前li的索引号
        $(".sec2_main_body>.sec2_main_body_content")
            .eq(index)
            .stop()
            .fadeIn(1200)
            .siblings()
            .stop()
            .fadeOut(1200);
    });
    // sec6 点击部分
    $(".sec6_main_head ul li").click(function () {
        $(this).addClass("current1").siblings().removeClass("current1");
        var index = $(this).index(); //得到当前li的索引号
        $(".sec6_main_body>.sec6_main_body_content")
            .eq(index)
            .stop()
            .fadeIn(1200)
            .siblings()
            .stop()
            .fadeOut(1200);
    });
    // sec7 点击部分
    $(".sec7_main_head ul li").click(function () {
        $(this).addClass("current1").siblings().removeClass("current1");
        var index = $(this).index(); //得到当前li的索引号
        $(".sec7_main_body>.sec7_main_body_content")
            .eq(index)
            .stop()
            .fadeIn(1200)
            .siblings()
            .stop()
            .fadeOut(1200);
    });
    function audioAutoPlay(id) {
        var audio = document.getElementById(id);
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    audioAutoPlay('media');

    $(function() {
        var audio = $('#media');
        audio[0].play();
        $("#audio_btn").bind('click', function() {
            $(this).hasClass("off") ? ($(this).addClass("play_yinfu").removeClass("off"), $("#yinfu").addClass("rotate"), $("#media")[0].play()) : ($(this).addClass("off").removeClass("play_yinfu"), $("#yinfu").removeClass("rotate"),
$("#media")[0].pause());
        });

    });

});
