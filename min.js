 $(window).on("load",function() {
     $("#overlay").fadeOut("slow");
    });


//on Scroll navbar
$(window).on('scroll',function(){
			if($(window).scrollTop()){
				$('nav').addClass('black');
			}
			else{
				$('nav').removeClass('black');
			}
		})


