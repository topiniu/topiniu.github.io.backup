/**
 * Created by Administrator on 2017/3/1.
 */
    var clz = "2012";
   $(".item2 .navBtnC .navBtn").click(function (e) {

       $(".year" + clz).css({
           "opacity":"0.3",
           "transform":"scale(1)"
       });

       var marginLeft = $(this).data("item");
       $(".item2 .itemContainer").animate({
           "margin-left":"-" + marginLeft + "px"
       },500);

       var year = $(this).val();
       clz = year;
       $(".year" + clz).css({
           "opacity":"1",
           "transform":"scale(1.4)"
       });

       // initFontSize(1);
       // var year = $(this).val();
       // clz = "year" + year;
       // initFontSize(0);
   });

   // function initFontSize(flag){
   //     if(flag) {
   //         $('.' + clz + " .my_year p").css({
   //             "font-size": "65px"
   //         });
   //         $('.' + clz + " .my_title p").css({
   //             "font-size": "30px"
   //         });
   //         $('.' + clz + " .my_content p").css({
   //             "font-size": "22px"
   //         });
   //     }else{
   //         $('.' + clz + " .my_year p").css({
   //             "font-size":"71px"
   //         });
   //         $('.' + clz + " .my_title p").css({
   //             "font-size":"35px"
   //         });
   //         $('.' + clz + " .my_content p").css({
   //             "font-size":"25px"
   //         });
   //     }
   // }