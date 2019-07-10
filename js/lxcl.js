$(function(){
	$(".naver_li").hover(function(){
		$(this).children(".naver_li_hide").show();	
		$(this).children(".naver_li_a").addClass("naver_li_a7");
		$(this).children(".naver_li_a1").removeClass("naver_li_a7");
	},function(){
		$(this).children(".naver_li_hide").hide();	
		$(this).children(".naver_li_a").removeClass("naver_li_a7");
	});
	$(".about_content_left_part_nav_list dt:eq(0)").nextUntil("dt").show();
	$(".about_content_left_part_nav_list dt").click(function(){
		$(this).nextUntil("dt").toggle("fast");													 
	});
})