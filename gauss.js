(function($,_){
	var ecuaciones = [];
	window.onload = function(){
		var ecuacion = _.getElementById('ecuacion'),
			agregar = _.getElementById('agregar');
		agregar.addEventListener('click',function(){
			if(ecuaciones.length ){
				
			}
			ecuaciones.push(ecuacion.value);
			
			console.log(ecuaciones);
		});
	};
})(window,document);


/*
"abc def+(1.1+{ghi})".match(/[^+/*()-]+/g).filter(
    function(x) { return !/^{.+?}$/.test(x) })*/