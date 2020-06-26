$(document).ready(function(){
	$(window).scroll(function(event){
		var pos_body = $('html,body').scrollTop();
		if(pos_body>120){
			$('.menu').addClass('sticky');
		}else{
			$('.menu').removeClass('sticky');
		}
	})
	$('.back-to-top').click(function(event){
		$('html,body').animate({
			scrollTop: 0},1400);
	})
})

$(document).ready(function(){
	$('.search').click(function(){
		$(".box-search").fadeToggle("slow");
	})
})

$(function(){
  $('.slider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 2000,
    auto: true,
    speed: 500,
  });
});

function showtab(element, id) {
	let divElement = document.getElementsByClassName('tab-content');
	for (let i=0; i < divElement.length; i++) {
		divElement[i].style.display = 'none';
	}
	document.getElementById(`tab-${id}`).style.display = 'block';
}


$(document).ready(function(){
	$('ul.tab li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tab li').removeClass('current');
		$('.tab-content').removeClass('current');
		$('ul.tab li').removeClass('active');
		$('.tab-content').removeClass('active');


		$(this).addClass('current');
        $("#"+tab_id).addClass('current');
	})
})

function showimg(element, id) {
	let divElement = document.getElementsByClassName('image-control');
	for (let i = 0; i<divElement.length; i++) {
		divElement[i].style.display = ' none';
	}
	document.getElementById(`tabs-${id}`).style.display = 'block';
}
$(document).ready(function(){
	$('ul.list li').click(function(){
		var img_id = $(this).attr('data-tab');

		$('ul.list li').removeClass('control-active');
		$('.image-control').removeClass('control-active');
		$('ul.list li').removeClass('active');
		$('.image-control').removeClass('active');

		$(this).addClass('control-active');
        $("#"+img_id).addClass('control-active');
	})
})

$(document).ready(function(){
	var owl = $('#slide-kh');
	owl.owlCarousel({
	    items:3,
	    loop:true,
	    mouseDrag:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:3,
	        },
	        1200:{
	            items:3,
	        }
	    }  
    });
    $(".play").click(function(){
        owl.trigger('owl.play',[1000]);
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    });
});



$(document).ready(function() {

    var owl = $("#slide-dt");

    owl.owlCarousel({
		items:4,
	    loop:false,
	    mouseDrag:true,
	    autoplay:true,
	    autoplayTimeout:4000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:4,
	        },
	        1200:{
	            items:4,
	        }
	    }  
    });
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    })
});





