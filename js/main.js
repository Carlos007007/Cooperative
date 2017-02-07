$(document).on('ready', function(){
	$('.btn-mobile-menu').on('click', function(){
		var menu=$('.NavBar-navigation');
		if(menu.hasClass('show-menu-mobile')){
			menu.removeClass('show-menu-mobile');
		}else{
			menu.addClass('show-menu-mobile');
		}
	});
	$('.option-service').click(function(){
		var seccion=$(this).attr('data-href');
		$('body,html').animate({
		  scrollTop:$(seccion).offset().top-70
		},1000);
		return false; 
	});
});