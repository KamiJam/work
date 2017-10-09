function stepTo(step){
	
	$(".top-load .line-inner").removeClass("step"+(step-1)).addClass("step"+step);
	setTimeout(function(){
		$(".tl-item").eq(step-1).addClass("passed");
	},900);
	$("#step"+(step-1)).hide();
	$("#step"+step).show();
}

