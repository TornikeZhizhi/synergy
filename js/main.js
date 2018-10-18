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
	$(".inv_tab_wrap").each(function(index){
		$(this).on("click",function(){
			var test =Math.ceil((index + 1)/3)
			if(index > 2){
			  index =  Math.abs((((test -1)*3) - (index )))
			}
			$(this).parent().find(".inv_tab_wrap").removeClass("active")
			$(this).addClass("active");
            var parenClaa = '.' + $(this).parent().parent().parent().prop('className')
			$(this).parent().parent().parent().find(".investors_main_text").removeClass("active");
			$(this).parent().parent().parent().find(".investors_main_text").eq(index).addClass("active");
		})
	})
})


//organizations

$(document).ready(function(){
	$(".conceftion_up .conceftion").on("click",function(){
		$(".conecftion_download_box").css("display","flex");

		$(".conceftion").removeClass("active");
		$(this).addClass("active")

		
	})


	$(".autorized_comment_box").on("click",function(){

		$(this).css("display","none");
		$(this).parent().find(".autorized_comment").fadeIn()


	})

//download icon 

	$(".download_icon_box").on("click",function(){

		$(this).parent().find("input").click()

	})

	// org link

	$(".org_news_box").on("click",function(){
		window.location.href = "news.html"
	})


})



// option select

$(document).ready(function(){

	$(".investor_dropdown_content img").click(function(){
		$(".investor_dropdown_content select").click()

	})
})



// Hamburger


$(document).ready(function(){
	$(".hamburger_icon_box").on("click",function(){

		$(".resp_menu_wrapper").css("width","100%");

	})

	$(".resp_close_icon").on("click",function(){
		$(".resp_menu_wrapper").css("width","0%");
	})
})