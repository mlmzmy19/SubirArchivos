   function psAsunto(){
   

        var text_usuario_fec_reg = document.registro.text_usuario_fec_reg.value;             if(text_usuario_fec_reg==""){ alert("No existe fecha"); return false;} 
        var text_usuario_hr_reg = document.registro.text_usuario_hr_reg.value;               if(text_usuario_hr_reg==""){ alert("No existe Hora"); return false;}
        var fechaDB=text_usuario_fec_reg+" "+text_usuario_hr_reg;                            if(fechaDB==""){ alert("Error en la fecha"); return false;}
        //alert("Fecha+Hr="+fechaDB);

        var DBidrec = "";
        for(x=0; x<document.registro.radio_usuario_form_recep.length; x++){
                  if(document.registro.radio_usuario_form_recep[x].checked==true){
                    DBidrec = document.registro.radio_usuario_form_recep[x].value;
                    break;
                  }
        }
        
        if(DBidrec==""){ alert("Seleccione la forma de recepción"); return false;}
        
        //alert("radio_usuario_form_recep="+DBidrec);
        
        var idcla = document.registro.clase_ins.options[document.registro.clase_ins.selectedIndex].value;    
            idcla = idcla.split(",")[0];
        //alert("idcla="+idcla);
        if(idcla!='0'){

          try{                  
          
            var idpr1 = document.registro.selec_divcasosEsp1.options[document.registro.selec_divcasosEsp1.selectedIndex].value;    
            //alert("idpr1="+idpr1);  
                if(idpr1==0){  alert("(1)Falta por completar los catalogos de la pestaña Asuntos");  return false;  }      

            var idpr2 = document.registro.selec_divcasosEsp2.options[document.registro.selec_divcasosEsp2.selectedIndex].value;    
            //alert("idpr2="+idpr2);  
                if(idpr2==0){  alert("(2)Falta por completar los catalogos de la pestaña Asuntos");  return false;  }      

            var idpr3 = document.registro.selec_divcasosEsp3.options[document.registro.selec_divcasosEsp3.selectedIndex].value;    
            //alert("idpr3="+idpr3);  
                if(idpr3==0){  alert("(3)Falta por completar los catalogos de la pestaña Asuntos");  return false;  }      

            var idcau = document.registro.selec_divcasosEsp4.options[document.registro.selec_divcasosEsp4.selectedIndex].value;    
            //alert("idcau="+idcau);  
                if(idcau==0){  alert("Falta por seleccionar de la pestaña Asunto el catalogo causa");  return false;  }      
            }catch(e){alert("Falta por completar los catalogos de la pestaña Asuntos."+","+e.message); return false;}
            
            
            
        }else{
                alert("Seleccione la Clase Institución."); return false;
             }
        
        
        var DBatencion = "";
        for(x=0; x<document.registro.radio_usuario_atencion.length; x++){
                  if(document.registro.radio_usuario_atencion[x].checked==true){
                    DBatencion = document.registro.radio_usuario_atencion[x].value;
                    break;
                  }
        }
        
        if(DBatencion==""){ alert("Seleccione la forma de atención"); return false;}             
        //alert("radio_usuario_atencion="+DBatencion);             
       
        
        DpsAsunto=fechaDB+"|"+DBidrec+"|"+idcla+"|"+idpr1+"|"+idpr2+"|"+idpr3+"|"+idcau+"|"+DBatencion;
        document.registro.PsAsunto.value   =   DpsAsunto;
        
        if(DpsAsunto="") {alert("Error esta vacio el campo DpsAsunto"); return false;}
        ////fecha| idrec| idcla| idpr1| idpr2| idpr3| idcau| atención
   }


   function psAsuntoEspeciales(on_of_validiy){
   

        var text_usuario_fec_reg = document.registro.text_usuario_fec_reg.value;             if(text_usuario_fec_reg==""){ alert("No existe fecha"); return false;} 
        var text_usuario_hr_reg = document.registro.text_usuario_hr_reg.value;               if(text_usuario_hr_reg==""){ alert("No existe Hora"); return false;}
        var fechaDB="";
        if(on_of_validiy.split("|")[0]==1){
            fechaDB=text_usuario_fec_reg+" "+text_usuario_hr_reg;                            if(fechaDB==""){ alert("Error en la fecha"); return false;}
        }



        var DBidrec = "";
        if(on_of_validiy.split("|")[1]==1){
            for(x=0; x<document.registro.radio_usuario_form_recep.length; x++){
                      if(document.registro.radio_usuario_form_recep[x].checked==true){
                        DBidrec = document.registro.radio_usuario_form_recep[x].value;
                        break;
                      }
            }
            if(DBidrec==""){ alert("Seleccione la forma de recepción"); return false; }
        }



        var idcla="";   var idpr1="";   var idpr2="";   var idpr3="";  var idcau="";
        if(on_of_validiy.split("|")[2]==1 || on_of_validiy.split("|")[3]==1 || on_of_validiy.split("|")[4]==1 || on_of_validiy.split("|")[5]==1 || on_of_validiy.split("|")[6]==1){

            idcla = document.registro.clase_ins.options[document.registro.clase_ins.selectedIndex].value;    
                                            
            idcla = idcla.split(",")[0];

                    if(idcla!='0'){

                      try{                  

                        idpr1 = document.registro.selec_divcasosEsp1.options[document.registro.selec_divcasosEsp1.selectedIndex].value;    
                        //alert("idpr1="+idpr1);  
                            if(idpr1==0){  alert("(1)Falta por completar los catalogos de la pestaña Asuntos");  return false;  }      

                        idpr2 = document.registro.selec_divcasosEsp2.options[document.registro.selec_divcasosEsp2.selectedIndex].value;    
                        //alert("idpr2="+idpr2);  
                            if(idpr2==0){  alert("(2)Falta por completar los catalogos de la pestaña Asuntos");  return false;  }      

                        idpr3 = document.registro.selec_divcasosEsp3.options[document.registro.selec_divcasosEsp3.selectedIndex].value;    
                        //alert("idpr3="+idpr3);  
                            if(idpr3==0){  alert("(3)Falta por completar los catalogos de la pestaña Asuntos");  return false;  }      

                        idcau = document.registro.selec_divcasosEsp4.options[document.registro.selec_divcasosEsp4.selectedIndex].value;    
                        //alert("idcau="+idcau);  
                            if(idcau==0){  alert("Falta por seleccionar de la pestaña Asunto el catalogo causa");  return false;  }      
                        }catch(e){alert("Falta por completar los catalogos de la pestaña Asuntos."+","+e.message); return false;}



                    }else{
                            alert("Seleccione la Clase Institución."); return false;
                         }
         }
        
        var DBatencion = "";
        if(on_of_validiy.split("|")[7]==1){
            for(x=0; x<document.registro.radio_usuario_atencion.length; x++){
                      if(document.registro.radio_usuario_atencion[x].checked==true){
                        DBatencion = document.registro.radio_usuario_atencion[x].value;
                        break;
                      }
            }

            if(DBatencion==""){ alert("Seleccione la forma de atención"); return false;}             
        }
       
        
        DpsAsunto=fechaDB+"|"+DBidrec+"|"+idcla+"|"+idpr1+"|"+idpr2+"|"+idpr3+"|"+idcau+"|"+DBatencion;
        document.registro.PsAsunto.value   =   DpsAsunto;
        
        if(DpsAsunto="") {alert("Error esta vacio el campo DpsAsunto"); return false;}
        
   }