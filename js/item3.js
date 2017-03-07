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
});