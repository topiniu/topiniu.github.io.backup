/**
 * Created by Administrator on 2017/3/1.
 */
    var clz = "2012";
   $(".item2 .navBtnC .navBtn").click(function (e) {

       $(".year" + clz).removeClass("scaleH");

       var year = $(this).data("val");
       clz = year;
       $(".year" + clz).addClass("scaleH");

       var marginLeft = $(this).data("item");
       $(".item2 .itemContainer").animate({
           "margin-left":"-" + marginLeft + "px"
       },200);

   });

    function showPanel_pc(flag){
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


    function hidePanel_pc(){
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

    var touchFlag = 0;
    function showPanel_mobile(){

        // touchFlag = 0;
        var leftValue = [0,-320,-640,-960,-1290];

        var itemContainer = $(".item2 .itemContainer");
        // itemContainer.animate({
        //     left:"0"
        // },800);

        var touchStartX = 0;
        var touchEndX = 0;
        itemContainer.on("touchstart",function (event) {
            var touch = event.touches[0];

            touchStartX = touch.clientX;


        });
        itemContainer.on("touchend",function (event) {
            var touch = event.changedTouches[0];

            touchEndX = touch.clientX;
            //大于0右滑，left减
            if(touchEndX-touchStartX<0){
                //left
                if((touchFlag++)<4){
                    itemContainer.css("left",leftValue[touchFlag]);

                    console.log(touchFlag);
                }
            }else if(touchEndX-touchStartX>0){
                if((touchFlag--)>0){
                    itemContainer.css("left",leftValue[touchFlag]);

                    console.log(touchFlag);
                }
            }

        });
    }