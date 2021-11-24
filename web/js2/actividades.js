                    function lanza_actividades(idasuins_hist,piUsi,piUsiSession,TVentana){
                    //piUsi=0; ejemplo
                    //idasuins_hist=1; ejemplo
                        document.getElementById('div_actividades_selec').style.display = "";
                            FAjax('../../sioWEB/servlets/Act_Seg','div_actividades_selec','campo1='+idasuins_hist+'&campo2='+piUsi,'POST'); return false;                                
                    }
                    
                    
                     function ventana_seguimiento(form,idasuins){
                         //alert("-->"+TVentana);
                         var actividadx = form.actividad_1.options[form.actividad_1.options.selectedIndex].text;

                            /*actividadx=actividadx.replace('/á/g',"1q3");
                            actividadx=actividadx.replace('/é/g',"2q3");
                            actividadx=actividadx.replace('/í/g',"3q3");            Hay q remplazar
                            actividadx=actividadx.replace('/ó/g',"4q3");
                            actividadx=actividadx.replace('/ú/g',"5q3");*/

                         var idactividadx = form.actividad_1.options[form.actividad_1.options.selectedIndex].value;
                         //alert("3->"+idactividadx);
                         //alert("Hay q cambiar estos valores JJLP 10028856="+idactividadx);
                         /*Casos Especiales*/
                         var casosEspeciales="";
                             casosEspeciales=form.Act_Seg_Servlet_tipoCaso.value;
                         var casoEspecial = "";
                         if(casosEspeciales!='' && casosEspeciales!='null'){
                             if (casosEspeciales.indexOf("6")!=-1)                     /* -----------> Caso unes          */
                                  { casoEspecial=6; }
                             //else if (casosEspeciales.indexOf("7")!=-1)                     /* -----------> Usuario no permitido          */
                             //     { casoEspecial=0; alert("El usuario no tiene permisos para realizar la actividad."); return false;}
                             else { casoEspecial=0; }

                         }

                         //alert("piUsiSession="+piUsiSession);

                         if(idactividadx.split("_")[0] > 0)
                            //window.open("seguimiento_frame.jsp?idasuins="+idasuins+"&piUsi="+piUsiSession+"&idactividadx="+idactividadx+"&actividadx="+actividadx+"&casoEspecial="+casoEspecial+"&TVentana="+TVentana+'&FlagTP=',null,"height=800,width=600,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes");
                            return GB_showCenter('Seguimiento Registro', '../../../../sio_web/seguimiento_frame.jsp?idasuins='+idasuins+'&piUsi='+piUsiSession+'&idactividadx='+idactividadx+'&actividadx='+actividadx+'&casoEspecial='+casoEspecial+'&TVentana='+TVentana+'&FlagTP=',700,700);
                            

                     }  