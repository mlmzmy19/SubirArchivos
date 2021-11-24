/*
*Esta libreria es una libreria AJAX creada por Javier Mellado con la inestimable
*colaboracion de Beatriz Gonzalez.
*descargada del portal AJAX Hispano http://www.ajaxhispano.com
*contacto javiermellado@gmail.com
*
*Puede ser utilizada, pasada, modificada pero no olvides mantener 
*el espiritu del software libre y respeta GNU-GPL
*/

function creaAjax(){

  var objetoAjax=false;
  try {
   /*Para navegadores distintos a internet explorer*/
		//alert("Ajax2");
   objetoAjax = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
   try {
	///alert("inicia2");
     /*Para explorer*/
     objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
     } 
     catch (E) {
	///alert("inicia3");
     objetoAjax = false;
   }
  }

  if (!objetoAjax && typeof XMLHttpRequest!='undefined') {
   objetoAjax = new XMLHttpRequest();
  }
  return objetoAjax;
}

 function FAjax (url,capa,valores,metodo,tipo1,form,TextoTMPDIV)
{
	//alert("Ajax1");
   var ajax=creaAjax();
   var capaContenedora = document.getElementById(capa);

/*Creamos y ejecutamos la instancia si el metodo elegido es POST*/
 if(metodo.toUpperCase()=='POST'){

	//alert("Ajax3");
    ajax.open ('POST', url, true);
	//alert(ajax.readyState);
    ajax.onreadystatechange = function() {
         if (ajax.readyState==1) {

                    capaContenedora.innerHTML=TextoTMPDIV;

         }
         else if (ajax.readyState==4){
		//alert("jj2");

            if(ajax.status==200)
            {
		
                    //alert(ajax.responseText);
                    //alert(tipo1);
                    if(tipo1==1){
                        if(ajax.responseText.split("|")[0]==1){                 //validacion correcta
                            //alert("Ajax1");
                            capaContenedora.innerHTML="";
                            capaContenedora.style.display='none';
                            validar_fecha=1;    //esto se usa para el caso q se compare desde el combo de tareas
                        }
                        else if(ajax.responseText.split("|")[0]==0){            //validacion incorrecta
                            //alert("Ajax0");
                            capaContenedora.innerHTML="";
                            capaContenedora.style.display='none';
                            form.value = "";
                            form.focus();
                            alert("Error la fecha no debe ser menor al avance anterior");
                            validar_fecha=0;
                            
                        }
                        else if(ajax.responseText.split("|")[0]==3){            //validacion fallida
                            //alert("Ajax3");
                            capaContenedora.innerHTML="";
                            capaContenedora.style.display='none';
                            alert("Error al validar la fecha");
                            validar_fecha=0;
                        }
                    }else if(tipo1==2){
                        document.getElementById(capa).innerHTML=ajax.responseText;  
                    }
                 

		//alert(document.getElementById(capa).innerHTML);
            }
            else if(ajax.status==404)
                 {
		//alert("jj4");

                     capaContenedora.innerHTML = "La direccion existe";
                 }
             else
                 {
		//alert("jj5");

                     capaContenedora.innerHTML = "Error: ".ajax.status;
                 }
        }
    }
	
    ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    ajax.send(valores);

	//alert(valores);
    return;
}
/*Creamos y ejecutamos la instancia si el metodo elegido es GET*/
if (metodo.toUpperCase()=='GET'){

    ajax.open ('GET', url, true);
    ajax.onreadystatechange = function() {
       
         if (ajax.readyState==1) {
                 capaContenedora.innerHTML="Cargando.......";
         }
         else if (ajax.readyState==4){
            if(ajax.status==200){ 
                 document.getElementById(capa).innerHTML=ajax.responseText; 
            }
            else if(ajax.status==404)
                 {

                     capaContenedora.innerHTML = "La direccion existe";
                 }
                 else
                 {
                     capaContenedora.innerHTML = "Error: ".ajax.status;
                 }
        }
    }
    ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    ajax.send(null);
    return
}
}

