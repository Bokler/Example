$(window).load(function(){
	// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	// 	$('body').addClass('ios');
	// } else{
	// 	$('body').addClass('web');
	// };
	// $('body').removeClass('loaded'); 
});

/* viewport width */

function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};

/* viewport width */

$(window).on('resize',function() {
	var width = viewport().width;
	if (width > 1600) {
		$(".js_full_size_menu").css("width", "1589px");
		$(".js_full_size_menu__left").css("width", "1220px");
		$(".js_full_size_menu__right").css("width", "380px");
	} else {
		$(".js_full_size_menu").css("width", width + "px");
		$(".js_full_size_menu__left").css("width", width/100*75 + "px");
		$(".js_full_size_menu__right").css("width", width/100*25 + "px");
	}
	if (width > 1100) {
		$(".js_main_menu__list_mob_button").hide();
		$(".js_main_menu__list_mob").hide();
	} else {
		$(".js_main_menu__list_mob_button").show();
	}
	if (width > 1024) {
		$(".js_filter_after").slideDown();
		$(".js_filter").slideDown();
	} else {
		if ($(".js_filter").css("display") == "block" && $(".js_filter_after").css("display") == "block") {
			$(".js_filter_after").slideUp();
		$(".js_filter").slideUp();
		}
	}
});

$(document).ready(function() {
	// $(".js_item__first_slider").click(function() {
	// 	$(".popup").fadeIn(300);
	// 	$(".pop-bg").fadeIn(300);
	// 	var current_slide = $('.js_item__first_slider').slick('slickCurrentSlide');
	// 	$('.js-popup-slider').slick({
	// 		arrows: true,
	// 		focusOnSelect: true,
	// 		asNavFor: '.js_item__first_slider',
	// 	});
	// 	$('.js-popup-slider').slick('slickGoTo', current_slide, true)
	// });
	
	// $('a[data-slide]').click(function(e) {
	// 	e.preventDefault();
	// 	var slideno = $(this).data('slide');
	// 	$('.js-item-left__second-slider').slick('slickGoTo', slideno - 1);
	// });
	$(".js_close_pop_up").click(function() {
		$(this).closest(".js_pop_up").fadeOut(300);
		$(".js_pop_bg").fadeOut(300);
	});
	$(".js_pop_bg").click(function() {
		$(".js_pop_up").each(function () {
			if ($(this).css("display") == "block") {
				$(this).fadeOut(300);
			}
		});
		$(this).fadeOut(300);
	});
	$(".js_pop_up").mCustomScrollbar({
		scrollInertia: 60,
		mouseWheel:{scrollAmount: 50}
	});
	$(".js_item_tabs").mCustomScrollbar({
		axis: "x",
		scrollInertia: 60,
		mouseWheel:{ scrollAmount: 50, axis: "x" },
		advanced:{ autoExpandHorizontalScroll: true },
		theme:"dark-3",
	});
	$(".js_count").inputmask("999", {placeholder:""});
	$(".js_filters_toggler").click(function() {
		var width = viewport().width;
		if (width < 1025) {
			$(".js_filter").delay(200).slideToggle();
			$(".js_filter_after").slideToggle(200);
		}
	});
	$(".js_filter_block__expand").click(function() {
		$(this).siblings("a").removeClass("hidden");
		$(this).addClass("hidden");
		return false;
	});
	$(".js_rate_star").click(function() {
		$(this).removeClass("filled").siblings().removeClass("filled");
		$(this).toggleClass("filled").prevAll().toggleClass("filled");
		$(this).siblings(".js_rate").val(parseInt($(this).index())+1);
	});
	$(".js_categories_sublist_toggler").click(function() {
		$(this).find(".aside__categories_sublist").slideToggle();
	});
	$(".js_toggle_textarea").click(function() {
		$(this).siblings("textarea").toggle();
		return false;
	});
	$(".js_subcategories_tile__toggler").click(function() {
		$(this).toggleClass("opened");
		$(this).closest(".js_subcategories_tile__list").toggleClass("compressed");
	});
	$(".js_main_menu__list_mob_button").click(function() {
		$(".js_main_menu__list_mob").slideToggle();
	});
	$(".js_main_menu__link_mob").click(function() {
		if ($(this).next(".js_full_size_menu__list_mob").css("display") == "block") {
			$(this).next(".js_full_size_menu__list_mob").slideUp();
		} else if ($(this).next(".js_full_size_menu__list_mob").css("display") == "none") {
			$(".js_full_size_menu__list_mob").slideUp();
			$(this).next(".js_full_size_menu__list_mob").slideDown();
		}
	});
	$(".js_filter_select").styler();
	$(".js_filter_checkbox").styler();
	$(".js_plus").click(function() {
		var count = parseInt($(this).siblings(".js_count").val());
		count++;
		if (count == "") {
			count = 1;
		}
		$(this).siblings(".js_count").val(count);
	});
	$(".js_minus").click(function() {
		var count = parseInt($(this).siblings(".js_count").val());
		if (count > 1) {
			count--;
			$(this).siblings(".js_count").val(count);
		}
	});
	$(window).trigger('resize');
});

$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){
			$(this).attr('placeholder', placeholder);
		});
	});

	/* placeholder*/
	
	/* components */

	// if($('.box-field-phone__input input').length) {
	// 	$(".box-field-phone__input input").inputmask("+38(099)999-99-99");
	// };

	$('.js_email').blur(function() {
		if($(this).val() !== '') {
			var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
			if(pattern.test($(this).val())){
				alert('ok');
			} else {
				$('.invalid').show(300);
			}
		}
	});

	/* components */

});

function openModal(modal) {
	$(".js_pop_bg").fadeIn(300);
	modal.fadeIn(300);
}

function openModalHTML(inner_html) {
	$(".js_pop_bg").fadeIn(300);
	$(".js_pop_up__wrapper").empty();
	if (inner_html) {
		$(".js_pop_up__wrapper").append(inner_html);
	}
	$(".js_pop_up").fadeIn(300);
}