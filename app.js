
// this starts everything at the begigning
$(document).ready( function() {

// this displays each colors in each boxes 

	$(".color").each(function () {

		var ok = $(this).attr('data-color');
		$(this).css('background', ok);
		// console.log('la var ok: '+ ok);
	}); 	



// this launch when you click on a color square 

	$(".color").click(function () {

// If the ckeckbox is checked, then it'll get the color you clicked on and replace the text color 
		if 	($('#modify-texte').is(':checked')) {
			var ok = $(this).attr('data-color');
			console.log('checkéé');
			$(".main").toggle($('.main').css('color', ok));
		}

// if unchecked : change background
		else {	
			var bg = $(this).attr('data-color');
			$(".main").css('background', bg);
			console.log('la var bg: '+ bg);
		};

	});
});

