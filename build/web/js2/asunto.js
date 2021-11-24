    function lanzarCombos(form){
    
    var cadena_clase_ins = form.clase_ins.options[form.clase_ins.selectedIndex].value;
    document.getElementById("consultasLinksAsuntos").innerHTML="";   
    document.getElementById("consultasLinksAfores").innerHTML=""; 
    document.registro.text_asunto_masInstituciones.value="";
    document.registro.text_asunto_FiltromasInstituciones.value="";
    document.registro.LanzaLinkofCausas.value="";

    try{
        document.registro.text_hidden_asunto_afore.value="";
    }catch(e){}

    if(cadena_clase_ins!=0){    //Inicio de validacion para caso de cero
                    indice_calif=1;


                    arr_cad_ins    = cadena_clase_ins.split(",");
                    //alert(cadena_clase_ins);

                    var num_iter_casos=0;
                    var num_iter_divs=0;

                    document.getElementById("capaContenedora").innerHTML="";    // Limpiamos el div    
                    f_casos_espec = document.getElementById('capaContenedora');                 // Obtenemos el area donde se pondran los especiales    

                    //alert(arr_cad_ins);
                    //alert(arr_cad_ins);

                    for(ci=0;ci<arr_cad_ins.length;ci++)
                     {
                      ///jj if(arr_cad_ins[ci]!='null')     //Validamos q novenga nulo para poder crear los options
                      ///jj  {

                            contenedor_casosEsp    = document.createElement('div');         // Creamos los divs     
                            contenedor_casosEsp.id   = 'divcasosEsp'+ci;    
                            contenedor_casosEsp.name = 'divcasosEsp'+ci;  
                            //contenedor_casosEsp.style.borderStyle="solid"

                            arreglo_divs[num_iter_divs]=contenedor_casosEsp.name;
                            arr_int_tip[num_iter_divs]=ci+1;
                            arr_cad_des[num_iter_divs]=arr_cad_ins[ci];

                            ++num_iter_divs;            
                            f_casos_espec.appendChild(contenedor_casosEsp);

                            //Mostramos etiquetas de los divs
                            /*item_caso_esp_DIV_text = document.createTextNode(contenedor_casosEsp.id+"--->");			  
                            contenedor_casosEsp.appendChild(item_caso_esp_DIV_text);    */

                            if(ci==0){
                            arr_cad_des[0]="Instituciones";
                            item_caso_esp_C2_text = document.createTextNode("Instituciones");			  
                            contenedor_casosEsp.appendChild(item_caso_esp_C2_text);                 
                            }
                            else{
                            item_caso_esp_C2_text = document.createTextNode(arr_cad_ins[ci]);			  
                            contenedor_casosEsp.appendChild(item_caso_esp_C2_text);     
                            }


                            //item_caso_esp_C2_br = document.createElement("<br>");			  
                            //contenedor_casosEsp.appendChild(item_caso_esp_C2_br);              

                            item_caso_esp_C2_esp = document.createTextNode('\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0');			  
                            contenedor_casosEsp.appendChild(item_caso_esp_C2_esp);                          

                            item_caso_esp = document.createElement('select'); 

                            item_caso_esp.id    = 'selec_divcasosEsp'+num_iter_divs;  

                                                for(ka=1; ka<=1; ka++){    // Creamos dinamicamente todos los objetos con variables
                                                    eval("var op"+ka+" = document.createElement('option');"); 
                                                    eval("op"+ka+".value = "+ka+";"); 
                                                }                                

                                                for(ka=1; ka<=1; ka++){    // Creamos dinamicamente todos los objetos con variables
                                                    eval("var txt"+ka+" = document.createTextNode('...');"); 
                                                } 

                                                for(ke=1; ke<=1; ke++)
                                                    eval("op"+ke+".appendChild(txt"+ke+");"); 

                                                for(ki=1; ki<=1; ki++)
                                                    eval("item_caso_esp.appendChild(op"+ki+")"); 


                                            contenedor_casosEsp.appendChild(item_caso_esp);

                                if(arr_cad_ins[ci]=='null')     //Validamos q novenga nulo para poder ocultar los objetos
                                  { 
                                    contenedor_casosEsp.style.display = "none";
                                   //contenedor_casosEsp.style.visibility = "hidden";

                                  }                      


                            if(num_iter_casos==0){  
                                num_iter_casos++;
                                var piPadre = arr_cad_ins[0];
                              //eval("dudas_update(0,"+piTipo+","+piPadre+",'"+nombreTipo1+"');");
                              eval("dudas_update(0,"+piPadre+");");

                            }


                       ///jj} 

                     }    
                            eval("dudas_update(1,"+piPadre+");"); 
                     //alert("///-0="+arr_cad_des+"///-1="+arreglo_divs+"///-2="+arr_int_tip);



            //existen exepciones en las cuales la clase no importa tales como reclamasiones anonimas en el registro para ello se mandara un 999 2007/12/06
                var validarTipoAtencion=0;                                                                                  //2007/12/06
                        for(v =0 ; v<document.registro.radio_usuario_atencion.length; v++){                                 //2007/12/06
                            if(document.registro.radio_usuario_atencion[v].checked){                                        //2007/12/06
                                     validarTipoAtencion=document.registro.radio_usuario_atencion[v].value;                 //2007/12/06
                                     break;                                                                                 //2007/12/06
                            }                                                                                               //2007/12/06
                        }                                                                                               
                        if(validarTipoAtencion=='0')    //2007/12/06
                            cadena_clase_ins='999';       //2007/12/06
            
            otros_campos_asuntos(cadena_clase_ins) //llamamos funcion para poner campos

       } //Fin de validacion q no sea cero
       else {alert('No se ha seleccionado la institucion');    document.getElementById("capaContenedora").innerHTML="";    }
            
    }


                    function dudas_update(consec,piPadre){
                    
                    //alert(arreglo_divs[consec]+","+arr_int_tip[consec]+","+piPadre+","+arr_cad_des[consec]+","+consec);

                        if(consec<5){    //Validamos q no venga con no supere la causa
                         eval("FAjax('../../sioWEB/servlets/Catalogos_asunto','"+arreglo_divs[consec]+"','piTipo="+arr_int_tip[consec]+"&piPadre="+piPadre+"&descTipo="+arr_cad_des[consec]+"&nombreSelect="+arreglo_divs[consec]+"&consec="+consec+"','POST');"); return false;    
                        }

                        if(consec==5){


                                        lanzarotrosLINKS();

                            
                        }

                    }

                                        
                   function nextDiv(select,piPadre,consec){

                        //alert("select="+select+",piPadre="+piPadre+",consec="+consec);
                        var valor_id = select.options[select.selectedIndex].value;
                        Otros(select,piPadre,consec);
                        ++consec;                    
                        /*Falta verificar el pi padre cuando venga del tipo=3*/
                        /*Tengo q mandar primero el consecutivo,tipo,valorid,nombre,capa*/

                        if(arr_int_tip[consec]>=3){ 
                                    piPadre=valor_id; 
                                    //alert("q?"+piPadre);
                            }

                        //alert(">>>??"+consec);                            
                        if(consec!=1)   //Se pone esta validacion ya q los combos sucesores no depende del combo de intitucionesº
                            dudas_update(consec,piPadre);
                            
                        

                    }
                    
                    
                    
                    
                    function comprobars(selectX,piPadre,consec,desTipo){

                    /*Pruebas hacer q cada combo se seleccione automaticamente en caso de haber sola una opcion*/
                    
                                if(selectX.length==2 || desTipo=='null'){
                                    selectX[1].selected=true;
                                        nextDiv(selectX,piPadre,consec);
                                }else{

                                    if(consec>1){       ///Borramos
                                           for(limp=(consec+1); limp<=(arr_int_tip.length-1); limp++){
                                             var select_limp = "selec_"+arreglo_divs[limp];
                                             eval(" limp_select = document.getElementsByName('"+select_limp+"')");
                                                  if(limp_select.length>0){
                                                    var tam_selec = limp_select[0].length;
                                                            for(i2=tam_selec; i2>0; i2--){
                                                                limp_select[0].options[i2] = null;
                                                            }
                                                 }
                                           }
                                           /*Aqui invocamos funcion para borrar cajas de texto*/
                                           borrar_cajas();
                                    }
                                     
                                }
                                
                                
                    }
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    function Otros(select,piPadre,consec){
                    
                    var otroY = select.options[select.selectedIndex].text;
                    var otroZ = select.options[select.selectedIndex].value;
                         try{                  //limpiamos el primer otro
                            //alert("consec="+consec);
                               //if(consec==1){
                                    //alert("consec="+consec+",arreglo_divs="+arreglo_divs+",arreglo_divs.length="+arreglo_divs.length);
                                 for(y=consec; y<=arreglo_divs.length; y++){
                                    eval("document.getElementById('"+arreglo_divs[y]+"_Otros').innerHTML='';");  
                                 }
                               //}
                             }catch(e){}

                        if(consec>0 &&  otroY.indexOf("Otro (")!=-1){    //Validamos quien son los q tenemos q crearles la opcion de otros
                                          // alert(arreglo_divs[consec]+","+arr_int_tip[consec]+","+piPadre+","+arr_cad_des[consec]+","+consec);
                                              eval("f_otros = document.getElementById('"+arreglo_divs[consec]+"_Otros');");  
                                              //f_otros.style.borderStyle="solid";
                                              /*f_otros.style.width='1100px';
                                              f_otros.style.verticalAlign="baseline";
                                              f_otros.style.top="-1px";
                                              f_otros.align='baseline';*/
                                              
                                              /*****Se edita esta parte ya q aun no se ha arreglado si el catalogo de otros se anexa****/
                                              contenedor_selec    = document.createElement('div');         // Creamos los divs     
                                              contenedor_selec.id = 'divcasosEsp_selec'+consec;    

                                              /*contenedor_selec.style.borderStyle="solid"
                                              contenedor_selec.style.width='800px';
                                              contenedor_selec.style.verticalAlign="baseline"
                                              contenedor_selec.style.top="50px";*/
                                              
                                              
                                              f_otros.appendChild(contenedor_selec);  
                                              //////alert("piTipo="+arr_int_tip[consec]+",piPadre="+piPadre);

                                              eval("FAjax('../../sioWEB/servlets/Catalogos_otros','"+contenedor_selec.id+"','piTipo="+arr_int_tip[consec]+"&piPadre="+piPadre+"&descTipo=Otro&nombreSelect="+contenedor_selec.id+"&consec="+consec+"','POST');"); return false;    
                                           
                        }

                        if(consec==4 &&  otroY.indexOf("Otra (")!=-1){
                                              eval("f_otros = document.getElementById('"+arreglo_divs[consec]+"_Otros');");  
                                              //f_otros.style.borderStyle="solid";
                                              contenedor_selec    = document.createElement('div');         // Creamos los divs     
                                              contenedor_selec.id = 'divcasosEsp_selec'+4;    
                                              f_otros.appendChild(contenedor_selec);                                         
                                              eval("FAjax('../../sioWEB/servlets/Catalogos_otros','"+contenedor_selec.id+"','piTipo="+arr_int_tip[4]+"&piPadre="+piPadre+"&descTipo="+arr_cad_des[4]+"&nombreSelect="+arreglo_divs[4]+"&consec="+4+"','POST');"); return false;    
                        
                        }
                        
                    }
                    
                    
                    
                    
                    function borrar_cajas(){

                                  var forma_lim  = document.getElementsByName('registro');
                                                        for(y=0; y<forma_lim[0].elements.length; y++){

                                                                if(forma_lim[0].elements[y].type=='text'){
                                                                    var text_input_name = forma_lim[0].elements[y].id;
                                                                    if(text_input_name.indexOf("otro_text_")!=-1){

                                                                        eval("var otro_text  = document.getElementById('"+text_input_name+"');");
                                                                        var num_div = parseInt(text_input_name.substring((text_input_name.length-1),text_input_name.length));
                                                                        eval("var sel_limp  = document.getElementById('selec_"+arreglo_divs[num_div]+"');");
                                                                        eval("var div_limp  = document.getElementById('"+arreglo_divs[num_div]+"');");
                                                                        var bandera_sel = sel_limp.options[sel_limp.selectedIndex].text;
                                                                        if(bandera_sel.indexOf("Otro (")==-1)   //Validamos q se pueda borra todo
                                                                            div_limp.removeChild(otro_text);
                                                                    }
                                                                }
                                                        }                                                   

                    }
                    

                    function lanzarotrosLINKS(){        //Falta validar los tamaños de los campos en el caso de rrc y nss
                            var datoLink = document.registro.selec_divcasosEsp4.options[document.registro.selec_divcasosEsp4.selectedIndex].value;
                            for(x=0; x<document.registro.radio_usuario_form_recep.length; x++){
                               if(document.registro.radio_usuario_form_recep[x].checked==true){ DBidrecActividades = document.registro.radio_usuario_form_recep[x].value;  break; }
                            }                               
                                //alert("datoLink="+datoLink);
                            if(datoLink!=0 && DBidrecActividades==0){


                                    if(datoLink==334 || datoLink==326 || datoLink==502){              //Caso Procesar RFC    

                                            document.getElementById("consultasLinksAsuntos").innerHTML="";                                             
                                            var divlink = document.getElementById("consultasLinksAsuntos");                                             
                                            input_asuntos_link = document.createElement('input');
                                            input_asuntos_link.type = 'image';
                                            if(datoLink==334){       
                                                input_asuntos_link.src = '../img/consulta_procesar.jpg';
                                                document.getElementById('text_asunto_rfc').style.background='orange';           document.getElementById('text_asunto_num_seg_soc').style.background='#EDEDED';
                                            }
                                            else if(datoLink==326 || datoLink==502){  
                                                input_asuntos_link.src = '../img/consulta_procesar_nss.jpg';
                                                document.getElementById('text_asunto_num_seg_soc').style.background='orange';   document.getElementById('text_asunto_rfc').style.background='#EDEDED';
                                            }
                                            //input_asuntos_link.value = 'Procesar';
                                            input_asuntos_link.onclick=function(){return casoRFC(datoLink);};
                                            input_asuntos_link.width = 100;
                                            input_asuntos_link.height = 14;
                                            divlink.appendChild(input_asuntos_link);                         
                                            
                                            //input_asuntos_link.style.background='#EDEDED'; 
                                            //alert(document.getElementById('text_asunto_rfc').id);  //    document.getElementById('text_asunto_rfc').style.cursor='hand';  //    document.getElementById('text_asunto_rfc').onclick=function(){test1(this);};

                                    }
                                    else if(datoLink==538  || datoLink==539){         //Caso Renapo
                                            document.getElementById("consultasLinksAsuntos").innerHTML="";                                             
                                            var divlink = document.getElementById("consultasLinksAsuntos");                                             
                                            input_asuntos_link = document.createElement('input');
                                            input_asuntos_link.type = 'image';
                                            input_asuntos_link.src = '../img/consulta_renapo.jpg';
                                            input_asuntos_link.onclick=function(){return casoRenapo();};
                                            input_asuntos_link.width = 70;
                                            input_asuntos_link.height = 14;
                                            divlink.appendChild(input_asuntos_link);                                                         
                                    }
                                    else if(datoLink==540  || datoLink==541 || datoLink==542){         //Caso Consar
                                            document.getElementById("consultasLinksAsuntos").innerHTML="";                                             
                                            var divlink = document.getElementById("consultasLinksAsuntos");                                             
                                            input_asuntos_link = document.createElement('input');
                                            input_asuntos_link.type = 'image';
                                            input_asuntos_link.src = '../img/consulta_consar.jpg';
                                            input_asuntos_link.onclick=function(){return casoConsar();};
                                            input_asuntos_link.width = 64;
                                            input_asuntos_link.height = 14;
                                            divlink.appendChild(input_asuntos_link);                                                    
                                    }
                                    else{
                                          document.getElementById("consultasLinksAsuntos").innerHTML="";   
                                             try{
                                                document.getElementById('text_asunto_rfc').style.background='#EDEDED';
                                                document.getElementById('text_asunto_num_seg_soc').style.background='#EDEDED';
                                                 }catch(e){return false;}
                                    }
                             }else{ document.getElementById("consultasLinksAsuntos").innerHTML=""; }

                    }


                 
                    var GDrfc = "z";
                    var GDnss = "0";

                    function casoRFC(TLink){
                    
                            PiUsiRegistro = document.registro.PiUsi.value;
                            PiDelRegistro = document.registro.PiDelR.value;
                            
                            Drfc  = document.registro.text_asunto_rfc.value;     
                            Dnss  = document.registro.text_asunto_num_seg_soc.value;
                                
                            if(TLink==334)      {                                               //caso RFC 

                                if(Drfc==GDrfc){ alert("No se puede lanzar la consulta con el mismo rfc"); return false; }
                                GDrfc = Drfc;

                                casoProcesar = document.registro.text_asunto_rfc.value;           
                                Dnss="";
                                if(casoProcesar=="") { 
                                    alert("Por favor escriba el RFC en el campo marcado de color naranja."); return false; 
                                } 
                                if(!validarDatosEnvioProcesar(334,casoProcesar)) return false;
                            }else if(TLink==326 || TLink==502) {                                //caso NSS

                                if(GDnss==Dnss){ alert("No se puede lanzar la consulta con el mismo nss"); return false; }
                                GDnss = Dnss;                                        

                                Drfc="";
                                casoProcesar = document.registro.text_asunto_num_seg_soc.value;   
                                if(casoProcesar=="") { 
                                    alert("Por favor escriba el NSS en el campo marcado de color naranja."); return false; 
                                }
                                if(!validarDatosEnvioProcesar(TLink,casoProcesar)) return false;
                            }

                 
                            var linkProcesar = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+Dnss+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                            //var linkProcesar = 'http://www.google.com';
                            //return GB_show('Procesar', 'http://procesar.condusef.gob.mx:8084/procesar/servlet/queryServlet?nss=41806015578&rfc=&idusi=129&iddel=90&idava=0&idtip=0',300,700);

                            if(TLink==326 || TLink== 334){
                            window.open (linkProcesar,"Procesar","menubar=0,resizable=1,width=950,height=500");  
                            }else if(TLink==502){
                                splitNSSST = casoProcesar.split(",");
                                //alert("L="+splitNSSST.length);
                                if(splitNSSST.length<6){
                                    for(kp=0; kp<splitNSSST.length; kp++){
                                        //alert("22="+splitNSSST[kp]);
                                        if(isNaN(splitNSSST[kp]) && (splitNSSST[kp].length/11)!=1  ){
                                            alert("Porfavor solo ingrese numeros y 11 digitos por cada nss sepado por una coma.");
                                            return false;
                                        } Drfc="";
                                    }

                                      switch(splitNSSST.length){
                                        case 1: 
                                                var linkProcesar1 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[0]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                window.open (linkProcesar1,"Procesar1","menubar=0,resizable=1,width=950,height=500");  
                                                break;
                                        case 2:
                                                var linkProcesar2 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[0]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                var linkProcesar2_1 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[1]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                window.open (linkProcesar2,"Procesar2","menubar=0,resizable=1,width=950,height=500");  
                                                window.open (linkProcesar2_1,"Procesar2_1","menubar=0,resizable=1,width=950,height=500");  
                                                break;
                                        case 3:
                                                var linkProcesar3 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[0]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                var linkProcesar3_1 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[1]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                var linkProcesar3_2 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[2]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';

                                                window.open (linkProcesar3,"Procesar3","menubar=0,resizable=1,width=950,height=500");  
                                                window.open (linkProcesar3_1,"Procesar3_1","menubar=0,resizable=1,width=950,height=500");  
                                                window.open (linkProcesar3_2,"Procesar3_2","menubar=0,resizable=1,width=950,height=500");  
                                                break;
                                        case 4:
                                                var linkProcesar4 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[0]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                var linkProcesar4_1 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[1]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                var linkProcesar4_2 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[2]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                var linkProcesar4_3 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[3]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';

                                                window.open (linkProcesar4,"Procesar4","menubar=0,resizable=1,width=950,height=500");  
                                                window.open (linkProcesar4_1,"Procesar4_1","menubar=0,resizable=1,width=950,height=500");  
                                                window.open (linkProcesar4_2,"Procesar4_2","menubar=0,resizable=1,width=950,height=500");  
                                                window.open (linkProcesar4_3,"Procesar4_3","menubar=0,resizable=1,width=950,height=500");  
                                                break;
                                        case 5:
                                                var linkProcesar5 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[0]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                var linkProcesar5_1 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[1]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                var linkProcesar5_2 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[2]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                var linkProcesar5_3 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[3]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';
                                                var linkProcesar5_4 = 'http://procesar.condusef.gob.mx:8080/procesar/servlet/queryServlet?nss='+splitNSSST[4]+'&rfc='+Drfc+'&idusi='+PiUsiRegistro+'&iddel='+PiDelRegistro+'&idava=0&idtip=0';

                                                window.open (linkProcesar5,"Procesar5","menubar=0,resizable=1,width=950,height=500");  
                                                window.open (linkProcesar5_1,"Procesar5_1","menubar=0,resizable=1,width=950,height=500");  
                                                window.open (linkProcesar5_2,"Procesar5_2","menubar=0,resizable=1,width=950,height=500");  
                                                window.open (linkProcesar5_3,"Procesar5_3","menubar=0,resizable=1,width=950,height=500");  
                                                window.open (linkProcesar5_4,"Procesar5_4","menubar=0,resizable=1,width=950,height=500");  
                                                break;
                                      }

                               }else{ alert("unicamente se pueden buscar 5 numeros de seguridad social."); return false; }
                            }
                                    document.registro.text_hidden_asunto_afore.value='x'; //mandamos variable (x) para caso
                                    mostrarAfores();
                                    
                            return false;
                    }

                    function casoRenapo(){
                            return GB_show('Renapo', 'http://200.23.107.81:7777/eCurp/',700,700);   return false;
                    }

                    function casoConsar(){
                            return GB_show('Renapo', 'http://apromotores.consar.gob.mx/cgi-bin/webAgentesPromotores/ggrLoginUsuario.wg',700,700);   return false;
                    }

                    function validarDatosEnvioProcesar(TipoCaso,valor){
                        if(TipoCaso==334){              //caso rfc
                            //if(valor.indexOf("text")!=-1)
                        }else if(TipoCaso==326){        //caso nss
                            if(isNaN(valor)){
                                alert("Porfavor solo ingrese numeros");
                                return false;
                            }      
                            if((valor.length/11)!=1){
                                alert("Porfavor solo ingrese los 11 digitos");
                                return false;
                            }
                            
                        }else if(TipoCaso==502){        //caso nss varios
                            
                            var splitNSSS = valor.split(",");
                            
                            for(k=0; k<splitNSSS.length; k++){
                                if(isNaN(splitNSSS[k])){
                                    alert("Porfavor solo ingrese numeros");
                                    return false;
                                }
                                if((splitNSSS[k].length/11)!=1){
                                    alert("Porfavor solo ingrese 11 digitos por cada nss sepado por una coma.");
                                    return false;
                                }
                            }

                        }

                        return true;
                    }


                    function lanzarActividadOFasunto(valorAA,idUsi){

                        var iterNum=0;
                        if(valorAA==1529){ 
                                for(j=0; j<document.registro.clase_ins.length; j++ ){
                                    var iterclase = document.registro.clase_ins.options[j].value;   
                                    if(iterclase.split(",")[0]==7) break;
                                    ++iterNum;
                                }
                                    document.registro.clase_ins.options[iterNum].selected = true;
                                    lanzarCombos(document.registro);
                        }else if(valorAA==1530){

                               for(j=0; j<document.registro.clase_ins.length; j++ ){
                                    var iterclase = document.registro.clase_ins.options[j].value;   
                                    if(iterclase.split(",")[0]==6) break;
                                    ++iterNum;
                                }
                                document.registro.clase_ins.options[iterNum].selected = true;
                                lanzarCombos(document.registro);
                                    iterNum=0;
                                var timerID = 0;
                                clearTimeout(timerID);
                                timerID = setTimeout("cargasegundoDiv(176)", 600);
                          }else if(valorAA==1376){

                                for(j=0; j<document.registro.clase_ins.length; j++ ){
                                    var iterclase = document.registro.clase_ins.options[j].value;   
                                    if(iterclase.split(",")[0]==21) break;
                                    ++iterNum;
                                }
                                    document.registro.clase_ins.options[iterNum].selected = true;
                                    lanzarCombos(document.registro);
                          }else if(valorAA==598 || valorAA==599 || valorAA==600 || valorAA==602){       //casos reus
                            
                            validarReusT(valorAA,idUsi); //verificamos q todos los datos del reus esten bien
                                   // alert("hay q validar q cuando el usuario pida esta opcion se despliege "); 

                          }

                    }
                    

                    function cargasegundoDiv(valorID){
                                var iterNum=0;
                                    for(j2=0; j2<document.registro.selec_divcasosEsp1.length; j2++ ){
                                        
                                        if(document.registro.selec_divcasosEsp1.options[j2].value==valorID) break;
                                        ++iterNum;
                                    }
                                    
                                    document.registro.selec_divcasosEsp1.options[iterNum].selected = true;
                                    nextDiv(document.registro.selec_divcasosEsp1,176,1);
                    }



                    function cargacuartoDiv(valorID){   //causas
                                var iterNum=0;
                                    for(j2=0; j2<document.registro.selec_divcasosEsp4.length; j2++ ){
                                        if(document.registro.selec_divcasosEsp4.options[j2].value==valorID) break;
                                        ++iterNum;
                                    }
                                var timerID = 0;
                                clearTimeout(timerID);
                                timerID = setTimeout("document.registro.selec_divcasosEsp4.options["+iterNum+"].selected = true;", 1000);

                                    
                    }


                     function mostrarAfores(){
                     //alert("aforers");
                         document.getElementById("consultasLinksAfores").innerHTML="";                                             
                         var divlink = document.getElementById("consultasLinksAfores");                                             
                         input_asuntos_link = document.createElement('input');
                         input_asuntos_link.type = 'image';
                         input_asuntos_link.src = '../img/respuesta_procesar.jpg';
                         input_asuntos_link.onclick=function(){return abrirAfores();};
                         input_asuntos_link.width = 106;
                         input_asuntos_link.height = 11;
                         divlink.appendChild(input_asuntos_link); 
                      }
                      
                      function abrirAfores(){
                        var dato = document.registro.text_hidden_asunto_afore.value;
                        return GB_show('Afores', '../../../../sio_web/casosEspRegistro/Afores.jsp?dato='+dato,500,400);
                      }

