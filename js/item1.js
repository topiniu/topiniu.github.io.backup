/**
 * Created by topiniu on 2017/3/27.
 */

function loadImg(){

    var img = $("<img>");
    var box = $("#imgBox");

    // alert(img.attr("src"));
    var url = "http://topiniu.top/img/main.jpg";
    img.attr("src",url);
    img.addClass("myImg");
    img.css("z-index","1");

    img.on("load",function () {

        console.log(img.height());

        $("#imgBox img:nth-child(1)").css("opacity","0");
        setTimeout(function () {
            // $("#imgBox img:nth-child(1)").remove();
        },2000);

    });


    box.append(img);

}

function loadP(){
    var rightBox = $("#selfInfoBox .rightBox");

    rightBox.slideDown(800,function () {
        var p = rightBox.children("p");
        p.css("opacity","1");
    });

}