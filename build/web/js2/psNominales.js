   function psNominales(){
   

   
        var DBclase = "";
        var DBTpersona = "";

        for(x=0; x<document.registro.radio_usuario_tip_per.length; x++){
                  if(document.registro.radio_usuario_tip_per[x].checked==true){
                    DBTpersona = document.registro.radio_usuario_tip_per[x].value;
                    break;
                  }
        }            

        if(DBTpersona=='0'){        //validamos q el primer dato [clase] de PsNominales vaya en vacio o vaya con el valor selecionado en tipo de persona
            var contClase=0;
            for(x=0; x<document.registro.radio_usuario_pers_repre.length; x++){
                      if(document.registro.radio_usuario_pers_repre[x].checked==true){
                        DBclase = document.registro.radio_usuario_pers_repre[x].value;  contClase=1;
                        break;
                      }
            }
            if(contClase==0)   {  alert("Aun falta por seleccionar tipo de persona q representa el asunto"); return false;  }
        }
        
        var idcla = document.registro.clase_ins.options[document.registro.clase_ins.selectedIndex].value;    
        idcla = idcla.split(",")[0];
        //alert("idcla="+idcla);
        if(idcla!='0'){

           Campos = ArregloCampos_Asunto();

           datoW1 = tiposCasos_Asunto(parseInt(idcla));
           SdatoW1 = datoW1.split(",");
            for(t=0; t<SdatoW1.length; t++){
                            //if(Campos[SdatoW1[t]][1].indexOf("text")!=-1)
                                
            }

         }else{
                        alert("Aun no se ha completado la pestaña de asuntos"); return false;
         }                  
        
        try{

            DBfechahechos = document.registro.text_asunto_fec_ocu_hechos.value;
                     if (DBfechahechos.indexOf("|")!=-1){    DBfechahechos=DBfechahechos.replace(/\|+/g, "");    document.registro.text_asunto_fec_ocu_hechos.value=DBfechahechos;     } 
            DBidide       = document.registro.selec_usuario_tip_iden.options[document.registro.selec_usuario_tip_iden.selectedIndex].value;
            DBnoidentificacion   = document.registro.text_usuario_num_ide.value;
                     if (DBnoidentificacion.indexOf("|")!=-1){    DBnoidentificacion=DBnoidentificacion.replace(/\|+/g, "");    document.registro.text_usuario_num_ide.value=DBnoidentificacion;     } 

                if(document.registro.selec_usuario_tip_iden.options[document.registro.selec_usuario_tip_iden.selectedIndex].value!=0){
                    if(DBnoidentificacion=="")  { alert("Escriba el numero de identificación"); return false; }
                }
            DBmonto = document.registro.text_asunto_monto_rec.value;
                     if (DBmonto.indexOf("|")!=-1){    DBmonto=DBmonto.replace(/\|+/g, "");    document.registro.text_asunto_monto_rec.value=DBmonto;     } 
            DBiduni = document.registro.selec__asunto_unid_monet.options[document.registro.selec__asunto_unid_monet.selectedIndex].value;
                     if (document.registro.text_asunto_monto_rec.value!=""){ 
                        if(document.registro.selec__asunto_unid_monet.options[document.registro.selec__asunto_unid_monet.selectedIndex].value==0){
                            alert("Seleccione el tipo de moneda, en la pestaña ASUNTO"); return false;
                        }
                     }

            //alert("--->"+DBiduni);
            DBobservaciones = document.registro.textA_asunto_observa.value;
                     if (DBobservaciones.indexOf("|")!=-1){    DBobservaciones=DBobservaciones.replace(/\|+/g, "");    document.registro.textA_asunto_observa.value=DBobservaciones;     } 
            DBc1="";DBc2="";DBc3="";DBc4="";DBc5="";DBc6="";DBc7="";DBc8="";DBc9="";DBc10="";DBc11="";
            
            var Tbancos=" 1,2,7,10,11,12,13,14,15,16,20,22,23,24,25,26"; var Tcasas="3,8,9"; var Tfianzas="5"; var Tsar="6,18,21"; var Tseguros="4";
            //alert("idcla="+idcla);
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
                            if (DBc1.indexOf("|")!=-1){    DBc1=DBc1.replace(/\|+/g, "");    document.registro.text_asunto_num_cont_inter.value=DBc1;     } 
                        DBc2   = document.registro.text_asunto_nom_prom.value;          
                            if (DBc2.indexOf("|")!=-1){    DBc2=DBc2.replace(/\|+/g, "");    document.registro.text_asunto_nom_prom.value=DBc2;     } 
                        DBc3   = document.registro.text_asunto_fec_ope_imp.value;          
                            if (DBc3.indexOf("|")!=-1){    DBc3=DBc3.replace(/\|+/g, "");    document.registro.text_asunto_fec_ope_imp.value=DBc3;     } 
                         //   alert("?2");
                        break;
                    }
            }            
            
            for(t=0; t<Tfianzas.split(",").length; t++){        
                    if(Tfianzas.split(",")[t]==idcla){
                        DBc1   = document.registro.text_asunto_num_poliza.value;          
                            if (DBc1.indexOf("|")!=-1){    DBc1=DBc1.replace(/\|+/g, "");    document.registro.text_asunto_num_poliza.value=DBc1;     } 
                        DBc2   = document.registro.text_asunto_nom_fiado.value;          
                            if (DBc2.indexOf("|")!=-1){    DBc2=DBc2.replace(/\|+/g, "");    document.registro.text_asunto_nom_fiado.value=DBc2;     } 
                        DBc3   = document.registro.text_asunto_nom_benef.value;       
                            if (DBc3.indexOf("|")!=-1){    DBc3=DBc3.replace(/\|+/g, "");    document.registro.text_asunto_nom_benef.value=DBc3;     } 
                        DBc4   = document.registro.text_asunto_con_orig_fianza.value;          
                            if (DBc4.indexOf("|")!=-1){    DBc4=DBc4.replace(/\|+/g, "");    document.registro.text_asunto_con_orig_fianza.value=DBc4;     } 
                        DBc5   = document.registro.text_asunto_inic_vigen.value;          
                            if (DBc5.indexOf("|")!=-1){    DBc5=DBc5.replace(/\|+/g, "");    document.registro.text_asunto_inic_vigen.value=DBc5;     } 
                        DBc6   = document.registro.text_asunto_term_vigen.value;                               
                            if (DBc6.indexOf("|")!=-1){    DBc6=DBc6.replace(/\|+/g, "");    document.registro.text_asunto_term_vigen.value=DBc6;     } 
                        //alert("?3");
                        break;
                    }
            }                        
            
            
            for(t=0; t<Tsar.split(",").length; t++){        
                    if(Tsar.split(",")[t]==idcla){
                        DBc1   = document.registro.text_asunto_num_seg_soc.value;        
                            if (DBc1.indexOf("|")!=-1){    DBc1=DBc1.replace(/\|+/g, "");    document.registro.text_asunto_num_seg_soc.value=DBc1;     }   
                        DBc2   = document.registro.text_asunto_rfc.value;          
                            if (DBc2.indexOf("|")!=-1){    DBc2=DBc2.replace(/\|+/g, "");    document.registro.registro.text_asunto_rfc.value=DBc2;     } 
                        DBc3   = document.registro.text_asunto_curp.value;       
                            if (DBc3.indexOf("|")!=-1){    DBc3=DBc3.replace(/\|+/g, "");    document.registro.text_asunto_curp.value=DBc3;     } 
                        DBc4   = document.registro.text_asunto_lug_nac.value; 
                            if (DBc4.indexOf("|")!=-1){    DBc4=DBc4.replace(/\|+/g, "");    document.registro.text_asunto_lug_nac.value=DBc4;     } 
                        DBc5   = document.registro.text_asunto_benef.value;          
                            if (DBc5.indexOf("|")!=-1){    DBc5=DBc5.replace(/\|+/g, "");    document.registro.text_asunto_benef.value=DBc5;     } 
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
                            if (DBc1.indexOf("|")!=-1){    DBc1=DBc1.replace(/\|+/g, "");    document.registro.text_asunto_num_poliza.value=DBc1;     } 
                        DBc2   = document.registro.text_asunto_inic_vigen.value;          
                            if (DBc2.indexOf("|")!=-1){    DBc2=DBc2.replace(/\|+/g, "");    document.registro.text_asunto_inic_vigen.value=DBc2;     } 
                        DBc3   = document.registro.text_asunto_term_vigen.value;       
                            if (DBc3.indexOf("|")!=-1){    DBc3=DBc3.replace(/\|+/g, "");    document.registro.text_asunto_term_vigen.value=DBc3;     } 
                        DBc4   = document.registro.text_asunto_nombre_contrat.value;          
                            if (DBc4.indexOf("|")!=-1){    DBc4=DBc4.replace(/\|+/g, "");    document.registro.text_asunto_nombre_contrat.value=DBc4;     } 
                        DBc5   = document.registro.text_asunto_nombre_asegur.value;          
                            if (DBc5.indexOf("|")!=-1){    DBc5=DBc5.replace(/\|+/g, "");    document.registro.text_asunto_nombre_asegur.value=DBc5;     } 
                        DBc6   = document.registro.text_asunto_benef.value;          
                            if (DBc6.indexOf("|")!=-1){    DBc6=DBc6.replace(/\|+/g, "");    document.registro.text_asunto_benef.value=DBc6;     } 
                        DBc7   = document.registro.text_asunto_nombre_agente.value;          
                            if (DBc7.indexOf("|")!=-1){    DBc7=DBc7.replace(/\|+/g, "");    document.registro.text_asunto_nombre_agente.value=DBc7;     } 
                        DBc8   = document.registro.text_asunto_nombre_ajustador.value;       
                            if (DBc8.indexOf("|")!=-1){    DBc8=DBc8.replace(/\|+/g, "");    document.registro.text_asunto_nombre_ajustador.value=DBc8;     } 
                        DBc9   = document.registro.text_asunto_num_siniestro.value;          
                            if (DBc9.indexOf("|")!=-1){    DBc9=DBc9.replace(/\|+/g, "");    document.registro.text_asunto_num_siniestro.value=DBc9;     } 
                        DBc10   = document.registro.text_asunto_lug_siniestro.value;                                  
                            if (DBc10.indexOf("|")!=-1){    DBc10=DBc10.replace(/\|+/g, "");    document.registro.text_asunto_lug_siniestro.value=DBc10;     } 
                        DBc11   = document.registro.text_asunto_sum_asegur.value;                                                          
                            if (DBc11.indexOf("|")!=-1){    DBc11=DBc11.replace(/\|+/g, "");    document.registro.text_asunto_sum_asegur.value=DBc11;     } 
                        
                        break;
                    }
            }                                                
            
            
        }catch(e){alert("Falta un campo ,"+e.message);}
        

            
            DBpsNominales  = DBclase+"|"+DBfechahechos+"|"+DBidide+"|"+DBnoidentificacion+"|"+DBmonto+"|"+DBiduni+"|"+DBobservaciones;
            DBpsNominales2 = DBc1+"|"+DBc2+"|"+DBc3+"|"+DBc4+"|"+DBc5+"|"+DBc6+"|"+DBc7+"|"+DBc8+"|"+DBc9+"|"+DBc10+"|"+DBc11;
            
            
            document.registro.PsNominales.value= DBpsNominales+"|"+DBpsNominales2;

   
   }      
   
   

   /**********************************************************************************************/


   function psNominalesEspeciales(on_of_validiy){
   

   
        var DBclase = "";
        var DBTpersona = "";

        for(x=0; x<document.registro.radio_usuario_tip_per.length; x++){
                  if(document.registro.radio_usuario_tip_per[x].checked==true){
                    DBTpersona = document.registro.radio_usuario_tip_per[x].value;
                    break;
                  }
        }            

        if(on_of_validiy.split("|")[0]==1){        
            if(DBTpersona=='0'){        //validamos q el primer dato [clase] de PsNominales vaya en vacio o vaya con el valor selecionado en tipo de persona
                var contClase=0;
                for(x=0; x<document.registro.radio_usuario_pers_repre.length; x++){
                          if(document.registro.radio_usuario_pers_repre[x].checked==true){
                            DBclase = document.registro.radio_usuario_pers_repre[x].value;  contClase=1;
                            break;
                          }
                }
                if(contClase==0)   {  alert("Aun falta por seleccionar tipo de persona q representa el asunto"); return false;  }
            }
        }




        var idcla = document.registro.clase_ins.options[document.registro.clase_ins.selectedIndex].value;    
        idcla = idcla.split(",")[0];

            /*if(idcla!='0'){       Esto nunca se uso

               Campos = ArregloCampos_Asunto();

               datoW1 = tiposCasos_Asunto(parseInt(idcla));
               SdatoW1 = datoW1.split(",");
                for(t=0; t<SdatoW1.length; t++){
                                //if(Campos[SdatoW1[t]][1].indexOf("text")!=-1)

                }

             }else{
                            alert("Aun no se ha completado la pestaña de asuntos"); return false;
             } */        
          
            var DBidide="";
            if(on_of_validiy.split("|")[2]==1){
                DBidide       = document.registro.selec_usuario_tip_iden.options[document.registro.selec_usuario_tip_iden.selectedIndex].value;
            }

            var DBnoidentificacion="";
            if(on_of_validiy.split("|")[3]==1){
                DBnoidentificacion   = document.registro.text_usuario_num_ide.value;
                            if (DBnoidentificacion.indexOf("|")!=-1){    DBnoidentificacion=DBnoidentificacion.replace(/\|+/g, "");    document.registro.text_usuario_num_ide.value=DBnoidentificacion;     } 
                if(document.registro.selec_usuario_tip_iden.options[document.registro.selec_usuario_tip_iden.selectedIndex].value!=0){
                    if(DBnoidentificacion=="")  { alert("Escriba el numero de identificación"); return false; }
                }
            }

        try{
        
            DBfechahechos = "";
            if(on_of_validiy.split("|")[1]==1){
                DBfechahechos = document.registro.text_asunto_fec_ocu_hechos.value;
                            if (DBfechahechos.indexOf("|")!=-1){    DBfechahechos=DBfechahechos.replace(/\|+/g, "");    document.registro.text_asunto_fec_ocu_hechos.value=DBfechahechos;     } 
            }

            var DBmonto ="";
            if(on_of_validiy.split("|")[4]==1){
                DBmonto = document.registro.text_asunto_monto_rec.value;
                            if (DBmonto.indexOf("|")!=-1){    DBmonto=DBmonto.replace(/\|+/g, "");    document.registro.text_asunto_monto_rec.value=DBmonto;     } 
            }

            var DBiduni="";
            if(on_of_validiy.split("|")[5]==1){
                DBiduni = document.registro.selec__asunto_unid_monet.options[document.registro.selec__asunto_unid_monet.selectedIndex].value;
                     if (document.registro.text_asunto_monto_rec.value!=""){ 
                        if(document.registro.selec__asunto_unid_monet.options[document.registro.selec__asunto_unid_monet.selectedIndex].value==0){
                            alert("Seleccione el tipo de moneda, en la pestaña ASUNTO"); return false;
                        }
                     }
            }

            var DBobservaciones="";
            if(on_of_validiy.split("|")[6]==1){
                DBobservaciones = document.registro.textA_asunto_observa.value;
                            if (DBobservaciones.indexOf("|")!=-1){    DBobservaciones=DBobservaciones.replace(/\|+/g, "");    document.registro.textA_asunto_observa.value=DBobservaciones;     } 
            }
            DBc1="";DBc2="";DBc3="";DBc4="";DBc5="";DBc6="";DBc7="";DBc8="";DBc9="";DBc10="";DBc11="";

            if(on_of_validiy.split("|")[7]==1){        
                            var Tbancos=" 1,2,7,10,11,12,13,14,15,16,20,22,23,24,25,26"; var Tcasas="3,8,9"; var Tfianzas="5"; var Tsar="6,18,21"; var Tseguros="4";

                            for(t=0; t<Tbancos.split(",").length; t++){        
                                    if(Tbancos.split(",")[t]==idcla){
                                        DBc1   = document.registro.text_asunto_num_cuenta.value;          
                                            if (DBc1.indexOf("|")!=-1){    DBc1=DBc1.replace(/\|+/g, "");    document.registro.text_asunto_num_cuenta.value=DBc1;     } 
                                         //alert("?1");
                                        break;
                                    }
                            }

                            for(t=0; t<Tcasas.split(",").length; t++){        
                                    if(Tcasas.split(",")[t]==idcla){
                                        DBc1   = document.registro.text_asunto_num_cont_inter.value;          
                                            if (DBc1.indexOf("|")!=-1){    DBc1=DBc1.replace(/\|+/g, "");    document.registro.text_asunto_num_cont_inter.value=DBc1;     } 
                                        DBc2   = document.registro.text_asunto_nom_prom.value;          
                                            if (DBc2.indexOf("|")!=-1){    DBc2=DBc2.replace(/\|+/g, "");    document.registro.text_asunto_nom_prom.value=DBc2;     } 
                                        DBc3   = document.registro.text_asunto_fec_ope_imp.value;          
                                            if (DBc3.indexOf("|")!=-1){    DBc3=DBc3.replace(/\|+/g, "");    document.registro.text_asunto_fec_ope_imp.value=DBc3;     } 
                                            //alert("?2");
                                        break;
                                    }
                            }            

                            for(t=0; t<Tfianzas.split(",").length; t++){        
                                    if(Tfianzas.split(",")[t]==idcla){
                                        DBc1   = document.registro.text_asunto_num_poliza.value;      
                                            if (DBc1.indexOf("|")!=-1){    DBc1=DBc1.replace(/\|+/g, "");    document.registro.text_asunto_num_poliza.value=DBc1;     }     
                                        DBc2   = document.registro.text_asunto_nom_fiado.value;          
                                            if (DBc2.indexOf("|")!=-1){    DBc2=DBc2.replace(/\|+/g, "");    document.registro.text_asunto_nom_fiado.value=DBc2;     } 
                                        DBc3   = document.registro.text_asunto_nom_benef.value;       
                                            if (DBc3.indexOf("|")!=-1){    DBc3=DBc3.replace(/\|+/g, "");    document.registro.text_asunto_nom_benef.value=DBc3;     } 
                                        DBc4   = document.registro.text_asunto_con_orig_fianza.value;          
                                            if (DBc4.indexOf("|")!=-1){    DBc4=DBc4.replace(/\|+/g, "");    document.registro.text_asunto_con_orig_fianza.value=DBc4;     } 
                                        DBc5   = document.registro.text_asunto_inic_vigen.value;          
                                            if (DBc5.indexOf("|")!=-1){    DBc5=DBc5.replace(/\|+/g, "");    document.registro.text_asunto_inic_vigen.value=DBc5;     } 
                                        DBc6   = document.registro.text_asunto_term_vigen.value;                               
                                            if (DBc6.indexOf("|")!=-1){    DBc6=DBc6.replace(/\|+/g, "");    document.registro.text_asunto_term_vigen.value=DBc6;     } 
                                        //alert("?3");
                                        break;
                                    }
                            }                        


                            for(t=0; t<Tsar.split(",").length; t++){        
                                    if(Tsar.split(",")[t]==idcla){
                                        DBc1   = document.registro.text_asunto_num_seg_soc.value;          
                                            if (DBc1.indexOf("|")!=-1){    DBc1=DBc1.replace(/\|+/g, "");    document.registro.text_asunto_num_seg_soc.value=DBc1;     } 
                                        DBc2   = document.registro.text_asunto_rfc.value;          
                                            if (DBc2.indexOf("|")!=-1){    DBc2=DBc2.replace(/\|+/g, "");    document.registro.text_asunto_rfc.value=DBc2;     } 
                                        DBc3   = document.registro.text_asunto_curp.value;       
                                            if (DBc3.indexOf("|")!=-1){    DBc3=DBc3.replace(/\|+/g, "");    document.registro.text_asunto_curp.value=DBc3;     } 
                                        DBc4   = document.registro.text_asunto_lug_nac.value; 
                                            if (DBc4.indexOf("|")!=-1){    DBc4=DBc4.replace(/\|+/g, "");    document.registro.text_asunto_lug_nac.value=DBc4;     } 
                                        DBc5   = document.registro.text_asunto_nom_benef.value;   
                                            if (DBc5.indexOf("|")!=-1){    DBc5=DBc5.replace(/\|+/g, "");    document.registro.text_asunto_nom_benef.value=DBc5;     } 
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
                                            if (DBc1.indexOf("|")!=-1){    DBc1=DBc1.replace(/\|+/g, "");    document.registro.text_asunto_num_poliza.value=DBc1;     }   
                                        DBc2   = document.registro.text_asunto_inic_vigen.value;          
                                            if (DBc2.indexOf("|")!=-1){    DBc2=DBc2.replace(/\|+/g, "");    document.registro.text_asunto_inic_vigen.value=DBc2;     } 
                                        DBc3   = document.registro.text_asunto_term_vigen.value;       
                                            if (DBc3.indexOf("|")!=-1){    DBc3=DBc3.replace(/\|+/g, "");    document.registro.text_asunto_term_vigen.value=DBc3;     } 
                                        DBc4   = document.registro.text_asunto_nombre_contrat.value;          
                                            if (DBc4.indexOf("|")!=-1){    DBc4=DBc4.replace(/\|+/g, "");    document.registro.text_asunto_nombre_contrat.valueDBc4DBc5;     } 
                                        DBc5   = document.registro.text_asunto_nombre_asegur.value;          
                                            if (DBc5.indexOf("|")!=-1){    DBc5=DBc5.replace(/\|+/g, "");    document.registro.text_asunto_nombre_asegur.value=DBc5;     } 
                                        DBc6   = document.registro.text_asunto_benef.value;          
                                            if (DBc6.indexOf("|")!=-1){    DBc6=DBc6.replace(/\|+/g, "");    document.registro.text_asunto_benef.value=DBc6;     } 
                                        DBc7   = document.registro.text_asunto_nombre_agente.value;          
                                            if (DBc7.indexOf("|")!=-1){    DBc7=DBc7.replace(/\|+/g, "");    document.registro.text_asunto_nombre_agente.value=DBc7;     } 
                                        DBc8   = document.registro.text_asunto_nombre_ajustador.value;       
                                            if (DBc8.indexOf("|")!=-1){    DBc8=DBc8.replace(/\|+/g, "");    document.registro.text_asunto_nombre_ajustador.value=DBc8;     } 
                                        DBc9   = document.registro.text_asunto_num_siniestro.value;          
                                            if (DBc9.indexOf("|")!=-1){    DBc9=DBc9.replace(/\|+/g, "");    document.registro.text_asunto_num_siniestro.value=DBc9;     } 
                                        DBc10   = document.registro.text_asunto_lug_siniestro.value;                                  
                                            if (DBc10.indexOf("|")!=-1){    DBc10=DBc10.replace(/\|+/g, "");    document.registro.text_asunto_lug_siniestro.value=DBc10;     } 
                                        DBc11   = document.registro.text_asunto_sum_asegur.value;                                                          
                                            if (DBc11.indexOf("|")!=-1){    DBc11=DBc11.replace(/\|+/g, "");    document.registro.text_asunto_sum_asegur.value=DBc11;     } 

                                        break;
                                    }
                            }                                                
            
           }
            
        }catch(e){alert("Falta un campo ,"+e.message);}
        

            
            DBpsNominales  = DBclase+"|"+DBfechahechos+"|"+DBidide+"|"+DBnoidentificacion+"|"+DBmonto+"|"+DBiduni+"|"+DBobservaciones;
            DBpsNominales2 = DBc1+"|"+DBc2+"|"+DBc3+"|"+DBc4+"|"+DBc5+"|"+DBc6+"|"+DBc7+"|"+DBc8+"|"+DBc9+"|"+DBc10+"|"+DBc11;
            
            
            document.registro.PsNominales.value= DBpsNominales+"|"+DBpsNominales2;

   
   }      





   
   
