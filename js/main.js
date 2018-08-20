$(document).ready(function() {

	var selected_car = {
		mini: 0,
		medium: 0,
		premium: 0
	};

	var mainItem = 0;
	var subItem = 0;

	var pathCitroen   = 'img/ситроен/';
	var pathMB = 'img/мерседес/';
	var pathMazda = 'img/мазда/';
	var photoArr = [
	'минимальный.jpg',
	'стандарт.jpg', 
	'стандарт+.jpg', 
	'стандарт++.jpg', 
	'стандарт+++.jpg', 
	'целиком.jpg', 
	'чистый.jpg',
	'оптика.jpg', 
	'пороги-внутренние.jpg',
	'пороги-наружние.jpg', 
	'двери.jpg', 
	'задние-крылья.jpg', 
	'капот.jpg', 
	'передний-бампер.jpg',
	'задний-бампер.jpg'];
//section "car type"
$('.cars').children().on('click', function() {

		$('.details-select').addClass('display-toggle-o'); //show menu
      	$('.cars').children().removeClass('showw'); //arrow down after block

   //defaul setting (img 3 from array)
   if ( $(this).hasClass("mini-class") ) {	selected_car.mini = 1;	selected_car.medium = 0;	selected_car.premium = 0;$('.car-options-photo').css("background", "url("+ pathCitroen+ photoArr[3] +") no-repeat");}
   if ( $(this).hasClass("medium-class") ) {selected_car.mini = 0; selected_car.medium = 1; selected_car.premium = 0;$('.car-options-photo').css("background", "url("+pathMazda+photoArr[3]+") no-repeat")};
   if ( $(this).hasClass("premium-class") ) {selected_car.mini = 0; selected_car.medium = 0; selected_car.premium = 1;$('.car-options-photo').css({"background": "url("+pathMB+photoArr[3]+") no-repeat"});}
   if (selected_car.mini==1 || selected_car.medium==1 || selected_car.premium==1) {
   	$('.plans-menu').removeClass('display-toggle');
   }
// clear selected menu items, when select another type of Car
	$(this).addClass( "showw" );
	$('.plans-menu ul a').removeClass();
	$('li.main').removeClass("selected-item");
	$('li.sub').addClass("display-toggle");
	$('li.sub').removeClass("selected-item");
	$('#item3').addClass('selected-item');

});


$('#submenu').on('click', function() {
	$('.details-select').removeClass('display-toggle-o');
	$('li.sub').hasClass("display-toggle") ? $('li.sub').removeClass("display-toggle") : $('li.sub').addClass("display-toggle");
	$('a#submenu img').hasClass("rotate-arrow") ? $('a#submenu img').removeClass("rotate-arrow") : $('a#submenu img').addClass("rotate-arrow");
});


$('li.main').on('mouseenter', function() {	
	$('.details-select').addClass('display-toggle-o');
});
// click on 1st level menu
$('li.main').on('click', function(event) {	
	event.preventDefault();	
	$('li.main').removeClass("selected-item");
	let arr = $('li.main');
	mainItem = arr.index(this);
	$(this).hasClass("selected-item") && ( $(this).attr("id") ) ? $(this).removeClass("selected-item") : $(this).addClass("selected-item");
});

$('li.sub').on('mouseenter', function() {	
	$('.details-select').removeClass('display-toggle-o');
});
// click on sub-menu
$('li.sub').on('click', function(event) {
	event.preventDefault();	
	$('.details-select').removeClass('display-toggle-o');
	$('li.sub').removeClass("selected-item");
	$(this).addClass('selected-item');
	let arr = $('li.sub');
	let userSelect = arr.index(this) ;
	$('.details-select').children().addClass('display-toggle-o');
	let showDiv = $('.details-select').children().eq(userSelect);
	showDiv.removeClass('display-toggle-o');

});


$('li').on('mouseenter', function(event){
	event.preventDefault();
	let arr = $('li');
	let userSelect1 = arr.index(this) ;
	selected_car.mini == 1 ? $('.car-options-photo').css("background", "url("+ pathCitroen+ photoArr[userSelect1] +") no-repeat") : selected_car.mini = 0;
	selected_car.medium == 1 ? $('.car-options-photo').css("background", "url("+ pathMazda+ photoArr[userSelect1] +") no-repeat") : selected_car.medium = 0;
	selected_car.premium == 1 ? $('.car-options-photo').css("background", "url("+ pathMB+ photoArr[userSelect1] +") no-repeat") : selected_car.premium = 0;

});


});