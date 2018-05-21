$(document).ready(function() {
	$(".js_main_menu__item").hover(function () {
		if (!$(this).find(".js_full_size_menu__slider").hasClass("slick-slider")) {
			$(this).find(".js_full_size_menu__slider").slick({
				dots: true,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				arrows: false
			});
		}
	});
	$('.js_item__first_slider').slick({
		slidesToShow: 1,
		arrows: false,
		fade: true,
		focusOnSelect: true,
		asNavFor: '.js_item__second_slider'
	});
	$('.js_item__second_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,
		asNavFor: '.js_item__first_slider',
		responsive: [
		{
			breakpoint: 736,
			settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 600,
			settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 1,
			}
		}
	]
	});

	$('.js_slider_products').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		{
			breakpoint: 1391,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 1120,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 848,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
	});

	$(".js_slider_products_slider").slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 810,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
	});
	$(".js_index_slider").slick({
		dots: true,
		responsive: [
		{
			breakpoint: 600,
			settings: {
				adaptiveHeight: true
			}
		}
	]
	});
});