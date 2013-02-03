/* 
 * coded by Rahir Justine
 * December 2012
 */

(function($) {

	//-- global vars

	//- methods

	var displayConnect = function(e){
		$('#mon-compte').animate({
			opacity: '1'
		})
	};

	var displayRegistration = function(e){
		$('#inscription').animate({
			opacity: '1'
		})
	};

	$( function () {

	$('body').prepend('<a href="#top" class="top_link" title="Revenir en haut de page">Haut</a>');
	$(window).scroll(function(){  
        posScroll = $(document).scrollTop();  
        if(posScroll >=550)  
            $('.top_link').fadeIn(600);  
        else  
            $('.top_link').fadeOut(600);  
    });  

    $('a[href=#top]').click(function(){
		$('html').animate({scrollTop:0}, 'slow');
		return false;
	}); 


	//- onload routines

	if($(".newsletter-form").hasClass("checked")==false){
		$('.newsletter').click(function(e){
			$('.newsletter2').removeClass('hidden');
			$('.newsletter-form').addClass('checked');
			$('.newsletter').hide();
		});	
	} else {
		alert('coucou');
		$('.newsletter2').click(function(e){
			$('.newsletter2').addClass('hidden');
			$('.newsletter-form').removeClass('checked');
			$('.newsletter').show();
		});
	};

	/**** MEGADROPDOWN ****/
	$('.dropdown').hide();
	$('.li-nav').hoverIntent(
		function(){
			$('.dropdown', this).show();
		},
		function(){
			$('.dropdown', this).hide();
		});

	/****** PANIER ********/
	$('#basket-details').hide();
	$('#basket').hover( 
		function(){
			$('#basket-details').fadeIn();
		},
		function(){
			$('#basket-details').hide();
		});

	$('#basket-details').hover(
		function(){
			$('#basket-details').show();
		},
		function(){
			$('#basket-details').fadeOut();
		});

	// DIV INSCRIPTION

	});
})( jQuery );
