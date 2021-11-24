   function psAvances(){
   
    if(document.registro.P_Nuevo_Asunto_psAvances.value==""){
        alert("Agrege un avance"); return false;
    }
    else{
        document.registro.PsAvances.value = document.registro.P_Nuevo_Asunto_psAvances.value;
    }
        
   } 