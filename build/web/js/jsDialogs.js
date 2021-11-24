/***************************************************************************
*
*	jsDialogs  - Version 1.0 BETA
*	Copyleft: Horacio R. Valdez
*	website: www.hvaldez.com.ar/ajaxCart
*	Soporte: info@hvaldez.com.ar
*	Creado: 04.2006
*
**************************************************************************** 
* Este script es distribuido bajo la licencia GNU/LGPL
****************************************************************************
*
****************************************************************************
Propósito: manejo de dialogs orientado al modelo WEB2.0
****************************************************************************
* Este desarrollo utiliza:
* Rico Library  (http://www.openrico.org/)
* Prototype JS Framework (http://prototype.conio.net/)
****************************************************************************/

var Utilidades = {  Version: '1.1', Autor: 'Horacio R. Valdez' }
Utilidades.Dialogs = Class.create();
Utilidades.Dialogs.prototype =  {
initialize: function() 
{ 
},

Alert: function(titulo, msg)
{
	msg += '<br /><br /><div align="center"><input type="button" name="Button" value="cerrar" class="jsButton" onclick="new Rico.Effect.FadeTo(\'jsWindow\', 0.0, 450, 7, {complete:function() { $(\'jsWindow\').style.visibility = \'hidden\'; } });" style="cursor:hand"/></div>';
	this.Show(titulo, msg);
},

Confirm: function(titulo, msg, fx)
{
	msg += '<br /><br /><div align="center"><input type="button" name="Button" value="Continuar" class="jsButton" onclick="new Rico.Effect.FadeTo(\'jsWindow\', 0.0, 450, 7, {complete:function() { $(\'jsWindow\').style.visibility = \'hidden\'; '+fx+' } });" />&nbsp;<input type="button" name="Button" value="Cancelar" class="jsButton" onclick="new Rico.Effect.FadeTo(\'jsWindow\', 0.0, 450, 7, {complete:function() { $(\'jsWindow\').style.visibility = \'hidden\'; } });" /></div>';
	this.Show(titulo, msg);
},

Prompt: function(titulo, msg, width, height)
{

},

Show: function (titulo, msg)
{
	//Creo la ventana
	this.CrearVentana()

	//Le asigno los handlers para el drag
	dndMgr.registerDraggable( new Rico.Draggable('jsWindow','jsWindow') );
	//Le seteo propiedades visuales
	$("jsWindow").style.opacity = 0;
	//Todo centrarla
	
	//Le seteo el contenido
	$("jsTitulo").innerHTML = titulo;
	$("jsContent").innerHTML = msg;
	
	//La muestro
	$("jsWindow").style.visibility = "visible"; 
	new Rico.Effect.FadeTo( 'jsWindow', 1, 350, 7);
},

CrearVentana: function()
{
	if($('jsWindow') == null || $('jsWindow') == undefined)
	{	
		
		var divJsWindow = document.createElement("div");
		divJsWindow.id="jsWindow";
		divJsWindow.className= "jsWindow";
		divJsWindow.style.visivility = "hidden";
		document.body.appendChild(divJsWindow);
		
		//Agrego en contenido de la ventana
		objWin = '<div id="jsTitle" style="cursor:pointer">';
		objWin += '<table width="98%" align="center" height="25px" border="0" cellspacing="0" cellpadding="0">';
		objWin += ' <tr>';
		objWin += '<td><div id="jsTitulo">Titulo</div></td>';
		objWin += '<td width="25" align="center" class="stylebold" onclick="new Rico.Effect.FadeTo(\'jsWindow\', 0.0, 350, 7, {complete:function() { $(\'jsWindow\').style.visibility = \'hidden\'; } });">X</td>';
		objWin += '</tr>';
		objWin += '</table>';
		objWin += '</div>';
		objWin += '<div id="jsContent">este es el contenido de la ventana de dialogo</div>';
	
		$('jsWindow').innerHTML = objWin;
	}
}

};