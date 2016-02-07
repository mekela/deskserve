$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//show sidebar
	$(".toggle_sidebar").click(function () {
      $('.sidebar').addClass('js_visible');
      $('.sid_mobile_overlay').show();
    });
    $(".sid_mobile_overlay").click(function () {
      $('.sidebar').removeClass('js_visible');
      $( this ).hide();
    });
	
});