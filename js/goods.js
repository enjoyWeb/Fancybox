$(document).ready(function(){
	$("#thumblist li a").click(function(){
		var i = $(this).parents("li").index();
		$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
		$(".fancybox-gallery").addClass('hideGalleryBig');
		$($(".fancybox-gallery")[i]).removeClass('hideGalleryBig');
	});
	$(".arrow-left").click(function(){
		var num = $(".fancybox-gallery").size()-1;
		var a = $(".fancybox-gallery").not($('.hideGalleryBig')).index();
		$($('#thumblist li')[a-1]).addClass("tb-selected").siblings().removeClass("tb-selected");
		$($('.fancybox-gallery')[a-1]).removeClass("hideGalleryBig").siblings(".fancybox-gallery").addClass("hideGalleryBig");
	});
	$(".arrow-right").click(function(){
		var num = $(".fancybox-gallery").size()-1;
		var a = $(".fancybox-gallery").not($('.hideGalleryBig')).index();
		$($('#thumblist li')[a+1]).addClass("tb-selected").siblings().removeClass("tb-selected");
		$($('.fancybox-gallery')[a+1]).removeClass("hideGalleryBig").siblings(".fancybox-gallery").addClass("hideGalleryBig");
	});
    DD_belatedPNG.fix('.arrow-left');
    DD_belatedPNG.fix('.arrow-right');
	$(".fancybox-gallery").fancybox({
		wrapCSS    : 'fancybox-custom',
		openEffect : 'elastic',
		openSpeed  : 150,
		closeEffect : 'elastic',
		closeSpeed  : 150,
		helpers : {
			thumbs : {
				width  : 50,
				height : 50
			}
		}
	});
    DD_belatedPNG.fix('.fancybox-overlay,#fancybox-loading,.fancybox-close,.fancybox-prev span,.fancybox-next span');
});