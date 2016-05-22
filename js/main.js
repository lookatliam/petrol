
	$('.display').slides({
		
		slideSpeed: 1000,
		effect: 'slide'
	});

	fr = new FilmRoll({
		container: '.special',
		height: 250,
		pager: false,
		position: 'left',
		scroll: false
	});

	$(".film_roll_prev").eq(0).appendTo(".special");
	$(".film_roll_next").eq(0).appendTo(".special");

	fr2 = new FilmRoll({
		container: '.special2',
		height: 250,
		pager: false,
		position: 'left',
		scroll: false
	});

	$(".film_roll_prev").eq(1).appendTo(".special2");
	$(".film_roll_next").eq(1).appendTo(".special2");

function capPosition () {
	var sc = $('.slides_container').width();
	var cap = $('.caption').width();
	var capLength = $('.caption').length;
	var r;

	for(var i = 0; i < capLength; i++) {
		r = (sc - cap)/2;
		$('.caption').eq(i).css("left", r);
	}
}

capPosition();

$( window ).resize(function() {
  capPosition();
});