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
