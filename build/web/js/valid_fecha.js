	function f_validafolio(e,objeto){
		var code, sPermitidos, valor, s, i;
        valor=objeto.value;
		sPermitidos='0123456789/';
		if (!e) var e = window.event;
		if (e.keyCode) code = e.keyCode;
		else if (e.which) code = e.which;
		var character = String.fromCharCode(code);
		if (sPermitidos.indexOf(character)<0 && code>=31) {
			//alert('Character was ' + character);
			e.keyCode=0;
            return false;
		}
        if (valor.length>=2){
	        //alert(valor+character);
            s=valor;

            if (s.indexOf("/")!=s.lastIndexOf("/") && s.indexOf("/")>0) { //Significa que ya tiene los dos separadores
            	s="";
                //alert('que pasa');
            }

            /*
            else {
                //alert(code);

	            s=valor.substring(valor.length-2,valor.length);
    	        if (s.indexOf("/")<0 && code>=48){
			        //alert(s+'/'+character);
                    objeto.value=valor+'/'+character;
                    e.keyCode=0;
                    return true;
    	        }
            }
            */

        }
	}

	function f_validafecha(e,objeto){
		var code, sPermitidos, valor, s, i;
        valor=objeto.value;
		sPermitidos='0123456789/';
		if (!e) var e = window.event;
		if (e.keyCode) code = e.keyCode;
		else if (e.which) code = e.which;
		var character = String.fromCharCode(code);
		if (sPermitidos.indexOf(character)<0 && code>=31) {
			//alert('Character was ' + character);
			e.keyCode=0;
            return false;
		}
        if (valor.length>=2){
	        //alert(valor+character);
            s=valor;

            if (s.indexOf("/")!=s.lastIndexOf("/") && s.indexOf("/")>0) { //Significa que ya tiene los dos separadores
            	s="";
                //alert('que pasa');
            }
            else {
                //alert(code);
	            s=valor.substring(valor.length-2,valor.length);
    	        if (s.indexOf("/")<0 && code>=48){
			        //alert(s+'/'+character);
                    objeto.value=valor+'/'+character;
                    e.keyCode=0;
                    return true;
    	        }


            }

        }
	}

	function f_validafecha2(e,objeto){
		var code, sPermitidos, valor, s, i;
        valor=objeto.value;
		sPermitidos='0123456789-/';
		if (!e) var e = window.event;
		if (e.keyCode) code = e.keyCode;
		else if (e.which) code = e.which;
		var character = String.fromCharCode(code);
		//alert('valor: '+valor);
		//alert('valor: '+valor+' sPermitidos: '+sPermitidos+' lugar: '+sPermitidos.charAt(character)+' caracter: '+character);
		if (sPermitidos.indexOf(character)<0 && code>=31) {
			//alert('Character was ' + character);
			e.keyCode=0;
            return false;
		}
        if (valor.length>=2){
	        //alert(valor+character);
            if (valor.indexOf("-")>0) //Significa que se tiene separador de fechas
            	s=valor.substring(valor.indexOf("-")+1,valor.length);
            else
            	s=valor;

            if (s.indexOf("/")!=s.lastIndexOf("/") && s.indexOf("/")>0) { //Significa que ya tiene los dos separadores
            	s="";
                //alert('que pasa');
            }
            else {
	            s=valor.substring(valor.length-2,valor.length);
    	        if (s.indexOf("/")<0 && code>=48){
			        //alert(s+'/'+character);
                    objeto.value=valor+'/'+character;
                    e.keyCode=0;
                    return true;
    	        }


            }

        }
	}


function esDigito(sChr){
        var sCod = sChr.charCodeAt(0);
        return ((sCod > 47) && (sCod < 58));
}

function valSep(oTxt){
    var bOk = false;
    bOk = bOk || ((oTxt.value.charAt(2) == "-") && (oTxt.value.charAt(5) == "-"));
    bOk = bOk || ((oTxt.value.charAt(2) == "/") && (oTxt.value.charAt(5) == "/"));
    return bOk;
}

function finMes(oTxt){
    var nMes = parseInt(oTxt.value.substr(3, 2), 10);
    var nRes = 0;
    switch (nMes){
    case 1: nRes = 31; break;
    case 2: nRes = 29; break;
    case 3: nRes = 31; break;
    case 4: nRes = 30; break;
    case 5: nRes = 31; break;
    case 6: nRes = 30; break;
    case 7: nRes = 31; break;
    case 8: nRes = 31; break;
    case 9: nRes = 30; break;
    case 10: nRes = 31; break;
    case 11: nRes = 30; break;
    case 12: nRes = 31; break;
}
return nRes;
}

function valDia(oTxt){
    var bOk = false;
    var nDia = parseInt(oTxt.value.substr(0, 2), 10);
    bOk = bOk || ((nDia >= 1) && (nDia <= finMes(oTxt)));
    return bOk;
}

function valMes(oTxt){
    var bOk = false;
    var nMes = parseInt(oTxt.value.substr(3, 2), 10);
    bOk = bOk || ((nMes >= 1) && (nMes <= 12));
    return bOk;
}

function valAno(oTxt){
    var bOk = true;
    var nAno = oTxt.value.substr(6);
    bOk = bOk && ((nAno.length == 2) || (nAno.length == 4));
    if (bOk){
    for (var i = 0; i < nAno.length; i++){
    bOk = bOk && esDigito(nAno.charAt(i));
}
}
return bOk;
}

function valFecha(oTxt){

    //alert("aaaa");

    var bOk = true;
    if (oTxt.value != ""){
        bOk = bOk && (valAno(oTxt));
        bOk = bOk && (valMes(oTxt));
        bOk = bOk && (valDia(oTxt));
        bOk = bOk && (valSep(oTxt));
        if (!bOk){
        alert("Fecha invalida");
        oTxt.value = "";
        oTxt.focus();
        return bOk;
        }else{
            var fecha_formato = "";
                fecha_formato = oTxt.value;
            Arreglo_fecha_formato = fecha_formato.split("/");
            if(Arreglo_fecha_formato[2].length==2){
                if(Arreglo_fecha_formato[2]>50)
                    oTxt.value = Arreglo_fecha_formato[0]+"/"+Arreglo_fecha_formato[1]+"/19"+Arreglo_fecha_formato[2];
                else if(Arreglo_fecha_formato[2]<51)
                    oTxt.value = Arreglo_fecha_formato[0]+"/"+Arreglo_fecha_formato[1]+"/20"+Arreglo_fecha_formato[2];
            }

        }
    }
}


function LP_data2(FormVar){
    //alert("1="+FormVar);
            var X=0;
            var Y="";
            var Z="";

            //alert (FormVar.value);

            var key=window.event.keyCode;//codigo de tecla.

            if (key > 48 || key < 57 ){
                   Y=FormVar.value;

                   if(Y.length==1) X=2;
                   if(Y.length==2) X=3;
                   if(Y.length==3) X=4;
                   if(Y.length==4) X=5;
                   if(Y.length==5) X=6;
                   if(Y.length==6) X=7;
                   if(Y.length==7) X=8;
                   if(Y.length==8) X=9;
                   if(Y.length==9) X=10;

                     if(X==0)
                        {     X+=1;   }

                     if(X==3){
                                Y=Y + "/" ;
                                FormVar.value=Y;
                              X+=1;
                             }

                     if(X==6){
                               Y=Y + "/" ;
                               FormVar.value=Y;
                              X+=1;
                             }

                      else   {    X+=1; }


                                       }

                            if (key < 47 || key > 57 )
                                    {//si no es numero
                                            window.event.keyCode=0;//anula la entrada de texto.
                                    }

}
