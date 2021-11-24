        function formatNumber(num,prefix){
                    num=unformatNumber(num);
                    prefix = prefix || '';
                    num += '';
                    var splitStr = num.split('.');
                    var splitLeft = splitStr[0];
                    var splitRight = splitStr.length > 1 ? '.' + splitStr[1] : '';
                    var regx = /(\d+)(\d{3})/;
                    while (regx.test(splitLeft)) {
                    splitLeft = splitLeft.replace(regx, '$1' + ',' + '$2');
                    }
   
                    document.seguimiento.TEmonto_recupado.value = prefix + splitLeft + splitRight;
                    
        }

        function unformatNumber(num) {
                    return num.replace(/([^0-9\.\-])/g,'')*1;
        } 



        function validarFechaAvance(idasuant,fecha,hr){

                if(valFecha(document.seguimiento.fecha_act)==false){
            
                    document.seguimiento.fecha_act.focus();
                    return false;
                }else{
                  if(document.seguimiento.piAvaAnt.value!=0){
                        if(document.seguimiento.fecha_act.value!="" || hr!=""){
                            FAjax('../../sioWEB/controlador/HTMLVfecha','div_fecha','idAvaAnt='+idasuant+'&fechaV='+fecha+'&hr='+hr,'POST',1,document.seguimiento.fecha_act,'Validando Fecha ...'); //return false;                                
                        }else{
                            alert("Escriba la fecha u hora de la actividad");
                        }
                  }else{
                    validar_fecha=1;
                  }
                }
            }


        function Fcarga_Tarea(){

                

                if(document.seguimiento.seg_combo.length==0 || document.seguimiento.seg_combo.length==0){
                    alert("Error no hay tareas."); return false
                }
                else if(document.seguimiento.seg_combo.length==2){
                    document.seguimiento.seg_combo[1].selected = true;
                    filtrar_otros(document.seguimiento)
                }
        }