/**
 * Created by topiniu on 2017/3/7.
 */
$(function () {
    randomColor();
    $(".project_preview").hover(function () {
        $(this).find('.cover').addClass('show');
        }, function () {
        $(this).find('.cover').removeClass('show');
    });


});

function showProject(flag){
    if(flag==1) {//show
      $(".item3 .project_preview").each(function(index,item){
	      setTimeout(function () {
		      $(item).animate({
			      left:  '0px'
		      },600);
	      },index*100);
      });

    }else{//hide
      var scrollLeft = $('.item3 .window').scrollLeft();
      var total = scrollLeft+1000;
        $(".item3 .project_preview").animate({
            left: '100%'
        },100);
    }
}

function randomColor(){
    var num = 0;
    var flag = 0;
    var classname = '';

    $('.project_preview').each(function(index,item){
        flag = parseInt(Math.random()*8,10) + 1;
        while(flag === num){
	        flag = parseInt(Math.random()*8,10) + 1;
        };

        num = flag;
        classname = 'panel_style' + num;

        $(item).addClass(classname);
    });
}
