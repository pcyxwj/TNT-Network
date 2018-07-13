/*弹出框的显示与隐藏*/
$(function() {
    $(".gouwuche,#shoppingTanchukuang").bind("mouseover",function() {
        $("#shoppingTanchukuang").show();
    }).bind("mouseout",function () {
        $("#shoppingTanchukuang").hide();
    }).bind("mousemove",function () {
        a = $(".gouwuche").offset();
        $("#shoppingTanchukuang").css("top", a.top  -40 + "px");
        $("#shoppingTanchukuang").css("left", a.left - 385 + "px");
    });
})

$(function() {
    $(".gouwuche2,#shoppingTanchukuang2").bind("mouseover",function() {
        $("#shoppingTanchukuang2").show();
    }).bind("mouseout",function () {
        $("#shoppingTanchukuang2").hide();
    }).bind("mousemove",function () {
        a = $(".gouwuche2").offset();
        $("#shoppingTanchukuang2").css("top",35 + "px");
        $("#shoppingTanchukuang2").css("left", a.left + -300 + "px");
    });
})

/*手机下拉框的显示与隐藏*/
$(function() {
    $("#shouji").bind("mouseover",function() {
        $("#shoujixiala").slideDown();
        $("#daohanglan").css("backgroundColor","white");
    });
    $("#xialakuang").bind("mouseover",function() {
        $("#shoujixiala").show();
        $("#daohanglan").css("backgroundColor","white");
    });
    $("#xialakuang").bind("mouseout",function () {
        $("#shoujixiala").hide();
        $("#daohanglan").css("backgroundColor","#ebebeb");
    });
})

$(function() {
    $("#shouji2").bind("mouseover",function() {
        $("#shoujixiala2").slideDown();
        $("#xuanfu").css("backgroundColor","white");
    });
    $("#xialakuang2").bind("mouseover",function() {
        $("#shoujixiala2").show();
        $("#xuanfu").css("backgroundColor","white");
    });
    $("#xialakuang2").bind("mouseout",function () {
        $("#shoujixiala2").hide();
        $("#xuanfu").css("backgroundColor","#ebebeb");
    });
})


/*轮播图效果*/

//1.点击相应按钮轮播图会到达相应位置

/*$(function play() {
    $(".indicators li").click(function () {
        //获取.carousel-indicators li 的序号值,即被点击的指标的序号
        carousel_index = $(".indicators li").index(this);
        indicators = document.getElementsByClassName("indicators");  //指标
        inner = document.getElementsByClassName("inner");       //项目
        indicators_li = document.getElementsByTagName("li");
        inner_img = document.getElementsByTagName("img");

        for(var i = 26; i < 29; i++) {
            if(i !== carousel_index + 28) {
                inner_img[i - 20].style.opacity="0";
            } else if(i == carousel_index + 28){
                inner_img[8].style.opacity="1";
                inner_img[i - 20].style.backgroundColor = "red";
            }
        }
        if($(".indicators li").index !== carousel_index){
            $(".indicators li").removeClass("moveactive");
        }
        $(this).addClass("moveactive");

        console.log(carousel_index + 28);
        console.log(i);
    });
})*/
//carousel_index = $(".indicators li").index(this);
$(function(carousel_index) {
    $(".indicators li").click(function () {
        //获取.carousel-indicators li 的序号值,即被点击的指标的序号
        carousel_index = $(".indicators li").index(this);
        if (carousel_index == 0) {
            $(".inner :nth-child(2)").fadeTo("slow", 0);
            $(".inner :nth-child(3)").fadeTo("slow", 0);
            $(".inner :nth-child(1)").fadeTo("slow", 1);
        } else if (carousel_index == 1) {
            $(".inner :nth-child(1)").fadeTo("slow", 0);
            $(".inner :nth-child(3)").fadeTo("slow", 0);
            $(".inner :nth-child(2)").fadeTo("slow", 1);
        } else if (carousel_index == 2) {
            $(".inner :nth-child(1)").fadeTo("slow", 0);
            $(".inner :nth-child(2)").fadeTo("slow", 0);
            $(".inner :nth-child(3)").fadeTo("slow", 1);
        }

        if ($(".indicators li").index !== carousel_index) {
            $(".indicators li").removeClass("moveactive");
        }
        $(this).addClass("moveactive");
    });
})

//2.让轮播图自动播放




/*点击时会出现框架*/
$(function () {
    $(".bianse_pic").mouseover(function () {
        $(this).css("opacity","0.88");
    }).mouseout(function () {
        $(this).css("opacity","1");
    });
})

