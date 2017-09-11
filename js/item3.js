/**
 * Created by topiniu on 2017/3/7.
 */
$(function () {

    $(".project_preview a").hover(function () {
            $(this).css({
                "background-color": "rgba(0,0,0,0)"
            });
        }, function () {
            $(this).css({
                "background-color": "rgba(0,0,0,0.3)"
            });
        });


        $(".item3 .project_preview").mouseenter(function () {
            // alert(0);
            // $(this + " a").css({
            //         "background-color":"rgba(255,255,255,0)"
            // });

            var thisPX = $(this).offset().left;
            var thisPY = $(this).offset().top;

            var boxWidth = $(this).outerWidth();
            var boxHeight = $(this).outerHeight();

            $(this).addClass("threeD");

            $(".threeD").mousemove(function (e) {
                var mouseX = e.pageX - thisPX;
                var mouseY = e.pageY - thisPY;

                var X = mouseX - boxWidth / 2;
                var Y = boxHeight / 2 - mouseY;

                $(".threeD").css({
                    "transform": "rotateY(" + X / 10 + "deg) rotateX(" + Y / 10 + "deg)"
                });
            });
        });

        $(".item3 .project_preview").mouseleave(function () {
            $(this).removeClass("threeD");
            $(this).css({
                "transform": "rotateY(0deg) rotateX(0deg)"
            });

            // $(this + " a").css({
            //     "background-color":"rgba(255,255,255,0.3)"
            // });
        })
});

function showProject(flag){
    if(flag==1) {
        $(".item3 .project_preview").css({
            "transform": "scale(1.1) rotateY(0deg) rotateX(0deg)",
            "transition": " all .3s"
        });

        setTimeout(function () {
            $(".item3 .project_preview").css({
                "transform": "scale(1) rotateY(0deg) rotateX(0deg)"
            });
        }, 300)
    }else{
        $(".item3 .project_preview").css({
            "transform": "scale(0) rotateY(0deg) rotateX(0deg)",
            "transition": " all .1s"
        });
    }
}

function mobileShowProLink(flag) {
    var propreview = $(".project_preview");

    if(parseInt(propreview.css("right").replace("px",""))<0){

        setTimeout(function () {
            propreview.each(function (index) {
                $(this).css("right","0");
            });
        },1000);

    }else if( propreview.css("height")==="70px"){//mobile?
        propreview.each(function (index) {
                $(this).css("right","-100%");
        });
    }
}

//Version 2 js method
function showLine(flag){
    console.log(flag);
    if(!flag){
        $('.type3_info_container').find('.j_line_text').removeClass('line_text_show');
        $('.type3_info_container').find('.j_line').removeClass('pure_line_show');
        return;
    }
    var items = $('.type3_info_container').find('.j_line_text');
    items.each(function(i,e){
        (function(i,e){
            setTimeout(function(){
            $(e).addClass('line_text_show');
            console.log(i);
        },5000)
    })(i,e);
    })
    $('.type3_info_container').find('.j_line').addClass('pure_line_show')
}