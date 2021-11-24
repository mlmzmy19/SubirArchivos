   function guardarRegistro(form){

        //Estos se llenaran dependiendo del tipo de registro
        
        
                var tipoAtencionSioWeb = 0;
                var valorTipoGuardar=0;

                for(x=0; x<document.registro.radio_usuario_atencion.length; x++){
                              if(document.registro.radio_usuario_atencion[x].checked==true){
                                tipoAtencionSioWeb = document.registro.radio_usuario_atencion[x].value;
                                break;
                              }
                }
                if (tipoAtencionSioWeb==1){
                        valorTipoGuardar=1;                 ///// Se guarda Usuario, Actividades y Asunto
                }
                else if(tipoAtencionSioWeb==0){
                        valorTipoGuardar=2;                 ///// Se guarda solo Usuario y Asunto
                        document.registro.casoEspecialZ.value=0;
                }

                var casoEspecialZV = document.registro.casoEspecialZ.value;
                        if (casoEspecialZV==9)                      ///// Se guarda solo Usuario y Actividades
                            valorTipoGuardar=3;

                var guardarAsuntoV = document.registro.text_asunto_guardarAsunto.value;
                        if (guardarAsuntoV==99)                      ///// Se guarda solo Usuario y Actividades
                            valorTipoGuardar=4;
                

                switch(valorTipoGuardar){
                    case 1: //alert("guardaT=1");
                            valor=FTipoGuarda_1();       if(valor==false)  return false;
                            break;
                    case 2: //alert("guardaT=2");
                            valor=FTipoGuarda_2();       if(valor==false)  return false;
                            break;
                    case 3: //alert("guardaT=3");
                            valor=FTipoGuarda_3();       if(valor==false)  return false;
                            break;
                    case 4: //alert("guardaT=4");
                            valor=FTipoGuarda_4();       if(valor==false)  return false;
                            break;
                }




                                  if (confirm("¿Se agregara un nuevo asunto?")){
                                    //form.submit();
                                    //return false; //se pone si es q no se desea guardar algo
                                  }
                                  else
                                    return false; 
   
   }



     function FTipoGuarda_1(){


                    valor=psUsuario();      if(valor==false)  return false;   //se cambio psUsuario aqui para poder probar el guardado 21 abril 2008                 
     
                    valor=psAsunto();       if(valor==false)  return false;
                    valor=psAsuIns();       if(valor==false)  return false;
                    valor=psOtrosCon();     if(valor==false)  return false;
                    valor=psPoderN();       if(valor==false)  return false;
                                                                             //aqui iva psUsuario
                    valor=psProcedencia();  if(valor==false)  return false;
                    valor=psNominales();    if(valor==false)  return false;
                    valor=psAvances();      if(valor==false)  return false;
                    valor=psEvaluacion();   if(valor==false)  return false;
                    return valor;
        }

     function FTipoGuarda_2(){

                    valor=psAsunto();       if(valor==false)  return false;
                    valor=psAsuIns();       if(valor==false)  return false;
                    valor=psOtrosCon();     if(valor==false)  return false;
                    //document.registro.PsOtrosCon.value="";    
                    document.registro.PsPoderN.value="";     
                    document.registro.PsUsuario.value="";
                    document.registro.PsProcedencia.value=""; document.registro.PsNominales.value="";  document.registro.PsAvances.value="";
                    document.registro.PsEvaluacion.value="";
                    return valor;
     }
     function FTipoGuarda_3(){


                    valor=psAsuntoEspeciales('1|1|0|0|0|0|0|1');                 if(valor==false)  return false;
                    document.registro.PsAsuInsV.value="";
                    document.registro.PsOtrosCon.value="";
                    document.registro.PsPoderN.value="";
                    valor=psUsuario();                                           if(valor==false)  return false;
                    valor=psProcedencia();                                       if(valor==false)  return false;
                    valor=psNominalesEspeciales('1|0|1|1|0|0|0');                if(valor==false)  return false;
                    valor=psAvances();                                           if(valor==false)  return false;
                    document.registro.PsEvaluacion.value="";

                    return valor;
     }

     function FTipoGuarda_4(){
                    valor=psNominales_seg();       if(valor==false)  return false;
                    valor=psAsuIns();              if(valor==false)  return false;
                    document.registro.PsOtrosCon.value="";
                    return valor;
     }


     function guardaReus(form){

                    valor=psUsuarioEspeciales('1|1|1|1|1|1|1|1|1|1|1|1|1|1');                 if(valor==false)  return false;
                    valor=validacionTelMail();      if(valor==false)  return false;     //  se usa funcion validacionTelMail script reus
                    valor=psAsunto();               if(valor==false)  return false;     //  se usa funcion normal
                    valor=psAsuIns();               if(valor==false)  return false;     //  se usa funcion normal
                    valor=psOtrosCon();             if(valor==false)  return false;     //  se usa funcion normal

                    //valor=psPoderN();               if(valor==false)  return false;     //  se quita la funcion ya q unicamente aplica para personas físicas
                    document.registro.PsPoderN.value="";   

                    valor=psProcedencia();          if(valor==false)  return false;     //  se usa funcion normal
                    valor=psNominales();            if(valor==false)  return false;     //  se usa funcion normal
                    valor=psAvances();              if(valor==false)  return false;     //  se usa funcion normal
                    valor=psEvaluacion();           if(valor==false)  return false;     //  se usa funcion normal
                    valor=ChangeTipAten();          if(valor==false)  return false;     //  se usa funcion functionChangeTipAten script reus

                                  if (confirm("¿Se agregara un nuevo asunto del REUS?")){
                                        //form.submit();
                                    }
                                else{
                                        return false; 
                                    }

    }

