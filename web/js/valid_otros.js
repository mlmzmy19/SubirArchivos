

function esInteger(e){
    var charCode
    if (navigator.appName == "Netscape"){
        charCode = e.which
    }
    else{
        charCode = e.keyCode
    } 
    if (charCode < 48 || charCode > 57){
        alert("Por favor teclee solo numeros en este campo!"); 
        return false
    }
    else{
        return true}
}


function esEntero(e){



}



    function LetraCapital(objetoMayus){
    
    var nombreLC    = new Array();
        nombreTLC_1 = "";
        nombreTLC_2 = "";
        k=0;
       if(objetoMayus.value.length>2){
        for(i=0; i<objetoMayus.value.split(" ").length; i++){
            CMTEXTO_1=objetoMayus.value.split(" ")[i].substring(0,1).toUpperCase();
            if(CMTEXTO_1!=""){
               CMTEXTO_2=objetoMayus.value.split(" ")[i].substring(1,objetoMayus.value.split(" ")[i].length);
               nombreLC[k]=CMTEXTO_1+CMTEXTO_2;
               k++;
            }
         }
      }
      for(j=0; j<nombreLC.length; j++){
        nombreTLC_1 = nombreLC[j];
        nombreTLC_2 = nombreTLC_2 + " " + nombreTLC_1;
      }
      objetoMayus.value = nombreTLC_2.substring(1,nombreTLC_2.length);
      return false;
    }

    function validarDosFechas(objetVF1,objetVF2,tipoVFR){

            if( valFecha(objetVF2)==false ){    //validamos la fecha antes q nada
                               objetVF2.focus(); return false;
            }

        if(tipoVFR==1){
            fecha1VFR=objetVF1.value; 
            fecha2VFR=objetVF2.value.split("/")[1]+"/"+objetVF2.value.split("/")[0]+"/"+objetVF2.value.split("/")[2]; 
            f1VF=new Date(fecha1VFR);
            f2VF=new Date(fecha2VFR);

            if(f2VF>f1VF){ 
                alert("La fecha de hechos no debe ser mayor a la del sistema"); 
                objetVF2.value=""; 
                objetVF2.focus(); 
                return false; 
            }
    
            hoyVF    = new Date(objetVF1.value.split("/")[2],objetVF1.value.split("/")[0]-1,objetVF1.value.split("/")[1]); 
            inicioVF = new Date(objetVF2.value.split("/")[2],objetVF2.value.split("/")[1]-1,objetVF2.value.split("/")[0]); 
            restaJLP = hoyVF.getTime() - inicioVF.getTime();
            resultadoVF = Math.floor(restaJLP/(1000*60*60*24)); 

            if(resultadoVF > 728){
                alert("La fecha de hechos no debe ser menor a dos anios");
                //objetVF2.value="";
                //objetVF2.focus();
                //return false;
                

            }

        }else if(tipoVFR==2){

            fecha1VFR2=objetVF1.value.split("/")[1]+"/"+objetVF1.value.split("/")[0]+"/"+objetVF1.value.split("/")[2]; 
            fecha2VFR2=objetVF2.value.split("/")[1]+"/"+objetVF2.value.split("/")[0]+"/"+objetVF2.value.split("/")[2]; 
            f1VF2=new Date(fecha1VFR2);
            f2VF2=new Date(fecha2VFR2);

            if(f1VF2>f2VF2){ 
                alert("La fecha de Termino de Vigencia no debe ser mayor a la fecha de Inicio de vigencia"); 
                objetVF2.value=""; 
                objetVF2.focus(); 
                return false; 
            }
        }


    }

    function cargaEdo_Mun(des_EDO,id_Edo,id_Mun){
            cargaEdoXUsu(des_EDO);
            cargarEdoReus(id_Edo,id_Mun);
    }
