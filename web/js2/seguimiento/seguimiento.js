      function casosEspecialesFinales(otroCaso){
        
            if(otroCaso.indexOf("z")!=-1){    // Caso Especial (z)
                           document.getElementById("casoEspecialeEvaluacion").style.display='';
                           document.seguimiento.AEvaluacion.value='';
                           document.seguimiento.TEmonto_recupado.value='';
                           document.seguimiento.REFvtipo[0].checked=false;
                           document.seguimiento.REFvtipo[1].checked=false;
                           document.seguimiento.REFvtipo[2].checked=true;
                           document.seguimiento.CEspFinales.value='z';
                           


            }else{
                           document.seguimiento.CEspFinales.value='';
            }

       
      }



      function validacionTipEspecial(){

       var datoEsp  = document.seguimiento.CEspFinales.value;
          DREFvtipo = "";
        if(datoEsp.indexOf("z")!=-1){
            for(i=0; i<document.seguimiento.REFvtipo.length; i++){
                if(document.seguimiento.REFvtipo[i].checked==true){
                    DREFvtipo = document.seguimiento.REFvtipo[i].value;
                    break;
                }
            }
        var DTEmonto_recupado = "";
            DTEmonto_recupado = document.seguimiento.TEmonto_recupado.value
        var DSETmoneda = "";
            DSETmoneda = document.seguimiento.SETmoneda.options[document.seguimiento.SETmoneda.selectedIndex].value;
            if(DTEmonto_recupado!=""){
                if(DSETmoneda=='0'){
                    alert("Seleccione el tipo de moneda"); 
                    return false;
                }
            DTEmonto_recupado = unformatNumber(DTEmonto_recupado);
            }
                
        var DAEvaluacion = "";
            DAEvaluacion = document.seguimiento.AEvaluacion.value;

        document.seguimiento.psEvaluacion.value = DREFvtipo +"|"+ DTEmonto_recupado +"|"+ DSETmoneda +"|"+ DAEvaluacion;

        }else{
                document.seguimiento.psEvaluacion.value="";

        }
        
        return true;

      }


      function selectInstitucion(){
            if(document.htmlContentForm.idasuins.length==2){
                  document.htmlContentForm.idasuins.options[1].selected=true;
                  dudas(document.htmlContentForm);
            }
            
      }

      function updateSeguimiento(){
        if(document.htmlContentForm.campo_evaluacion.value==1)
            document.getElementById("makeford").click();
            
      }




