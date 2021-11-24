
   
   function psUsuario(){
   

        var DpsUsuario = "";        
        var permoral   = "";
        for(u=0; u<document.registro.radio_usuario_tip_per.length; u++){
                  if(document.registro.radio_usuario_tip_per[u].checked==true){
                    permoral = document.registro.radio_usuario_tip_per[u].value;
                    break;
                  }
        }
        
        /*
                Hay q validar q seleccion el representante y el tipo de persona
        for(x=0; x<document.registro.radio_usuario_pers_repre.length; x++){
                  if(document.registro.radio_usuario_pers_repre[x].checked==true){
                    DBclase = document.registro.radio_usuario_pers_repre[x].value;
                    break;
                  }
        }  
        
    */
        
        
        if(permoral==""){ alert("Seleccione si es persona moral o física"); return false;}             
        //alert("radio_usuario_tip_per="+permoral);    
   
        if(permoral==0){            //Entra en caso de q sea persona física
                 if(document.registro.text_usuario_nombre.value!="")    {
                        document.registro.text_usuario_nombre.value = document.registro.text_usuario_nombre.value.substring(0,1).toUpperCase()+""+document.registro.text_usuario_nombre.value.substring(1,document.registro.text_usuario_nombre.value.length); 
                    } //cambiamos a letra capital 12-marzo-2008
                 var DBnombre      ="";    DBnombre       = document.registro.text_usuario_nombre.value;   

                 if(document.registro.text_usuario_ap.value!="")    { 
                        document.registro.text_usuario_ap.value = document.registro.text_usuario_ap.value.substring(0,1).toUpperCase()+""+document.registro.text_usuario_ap.value.substring(1,document.registro.text_usuario_ap.value.length); 
                 } //cambiamos a letra capital 12-marzo-2008
                 var DBpaterno     ="";    DBpaterno      = document.registro.text_usuario_ap.value;        

                 if(document.registro.text_usuario_am.value.value!="")    { 
                        document.registro.text_usuario_am.value = document.registro.text_usuario_am.value.substring(0,1).toUpperCase()+""+document.registro.text_usuario_am.value.substring(1,document.registro.text_usuario_am.value.length); 
                 } //cambiamos a letra capital 12-marzo-2008
                 var DBmaterno     ="";    DBmaterno      = document.registro.text_usuario_am.value; 
                     if (DBmaterno.indexOf("|")!=-1){    DBmaterno=DBmaterno.replace(/\|+/g, ""); document.registro.text_usuario_am.value=DBmaterno;     }                       
        
                 if(DBnombre=="")    {  alert("Escriba el nombre del usuario"); return false;                }

                     if (DBnombre.indexOf("|")!=-1){    DBnombre=DBnombre.replace(/\|+/g, "");    document.registro.text_usuario_nombre.value=DBnombre;     } 
                 if(DBpaterno=="")   {  alert("Escriba el apellido paterno del usuario"); return false;     }
                     if (DBpaterno.indexOf("|")!=-1){    DBpaterno=DBpaterno.replace(/\|+/g, ""); document.registro.text_usuario_ap.value=DBpaterno;     }   
                 //if(DBmaterno=="") {  alert("Escriba el apellido materno del "); return false;    }     //no es obligado        
        
            if(document.registro.text_usuario_masUsuarios.value!=""){                    //Entra solo si es mas de un solo usuario
                
                var masUsur = document.registro.text_usuario_masUsuarios.value;
                    masUsur = masUsur.substring(1,masUsur.length); 

                var AmasUsur  = masUsur.split("|"); 
                var TTTmasUsur="";
                    for(i=0; i<AmasUsur.length; i++){
                                AAmasUsur = AmasUsur[i];
                                var AAAmasUsur = AAmasUsur.split("_");
                                var NombremasUsur  = "0|"+AAAmasUsur[2]+"|"+AAAmasUsur[0]+"|"+AAAmasUsur[1]; //se pone el cero ya q idusu no es funcional en este momento
                                var ADirecmasUsur = AAAmasUsur[3]; var AADirecmasUsur = ADirecmasUsur.split(",")
                                var DirecmasUsur = AADirecmasUsur[0]+"|"+AADirecmasUsur[1].substring(7,AADirecmasUsur[1].length)+"|"+AADirecmasUsur[2].substring(7,AADirecmasUsur[2].length)+"|"+AADirecmasUsur[3];
                                    DirecmasUsur = DirecmasUsur+"|"+AAAmasUsur[7]+"|"+AAAmasUsur[8]+"|"+AAAmasUsur[4]+"|"+AAAmasUsur[5]+"|"+permoral+"||"+AAAmasUsur[6];   //doble pipe por q no hay mail
                                       TTmasUsur = NombremasUsur+"|"+DirecmasUsur;
                                      TTTmasUsur = TTTmasUsur+"|"+ TTmasUsur;   
                                      
                    }   

                    ///////////////////////////14 Abril 2008///////////// if (TTTmasUsur.indexOf("|")!=-1){    TTTmasUsur=TTTmasUsur.replace(/\|+/g, ""); }   

                    document.registro.text_usuario_masUsuarios2.value=TTTmasUsur; ////Todos los usuarios ya listos para la DB
                    //alert("TTTmasUsur="+TTTmasUsur);
                
                    //Tmpnombre = AmasUsur[2]; Tmppaterno = AmasUsur[1];  Tm = AmasUsur[2]; 
                
            }
            
        }
        else if(permoral==1){       //Entra en caso de q sea persona moral

                 if(document.registro.text_usuario_razonsocial.value!="")    { document.registro.text_usuario_razonsocial.value = document.registro.text_usuario_razonsocial.value.substring(0,1).toUpperCase()+""+document.registro.text_usuario_razonsocial.value.substring(1,document.registro.text_usuario_razonsocial.value.length); } //cambiamos a letra capital 12-marzo-2008            
                 var DBnombre      ="";    
                 var DBpaterno     ="";    DBpaterno      = document.registro.text_usuario_razonsocial.value;     if(DBpaterno==""){ alert("Por favor escriba la razón social."); return false; }

                         if (DBpaterno.indexOf("|")!=-1){    DBpaterno=DBpaterno.replace(/\|+/g, ""); document.text_usuario_razonsocial.value=DBpaterno;     }   
                 var DBmaterno     ="";    
        
        }

        
        
                //var DBidusu       ="";    DBidusu        = document.registro.DBidusu.value;               
                 var Frecepcion = "";
                  for(x=0; x<document.registro.radio_usuario_form_recep.length; x++){
                       if(document.registro.radio_usuario_form_recep[x].checked==true){ Frecepcion = document.registro.radio_usuario_form_recep[x].value;  break;  }
                   }                

                 var DBcalle       ="";    DBcalle        = document.registro.text_usuario_calle.value;      
                     if (DBcalle.indexOf("|")!=-1){    DBcalle=DBcalle.replace(/\|+/g, "");    document.registro.text_usuario_calle.value=DBcalle;     } 
                     if (Frecepcion=='0' || Frecepcion=='3'){ if(DBcalle=="")     {  alert("Escriba la calle"); return false;           } }    //depende de la recepcion
         
                 var DBext         ="";    DBext          = document.registro.text_usuario_numext.value;                 
                     if (DBext.indexOf("|")!=-1){    DBext=DBext.replace(/\|+/g, "");    document.registro.text_usuario_numext.value=DBext;     } 
                     if(Frecepcion=='0' || Frecepcion=='3'){ if(DBext=="")       {  alert("Escriba el num exterior"); return false;    } }    //depende de la recepcion

                 var DBint         ="";    DBint          = document.registro.text_usuario_numint.value;  
               
                 var DBcolonia     ="";    DBcolonia      = document.registro.text_usuario_colonia.value;             
                     if (DBcolonia.indexOf("|")!=-1){    DBcolonia=DBcolonia.replace(/\|+/g, "");    document.registro.text_usuario_colonia.value=DBcolonia;     } 
                     if(Frecepcion=='0' || Frecepcion=='3'){ if(DBcolonia=="")   {  alert("Escriba la colonia"); return false;         } }    //depende de la recepcion            

                 var DBidedo       ="";    DBidedo        = document.registro.selec_usuario_delegaciones.options[document.registro.selec_usuario_delegaciones.selectedIndex].value;               
                 if(DBidedo=="0")    {  alert("Seleccione el Estado"); return false;    }

                 var DBidmun       ="";    DBidmun        = document.registro.selec_usuario_localidades.options[document.registro.selec_usuario_localidades.selectedIndex].value
                 var DBcodigopostal="";    DBcodigopostal = document.registro.text_usuario_codigopostal.value;
                     if (DBcodigopostal.indexOf("|")!=-1){    DBcodigopostal=DBcodigopostal.replace(/\|+/g, ""); document.registro.text_usuario_codigopostal.value=DBcodigopostal;     }   

                 var DBtelefono    ="";    DBtelefono     = document.registro.text_usuario_telef.value;
                     if (DBtelefono.indexOf("|")!=-1){    DBtelefono=DBtelefono.replace(/\|+/g, ""); document.registro.text_usuario_telef.value=DBtelefono;     }   
                     if(!document.registro.check_usuario_nt.checked) {    if(DBtelefono=="")  {  alert("Escriba el telefóno"); return false;    }    }
                     if(DBtelefono.length<5)    DBtelefono="";

                 var DBe_mail      ="";    DBe_mail       = document.registro.text_usuario_email.value;
                     if (DBe_mail.indexOf("|")!=-1){    DBe_mail=DBe_mail.replace(/\|+/g, ""); document.registro.text_usuario_email.value=DBe_mail;     }   
                     if(!document.registro.check_usuario_ne.checked) {
                        if(DBe_mail=="")    {
                            alert("Escriba el email"); return false;       
                        }else {
                                  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(DBe_mail)){
                                  } else {
                                   alert("La dirección de correo electronico  es incorrecta.");
                                   return false;
                                  }
                            }    
                     }

                 var DBfax         ="";    DBfax          = document.registro.text_usuario_fax.value;
                     if (DBfax.indexOf("|")!=-1){    DBfax=DBfax.replace(/\|+/g, ""); document.registro.text_usuario_fax.value=DBfax;     }   




                 //if(DBidusu==""){  alert("Escriba el nombre del usuario"); return false;               }              //un falta corroborar
                 //if(DBint=="")     {  alert("Escriba el nombre del "); return false;              }     //no es obligado
                 //if(DBidmun=="")   {  alert("Escriba el nombre del "); return false;              }     //no es obligado
                 //if(DBcodigopostal==""){  alert("Escriba el nombre del "); return false;          }     //no es obligado
                 //if(DBfax=="")       {  alert("Escriba el fax"); return false;                    }     //no es obligado

                 piUsiDBN = "";
                 if(document.registro.piUsiDBN.value=="")  piUsiDBN = 0;
                 else                                      piUsiDBN = document.registro.piUsiDBN.value;

                 DpsUsuario=piUsiDBN+"|"+DBnombre+"|"+DBpaterno+"|"+DBmaterno+"|"+DBcalle+"|"+DBext+"|"+DBint+"|"+DBcolonia+"|"+DBidedo+"|"+DBidmun+"|"+DBcodigopostal+"|"+DBtelefono+"|"+permoral+"|"+DBe_mail+"|"+DBfax;
                 //piUsiDBN      
        
                document.registro.PsUsuario.value=DpsUsuario;
                
                if(document.registro.text_usuario_masUsuarios2.value!="")
                    document.registro.PsUsuario.value = document.registro.PsUsuario.value+document.registro.text_usuario_masUsuarios2.value;
        
            
        
        //psUsuario:idusu| nombre| paterno| materno| calle| ext| int| colonia| idedo| idmun| códigopostal| teléfono| permoral| e_mail| fax 
   
   
   
   }  


   function psUsuarioEspeciales(on_of_validiy){          //pendiente
        //El primer dato del array on_of_validiy es  0 ó 1 ya no se usa

        var DpsUsuario = "";        
        var permoral   = "";
        if(on_of_validiy.split("|")[12]==1){
            for(u=0; u<document.registro.radio_usuario_tip_per.length; u++){
                      if(document.registro.radio_usuario_tip_per[u].checked==true){
                        permoral = document.registro.radio_usuario_tip_per[u].value;
                        break;
                      }
            }
        }
       
        
        if(permoral==""){ alert("Seleccione si es persona moral o física"); return false;}             
        //alert("radio_usuario_tip_per="+permoral);    
   
        if(permoral==0){            //Entra en caso de q sea persona física

                 if(document.registro.text_usuario_nombre.value!="")    { document.registro.text_usuario_nombre.value = document.registro.text_usuario_nombre.value.substring(0,1).toUpperCase()+""+document.registro.text_usuario_nombre.value.substring(1,document.registro.text_usuario_nombre.value.length); } //cambiamos a letra capital 12-marzo-2008
                 var DBnombre      ="";    
                    if(on_of_validiy.split("|")[1]==1){
                     DBnombre       = document.registro.text_usuario_nombre.value;   
                     if(DBnombre=="")    {  alert("Escriba el nombre del usuario"); return false;                }
                        if (DBnombre.indexOf("|")!=-1){    DBnombre=DBnombre.replace(/\|+/g, "");    document.registro.text_usuario_nombre.value=DBnombre;     } 
                    }


                 if(document.registro.text_usuario_ap.value!="")    { document.registro.text_usuario_ap.value = document.registro.text_usuario_ap.value.substring(0,1).toUpperCase()+""+document.registro.text_usuario_ap.value.substring(1,document.registro.text_usuario_ap.value.length); } //cambiamos a letra capital 12-marzo-2008
                 var DBpaterno     ="";    
                    if(on_of_validiy.split("|")[2]==1){
                     DBpaterno      = document.registro.text_usuario_ap.value;             
                     if(DBpaterno=="")   {  alert("Escriba el apellido paterno del usuario"); return false;     }
                        if (DBpaterno.indexOf("|")!=-1){    DBpaterno=DBpaterno.replace(/\|+/g, ""); document.registro.text_usuario_ap.value=DBpaterno;     }   
                    }

                 if(document.registro.text_usuario_am.value!="")    { document.registro.text_usuario_am.value = document.registro.text_usuario_am.value.substring(0,1).toUpperCase()+""+document.registro.text_usuario_am.value.substring(1,document.registro.text_usuario_am.value.length); } //cambiamos a letra capital 12-marzo-2008
                 var DBmaterno     ="";    
                    if(on_of_validiy.split("|")[3]==1){
                     DBmaterno      = document.registro.text_usuario_am.value; 
                        if (DBmaterno.indexOf("|")!=-1){    DBmaterno=DBnombre.replace(/\|+/g, "");    document.registro.text_usuario_am.value=DBmaterno;     }                     
                    }
        
                 //if(DBmaterno=="") {  alert("Escriba el apellido materno del "); return false;    }     //no es obligado        
        
            if(document.registro.text_usuario_masUsuarios.value!=""){                    //Entra solo si es mas de un solo usuario
                
                var masUsur = document.registro.text_usuario_masUsuarios.value;
                    masUsur = masUsur.substring(1,masUsur.length); 

                var AmasUsur  = masUsur.split("|"); 
                var TTTmasUsur="";
                    for(i=0; i<AmasUsur.length; i++){
                                AAmasUsur = AmasUsur[i];
                                var AAAmasUsur = AAmasUsur.split("_");
                                var NombremasUsur  = "0|"+AAAmasUsur[2]+"|"+AAAmasUsur[0]+"|"+AAAmasUsur[1]; //se pone el cero ya q idusu no es funcional en este momento
                                var ADirecmasUsur = AAAmasUsur[3]; var AADirecmasUsur = ADirecmasUsur.split(",")
                                var DirecmasUsur = AADirecmasUsur[0]+"|"+AADirecmasUsur[1].substring(7,AADirecmasUsur[1].length)+"|"+AADirecmasUsur[2].substring(7,AADirecmasUsur[2].length)+"|"+AADirecmasUsur[3];
                                    DirecmasUsur = DirecmasUsur+"|"+AAAmasUsur[7]+"|"+AAAmasUsur[8]+"|"+AAAmasUsur[4]+"|"+AAAmasUsur[5]+"|"+permoral+"||"+AAAmasUsur[6];   //doble pipe por q no hay mail
                                       TTmasUsur = NombremasUsur+"|"+DirecmasUsur;
                                      TTTmasUsur = TTTmasUsur+"|"+ TTmasUsur;   
                                      
                    }   

                    ///////////////////////////14 Abril 2008/////////////if (TTTmasUsur.indexOf("|")!=-1){    TTTmasUsur=TTTmasUsur.replace(/\|+/g, "");  }                     

                    document.registro.text_usuario_masUsuarios2.value=TTTmasUsur; ////Todos los usuarios ya listos para la DB
                    //alert("TTTmasUsur="+TTTmasUsur);
                
                    //Tmpnombre = AmasUsur[2]; Tmppaterno = AmasUsur[1];  Tm = AmasUsur[2]; 
                
            }
            
        }
        else if(permoral==1){       //Entra en caso de q sea persona moral

                 if(document.registro.text_usuario_razonsocial.value!="")    { document.registro.text_usuario_razonsocial.value = document.registro.text_usuario_razonsocial.value.substring(0,1).toUpperCase()+""+document.registro.text_usuario_razonsocial.value.substring(1,document.registro.text_usuario_razonsocial.value.length); } //cambiamos a letra capital 12-marzo-2008                        
                 var DBnombre      ="";    
                 var DBpaterno     ="";    
                 if(on_of_validiy.split("|")[2]==1){
                     DBpaterno      = document.registro.text_usuario_razonsocial.value;     if(DBpaterno==""){ alert("Por favor escriba la razón social."); return false; }
                        if (DBpaterno.indexOf("|")!=-1){    DBpaterno=DBpaterno.replace(/\|+/g, ""); document.registro.text_usuario_razonsocial.value=DBpaterno;     }   
                 }
                 var DBmaterno     ="";    
        
        }

        
        
                //var DBidusu       ="";    DBidusu        = document.registro.DBidusu.value;               
                 var Frecepcion = "";
                  for(x=0; x<document.registro.radio_usuario_form_recep.length; x++){
                       if(document.registro.radio_usuario_form_recep[x].checked==true){ Frecepcion = document.registro.radio_usuario_form_recep[x].value;  break;  }
                   }

                 var DBcalle       ="";  
                    if(on_of_validiy.split("|")[4]==1){  
                     DBcalle        = document.registro.text_usuario_calle.value;      
                        if (DBcalle.indexOf("|")!=-1){    DBcalle=DBcalle.replace(/\|+/g, ""); document.registro.text_usuario_calle.value=DBcalle;     }            
                        if(Frecepcion=='0' || Frecepcion=='3'){ if(DBcalle=="")     {  alert("Escriba la calle"); return false;           } }    //depende de la recepcion
                    }
                 var DBext         ="";    
                    if(on_of_validiy.split("|")[5]==1){  
                     DBext          = document.registro.text_usuario_numext.value;                 
                        if (DBext.indexOf("|")!=-1){    DBext=DBext.replace(/\|+/g, ""); document.registro.text_usuario_numext.value=DBext;     }            
                        if(Frecepcion=='0' || Frecepcion=='3'){ if(DBext=="")       {  alert("Escriba el num exterior"); return false;    } }    //depende de la recepcion

                    }
                 var DBint         ="";   
                    if(on_of_validiy.split("|")[6]==1){  
                     DBint          = document.registro.text_usuario_numint.value;                 
                        if (DBint.indexOf("|")!=-1){    DBint=DBint.replace(/\|+/g, ""); document.registro.text_usuario_numint.value=DBint;     }            
                    }
                 var DBcolonia     =""; 
                    if(on_of_validiy.split("|")[7]==1){  
                     DBcolonia      = document.registro.text_usuario_colonia.value;             
                        if (DBcolonia.indexOf("|")!=-1){    DBcolonia=DBcolonia.replace(/\|+/g, ""); document.registro.text_usuario_colonia.value=DBcolonia;     }            
                        if(Frecepcion=='0' || Frecepcion=='3'){ if(DBcolonia=="")   {  alert("Escriba la colonia"); return false;         } }    //depende de la recepcion            
                    }
                 var DBidedo       ="";  
                    if(on_of_validiy.split("|")[8]==1){  
                     DBidedo        = document.registro.selec_usuario_delegaciones.options[document.registro.selec_usuario_delegaciones.selectedIndex].value;               
                        if(DBidedo=="0")    {  alert("Seleccione el Estado"); return false;    }
                    }
                 var DBidmun       ="";  
                    if(on_of_validiy.split("|")[9]==1){  
                     DBidmun        = document.registro.selec_usuario_localidades.options[document.registro.selec_usuario_localidades.selectedIndex].value
                    }
                 var DBcodigopostal="";    
                    if(on_of_validiy.split("|")[10]==1){  
                     DBcodigopostal = document.registro.text_usuario_codigopostal.value;
                        if (DBcodigopostal.indexOf("|")!=-1){    DBcodigopostal=DBcodigopostal.replace(/\|+/g, ""); document.registro.text_usuario_codigopostal.value=DBcodigopostal;     }            
                    }
                 var DBtelefono    ="";  
                    if(on_of_validiy.split("|")[11]==1){  
                     DBtelefono     = document.registro.text_usuario_telef.value;
                        if (DBtelefono.indexOf("|")!=-1){    DBtelefono=DBtelefono.replace(/\|+/g, ""); document.registro.text_usuario_telef.value=DBtelefono;     }            
                        if(!document.registro.check_usuario_nt.checked) {    if(DBtelefono=="")  {  alert("Escriba el telefóno"); return false;    }    }
                        if(DBtelefono.length<5)    DBtelefono="";
                    }
                 var DBe_mail      ="";   
                    if(on_of_validiy.split("|")[13]==1){  
                     DBe_mail       = document.registro.text_usuario_email.value;
                        if (DBe_mail.indexOf("|")!=-1){    DBe_mail=DBe_mail.replace(/\|+/g, ""); document.registro.text_usuario_email.value=DBe_mail;     }            
                        if(!document.registro.check_usuario_ne.checked) {
                            if(DBe_mail==""){
                                alert("Escriba el email"); return false;       
                            }else{ 
                                      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(DBe_mail)){
                                      } else {
                                       alert("La dirección de correo electronico  es incorrecta.");
                                       return false;
                                      }
                            }    
                        }

                    }
                 var DBfax         ="";   
                    if(on_of_validiy.split("|")[14]==1){  
                     DBfax          = document.registro.text_usuario_fax.value;
                        if (DBfax.indexOf("|")!=-1){    DBfax=DBfax.replace(/\|+/g, ""); document.registro.text_usuario_fax.value=DBfax;     }            
                    }




                 //if(DBidusu==""){  alert("Escriba el nombre del usuario"); return false;               }              //un falta corroborar
                 //if(DBint=="")     {  alert("Escriba el nombre del "); return false;              }     //no es obligado
                 //if(DBidmun=="")   {  alert("Escriba el nombre del "); return false;              }     //no es obligado
                 //if(DBcodigopostal==""){  alert("Escriba el nombre del "); return false;          }     //no es obligado
                 //if(DBfax=="")       {  alert("Escriba el fax"); return false;                    }     //no es obligado

                 piUsiDBN = "";
                 if(document.registro.piUsiDBN.value=="")  piUsiDBN = 0;
                 else                                      piUsiDBN = document.registro.piUsiDBN.value;

                 DpsUsuario=piUsiDBN+"|"+DBnombre+"|"+DBpaterno+"|"+DBmaterno+"|"+DBcalle+"|"+DBext+"|"+DBint+"|"+DBcolonia+"|"+DBidedo+"|"+DBidmun+"|"+DBcodigopostal+"|"+DBtelefono+"|"+permoral+"|"+DBe_mail+"|"+DBfax;
 
                 document.registro.PsUsuario.value=DpsUsuario;
                
                if(document.registro.text_usuario_masUsuarios2.value!="")
                    document.registro.PsUsuario.value = document.registro.PsUsuario.value+document.registro.text_usuario_masUsuarios2.value;
        
            
        
        //psUsuario:idusu| nombre| paterno| materno| calle| ext| int| colonia| idedo| idmun| códigopostal| teléfono| permoral| e_mail| fax 
   
   
   
   }  
