function multiplicacion() {
	var matriz =  {n : 4},
			templateMultiplicacion = Handlebars.compile($("#multiplicacion-template").html()),
			templateMatriz = Handlebars.compile($("#matriz-template").html()),
			templateCasilla = Handlebars.compile($("#casilla-template").html());


	function contenido() {
		var content1 = [],
				content2 = [],
				content3 = [];
		for (var i = 0; i < matriz.n*matriz.n; i++) {
			content1.push({content : templateCasilla({size : 12/matriz.n})});
			content2.push({content : templateCasilla({size : 12/matriz.n})});
			content3.push({content : templateCasilla({size : 12/matriz.n})});
		}
		var matriz1 = templateMatriz({size : 5 , offset : '' , inputs : content1}),
				matriz2 = templateMatriz({size : 5 , offset : '' , inputs : content2 , direction : 'right'}),
				resultado = templateMatriz({size : 5 , offset : '3', inputs : content3});

		//$('#multiplicacion').append()
		$('#multiplicacion').html(templateMultiplicacion({matrices : matriz1 + matriz2 , resultado : resultado}));
		$('#add-multiplicacion').click(onClickAdd);
		$('#remove-multiplicacion').click(onClickRemove);
	}
	function onClickAdd(event) {
		if(matriz.n >= 4){
			return;
		}
		matriz.n++;
		contenido();
		if(matriz.n == 4){
			$('#add-multiplicacion').addClass('disabled');
		}else{
			$('#add-multiplicacion').removeClass('disabled');
		}
	}
	function onClickRemove(event) {
		if(matriz.n <= 2){
			//$(this).addClass('disabled');

			return;
		}
		matriz.n--;
		contenido();
		if(matriz.n == 2){
			console.log('entro add');
			$('#remove-multiplicacion').addClass('disabled');
		}else{
			console.log('entro remove');
			$('#remove-multiplicacion').removeClass('disabled');
		}
	}
	contenido();
	$('#add-multiplicacion').toggleClass('disabled');
}
