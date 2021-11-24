String.prototype.trim = function(){ return this.replace(/^\s+|\s+$/g,'') }

function validarReusT(dato,idUsi){

 cont=0;
    nombre    = document.registro.text_usuario_nombre.value;
    paterno   = document.registro.text_usuario_ap.value;
    materno   = document.registro.text_usuario_am.value;
    telefono  = document.registro.text_usuario_telef.value;
    correo    = document.registro.text_usuario_email.value;
    lada      = "";
    ext       = "";
    psNombre  = "";
    psTel     = "";
    psCor     = "";
    Telefono2 = "";
    respuesta = false;

    if(dato==599 || dato==600 || dato==602){
    //alert(telefono);
          if(nombre!="" | paterno!=""){         //validamos q si escriben alguno de los dos se ejecute el nombre con apellidos  
            if(nombre=="" | paterno==""){
                alert("Por favor escriba el nombre y el apellido paterno");     
                limpiaReus();
                return false;
            }else{
                psNombre=nombre+"|"+paterno+"|"+materno;
                psNombre = psNombre.replace(/\s+/, "");
            }
                //alert("psNombre="+psNombre); 
                        respuesta=true;
      }else if(telefono!=""){ 
                if(telefono.indexOf('(')!=-1 && telefono.indexOf(')')!=-1){
                    lada = telefono.substring((telefono.indexOf('(')+1),telefono.indexOf(')'));
                    if(telefono.indexOf(')')!=-1){ 
                        if(telefono.indexOf('ext:')!=-1){   //alert("a");
                            telefono2 = telefono.substring((telefono.indexOf(')')+1),telefono.indexOf('ext:'));
                        }else{  //alert("b="+telefono.length);
                            telefono2 = telefono.substring((telefono.indexOf(')')+1),telefono.length);
                        }
                    }
                }
                if(telefono.indexOf('ext:')!=-1){
                    ext  = telefono.substring((telefono.indexOf('ext:')+4),telefono.length);        //se pone el 4 por la palabra ext:
                        if(telefono.indexOf(')')!=-1){  //alert("c");
                            telefono2 = telefono.substring((telefono.indexOf(')')+1),telefono.indexOf('ext:'));
                        }else{  //alert("d");
                            telefono2 = telefono.substring(0,telefono.indexOf('ext:'));
                        }
                    
                }
                    psTel = lada+"|"+telefono2+"|"+ext;  
                    psTel = psTel.replace(/\s+/, "");
                    //alert("psTel="+psTel);
                    respuesta=true;

                
          }else if(correo!=""){
                    psCor = correo;
                    psCor = psCor.replace(/\s+/, "");
                    respuesta=true;
                //alert("psCor="+psCor); 
          }else{
                for(f=0; f<document.registro.reusT.length; f++)
                    document.registro.reusT[f].checked = false;  
                
                alert('Escriba el nombre completo del usuario ó telefono ó correo electrónico.'); return false ;   
          } 

          if(respuesta==true){
            //alert("3");
                  var arriba = (screen.availHeight - 60) / 2; 
                  return GB_showCenter('Usuarios REUS', '../../../../sio_web/casosReus/reusUsuarios.jsp?psNombre='+psNombre+'&psTel='+psTel+'&psCor='+psCor+'&dato='+dato,200,500);
                  //window.open('../sio_web/casosReus/reusUsuarios.jsp?psNombre='+psNombre+'&psTel='+psTel+'&psCor='+psCor,'reus','height=600,width=1000,resizable=1,status=yes,toolbar=yes,menubar=yes,location=yes,scrollbars=yes,left='+arriba+',top='+10);
                  return true;
          }
    }else if(dato==598){
        cargadivReus(dato,idUsi);
    }

}

                    function cargadivReus(valorAA,idUsi){
                        var iterNum=0;
                               for(j=0; j<document.registro.clase_ins.length; j++ ){
                                    var iterclase = document.registro.clase_ins.options[j].value;   
                                    if(iterclase.split(",")[0]==25) break;
                                    ++iterNum;
                                }
                                document.registro.clase_ins.options[iterNum].selected = true;
                                lanzarCombos(document.registro);
                                iterNum=0;

                                lanza_actividades(0,idUsi,0,'registro'); /// desde aqui lanzamos las actividades onu.js   

                                var timerID = 0;
                                clearTimeout(timerID);
                                timerID = setTimeout("cargacuartoDiv("+valorAA+")", 6000);

                                var timerID2 = 0;
                                clearTimeout(timerID2);
                                timerID2 = setTimeout("cargarActividadesREUS()", 4000);


                                /*var timerID3 = 0;     con fines de pruebas
                                clearTimeout(timerID3);
                                timerID2 = setTimeout("cargarEdoReus('15')", 2000);*/

                                var timerID4 = 0;
                                clearTimeout(timerID4);
                                timerID4 = setTimeout("cargaInstitucionREUS()", 2000);

                                
                                document.registro.P_Nuevo_Asunto_psAvances.value='685|687|1001|292|||';

                    }

                    function cargarActividadesREUS(){
                            cont_mostrar_ocultar=1;
                            for(g=0; g<document.registro.actividad_1.length; g++){
                                if((document.registro.actividad_1.options[g].value.split("_")[0]==685)){
                                    document.registro.actividad_1.options[g].selected = true;
                                    break;
                                }
                            }
                        //alert("test->"+document.registro.actividad_1.options[1].value);
                    }

                    function cargarEdoReus(idEdo,idLoc){
                        for(y=0; y<document.registro.selec_usuario_delegaciones.length; y++){
                                if((document.registro.selec_usuario_delegaciones.options[y].value==idEdo)){
                                        document.registro.selec_usuario_delegaciones.options[y].selected = true;
                                        //document.registro.selec_usuario_delegaciones.options[document.registro.selec_usuario_delegaciones.options.length] = new Option(document.registro.selec_usuario_delegaciones.options[y].text,document.registro.selec_usuario_delegaciones.options[y].value,false,true);
                                    break;
                                }                                
                        }
                        
                            FAjax('../../sioWEB/controlador/LocalidadesMex2','div_selec_usuario_localidades','idEdo='+idEdo+'&idLoc='+idLoc,'POST'); 
                        //document.registro.selec_usuario_delegaciones.options.eventType='change';

                    }

                    function limpiaReus(){
                                for(f=0; f<document.registro.reusT.length; f++)
                                    document.registro.reusT[f].checked = false;
                    }

                    function validacionTelMail(){
                            cont_reus_esp = 0;
                            for(f=0; f<document.registro.reusT.length; f++){
                                if(document.registro.reusT[f].checked == true){
                                    cont_reus_esp = 1; break;
                                }
                            }
                            if(cont_reus_esp==0){
                                alert("Falta seleccionar si es una alta, modificación, consulta, ó cancelación"); return false;
                            }
                            
                            var DBtelefono    ="";  
                            var DBe_mail      ="";   
                            DBtelefono     = document.registro.text_usuario_telef.value;
                            DBe_mail       = document.registro.text_usuario_email.value;
                             if(DBtelefono==""){
                                if(DBe_mail==""){
                                        alert("Por favor escriba por lo menos el correo."); return false;
                                }
                             }else if(DBe_mail==""){
                                if(DBtelefono==""){
                                        alert("Por favor escriba por lo menos el teléfono.");   return false;
                                }
                             }

                    }
                    
                    function ChangeTipAten(){
                        var TDAsunto = document.registro.PsAsunto.value;
                        var tamAsunto = 0;
                        if(TDAsunto.length > 0){   
                            tamAsunto = TDAsunto.length;
                            TDAsunto = TDAsunto.substring(0,(TDAsunto.length-1));
                            TDAsunto = TDAsunto+"0";
                            document.registro.PsAsunto.value = TDAsunto;
                        }else{
                            alert("Falta por completar las pestaña de asuntos, verifiquela por favor."); return false;
                        }
                    }

                    function cargaInstitucionREUS(){
                            for(g=0; g<document.registro.selec_divcasosEsp0.length; g++){
                                if((document.registro.selec_divcasosEsp0[g].value.split("_")[0]==-1)){
                                    document.registro.selec_divcasosEsp0[g].selected = true;
                                    break;
                                }
                            }
                    }

                        