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

 function FAjax (url,capa,valores,metodo,form)
{
	//alert("Ajax1");
   var ajax=creaAjax();
   var capaContenedora = document.getElementById(capa);

/*Creamos y ejecutamos la instancia si el metodo elegido es POST*/
 if(metodo.toUpperCase()=='POST'){
        document.write="hola pepe";
	//alert("Ajax3");
    ajax.open ('POST', url, true);
	//alert(ajax.readyState);
    ajax.onreadystatechange = function() {
         if (ajax.readyState==1) {
		//alert("jj1");
                 capaContenedora.innerHTML="Cargando.......";
         }
         else if (ajax.readyState==4){
		//alert("jj2");

            if(ajax.status==200)
            {
		//alert("jj3");

                 document.getElementById(capa).innerHTML=ajax.responseText; 

                    /*Aqui se pone q se cargen los datos*/

                         if(document.reus.idedo.value!=0){
                         document.parentWindow.frames.frames.frameElement.document.frames.parent.window.document.forms[0].text_usuario_calle.value          = form.calle.value;
                         document.parentWindow.frames.frames.frameElement.document.frames.parent.window.document.forms[0].text_usuario_numext.value         = form.ext.value;
                         document.parentWindow.frames.frames.frameElement.document.frames.parent.window.document.forms[0].text_usuario_numint.value         = form.int.value;
                         document.parentWindow.frames.frames.frameElement.document.frames.parent.window.document.forms[0].text_usuario_colonia.value        = form.colonia.value;
                         document.parentWindow.frames.frames.frameElement.document.frames.parent.window.document.forms[0].text_usuario_codigopostal.value   = form.cp.value;
                         document.parentWindow.frames.frames.frameElement.document.frames.parent.window.document.forms[0].text_usuario_telef.value          = form.telefono.value;
                         document.parentWindow.frames.frames.frameElement.document.frames.parent.window.document.forms[0].text_usuario_fax.value            = form.fax.value;
                         document.parentWindow.frames.frames.frameElement.document.frames.parent.window.document.forms[0].text_usuario_email.value          = form.correo.value;
                         }else{
                            alert("No existen datos para este usuario");
                         }

                         parent.parent.cargadivReus(form.datoT.value,form.idusiT.value);
                         parent.parent.cargarEdoReus(form.idedo.value,form.idmun.value);
                         parent.parent.GB_hide(); 



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

