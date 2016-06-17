$(function(){
//	$("[data-toggle='tooltip']").tooltip();
	
	$(".tooltipp").miniTip({
		position:"left"
	});
	
	var menuBtn = $("#menuBtn");
	var mailBtn = $("#mailBtn");
	var messBtn = $("#messBtn");
	
	var anflag = 0;
	menuBtn.click(function(){
		if(anflag==0){
			mailBtn.animate({
				top: "+=80px",
			},200);
			messBtn.animate({
				top: "+=140px",
			},250);
			anflag=1;
		}else{
			mailBtn.animate({
				top: "-=80px",
			},200);
			messBtn.animate({
				top: "-=140px",
			},250);
			anflag=0;
		}
	});
});
