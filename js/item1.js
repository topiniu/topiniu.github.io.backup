/**
 * Created by topiniu on 2017/3/27.
 */

function loadImg(){

    var img = $("<img>");
    var box = $("#imgBox");

    // alert(img.attr("src"));
    var url = "http://topiniu.com/img/testImg.png";
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
    //
    // setInterval(function () {
    //     console.log($(img).height());
    //    if($(img).height()>0){
    //        console.log($(img).height());
    //        box.append($(img));
    //
    //        $(box + "img:nth-child(1)").css("opacity","0");
    //    }
    // },200)
}

