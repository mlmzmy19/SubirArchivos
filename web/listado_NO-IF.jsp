<%@page contentType="text/html"%>
<%@page import='java.util.*'%>
<%@page import='DB.Sio.*'%>
	
<%
String valid = "";
       valid = request.getParameter("valid");
       
       
if(valid!=null){

if(valid.equals("ud3")){
     String id_del="";
            id_del=request.getParameter("id_del");
     String f_inicio="";
            f_inicio=request.getParameter("f_inicio");
     String f_final="";
            f_final=request.getParameter("f_final");
     
if(id_del!=null && f_inicio!=null && f_final!=null)     
//            if(id_del!=null)     
    {

        Vector v_listado = new Vector();

        P_Sio p_sio = new P_Sio();

          v_listado = p_sio.P_Une_AsuntosNoIniciados(Integer.parseInt(id_del),f_inicio,f_final);
          //v_listado = p_sio.getListado(30, "01012007","30042007");
          
%>
<html>
<head><title>JSP Page</title></head>
<link href="css/estilos.css" rel="stylesheet" type="text/css">
<script src="scripts/sorttable.js"></script>
<body bgcolor='white'>

<table width='850' align='center' border='0'>
 
 <tr>
  <td width='60%' class="lbl_detalle" align=rigth style='background:white; font-size:15px'>


        Total de Asuntos nuevos que aun no han sido tomados por la Institución Financiera = 
                <%
                    String numeros = String.valueOf(v_listado.size());
                    char [] a = numeros.toCharArray();
                    String imagenes="";
                    for (int y=0; y<a.length; y++)
                        imagenes=imagenes+"<img src='img/numeros/"+a[y]+".jpg' >";

                    out.println(imagenes);


                %> 
    </td>
  <td width='40%' class="lbl_detalle" align=rigth><span onClick="javascript:window.close();" class='txtDetalle2' style='cursor:hand; color:white' >cerrar</span></td>
 </tr>
 <tr>
    <td class="lbl_detalle" align=rigth>
        <span style='color:black'>(Para ordenar la columna deseada, dar click sobre el título de cada columna)</span> 
    </td>
 </tr>

 
</table>
<table width='850' align='center' border='0' bgcolor='white' background='img/sio4.jpg' class="sortable">
    <tr style="cursor:pointer">
     <td>     </td>
     <td class="txtDetalle2"> <img src='img/foliosio.jpg'>    </td>
     <td class="txtDetalle2"> <img src='img/turnado.jpg'>  </td>
     <td class="txtDetalle2"> <img src='img/usuario.jpg'>   </td>
     <td class="txtDetalle2"> <img src='img/responsable.jpg'>      </td>     
     <td class="txtDetalle2"> <img src='img/if.jpg'>       </td>          
     
    </tr>
<%for(int i=0; i < v_listado.size(); i++){%>
   <form name='<%=i%>'>
    <tr>
        <td   bgcolor='gray' style='color:white' style="border-style:inset; border-top-width:1px; border-left-width:1px; border-right-width:0px; border-bottom-width:0px; border-color:#999999;padding:0px;  filter:alpha(opacity: 100); font-size:10pt" width='25' align=center > 
             
            <b><%=i+1%></b>
            
        </td>
        <td  style="border-style:solid; border-top-width:1px; border-left-width:1px; border-right-width:1px; border-bottom-width:1px; border-color:#999999;padding:3px; background-color:white; filter:alpha(opacity: 100);" align='center'> 

        <span style="border-style:solid; border-top-width:0px; border-left-width:0px; border-right-width:0px; 
                border-bottom-width:0px; border-color:#999999;padding:0px; background-color:white; 
                filter:alpha(opacity: 100); cursor:cursor" class="lbl_detalle" 
                href='#'><%=((Vector)v_listado.get(i)).get(1)%></span>
        </td>
        
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(2)%>  </b></td>    
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(3)%>  </b></td>
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(4)%> </b></td>
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(5)%> </b></td>         
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