<script language="javascript" type="text/javascript">

function addOption(name,obj,text,value) { 
    var elOptNew = window.document.createElement('option'); 

    elOptNew.text = text; f
    elOptNew.value = value; 
    var elSel = window.document.getElementById(name); 

    try { 
        elSel.add(elOptNew, null); // standards compliant; doesn't 
        work in IE 
    } 
    catch(ex) { 
        elSel.add(elOptNew); // IE only 
    } 
} 


function Alternar(Seccion){ 
    if (action1_form.cboTipoAtencion.options[0].selected){
        Seccion.style.display=""
    }
    else{
        Seccion.style.display="none"
        //alert(Seccion.id)
    }
}

//CRONOMETRO
//Autor: Iván Nieto Pérez
//Este script y otros muchos pueden
//descarse on-line de forma gratuita
//en El Código: www.elcodigo.com
var CronoID = null
var CronoEjecutandose = false
var seg, min, hor

function DetenerCrono (){
   	if(CronoEjecutandose)
   		clearTimeout(CronoID)
   	CronoEjecutandose = false
   	//document.action1_form.txtHora3.value = ""
}

function InicializarCrono () {
	//inicializa contadores globales
	seg = <%=servSeg%>
	min = <%=servMin%>
	hor = <%=servHor%>
	
	//pone a cero los marcadores
	//document.action1_form.txtHora3.value = '00:00:0'
	//document.crono.parcial.value = '00:00:0'
}

function MostrarCrono () {
	       
   	//incrementa el crono
   	seg++
	if ( seg > 59 ) {
		seg = 0
		min++
		if ( min > 59 ) {
			min = 0
			hor++
			if ( hor > 23 ) {
				//alert('Fin de la cuenta')
				//DetenerCrono()
				hor = 0
				//return true
			}
		}
	}

	//configura la salida
	var ValorCrono = ""
	ValorCrono = (hor < 10) ? "0" + hor : hor
	ValorCrono += (min < 10) ? ":0" + min : ":" + min
	ValorCrono += (seg < 10) ? ":0" + seg : ":" + seg	
			
  	document.action1_form.txtHora.value = ValorCrono

  	CronoID = setTimeout("MostrarCrono()", 1000)
	CronoEjecutandose = true
	return true
}

function IniciarCrono () {
 	DetenerCrono()
 	InicializarCrono()
	MostrarCrono()
}

function ObtenerParcial() {
	//obtiene cuenta parcial
	//document.action1_form.txtHora.value = document.crono.display.value
}
</script>
<script language="javascript" type="text/javascript">
// Validación de campos de hora By Vanessa Jaen
//
// Este script y otros muchos pueden
// descarse on-line de forma gratuita
// en El Código: www.elcodigo.com

function ValidaHora()
{
        var er_fh = /^(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)\:([0-5]0|[0-5][1-9])\:([0-5]0|[0-5][1-9])$/
        if( action1_form.txtHora.value == "" )
        {
                alert("Introduzca la hora.")
                return false
        }
        if ( !(er_fh.test( action1_form.txtHora.value )) ) 
        { 
                alert("El dato en el campo hora no es válido.")
                action1_form.txtHora.focus()
                return false
        }
        
        //alert("¡Campo de hora correcto!")
        return true
}

</script>


<script language="JavaScript">
//FUNCION QUE RECARGA LOS COMBOS
contents=new Array();

// Variable q contiene los campos y sus valores  arrayValues TCN_addContent("America1<+>a1<+>EE.UU2<+>b1<+>Alabama<+>c1");


function TCN_addContent(str){
	contents.push(str);
	arrayValues = new Array();
	for(i=0;i<contents.length;i++){
		arrayValues[i]=contents[i].split(separator);
	}
}

function TCN_makeComboGroup(){
	comboGroup=new Array();
	args=TCN_makeComboGroup.arguments;
	for(i=0;i < args.length;i++){
	

		comboGroup[i]=MM_findObj(args[i]);
	}
}

function TCN_startCombo(){
	combo1=comboGroup[0];
	for (i=0;i < arrayValues.length;i++){
		existe=false;
		for(j=0;j < combo1.options.length;j++){
			if(arrayValues[i][0]==combo1.options[j].text){
				existe=true;
			}
		}
		if(existe==false){
			combo1.options[combo1.options.length]=new Option(arrayValues[i][0],arrayValues[i][1]);
		}//end if
	}//for(i)
	combo1.options[0].selected=true;
	TCN_reload(combo1);
}//function

function TCN_reload(from){
    document.getElementById("myDiv").innerHTML="";
    document.getElementById("myDiv3").innerHTML="";

//averiguamos el indice del combo que llama:
	for(j=0;j < comboGroup.length;j++){

		if(comboGroup[j]==from){
			//el nuestro es el siguiente
			i=j+1;
			thisCombo=comboGroup[i];
			prevCombo=comboGroup[i-1];
			prevComboTextIndex=j*2;
			thisComboIndex=i;
			thisComboTextIndex=(i*2);
			thisComboValueIndex=(i*2)+1;
		}
	}
	for (m=thisCombo.options.length-1;m>=0;m--){
		thisCombo.options[m]=null;
	}
	for(i=0;i < arrayValues.length;i++){
		existe=false;
		if(arrayValues[i][prevComboTextIndex]==prevCombo.options[prevCombo.selectedIndex].text){
			for(j=0;j < thisCombo.options.length;j++){
				if(arrayValues[i][thisComboTextIndex]==thisCombo.options[j].text){
					existe=true;
				}
			}
			if(existe==false){
				thisCombo.options[thisCombo.options.length]=new Option(arrayValues[i][thisComboTextIndex],arrayValues[i][thisComboTextIndex]);
				exp_reg=/^c/;
			    var str = arrayValues[i][thisComboTextIndex+1];
                comp = exp_reg.test(str);
                if (comp==true){
                	var myElement = document.createElement('<INPUT TYPE=checkbox />');
                    var myElement2 = document.createElement('<td/>');
                    var myElement3 = document.createElement('<input type=text class="select_1" value="javascript:comp" READONLY style="border-style:solid; border-top-width:0px; border-left-width:0px; border-right-width:0px; border-bottom-width:0px; background-color:#E1F0D2; FILTER:alpha(opacity:100) "/>');
                    myElement3.setAttribute("name", arrayValues[i][thisComboTextIndex]);
                    myElement3.setAttribute("id", arrayValues[i][thisComboTextIndex]);
                    myElement3.setAttribute("value", arrayValues[i][thisComboTextIndex]);
                    myDiv.appendChild(myElement);
					//alert (arrayValues[i][thisComboTextIndex]);
    	            //alert(">>>"+myElement.type);
                    myDiv.appendChild(myElement3);
                    document.getElementById(arrayValues[i][thisComboTextIndex]).value = arrayValues[i][thisComboTextIndex];
                    myDiv.appendChild(myElement2);
                    //alert(">>>"+myElement2.type);
                }else{}
			}
		} 
	}
    /* Creamos el segundo combo de desenlace */
    var myElement4 = document.createElement('<select ></select>');    
    myDiv3.appendChild(myElement4);                                                        
    //for(h=0; h < arrayValues.length; h++)
    for(w=0;w < arrayValues.length;w++)
    {
     	myElement4.options[w]= new Option(arrayValues[w][thisComboTextIndex+1],w);
    }
	thisCombo.options[0].selected=true;
	if(thisComboIndex < comboGroup.length-2){
		TCN_reload(thisCombo);
	}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i < d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i < d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}


</script>