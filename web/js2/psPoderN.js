   function psPoderN(){
    //Falta por checar este otro
        //document.registro.PsPoderN.value="";    se agrego esta opcion
          tipo_perPN=-1;  

        for(i=0;i<document.registro.radio_usuario_tip_per.length;i++){
                if(document.registro.radio_usuario_tip_per[i].checked){
                    tipo_perPN=document.registro.radio_usuario_tip_per[i].value;
                    break;
                }
        }
        if(tipo_perPN==-1){
            alert("Seleccione el tipo de persona física o moral")
            return false;
        }else{
            if(tipo_perPN==0){
                    document.registro.PsPoderN.value="";
            }
        }

   }