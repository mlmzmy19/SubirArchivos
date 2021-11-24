   function psAsuIns(){

        var idcla = document.registro.clase_ins.options[document.registro.clase_ins.selectedIndex].value;    
            idcla = idcla.split(",")[0];
        //alert("idcla="+idcla);
        Flag_Asunto=0;
        Amas_if_ind2 = "";
       if(document.registro.text_asunto_masInstituciones.value!=""){
           var mas_if = document.registro.text_asunto_masInstituciones.value;
              Amas_if = mas_if.split("|");
              for(u=0; u<Amas_if.length; u++){
                Amas_if_ind1 = Amas_if[u].split("/")[0].split("_")[0]+"|"+Amas_if[u].split("/")[0].split("_")[1]; 
                Amas_if_ind2 = Amas_if_ind2+"|"+Amas_if_ind1;
              }
              Amas_if_ind2 = Amas_if_ind2.substring(1,Amas_if_ind2.length);
               var valid_Amas_if_ind = Amas_if_ind2.split("|");
                if(valid_Amas_if_ind.length%2!=0){  alert("Error al capturar más de una institución"); return false; }
                for(k=0; k < valid_Amas_if_ind.length; k++){
                    if(isNaN(valid_Amas_if_ind[k])){alert("Error, hay un problema al agregar mas instituciones."); return false;}
                }

              document.registro.text_asunto_FiltromasInstituciones.value = Amas_if_ind2;
              document.registro.PsAsuInsV.value   =   document.registro.text_asunto_FiltromasInstituciones.value;
              Flag_Asunto=1;
            
            
            
        
       }
       if(Flag_Asunto==0){

                        if(idcla!='0'){

                          try{                  

                            var idins = document.registro.selec_divcasosEsp0.options[document.registro.selec_divcasosEsp0.selectedIndex].value;    
                            //alert("idins="+idins);  
                            if(idins==0){  alert("(0)Falta por seleccionar la institución");  return false;  }      

                           }catch(e){alert("Falta por completar los catalogos de la pestaña Asuntos."+","+e.message); return false;}        

                        }else {  alert("Seleccione las Clase Institución"); return false;}

                        PsAsuIns=idins+"|"+idcla;
                        //alert("???????????PsAsuIns="+PsAsuIns);
                        //alert("???????????PsAsuIns2="+document.registro.PsAsuInsV.value);
                        document.registro.PsAsuInsV.value   =   PsAsuIns;
                        //alert("?qpaso");
                        if(PsAsuIns="") {alert("Error esta vacio el campo PsAsuIns"); return false;}  
                    
       }

   ///idins| idcla 
   }
   