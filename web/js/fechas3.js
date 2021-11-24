<!-- Begin
//Idfechas = new Array();
//Idfechas[0] = "01/01/05";
var aFinMes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 

var resulresta;

/// se restan las fechas de los dias de recepcion condusef y recepcion recurso en DR
function restafechas2(fechaexp1,Idfechas,fechaexp3)
	{

//alert(fechaexp1);
//alert(fechaexp3);

	today=new Date()
		//	var fechaexp1="03/03/00";
	yearc  = 20+fechaexp1.substr(6,2);
	mesc   = fechaexp1.substr(3,2)-1; 
        diac   = fechaexp1.substr(0,2);


	yearc2  = 20+fechaexp3.substr(6,2);
	mesc2   = fechaexp3.substr(3,2)-1; 
        diac2   = fechaexp3.substr(0,2);
	
		//alert(today);
	var fechaexp2=new Date(yearc, mesc, diac) //Month is 0-11 in JavaScript
	var fechaexp4=new Date(yearc2, mesc2, diac2) //Month is 0-11 in JavaScript

	var one_day=1000*60*60*24
	var resulresta = (Math.ceil((fechaexp4.getTime()-fechaexp2.getTime())/(one_day)))



		//alert("1="+fechaexp1+",2="+resulresta);

	var resultadoendias = recalcF4(fechaexp1,resulresta);
	//alert("dias="+resultadoendias);
	
	if (resulresta==0)	
		resultadoendias=1;
			////////else
			////////resultadoendias++; 
	return resultadoendias;
	}

//////////hasta aqui se pego lo nuevo del calculo de las fechas



////////////// nuevo codigo

  function finMes(nMes, nAno){ 
   return aFinMes[nMes - 1] + (((nMes == 2) && (nAno % 4) == 0)? 1: 0); 
  } 

   function padNmb(nStr, nLen, sChr){ 
    var sRes = String(nStr); 
    for (var i = 0; i < nLen - String(nStr).length; i++) 
     sRes = sChr + sRes; 
    return sRes; 
   } 

   function makeDateFormat(nDay, nMonth, nYear){ 
    var sRes; 
    sRes = padNmb(nDay, 2, "0") + "/" + padNmb(nMonth, 2, "0") + "/" + padNmb(nYear, 4, "0"); 
    return sRes; 
   } 
    
  function incDate(sFec0){ 
   var nDia = parseInt(sFec0.substr(0, 2), 10); 
   var nMes = parseInt(sFec0.substr(3, 2), 10); 
   var nAno = parseInt(sFec0.substr(6, 4), 10); 
   
   nDia += 1; 
   if (nDia > finMes(nMes, nAno)){ 
    nDia = 1; 
    nMes += 1; 
    if (nMes == 13){ 
     nMes = 1; 
     nAno += 1; 
    } 
   } 
   return makeDateFormat(nDia, nMes, nAno); 
  } 

  function decDate(sFec0){ 
   var nDia = Number(sFec0.substr(0, 2)); 
   var nMes = Number(sFec0.substr(3, 2)); 
   var nAno = Number(sFec0.substr(6, 4)); 
   nDia -= 1; 
   if (nDia == 0){ 
    nMes -= 1; 
    if (nMes == 0){ 
     nMes = 12; 
     nAno -= 1; 
    } 
    nDia = finMes(nMes, nAno); 
   } 
   return makeDateFormat(nDia, nMes, nAno); 
  } 

  function addToDate(sFec0, sInc){ 
   var nInc = Math.abs(parseInt(sInc)); 
   var sRes = sFec0; 
   if (parseInt(sInc) >= 0) 
    for (var i = 0; i < nInc; i++) sRes = incDate(sRes); 
   else 
    for (var i = 0; i < nInc; i++) sRes = decDate(sRes); 
   return sRes; 
  } 

  
  ///////Segundo calculo
  
    function recalcF4(form, resulresta){

							//alert("Resta="+resulresta);
							//alert("RF="+form);
    X=0;
    bk2=0;
    J=0;
    J2=0;
	    
							///    valFecha(form);

    
        var fnyear  = (form)
        var fnyear2 = fnyear.substr(6,2)
        var fnmes   = fnyear.substr(3,2)
        var fndia   = fnyear.substr(0,2)
        //calculate(fndia,fnmes,fnyear2);

///el 20 debe ser una variable
for (h=0; h<resulresta; h++)    
{
    if (h==0)
    numiter=resulresta;
    else
    numiter=J2

    bk=0;
  
  for (Z=1; Z <= resulresta; Z++)    {
            
                        if (Z==1)J=0;
                        with (document)
                            { 

						//			if (Z==resulresta)
						//			alert("fecha usable"+addToDate(form, 1));

                                       if (Z==1)
                                           var fechaJ= addToDate(form, 1); 
                                       else
                                           var fechaJ= addToDate(fechaJ4, 1); 
                                            //alert(fechaJ);
                                var fechaJ2 = fechaJ.substr(8,10);
                                var fechaJ3 = fechaJ.substr(0,6);
                                var fechaJ4 = fechaJ3+fechaJ2;
				               //alert("VueltaNo="+Z+"Con fecha="+fechaJ4);
                        
                            } 
                        		        //++Z;
                        var fnyear2 = fechaJ4.substr(6,2)
                        var fnmes   = fechaJ4.substr(3,2)
                        var fndia   = fechaJ4.substr(0,2)
                        var diaval  = calculate(fndia,fnmes,fnyear2);
                       
                       if (diaval=="Domingo" || diaval=="Sabado")
                       {    
                            --J;                                   //alert ("Fecha a validar y entro a S y D="+fechaJ+",diasF="+J);
                       }
                          for (ft=0; ft <= Idfechas.length; ft++ )
                              {
                                if (Idfechas[ft]==fechaJ4)
                                    {
                                         J=J-1; //alert("diasf");
                                    }
                              }
                    				//alert("J="+J);
                     }
         
                            if (h==0)
                                {   
                                    J=J+resulresta;
                                    J2=J;
                                }
                                else
                                {   
                                    J2=J+resulresta;
                                }
                                
                                    
		                   	        //alert("DiasR="+J2);
                             bk=J2;
                		                //alert("bk="+bk);
                                		//alert("bk2="+bk2);
                                if (bk==bk2){
                                	        //alert("Termino");
                                              if (diaval=="Sabado") //Se le suma cuando es ya la suma final y cae en sabado FindeSemanita
                                                {J=J+2;}
                                              else if (diaval=="Domingo") //Se le suma cuando es ya la suma final y cae en domingo FindeSemanita
                                                {J=J+1;}                                               
                                              else  break;
                                            }
                                bk2=bk;
                                
                             
	}        
        	return J2;

}
  


// End -->


