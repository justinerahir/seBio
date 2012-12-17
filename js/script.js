/* 
 * coded by Rahir Justine
 * December 2012
 */

( function( $ ) {
	/**** MEGADROPDOWN ****/

	$('.dropdown').hide();
	$('.li-nav').hover( 
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
} )( jQuery );
