//expresion regular para validar si son numeros
var validaNum = /^\d*$/;

//funcion que valida si la tarjeta es valida
function isValidCard(cardNumber){
	
	do{
		var arrayCardNum = [];
		//pide al usuario que ingrese la opcion para ejecutar alguna de las funciones
		cardNumber = prompt("Ingrese el numero de la tarjeta de credito");

		//si el campo esta vacio o ingresa un dato que no sea un numero.
		if(cardNumber === "" || cardNumber.search(validaNum)){
			alert("solo puede ingresar numeros");
			continue;
		}

		//for para poner los numeros en un array y pasarlos a number
		for(var i=0; i<cardNumber.length; i++){
			arrayCardNum.push(parseInt(cardNumber[i]));
		}

		//revierto el array
		var reverseArray = arrayCardNum.reverse();
		

		//variables
		var sumTotal = 0;//variable que sumará las cifras
		var cont = 1;//contará cada vez que se ejecute un ciclo
		var posPar = [];//guardará los numeros que deben ser multiplicados por 2
		var posImpar = [];//guardará los numeros que no se deben multiplicar
		
		//for para recorrer el nuevo array "reverseArray" y comenzar a validar
		for(var j=0; j<reverseArray.length; j++){
			//si el contador es impar
			if(cont%2!==0){
				//agrego los numeros al array "posImpar"
				posImpar.push(reverseArray[j]);
			}else{
				//si no, los multiplico por 2 y los agrego al array "posPar"
				posPar.push(reverseArray[j]*2);
			}
			cont++;
		}

		//el arreglo "posPar" lo uno con un join y luego separo las cifras con split
		posPar = posPar.join("").split("");
		arrFinal = posPar.concat(posImpar);//junto a los 2 array en uno

		for(var k=0; k<arrFinal.length; k++){//sumo todas las cifras y le calculo el resto
			sumTotal += (arrFinal[k]%10);
		}
		sumTotal = sumTotal%10;//al total le calculo el resto
		if(sumTotal===0){//si es 0
			return alert("la tarjeta es valida");
		}else{
			return alert("la tarjeta es invalida");
		}
		
	//si la respuesta esta vacía o distinta de numeros, vuelve a preguntar
	}while(cardNumber ==="" || cardNumber.search(validaNum));
	
}

isValidCard();