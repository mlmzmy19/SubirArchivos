

   
 
   
   function psProcedencia(){
   
        var DBidprc="";                 DBidprc             = document.registro.selec_usuario_procedencias.options[document.registro.selec_usuario_procedencias.selectedIndex].value;
        var DBreferencia="";            DBreferencia        = document.registro.text_usuario_num_ref.value;
            if (DBreferencia.indexOf("|")!=-1){    DBreferencia=DBreferencia.replace(/\|+/g, ""); document.registro.text_usuario_num_ref.value=DBreferencia;     }            
        var DBfechaprocedencia="";      DBfechaprocedencia  = document.registro.text_usuario_fec_doc.value; 
        var DBfoliooficialia="";        DBfoliooficialia    = document.registro.text_usuario_folio_ofic_partes.value;
            if (DBfoliooficialia.indexOf("|")!=-1){    DBfoliooficialia=DBfoliooficialia.replace(/\|+/g, ""); document.registro.text_usuario_folio_ofic_partes.value=DBfoliooficialia;     }                    

        //if(DBidprc=="0")            { alert("Seleccion la procedencia"); return false; }          //no se valida
        if(DBidprc!="0"){
            if(DBfoliooficialia=="")    { alert("Escriba la el folio de oficialía de partes"); return false; }
            if(DBreferencia=="")        { alert("Escriba el Número de referencia"); return false; }
            if(DBfechaprocedencia=="")  { alert("Escriba la Fecha del documento"); return false; }
        }
        //if(DBfoliooficialia=="")    { alert("Escriba el Folio Oficialía de Partes "); return false; } //no se valida
        
        DpsProcedencia = DBidprc+"|"+DBreferencia+"|"+DBfechaprocedencia+"|"+DBfoliooficialia;
        document.registro.PsProcedencia.value = DpsProcedencia;
        //if(DpsProcedencia=="") {alert("Falta por capturar la procedencia"); return false; }   no se valida

   
   }   

   function psProcedenciaEspeciales(on_of_validiy){
   
        var DBidprc="";                 
        if(on_of_validiy.split("|")[0]==1){
            DBidprc             = document.registro.selec_usuario_procedencias.options[document.registro.selec_usuario_procedencias.selectedIndex].value;
        }
        var DBreferencia="";            
        if(on_of_validiy.split("|")[1]==1){
            DBreferencia        = document.registro.text_usuario_num_ref.value;
                if (DBreferencia.indexOf("|")!=-1){    DBreferencia=DBreferencia.replace(/\|+/g, ""); document.registro.text_usuario_num_ref.value=DBreferencia;     }                    
        }
        var DBfechaprocedencia="";      
        if(on_of_validiy.split("|")[2]==1){
            DBfechaprocedencia  = document.registro.text_usuario_fec_doc.value; 
                if (DBfechaprocedencia.indexOf("|")!=-1){    DBfechaprocedencia=DBfechaprocedencia.replace(/\|+/g, ""); document.registro.text_usuario_fec_doc.value=DBfechaprocedencia;     }                    
        }
        var DBfoliooficialia="";        
        if(on_of_validiy.split("|")[3]==1){
            DBfoliooficialia    = document.registro.text_usuario_folio_ofic_partes.value;
                if (DBfoliooficialia.indexOf("|")!=-1){    DBfoliooficialia=DBfoliooficialia.replace(/\|+/g, ""); document.registro.text_usuario_folio_ofic_partes.value=DBfoliooficialia;     }                    
        }
        
            //if(DBidprc=="0")            { alert("Seleccion la procedencia"); return false; }          //no se valida

        if(DBidprc!="0"){
            if(DBfoliooficialia=="")    { alert("Escriba la el folio de oficialía de partes"); return false; }
            if(DBreferencia=="")        { alert("Escriba el Número de referencia"); return false; }
            if(DBfechaprocedencia=="")  { alert("Escriba la Fecha del documento"); return false; }
        }
            //if(DBfoliooficialia=="")    { alert("Escriba el Folio Oficialía de Partes "); return false; } //no se valida
        
        DpsProcedencia = DBidprc+"|"+DBreferencia+"|"+DBfechaprocedencia+"|"+DBfoliooficialia;
        document.registro.PsProcedencia.value = DpsProcedencia;

            //if(DpsProcedencia=="") {alert("Falta por capturar la procedencia"); return false; }   no se valida

   
   }  
   