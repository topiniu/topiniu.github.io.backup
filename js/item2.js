/**
 * Created by Administrator on 2017/3/1.
 */
    var clz = "2012";
   $(".item2 .navBtnC .navBtn").click(function (e) {

       $(".year" + clz).css({
           "opacity":"0.3",
           "transform":"scale(1)"
       });

       var year = $(this).data("val");
       clz = year;
       $(".year" + clz).css({
           "opacity":"1",
           "transform":"scale(1.4)"
       });

       var marginLeft = $(this).data("item");
       $(".item2 .itemContainer").animate({
           "margin-left":"-" + marginLeft + "px"
       },200);

       // initFontSize(1);
       // var year = $(this).val();
       // clz = "year" + year;
       // initFontSize(0);
   });

   function showPanel(flag){
       // alert(0);
       if(flag==1) {

           $(".item2 .itemContainer").animate({textIndent: 0}, {
               step: function (now, ax) {
                   $(this).css({
                       "left": "40.5%",
                       "transform": "scale(1)",
                       "opacity": "1"
                   });
               }
           });

           setTimeout(function () {
               $(".item2 .itemContainer").css({
                   "left": "40%",
                   "transform": "scale(1)",
                   "opacity": "1"
               });
           }, 500);
       }else{
           $(".item2 .itemContainer").css({
               "left": "40.5%",
               "transform": "scale(0.7)",
               "opacity": "0.3"
           });
       }
   }
    function hidePanel(){
        var i = $(".item2 .itemContainer");
        i.animate({textIndent:0},{
            step:function(now,ax){
                $(this).css({
                    "left":"80%",
                    "transform":"scale(0.7)",
                    "opacity":"0.6"
                });
            }
        });

        setTimeout(function(){
            i.css({
                "left":"40%",
                "transform":"scale(1)",
                "opacity":"1"
            });
        },200);
    }
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