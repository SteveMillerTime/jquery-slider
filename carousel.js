(function($) {
	var carouselUL = $('div#carousel').css('overflow', 'hidden').children('ul'),
		imgs = carouselUL.find('img'),
		imgWidth = imgs[0].width, // Automatically finds with width of the image
		imgsLen = imgs.length, // Figures out how many images there are
		current = 1, // Used to help determine which image we are viewing
		totalImgsWidth = imgsLen * imgWidth; //Gets total width of all images to properly slide later on

	$('#carousel').show(); //Displays hidden carousel for users who have javascript enabled (no javascript, no carousel)

	$('#carousel-nav').show().find('button').on('click', function() { //Displays carousel's navigation for users with javascript enabled
		var direction = $(this).data('dir'),
			loc = imgWidth; // Finds the width of current image

// updates variable of current to show which image we are on
		( direction === 'next' ) ? ++current : --current;

// logic to check to see if we are on the first image
		if ( current === 0 ) {
			current = imgsLen;
			loc = totalImgsWidth - imgWidth; // takes the total width of all images and subtracts them by individual image's width to get the proper size for the box
			direction = 'next';
		} else if ( current - 1 === imgsLen ) { // Looks to see if we're at the end. if yes, then carousel restarts
			current = 1;
			loc = 0;
		}

		transition(carouselUL, loc, direction);
	});

	function transition( container, loc, direction ) {
		var unit; // the variables I'm using are -= += : this is how the images will scroll horizontally, by adding or subtracting from the current image's margin-left

		if ( direction && loc !== 0 ) {
			unit = ( direction === 'next' ) ? '-=' : '+=';
		}

		container.animate({
			'margin-left': unit ? (unit + loc) : loc
		});
	}
	
// This is my way of controlling a user's interaction. When a user hovers over the carousel element or the buttons, the carousel itself pauses, then continues playing once the user mouses off.

	var carousel = setInterval(function() {
   				$('#carousel-nav #next').click();
				}, 4000);

	$('#carousel, button').hover(function() {
    window.clearInterval(carousel);    
	}, function() {
    carousel = setInterval(function() {
   				$('#carousel-nav #next').click();
				}, 4000);
	});

})(jQuery);