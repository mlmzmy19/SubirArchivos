<%@page contentType="text/html"%>
<%@page import='java.util.*'%>
<%@page import='DB.Sio.*'%>
	
<%
String valid = "";
       valid = request.getParameter("valid");
       
       
if(valid!=null){

if(valid.equals("udepo")){
     String folio="";
            folio=request.getParameter("folio");

     
if(folio!=null)     
//            if(id_del!=null)     
    {

        Vector v_listado = new Vector();

        P_Sio p_sio = new P_Sio();

          v_listado = p_sio.getListado_Folio(folio);
          //v_listado = p_sio.getListado(30, "01012007","30042007");
          
%>
<html>
<head><title>JSP Page</title></head>
<link href="css/estilos.css" rel="stylesheet" type="text/css">
<script src="scripts/sorttable.js"></script>
<body bgcolor='white'>

<table width='900' align='center' border='1'>
 <tr>
  <td width='60%' class="lbl_detalle" align=rigth style='background:white'>


Total de Asuntos= 
<%
    String numeros = String.valueOf(v_listado.size());
    char [] a = numeros.toCharArray();
    String imagenes="";
    for (int y=0; y<a.length; y++)
        imagenes=imagenes+"<img src='img/numeros/"+a[y]+".jpg' >";
    
    out.println(imagenes);


%> 
    <span style='color:black'>(Para ordenar la columna deseada, dar click sobre el título de cada columna)</span> </td>
  <td width='40%' class="lbl_detalle" align=rigth><span onclick="javascript:window.close();" class='txtDetalle2' style='cursor:hand; color:white' >cerrar</span></td>
 </tr>
</table>
<table width='1000' align='center' border='1' bgcolor='white' background='img/sio4.jpg' class="sortable">
    <tr style="cursor:pointer">
     <td>     </td>
     <td class="txtDetalle2"> <img src='img/foliosio.jpg'>    </td>
     <td class="txtDetalle2"> <img src='img/turnado.jpg'>  </td>
     <td class="txtDetalle2"> <img src='img/usuario.jpg'>   </td>
     <td class="txtDetalle2" > <img src='img/status.jpg'>     </td>
     <td class="txtDetalle2" > <b>Conclusión</b>     </td>     
     <td class="txtDetalle2"> <img src='img/responsable.jpg'>      </td>     
     <td class="txtDetalle2"> <b>Fecha Respuesta</b>     </td>     
     
    </tr>
<%for(int i=0; i < v_listado.size(); i++){%>
   <form name='<%=i%>'>
    <tr>
        <td   bgcolor='gray' style='color:white' style="border-style:inset; border-top-width:1px; border-left-width:1px; border-right-width:0px; border-bottom-width:0px; border-color:#999999;padding:0px;  filter:alpha(opacity: 100); font-size='10pt'" width='25' align=center > 
             
            <b><%//=i+1%></b>
            
        </td>
        <td  style="border-style:solid; border-top-width:1px; border-left-width:1px; border-right-width:1px; border-bottom-width:1px; border-color:#999999;padding:3px; background-color:white; filter:alpha(opacity: 100);" align='center'> 
            <!-- <input type='button'  name='valid' value='<%=((Vector)v_listado.get(i)).get(1)%>' onclick='enviar(this.form)' style="border-style:solid; border-top-width:0px; border-left-width:0px; border-right-width:0px; border-bottom-width:0px; border-color:#999999;padding:0px; background-color:white; filter:alpha(opacity: 100); cursor:hand" class="lbl_detalle" >
        -->
        <a style="border-style:solid; border-top-width:0px; border-left-width:0px; border-right-width:0px; 
border-bottom-width:0px; border-color:#999999;padding:0px; background-color:white; 
filter:alpha(opacity: 100); cursor:hand" class="lbl_detalle" 
href='detalle.jsp?cons=<%=((Vector)v_listado.get(i)).get(0)%>&valid=udepo&status=<%=((Vector)v_listado.get(i)).get(4)%>&nombre=<%=((Vector)v_listado.get(i)).get(3)%>'><%=((Vector)v_listado.get(i)).get(1)%></a>
    </td>
        
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(2)%>  </b></td>
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(3)%> </b></td>
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(4)%> </b></td>
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(7)%> </b></td>        
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(5)%> </b></td>        
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(6)%> </b></td>                
    </tr>
    </form>
<%}%>    
</table>
<script>
 function enviar(form){
        form.action='detalle.jsp';
        form.method='GET';
        form.submit();

    }
</script>
<%-- <jsp:useBean id="beanInstanceName" scope="session" class="beanPackage.BeanClassName" /> --%>
<%-- <jsp:getProperty name="beanInstanceName"  property="propertyName" /> --%>
<%
      }
   }

 }else
    out.println("Acceso Denegado");
%>
</body>
</html>
