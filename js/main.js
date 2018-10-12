// Modal Notification

$(document).ready(function(){
	$(".cld_submit").on("click",function(e){
		e.preventDefault()
		$(".notification_box").addClass("active");

		setTimeout(function(){
			$(".notification_box").removeClass("active");
		},2500)
	})
})


// Header Search Box

$(document).ready(function(){
	var meF = 0;
	$(".header_search_box span").on("click",function(){
		$(".search_bar").toggleClass("active");
		if (meF == 0) {
			$(this).find("img").attr("src","images/close_icon.png");
			meF = 1;
		}
		else {
			$(this).find("img").attr("src","images/search_icon.png");
			meF = 0;
		}
	})
})


// Investor Tab Panel

$(document).ready(function(){

	

	$(".investors_main_contents .inv_tab_wrap").each(function(index){
		$(this).on("click",function(){
		
			$(".inv_tab_wrap").removeClass("active");
			$(this).addClass("active");

			$(".investors_main_text").removeClass("active");
			$(".investors_main_text").eq(index).addClass("active");


		})

	})
})