<%@page import='java.util.ArrayList'%>
<html>
<head><title>::::</title></head>
<body>

<% 
    String idusi = (String)request.getAttribute("idusi");
    String sdel = (String)request.getAttribute("sdel");
String sinicio =  (String)request.getAttribute("sinicio");
    String stermino =  (String)request.getAttribute("stermino");
    
    ArrayList tabla             = (ArrayList)request.getAttribute("tabla");
    ArrayList filas             = new ArrayList();
    ArrayList tmp               = new ArrayList();
%>

<script language='javascript'>

function captura(i,status,id,folio){
    
    if(!confirm("¿Esta seguro de querer dar seguimiento al asunto con folio: \""+folio+"\"?")) {
        return false;
    } else {
       opciones(i);
       window.open("http://10.33.1.170:8051/sioWEB/sio_web/UneSio/CataSeg.jsp?op="+status+"&id="+id+"&f="+folio+"&idusi=<%=idusi%>&iddel=<%=sdel%>",4,"scrollbars=1,width=640,height=280,resizable=0"); //produccion
       //window.open("http://10.33.1.170:8097/sioWEB/sio_web/UneSio/CataSeg.jsp?op="+status+"&id="+id+"&f="+folio+"&idusi=<%=idusi%>&iddel=<%=sdel%>",4,"scrollbars=1,width=640,height=280,resizable=0"); // Desarrollo
       
       
       return true;
     }     
}

function opciones(num){

    form = document.forma; 
    
    if(form["c"+num].checked==true)
        oculto(num);
    else if(form[c].checked==false)
        visible("capa"+num);
}

function activa(num){
    
    form = document.forma; 
    
    if(form["c"+num].checked==true)
        form["b"+num].disabled=false;
    else if(form["c"+num].checked==false)
        form["b"+num].disabled=true;
}

function visible(c) {
    document.getElementById(c).style.visibility="visible";
}

function oculto(num) { 
    document.getElementById("capa1_"+num).style.visibility="hidden"; 
    document.getElementById("capa2_"+num).style.visibility="hidden";     
}


</script>
<!--<link href="css/estilos.css" rel="stylesheet" type="text/css">-->
<table border="0" align="center">
<tr>
        <td colspan='10' style='font-family: Arial, Helvetica, sans-serif;font-size: 14px; color: 494B49;text-align:center;'>
        <p align=center>
        <b>Reporte para dar seguimiento en el SIO a los asuntos con respuesta de la Instituci&oacute;n Financiera
        <br>Periodo de <%=sinicio.substring(0,2)+"/"+sinicio.substring(2,4)+"/"+sinicio.substring(4,8)%> a <%=stermino.substring(0,2)+"/"+stermino.substring(2,4)+"/"+stermino.substring(4,8)%></b>
        </p>
        </td>
    </tr><tr>
    <td>
    <form name="forma">
    <!--<input type="hidden" name="tamanio" value="<%=tabla.size()%>">-->
    <table border="1" cellpadding="3" cellspacing="3" width="1700"  background='img/sio4.jpg' bordercolor="#FFFFFF">
    <tr>
    <th></th>
    <td bgcolor='#BFC760' style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;color: 494B49;'><b>Folio SIO</b></td>
    <td bgcolor='#BFC760' style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;color: 494B49;'><b>Usuario</b></td>
    <td bgcolor='#BFC760' style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;color: 494B49;'><b>Status</b></td>
    <td bgcolor='#BFC760' style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;color: 494B49;'><b>Conclusi&oacute;n</b></td>
    <td bgcolor='#BFC760' style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;color: 494B49;'><b>Respuesta</b></td>
    <td bgcolor='#BFC760' style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;color: 494B49;'><b>Fecha de Respuesta</b></td>
    <td bgcolor='#BFC760' style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;color: 494B49;'><b>Instituci&oacute;n Financiera</b></td>
    <td bgcolor='#BFC760' style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;color: 494B49;'><b>Respuesta de la UNE</b></td>
    <td bgcolor='#BFC760' style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;color: 494B49;'><b>Responsable</b></td>
    <td bgcolor='#BFC760' style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;color: 494B49;'><b>Respuesta SIO</b></td>
    </tr>
    <% for(int i=0;i<tabla.size();i++){ %>
    <% filas = (ArrayList)tabla.get(i); %>    
    <tr>
        <td    bgcolor='gray' style='color:white' style="border-style:inset; border-top-width:1px; border-left-width:1px; border-right-width:0px; border-bottom-width:0px; border-color:#999999;padding:0px;  filter:alpha(opacity: 100); font-size:10pt" width='25' align=center><div id='<%="capa1_"+i%>'><input type="checkbox" name="c<%=i%>" onclick='activa(<%=i%>)'></div></td>
        <td valign=top style="border-style:solid; border-top-width:1px; border-left-width:1px; border-right-width:1px; border-bottom-width:1px; border-color:#999999;padding:3px; background-color:white; filter:alpha(opacity: 100);"><%=filas.get(1)%></td>
        <td valign=top style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;font-weight:normal;color:494B49;text-align:left;font-style: normal;'><%=filas.get(3)%></td>
        <td valign=top style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;font-weight:normal;color:494B49;text-align:left;font-style: normal;'><%=filas.get(4)%></td>
        <td valign=top style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;font-weight:normal;color:494B49;text-align:left;font-style: normal;'><%=(filas.get(7)==null?"":filas.get(7))%></td>
        <td valign=top style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;font-weight:normal;color:494B49;text-align:left;font-style: normal;'><p align="justify"><%=(filas.get(13)!=null?filas.get(13):"")%></p></td>
        <td valign=top style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;font-weight:normal;color:494B49;text-align:left;font-style: normal;'><%=filas.get(6)%></td>
        <td valign=top><%=filas.get(10)%></td>
        <td valign=top align="center"><a target='_blank' href="./plantilla/docto.jsp?pidAsuIns=<%=filas.get(0)%>&nombre=<%=filas.get(3)%>Z&idinsttmp=<%=filas.get(13)%>"><img src='../img/doc.jpg' border='0'></a></td>
        <td valign=top style='font-family: Arial, Helvetica, sans-serif;font-size: 12px;font-weight:normal;color:494B49;text-align:left;font-style: normal;'><%=filas.get(5)%></td>
        <td align="center"><div id='<%="capa2_"+i%>'><input type="button" name='b<%=i%>' value=' (+) ' onclick="return captura(<%=i%>,<%=(((String)filas.get(4)).toUpperCase().compareTo("CONCLUIDO")==0?"'1550'":(((String)filas.get(4)).toUpperCase().indexOf("ADICIONAL")>-1?"'1544'":"'1543'"))%>,'<%=filas.get(0)%>','<%=filas.get(1)%>')" disabled></td>
    </tr>
    </div>
    <% } %>
    </table>    
    </form>
    </td>
</tr>
</table>
</body>
</html>