$(function () {
    $(".small_kuang").mouseover(function () {
        $(this).css("opacity","0.75].'");
    }).mouseout(function () {
        $(this).css("opacity","1");
    });
})

$(function () {
    $(".czyynr img").mouseover(function () {
        $(this).css("opacity","0.8");
    }).mouseout(function () {
        $(this).css("opacity","1");
    });
})

$(function () {
    $(".ltjxnr img").mouseover(function () {
        $(this).css("opacity","0.8");
    }).mouseout(function () {
        $(this).css("opacity","1");
    });
})

$(function () {
    $(".small_kuang").mouseover(function () {
        $(this).find(".shangping_chuxiao").css("opacity","1");
        $(this).find(".shangpingjiage").css("opacity","0");
        $(this).find(".buttonkuang_xia").css("opacity","1");
        $(this).find(".chakanxiangqing").css("opacity","1");
        $(this).find(".jrgwc_btn").css("opacity","1");
    }).mouseout(function () {
        $(this).find(".shangping_chuxiao").css("opacity","0");
        $(this).find(".shangpingjiage").css("opacity","1");
        $(this).find(".buttonkuang_xia").css("opacity","0");
        $(this).find(".chakanxiangqing").css("opacity","0");
        $(this).find(".jrgwc_btn").css("opacity","0");
    });
})

$(function () {
    $(".jrgwc_btn").prev().css("left","45px");
})

/*点击按钮显示相应颜色的手机*/
$(function () {
    $(".shangping_button").mouseover(function () {
        smallkuang_index = $("#content .small_kuang").index(this);
        console.log(smallkuang_index);
        shangping_button = $(".shangping_button").index(this);
        if(shangping_button == 0) {
            $(this).parent().parent().children(".shangping_link").children(".shangping_pic2").fadeTo("slow",0);
            $(this).parent().parent().children(".shangping_link").children(".shangping_pic3").fadeTo("slow",0);
            $(this).parent().parent().children(".shangping_link").children(".shangping_pic1").fadeTo("slow",1);
        } else if (shangping_button == 1) {
            $(this).parent().parent().children(".shangping_link").children(".shangping_pic1").fadeTo("slow",0);
            $(this).parent().parent().children(".shangping_link").children(".shangping_pic3").fadeTo("slow",0);
            $(this).parent().parent().children(".shangping_link").children(".shangping_pic2").fadeTo("slow",1);
        } else if (shangping_button == 2) {
            $(this).parent().parent().children(".shangping_link").children(".shangping_pic1").fadeTo("slow",0);
            $(this).parent().parent().children(".shangping_link").children(".shangping_pic2").fadeTo("slow",0);
            $(this).parent().parent().children(".shangping_link").children(".shangping_pic3").fadeTo("slow",1);
        }

        $(this).css("border","2px solid #8D8D8D");

    }).mouseout(function () {
        $(this).css("border","2px solid #cccccc");
    });
})

/*翻页功能*/

$(function () {
    var page = 1;
    var i = 4;
    $(".nex").click(function () {
        var $parent = $(this).parents(".remengshangpinglan");
        var $rmsp_list = $parent.find(".rmsp_list");
        var $rmsp = $parent.find(".rmsp");
        var $rmsp_width = $rmsp.width();
        var len = $rmsp_list.find("li").length;
        var page_count = Math.ceil(len / i) ;
        if( page == page_count ){
            $rmsp_list.animate({ left : '0px'}, "slow");
            page = 1;
        }else{
            $rmsp_list.animate({ left : '-='+$rmsp_width }, "slow");  //通过改变left值，达到每次换一个版面
            page++;
        }
    });

    $(".pre").click(function () {
        var $parent = $(this).parents(".remengshangpinglan");
        var $rmsp_list = $parent.find(".rmsp_list");
        var $rmsp = $parent.find(".rmsp");
        var $rmsp_width = $rmsp.width();
        var len = $rmsp_list.find("li").length;
        var page_count = Math.ceil(len / i) ;
        if( page == 1 ){
            $rmsp_list.animate({ left :'-='+$rmsp_width*(page_count-1)}, "slow");
            page = page_count;
        }else{
            $rmsp_list.animate({ left : '+='+$rmsp_width }, "slow");  //通过改变left值，达到每次换一个版面
            page--;
        }
    });


})


/*悬浮框的显示*/
function getTop() {
   xuanfu_scrollTop = $(document).scrollTop();
    if($(document).scrollTop() > 150 ) {
        $("#xuanfu").slideDown("fast");
    } else if ($(document).scrollTop() <= 150) {
        $("#xuanfu").css("display","none")
    }
}
setInterval("getTop()",500);

