function validacion(formulario) {

	valor1 = document.getElementById("nombre").value;
	if (valor1 == null || valor1.length == 0 || /^\s+$/.test(valor1)) {		  
  	  alert('POR FAVOR. DIGITA NOMBRE DE REGISTRO');
	  nombre.focus();
	  verificar=false;
	  return false;		 
	}
	else 
	
	valor2 = document.getElementById("apellido").value;
	if (valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
	  alert('POR FAVOR. DIGITA APELLIDO DE REGISTRO');
	   apellido.focus();
	verificar=false;
	   return false;		  
	}
	else

	lista = document.getElementById("zona"); 
	if (lista.selectedIndex == null || lista.selectedIndex == 0) { 
    alert("POR FAVOR. ELIGE TIPO DE DOCUMENTO")
     zona.focus();
		verificar=false;
    return false
    }

	valor3 = document.getElementById("numero").value;
	if (valor3 == null || valor3.length == 0 || /^\s+$/.test(valor3)) {
	  alert('POR FAVOR. DIGITA 	DOCUMENTO DE IDENTIDAD');
	   numero.focus();
		verificar=false;
	   return false;		  
	}
	else

	valor4 = document.getElementById("fecha").value;
	if (valor4 == null || valor4.length == 0 || /^\s+$/.test(valor4)) {
	  alert('POR FAVOR. DIGITA LA FECHA ');
	   fecha.focus();
		verificar=false;
	   return false;		  
	}
	else

	valor5= document.getElementById("persona").value;
	if (valor5 == null || valor5.length == 0 || /^\s+$/.test(valor5)) {
	  alert('POR FAVOR. DIGITA NUMERO DE PERSONAS');
	   persona.focus();
		verificar=false;
	   return false;		  
	}
	else

		tipo = document.getElementsByName("tipo");
			 
					var seleccionado = false;
			for(var i=0; i<tipo.length; i++) {    
			  if(tipo[i].checked) {
			    seleccionado = true;
			    break;
			  }
			}
			 
			if(!seleccionado) {
				alert('POR FAVOR. DIGITA TIPO');
			 	verificar=false;
			  	return false;
			}
	else

	
	lista = document.getElementById("zona1"); 
	if (lista.selectedIndex == null || lista.selectedIndex == 0) { 
    alert("POR FAVOR. ELIGE TU DESTINO")
     zona1.focus();
		verificar=false;
    return false
    }

    else


	valor7 = document.getElementById("valor").value;
	if (valor7 == null || valor7.length == 0 || /^\s+$/.test(valor7)) {		  
  	  alert('POR FAVOR. DIGITA EL VALOR');
	  valor.focus();
	  verificar=false;
	  return false;		 
	}
	else

	valor8 = document.getElementById("email").value;
	if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor8)) ) {
	  alert('POR FAVOR. DIGITA TU EMAIL');
	  email.focus();
		verificar=false;
	  return false;	
	}
	else

	valor9 = document.getElementById("telefono").value;
	if (valor9 == null || valor9.length == 0 || /^\s+$/.test(valor9)) {		  
  	  alert('POR FAVOR. DIGITA TELEFONO');
	  telefono.focus();
	  verificar=false;
	  return false;		 
	}
	else

	valor10 = document.getElementById("direccion").value;
	if (valor10 == null || valor10.length == 0 || /^\s+$/.test(valor10)) {		  
  	  alert('POR FAVOR. DIGITA LA DIRECCION');
	  direccion.focus();
	  verificar=false;
	  return false;		 
	}
	else

    if(!terminos.checked){
	alert("POR FAVOR, ACEPTA TERMINOS Y CONDICIONES");
	terminos.focus();
	verificar=false;
	return false;
	}

	   
		
	    document.getElementById("formulario").reset();
	    viajes(valor1,valor2,lista.value,valor3,valor4,valor5,tipo.value,valor7,valor8,valor9,valor10);
	    tabla();
	    return true;
}




function myDeleteFunction() {
    document.getElementById("Tabla").deleteRow(1);
}

function buscar()
		{
			var tableReg = document.getElementById('Tabla');
			var searchText = document.getElementById('mierda').value.toLowerCase();
			var cellsOfRow="";
			var found=false;
			var compareWith="";
 
			// Recorremos todas las filas con contenido de la tabla
			for (var i = 1; i < tableReg.rows.length; i++)
			{
				cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
				found = false;
				// Recorremos todas las celdas
				for (var j = 0; j < cellsOfRow.length && !found; j++)
				{
					compareWith = cellsOfRow[j].innerHTML.toLowerCase();
					// Buscamos el texto en el contenido de la celda
					if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1))
					{
						found = true;
					}
				}
				if(found)
				{
					tableReg.rows[i].style.display = '';
				} else {
					// si no ha encontrado ninguna coincidencia, esconde la
					// fila de la tabla
					tableReg.rows[i].style.display = 'none';
				}
			}
		}
viaje=[];

function viajes(valor1,valor2,valor3,valor4,valorl5,valor6,valor7,valor8,valor9,valor10,valor11){

	
	nuevo = { nom:valor1,ape:valor2,tipo:valor3,docu:valor4, num_per:valor5,
	 acomo:valor6, destino:valor7,val:valor8,correo:valor9,telefono:valor10,direccion:valor11};
	viaje.push(nuevo);

}
function tabla(){
	var tbody      = document.getElementById("body");
	var tabla="";

	for(var i = 0; i < viaje.length; i++){
		tabla += "<tr><td>"+ viaje[i].nom+" "+viaje[i].ape+"</td><td> "+viaje[i].docu+"</td><td> "+viaje[i].num_per+"</td><td> "+
		viaje[i].destino+"</td><td> "+viaje[i].val+"</td><td>"+viaje[i].correo+"</td><td> "+viaje[i].telefono+
		"</td><td> "+viaje[i].direccion+"</td></tr>";
		tbody.innerHTML = tabla;
	}
}