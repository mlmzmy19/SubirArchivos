   function psNominales_seg(){
   

   
        
        var idcla = document.registro.clase_ins.options[document.registro.clase_ins.selectedIndex].value;    
        idcla = idcla.split(",")[0];
        //alert("idcla="+idcla);
        if(idcla!='0'){

           Campos = ArregloCampos_Asunto();

           datoW1 = tiposCasos_Asunto(parseInt(idcla));
           SdatoW1 = datoW1.split(",");
         }else{
                    alert("Seleccione la Clase Institución."); return false;
         }

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
            
            
            
        try{

            DBfechahechos = document.registro.text_asunto_fec_ocu_hechos.value;
                if(document.registro.selec_usuario_tip_iden.options[document.registro.selec_usuario_tip_iden.selectedIndex].value!=0){
                    if(DBnoidentificacion=="")  { alert("Escriba el numero de identificación"); return false; }
                }
            DBmonto = document.registro.text_asunto_monto_rec.value;
            DBiduni = document.registro.selec__asunto_unid_monet.options[document.registro.selec__asunto_unid_monet.selectedIndex].value;
            //alert("--->"+DBiduni);
            DBobservaciones = document.registro.textA_asunto_observa.value;
            DBc1="";DBc2="";DBc3="";DBc4="";DBc5="";DBc6="";DBc7="";DBc8="";DBc9="";DBc10="";DBc11="";
            
            var Tbancos=" 1,2,7,10,11,12,13,14,15,16,20,22,23,24,25,26"; var Tcasas="3,8,9"; var Tfianzas="5"; var Tsar="6,18,21"; var Tseguros="4";
            
            for(t=0; t<Tbancos.split(",").length; t++){        
                    if(Tbancos.split(",")[t]==idcla){
                        DBc1   = document.registro.text_asunto_num_cuenta.value;          
                         //alert("?1");
                        break;
                    }
            }
           
            for(t=0; t<Tcasas.split(",").length; t++){        
                    if(Tcasas.split(",")[t]==idcla){
                        DBc1   = document.registro.text_asunto_num_cont_inter.value;          
                        DBc2   = document.registro.text_asunto_nom_prom.value;          
                        DBc3   = document.registro.text_asunto_fec_ope_imp.value;          
                            //alert("?2");
                        break;
                    }
            }            
            
            for(t=0; t<Tfianzas.split(",").length; t++){        
                    if(Tfianzas.split(",")[t]==idcla){
                        DBc1   = document.registro.text_asunto_num_poliza.value;          
                        DBc2   = document.registro.text_asunto_nom_fiado.value;          
                        DBc3   = document.registro.text_asunto_nom_benef.value;       
                        DBc4   = document.registro.text_asunto_con_orig_fianza.value;          
                        DBc5   = document.registro.text_asunto_inic_vigen.value;          
                        DBc6   = document.registro.text_asunto_term_vigen.value;                               
                        //alert("?3");
                        break;
                    }
            }                        
            
            
            for(t=0; t<Tsar.split(",").length; t++){        
                    if(Tsar.split(",")[t]==idcla){
                        DBc1   = document.registro.text_asunto_num_seg_soc.value;          
                        DBc2   = document.registro.text_asunto_rfc.value;          
                        DBc3   = document.registro.text_asunto_curp.value;       
                        DBc4   = document.registro.text_asunto_rfc.value;          
                        DBc5   = document.registro.text_asunto_lug_nac.value;
                        if(Tsar.split(",")[t]==21){
                            DBc6   = document.registro.text_hidden_asunto_afore.value;          
                        }
                        //alert("?4");
                        break;
                    }
            }                                    
            
            for(t=0; t<Tseguros.split(",").length; t++){        
                    if(Tseguros.split(",")[t]==idcla){
                        //alert("?5");
                        DBc1   = document.registro.text_asunto_num_poliza.value;          
                        DBc2   = document.registro.text_asunto_inic_vigen.value;          
                        DBc3   = document.registro.text_asunto_term_vigen.value;       
                        DBc4   = document.registro.text_asunto_nombre_contrat.value;          
                        DBc5   = document.registro.text_asunto_nombre_asegur.value;          
                        DBc6   = document.registro.text_asunto_benef.value;          
                        DBc7   = document.registro.text_asunto_nombre_agente.value;          
                        DBc8   = document.registro.text_asunto_nombre_ajustador.value;       
                        DBc9   = document.registro.text_asunto_num_siniestro.value;          
                        DBc10   = document.registro.text_asunto_lug_siniestro.value;                                  
                        DBc11   = document.registro.text_asunto_sum_asegur.value;                                                          
                        
                        break;
                    }
            }                                                
            
            
        }catch(e){alert("Falta un campo ,"+e.message);}
        

            
            //DBpsNominales  = idcla+"|"+DBfechahechos+"|"+DBidide+"|"+DBnoidentificacion+"|"+DBmonto+"|"+DBiduni+"|"+DBobservaciones;
            //DBpsNominales  = idcla+"|"+idpr1+"|"+idpr2+"|"+idpr3+"|"+idcau+"|"+DBiduni+"|"+DBfechahechos+"|"+DBmonto+"|"+DBiduni+"|"+DBobservaciones;
            DBpsNominales  = idcla+"|"+idpr1+"|"+idpr2+"|"+idpr3+"|"+idcau+"|"+DBfechahechos+"|"+DBmonto+"|"+DBiduni+"|"+DBobservaciones;
            DBpsNominales2 = DBc1+"|"+DBc2+"|"+DBc3+"|"+DBc4+"|"+DBc5+"|"+DBc6+"|"+DBc7+"|"+DBc8+"|"+DBc9+"|"+DBc10+"|"+DBc11;
            
            
            document.registro.PsNominales.value= DBpsNominales+"|"+DBpsNominales2;

   
   } 

