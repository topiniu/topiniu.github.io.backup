/**
 * Created by topiniu on 2017/3/7.
 */
$(function () {
   $(".project_preview a").hover(function(){
       $(this).css({
           "background-color":"rgba(255,255,255,0)"
       });
   },function(){
       $(this).css({
           "background-color":"rgba(255,255,255,0.3)"
       });
   }) ;


    $(".item3 .project_preview").mouseenter(function(){
        // alert(0);
        // $(this + " a").css({
        //         "background-color":"rgba(255,255,255,0)"
        // });

        var thisPX = $(this).offset().left;
        var thisPY = $(this).offset().top;

        var boxWidth = $(this).outerWidth();
        var boxHeight = $(this).outerHeight();

        $(this).addClass("threeD");

        $(".threeD").mousemove(function(e){
            var mouseX = e.pageX - thisPX;
            var mouseY = e.pageY - thisPY;

            var X = mouseX - boxWidth/2;
            var Y = boxHeight/2 - mouseY;

            $(".threeD").css({
                "transform":"rotateY("+X/10+"deg) rotateX("+Y/10+"deg)"
            });
        });
    });

    $(".item3 .project_preview").mouseleave(function(){
        $(this).removeClass("threeD");
        $(this).css({
            "transform": "rotateY(0deg) rotateX(0deg)"
        });

        // $(this + " a").css({
        //     "background-color":"rgba(255,255,255,0.3)"
        // });
    })
});