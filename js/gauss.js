(function($,_){
	var ecuaciones = [];
	window.onload = function(){
		var ecuacion = _.getElementById('ecuacion'),
			agregar = _.getElementById('agregar');
		agregar.addEventListener('click',function(){
			if(ecuaciones.length ){
				console.log('se agrego una nueva');
			}
			ecuaciones.push(ecuacion.value);

			console.log(ecuaciones);
		});
	};
})(window,document);

var colors = {
	'resta' : 'orange darken-2',
	'suma' : 'green darken-2',
	'gauss' : 'blue-grey',
	'multiplicacion' : 'deep-orange darken-2'
}

$(function () {
	$('.collection-item').click(function (event) {
		var seccion = $(this).attr('class').replace('collection-item','').trim();
		var parent = $(this).parents('main');
		var self = this;
		if(!$(parent).hasClass('active')){
			$(parent).toggleClass('active');
			setTimeout(function () {
				$(parent).toggleClass('second');
				$(parent).addClass(colors[seccion]);
			},500);
			setTimeout(function () {
				$('.seccion.'+seccion).toggleClass('active');
			},900);
		}

	});
	$(window).click(function (event) {
		console.log(event.target);
		if($(event.target).hasClass('seccion')){
			$(event.target).toggleClass('active');
			setTimeout(function () {
					$('main.item').toggleClass('second');
					for(var index in colors){
							$('main.item').removeClass(colors[index]);
					}
			},500)
			setTimeout(function () {
				console.log('salir');
				$('main.item').toggleClass('active');
			},900);
		}
	});
});

/*
"abc def+(1.1+{ghi})".match(/[^+/*()-]+/g).filter(
    function(x) { return !/^{.+?}$/.test(x) })*/
