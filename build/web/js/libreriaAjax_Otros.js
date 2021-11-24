

 function FAjax_Otros (url,capa,valores,metodo)
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
                //selec_divcasosEsp1,consec,piPadre

		//alert("jj3=");
                datoREGRESO = ajax.responseText;
                ArreglodatoREGRESO = datoREGRESO.split(",");
                //alert(ArreglodatoREGRESO);
                if(ArreglodatoREGRESO[0]==0){
                    alert("Error al actualizar.");
                    //eval("Otros(document.registro."++","+piPadre+","+consec+");");   
                }
                else if(ArreglodatoREGRESO[0]==1){
                    //eval("Otros(document.registro.selec_"+ArreglodatoREGRESO[3]+","+ArreglodatoREGRESO[1]+","+ArreglodatoREGRESO[2]+");");   
                    //eval("FAjax('../../sioWEB/servlets/Catalogos_otros','divcasosEsp_selec"++"','piTipo="+arr_int_tip[consec]+"&piPadre="+piPadre+"&descTipo=Otro&nombreSelect="+contenedor_selec.id+"&consec="+consec+"','POST');"); return false;    
                    //eval("FAjax('../../sioWEB/servlets/Catalogos_otros','divcasosEsp_selec"+ArreglodatoREGRESO[2]+"','piTipo="+ArreglodatoREGRESO[4]+"&piPadre="+ArreglodatoREGRESO[1]+"&descTipo=Otro&nombreSelect=divcasosEsp_selec"+ArreglodatoREGRESO[2]+"&consec="+ArreglodatoREGRESO[2]+"','POST');"); return false;    
                    piTipoG = ArreglodatoREGRESO[4];
                    cadenaT = "FAjax('../../sioWEB/servlets/Catalogos_otros','divcasosEsp"+ArreglodatoREGRESO[2]+"_Otros','piTipo="+piTipoG+"&piPadre="+ArreglodatoREGRESO[1]+"&descTipo=Otro&nombreSelect=divcasosEsp_selec"+ArreglodatoREGRESO[2]+"&consec="+ArreglodatoREGRESO[2]+"','POST');";
                    //alert(cadenaT);    
                    eval(cadenaT);
                    
                }
                 
                 //document.getElementById(capa).innerHTML=ajax.responseText; 
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

