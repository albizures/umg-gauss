(function($,_){
	$.estado = {
		animation : false
	}
	$.ecuaciones = [];
	$.colors = {
		'resta' : 'orange darken-2',
		'suma' : 'green darken-2',
		'gauss' : 'blue-grey',
		'multiplicacion' : 'deep-orange darken-2'
	}
	/*window.onload = function(){
		var ecuacion = _.getElementById('ecuacion'),
			agregar = _.getElementById('agregar');
		agregar.addEventListener('click',function(){
			if(ecuaciones.length ){
				console.log('se agrego una nueva');
			}
			ecuaciones.push(ecuacion.value);

			console.log(ecuaciones);
		});
	};*/
})(window,document);



$(onLoad);
function onLoad () {
	$('.collection-item').click(onClickCollectionItem);
	$(window).click(onClickWindow);
}
function onClickCollectionItem (event) {
	if(estado.animation) return;
	var seccion = $(this).attr('class').replace('collection-item','').trim();
	var parent = $(this).parents('main');
	var self = this;
	if(!$(parent).hasClass('active')){
		estado.animation = true;
		$(parent).toggleClass('active');
		setTimeout(function () {
			$(parent).toggleClass('second');
			$(parent).addClass(colors[seccion]);
		},500);
		setTimeout(function () {
			$('.seccion.'+seccion).toggleClass('active');
			$('.close').toggleClass('active');
			setTimeout(function () {
				estado.animation = false;
			},500);
		},900);
	}
}
function onClickWindow (event) {
	console.log('estado ',estado.animation);
	if(estado.animation) return;
	console.log('despues ',estado.animation);
	if($(event.target).hasClass('seccion') || $(event.target).hasClass('close')){
		console.log('cambio');
		estado.animation = true;
		$('.close').toggleClass('active');
		$('.seccion.active').toggleClass('active');
		setTimeout(function () {
				$('main.item').toggleClass('second');
				for(var index in colors){
						$('main.item').removeClass(colors[index]);
				}
		},500)
		setTimeout(function () {
			$('main.item').toggleClass('active');
			setTimeout(function () {
				estado.animation = false;
			},500);
		},900);
	}
}

/*
"abc def+(1.1+{ghi})".match(/[^+/*()-]+/g).filter(
    function(x) { return !/^{.+?}$/.test(x) })*/
