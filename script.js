$(document).ready(function(){
	$('.first').click(function(){
		$(this).siblings('.second').addClass('active').get(0).play();
		console.log('click 2');
	});
	$('.second').click(function(){
		$(this).get(0).pause();
		$(this).siblings('.third').addClass('active').get(0).play();
		console.log('click 3');
	});
    $('.third').click(function(){
		$(this).get(0).pause();
		$(this).siblings('.forth').addClass('active').get(0).play();
		console.log('click 4');
	});
    $('.forth').click(function(){
		$(this).get(0).pause();
		$(this).siblings('.fifth').addClass('active').get(0).play();
		console.log('click 5');
	});
    $('.fifth').click(function(){
		$(this).get(0).pause();
		$(this).siblings('.sixth').addClass('active').get(0).play();
		console.log('click 6');
	});
	$('.sixth').click(function(){
		$(this).get(0).pause();
		$(this).siblings('.second').removeClass('active');
        $(this).siblings('.third').removeClass('active');
        $(this).siblings('.forth').removeClass('active');
        $(this).siblings('.forth').removeClass('active');
        $(this).siblings('.fifth').removeClass('active');
		$(this).removeClass('active');
		console.log('reset click');
	});
});