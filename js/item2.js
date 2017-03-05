/**
 * Created by Administrator on 2017/3/1.
 */
$(function(){
   $(".item2 .navBtnC .navBtn").click(function (e) {
       var marginLeft = $(this).data("item");
       $(".item2 .itemContainer").animate({
           "margin-left":"-" + marginLeft + "px"
       },1000);
   })
});