$(document).ready(function(){
	$(".slider-one").owlCarousel({
		items:1,
		autoplay:true,
		autoplayTimeout:5000,
		loop:true,
		
		
	});   
  });
  $(document).ready(function(){
	$(".slider-two").owlCarousel({
		items:3,
		autoplay:true,
		autoplayTimeout:5000,
		loop:true,
		nav:true,
		navText:['next','previous'],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:true
			},
			1000:{
				items:3,
				nav:true
			}
			
		}
	});   
  });
  
  $(document).ready(function(){
	$(".slider-three").owlCarousel({
		items:1,
		autoplay:true,
		autoplayTimeout:5000,
		loop:true,
	});   
  });

  $(document).ready(function(){
	$(".slider-four").owlCarousel({
		items:1,
		autoplay:true,
		autoplayTimeout:5000,
		loop:true,
	});   
  });


  
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
