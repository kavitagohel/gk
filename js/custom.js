// $(window).on('load',function() {
// 	$('#loader-wrapper').fadeOut('slow', function(){
// 		$('body').removeClass('style_overflow_hidden');
// 	});
// });

$(document).ready(function(){
	AOS.init();

	// banner
	$(".banner").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll:1,
		nextArrow:'.arrow-right',
		prevArrow:'.arrow-left',
	});
	// our_gallery
	$(".our_gallery").slick({
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2
			}
		}
		]
	});

	// like Button JS
	$(".like_btn").click(function(){
		$(this).find("i").removeClass("fa fa-heart-o").addClass("fa fa-heart");
	});

	// Navbar Scroll JS
	// $(window).on('scroll',function(){
	// 	var header_height = $("header").innerHeight();
	// 	var top = $(window).scrollTop();
	// 	console.log(top)
	// 	if(top >= header_height){
	// 		$('.bottom_nav').addClass('scrollnav');
	// 		$('.top_nav').addClass('m_b');
	// 	}
	// 	else{
	// 		$('.bottom_nav').removeClass('scrollnav');
	// 		$('.top_nav').removeClass('m_b');
	// 	}
	// });
	$(window).on('scroll',function(){
		var header_height = $("header").innerHeight();
		var top = $(window).scrollTop();
		console.log(top)
		if(top >= header_height){
			$('header').addClass('scrollnav');
			$('section').eq(0).addClass('m_b').end();
		}
		else{
			$('header').removeClass('scrollnav');
			$('section').eq(0).removeClass('m_b').end();
		}
	});

	// Toggle JS
	$(".toggle_btn").click(function(){
		$(".navbar_links").addClass('open');
		$('body').css("overflow", "hidden");
	});
	$(".close_btn").click(function(){
		$(".navbar_links").removeClass('open');
		$('body').css("overflow", "auto");
	});

	// bottom to top
	var btn = $('.topbtn');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});

});