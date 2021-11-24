   function psOtrosCon(){
    //Falta por checar este otro
        document.registro.PsOtrosCon.value="";
            
        cadenaT="";
        var otros1 = "";
        try{
             if(document.registro.selec_divcasosEsp_selec1_otros.length > 1){       //se pone esta condicion ya q si no trae nada el otros es por q no esta visible 
                if( document.registro.selec_divcasosEsp1.options[document.registro.selec_divcasosEsp1.selectedIndex].text.indexOf("Otro (999)")!=-1 ){
                    otros1 = document.registro.selec_divcasosEsp_selec1_otros.options[document.registro.selec_divcasosEsp_selec1_otros.selectedIndex].value;
                    if(otros1==0){
                        alert("Seleccione la opcion de otros (1).");
                        return false;
                    }
                cadenaT=otros1;
                }
              }
                
        }catch(e){}

        var otros2 = "";
        try{

                //for(r=0; r<document.registro.selec_divcasosEsp_selec2_otros.length; r++)
                //alert(document.registro.selec_divcasosEsp_selec2_otros.length);
             if(document.registro.selec_divcasosEsp_selec2_otros.length > 1){       //se pone esta condicion ya q si no trae nada el otros es por q no esta visible 
                if( document.registro.selec_divcasosEsp2.options[document.registro.selec_divcasosEsp2.selectedIndex].text.indexOf("Otro (999)")!=-1 ){
                    otros2 = document.registro.selec_divcasosEsp_selec2_otros.options[document.registro.selec_divcasosEsp_selec2_otros.selectedIndex].value;
                    if(otros2==0){
                        alert("Seleccione la opcion de otros (2).");
                        return false;
                    }
                cadenaT=cadenaT+"|"+otros2;
                }
              }

        }catch(e){}

        var otros3 = "";
        try{
             if(document.registro.selec_divcasosEsp_selec3_otros.length > 1){       //se pone esta condicion ya q si no trae nada el otros es por q no esta visible 
                if( document.registro.selec_divcasosEsp3.options[document.registro.selec_divcasosEsp3.selectedIndex].text.indexOf("Otro (999)")!=-1 ){
                    otros3 = document.registro.selec_divcasosEsp_selec3_otros.options[document.registro.selec_divcasosEsp_selec3_otros.selectedIndex].value;
                    if(otros3==0){
                        alert("Seleccione la opcion de otros (3).");
                        return false;
                    }
                cadenaT=cadenaT+"|"+otros3;
                }
              }

        }catch(e){}


        var otros4 = "";
        try{

             if(document.registro.selec_divcasosEsp4_otros.length > 1){       //se pone esta condicion ya q si no trae nada el otros es por q no esta visible 
                if( document.registro.selec_divcasosEsp4.options[document.registro.selec_divcasosEsp4.selectedIndex].text.indexOf("Otra (229)")!=-1 ){
                    otros4 = document.registro.selec_divcasosEsp4_otros.options[document.registro.selec_divcasosEsp4_otros.selectedIndex].value;
                    if(otros4==0){
                        alert("Seleccione la opcion de otros en causa.");
                        return false;
                    }
                }
                cadenaT=cadenaT+"|"+otros4;
              }

        }catch(e){}

                cadenaT = cadenaT.substring(1,cadenaT.length);
                //alert("cadenaT="+cadenaT);
                if(cadenaT!="")
                    document.registro.PsOtrosCon.value=cadenaT;
                   
                
   }