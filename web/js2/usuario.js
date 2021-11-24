
                  Campos_registro = new Array(1);
                                      
                  for (var i=0; i<30; i++) {  // 30 por q es el numero de campos del registro y contabilizando.
                            Campos_registro[i]    = new Array(2);
                            Campos_registro[i][0] = new Array();
                            Campos_registro[i][1] = new Array();
                  }            
        
                    Campos_registro[0][0]="radio_usuario_tipo_atencion";
                    Campos_registro[0][1]="int";
                    
                    Campos_registro[1][0]="radio_usuario_form_recep";
                    Campos_registro[1][1]="int";
                    
                    Campos_registro[2][0]="text_usuario_fec_reg";
                    Campos_registro[2][1]="str";
                    
                    Campos_registro[3][0]="text_usuario_hr_reg";
                    Campos_registro[3][1]="str";
                    
                    Campos_registro[4][0]="radio_usuario_tip_per";
                    Campos_registro[4][1]="int";
                    
                    Campos_registro[5][0]="selec_usuario_tip_iden";
                    Campos_registro[5][1]="int";
                    
                    Campos_registro[6][0]="text_usuario_num_ide";
                    Campos_registro[6][1]="str";
                    
                    Campos_registro[7][0]="radio_usuario_pers_repre";
                    Campos_registro[7][1]="int";
                    
                    Campos_registro[8][0]="text_usuario_nombre";
                    Campos_registro[8][1]="str";
                    
                    Campos_registro[9][0]="text_usuario_ap";
                    Campos_registro[9][1]="str";
                    
                    Campos_registro[10][0]="text_usuario_am";
                    Campos_registro[10][1]="str";
                    
                    Campos_registro[11][0]="text_usuario_calle";
                    Campos_registro[11][1]="str";                    
                    
                    Campos_registro[12][0]="text_usuario_numext";
                    Campos_registro[12][1]="str";                    
                    
                    Campos_registro[13][0]="text_usuario_numint";
                    Campos_registro[13][1]="str";                    
                    
                    Campos_registro[14][0]="text_usuario_colonia";
                    Campos_registro[14][1]="str";                    
                    
                    Campos_registro[15][0]="selec_usuario_delegaciones";
                    Campos_registro[15][1]="int";                                        
                    
                    Campos_registro[16][0]="selec_usuario_localidades";
                    Campos_registro[16][1]="int";                                        
                    
                    Campos_registro[17][0]="text_usuario_codigopostal";
                    Campos_registro[17][1]="str";                                        
                    
                    Campos_registro[18][0]="check_usuario_nt";
                    Campos_registro[18][1]="int";                                                            
                    
                    Campos_registro[19][0]="text_usuario_telef";
                    Campos_registro[19][1]="str";                                        
                    
                    Campos_registro[20][0]="text_usuario_fax";
                    Campos_registro[20][1]="str";                                                            

                    Campos_registro[21][0]="check_usuario_ne";
                    Campos_registro[21][1]="int";                                                            
                    
                    Campos_registro[22][0]="text_usuario_email";
                    Campos_registro[22][1]="str";                                                            
                   
                    Campos_registro[23][0]="selec_usuario_procedencias";
                    Campos_registro[23][1]="int";                                                            
                    
                    Campos_registro[24][0]="text_usuario_folio_ofic_partes";
                    Campos_registro[24][1]="str";                                                            
                    
                    Campos_registro[25][0]="text_usuario_num_ref";
                    Campos_registro[25][1]="str";                                                            
                    
                    Campos_registro[26][0]="text_usuario_fec_doc";
                    Campos_registro[26][1]="str";                                                            

        
                function inhibir_campos_text(form,valorRadio,arregloCampos,colorCampos){

                    if(valorRadio==0)       /* Se usa para los combos */
                    {
                            
                            AarregloCampos = arregloCampos.split("-");
                            for(t=0; t<AarregloCampos.length; t++){
                                if(form.selectedIndex!=0)
                                  {    eval("document.registro."+Campos_registro[AarregloCampos[t]][0]+".style.backgroundColor ='"+colorCampos+"'"); }
                                else 
                                  {    eval("document.registro."+Campos_registro[AarregloCampos[t]][0]+".style.backgroundColor ='#E1E1E1'"); }                    
                            }

                     }else if(valorRadio==1){                 /* Se usa solo para los radio */

                            var VarregloCampos = arregloCampos.split("-");
                                for(bg=0; bg<VarregloCampos.length; bg++){
                                        eval("form."+Campos_registro[VarregloCampos[bg]][0]+".style.backgroundColor ='"+colorCampos+"'");
                                }
                                    
                     }else if(valorRadio==2){                 /* Se usa solo para los checkbox */

                        if(form.checked){
                            eval("document.registro."+Campos_registro[arregloCampos][0]+".style.backgroundColor ='#E1E1E1'");
                            eval("document.getElementById('"+Campos_registro[arregloCampos][0]+"').disabled=true;");
                            
                        }
                        else{
                            eval("document.registro."+Campos_registro[arregloCampos][0]+".style.backgroundColor ='white'");
                            eval("document.getElementById('"+Campos_registro[arregloCampos][0]+"').disabled=false;");
                        }
                     }
                     
                            
                }
                
                
                function masDatosUsu(){

                return GB_showCenter('Mas Usuarios', '../../../../sio_web/casosEspRegistro/masUsuarios.jsp?todoArreglo='+document.registro.text_usuario_masUsuarios.value,700,700);
                  
                        //window.open("casosEspRegistro/masUsuarios.jsp","masDatos","height=700,width=800,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes");                
                }

                
