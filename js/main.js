$(function(){
	$('.display').slides({
		preload: true,
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
});