function cambiar_img(img_name, img_src)
   {
   document.getElementById(img_name).src=img_src;
   }
   
   
   function valInt(valCad){
        if(isNaN(valCad))
            return true
        else 
            return false;
   }
   
  

   

   
   
 

   

 
   
   
   function FcasoEspecialZ(){
  
      if(document.registro.casoEspecialZ.value=='1')
            document.getElementById('asuntoIMG_DIV').style.display='';
       else if(document.registro.casoEspecialZ.value=='9')
            document.getElementById('asuntoIMG_DIV').style.display='none';
        
   }
   
   
   
   function ocultarDIVMoral(){

        
        var DBtipoPersona ="";
        for(x=0; x<document.registro.radio_usuario_tip_per.length; x++){
                  if(document.registro.radio_usuario_tip_per[x].checked==true){
                    DBtipoPersona = document.registro.radio_usuario_tip_per[x].value;
                    break;
                  }
        }        
        
        if(DBtipoPersona==0){
            document.getElementById('DIVcasoEspecialPersona1').style.display='';
            document.getElementById('DIVcasoEspecialPersona2').style.display='none';
        }else if(DBtipoPersona==1){
            document.getElementById('DIVcasoEspecialPersona1').style.display='none';
            document.getElementById('DIVcasoEspecialPersona2').style.display='';
            //return GB_show('Acreditamiento de Personalidad', '../../../../../sioWEB/sio_web/casosEspRegistro/acreditamiento.jsp',400,600);
        }
         
        //aqui lanzar ventana de acreditamiento
       
  
   }
   
   var Valor_buscar_usuario=1;

   function F_BuscaAsuXNombreUsu(){             
            //alert("onblur Valor_buscar_usuario="+Valor_buscar_usuario);

                var Tpersona = 0;
                for(x=0; x<document.registro.radio_usuario_tip_per.length; x++){
                              if(document.registro.radio_usuario_tip_per[x].checked==true){
                                Tpersona = document.registro.radio_usuario_tip_per[x].value;
                                break;
                              }
                }


                 if(Valor_buscar_usuario==1){
                    Valor_buscar_usuario=0;

                    var nombreValid = document.registro.text_usuario_nombre.value;  //psNombre
                    var apValid     = document.registro.text_usuario_ap.value;      //psPaterno
                    var amValid     = document.registro.text_usuario_am.value;      //psMaterno
                    var razonS      = document.registro.text_usuario_razonsocial.value;      //razon

                    if(Tpersona==0){             //fisica
                        if(nombreValid==""){
                            alert("Por favor escriba el nombre del usuario."); 
                            limpiaReus();
                            return false;
                        }
                        if(apValid==""){
                            alert("Por favor escriba el apellido paterno del usuario+."); 
                            limpiaReus();
                            return false;            
                        }

                        FAjax('../../sioWEB/servlets/Buscar_usuario','buscarUsuario','psNombre='+nombreValid+'&psPaterno='+apValid+'&psMaterno='+amValid,'POST'); return false;                               
                    }
                    else if(Tpersona==1){        //moral solo razon social
                        if(razonS==""){
                            alert("Por favor escriba la razón social."); return false;
                        }else{
                            apValid = razonS;
                        }
                        FAjax('../../sioWEB/servlets/Buscar_usuario','buscarInst','psNombre='+nombreValid+'&psPaterno='+apValid+'&psMaterno='+amValid,'POST'); return false;                               
                    }

                    
                    //FAjax('../../sioWEB/servlets/Buscar_usuario',window.open("casosEspRegistro/masUsuarios.jsp","masDatos","height=700,width=800,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes"),'psNombre='+nombreValid+'&psPaterno='+apValid+'&psMaterno='+amValid,'POST'); return false;                               

                 }
   }
   
   function F_BuscaAsuXNombreUsu_2(){
        //alert("onchange Valor_buscar_usuario="+Valor_buscar_usuario);
        Valor_buscar_usuario=1;
        F_BuscaAsuXNombreUsu();
   }


                function abrirVentanaUsuarios(){
                                var Tpersona = 0;
                                for(x=0; x<document.registro.radio_usuario_tip_per.length; x++){
                                              if(document.registro.radio_usuario_tip_per[x].checked==true){
                                                Tpersona = document.registro.radio_usuario_tip_per[x].value;
                                                break;
                                              }
                                }
                    var nombreD = document.registro.text_usuario_nombre.value;
                    var apaternoD = document.registro.text_usuario_ap.value;
                    var amaternoD = document.registro.text_usuario_am.value; 
                    
                    if(Tpersona==0){ 
                     if(nombreD=="")  { alert("Error escriba el usuario"); return false; }
                     if(apaternoD==""){ alert("Error escriba el usuario"); return false; }
                    }else{
                     if(apaternoD==""){ alert("Error escriba el usuario"); return false; }
                    }                    
                    //window.open('../../sioWEB/servlets/Buscar_usuario?psNombre='+nombreD+'&psPaterno='+apaternoD+'&psMaterno='+amaternoD,'masUsuarios','height=700,width=800,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes');
                    return GB_show('Usuarios', '../../../../../sioWEB/servlets/Buscar_usuario?psNombre='+nombreD+'&psPaterno='+apaternoD+'&psMaterno='+amaternoD,615,900);
                }


                function  valMontoASunto(){
                    if(document.registro.text_asunto_monto_rec.value!=""){
                            //alert(document.getElementByName("selec__asunto_unid_monet"));
                            document.getElementById("selec__asunto_unid_monet").style.background='white';
                    }

                }





   


