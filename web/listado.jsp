<%@page contentType="text/html"%>
<%@page import='java.util.*'%>
<%@page import='DB.Sio.*'%>
	
<%
String valid = "";
       valid = request.getParameter("valid");
       
       
if(valid!=null){

if(valid.equals("udepo")){
     String id_del="";
            id_del=request.getParameter("id_del");
     String f_inicio="";
            f_inicio=request.getParameter("f_inicio");
     String f_final="";
            f_final=request.getParameter("f_final");
     String pistatus="";
            pistatus=request.getParameter("pistatus");            
     String conclusion ="---";
     String semaforo   ="";     
     String status     ="";
if(id_del!=null && f_inicio!=null && f_final!=null)     
//            if(id_del!=null)     
    {

        Vector v_listado = new Vector();

        P_Sio p_sio = new P_Sio();

          v_listado = p_sio.getListado(Integer.parseInt(id_del),f_inicio,f_final,Integer.parseInt(pistatus));
          //v_listado = p_sio.getListado(30, "01012007","30042007");
          
%>
<html>
<head><title>JSP Page</title></head>
<link href="css/estilos.css" rel="stylesheet" type="text/css">
<script src="scripts/sorttable.js"></script>
<body bgcolor='white'>

<table width='800' align='center' border='0'>
<!--
 <tr>
    <td colspan='2' class="lbl_detalle" align='center' style='background:white; font-size:15px' valign=top><table width="100%" border="0">
      <tr>
        <td width="63%" class="lbl_detalle" style='background:white; font-size:15px'>Ver asuntos que no han sido tomados por la Instituci&oacute;n Financiera: </td>
        <td width="9%"><a href='#' onclick='listadoNOIF()'><img src='img/interrogacion.jpg' border='0'></a></td>
        <td width="28%">&nbsp;</td>
      </tr>
    </table></td>
 </tr>
 -->
 <tr>
    <td colspan='2' align='center' >
        .
    </td>
 </tr>
 <script>
    function listadoNOIF(){
    window.open("listado_NO-IF.jsp?id_del=<%=id_del%>&f_inicio=<%=f_inicio%>&f_final=<%=f_final%>&valid=ud3",null,"height=300,width=900,status=yes,toolbar=no,scrollbars=yes,menubar=no,location=no");
        
    }
 </script>
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
  <td width='40%' class="lbl_detalle" align=rigth><span onClick="javascript:window.close();" class='txtDetalle2' style='cursor:hand; color:white' >cerrar</span></td>
 </tr>
    <tr>
        <td colspan='2' align='center'>
            <table>
                <tr>
                    <td><img src='img/semaforos/1T.jpg' style='cursor:hand' alt='Asunto Vencido'></td>
                    <td><img src='img/semaforos/2T.jpg' style='cursor:hand' alt='Asunto por vencer en 5 días'></td>
                    <td><img src='img/semaforos/3T.jpg' style='cursor:hand' alt='Asunto con 5 dias transcurridos desde que lo tomo la UNE'></td>
                    <td><!-- <img src='img/semaforos/4T.jpg' style='cursor:hand' alt='Información adicional solicitada por la UNE'> --></td>
                    <td><!--<img src='img/semaforos/5T.jpg' style='cursor:hand' alt='Solicitud de prórroga por la UNE'> --></td>
                    <td><!--<img src='img/semaforos/6T.jpg' style='cursor:hand' alt='Asunto aun no visto por la UNE'>--></td>
                    <td><img src='img/semaforos/7T.jpg' style='cursor:hand' alt='Concluido por la UNE, sin seguimiento en el SIO'></td>
                    <td><img src='img/semaforos/8T.jpg' style='cursor:hand' alt='Concluido por la UNE, con seguimiento en el SIO'></td>
                </tr>
            </table>

        </td>
    </tr>

 
</table>
<table width='1500' align='center' border='0' bgcolor='white' background='img/sio4.jpg' class="sortable">

    <tr style="cursor:pointer">
     <td>     </td>
     <td class="txtDetalle2" bgcolor='#BFC760'> <!-- <img src='img/foliosio.jpg'> -->     <b> Sem. </b>    </td>
     <td class="txtDetalle2" bgcolor='#BFC760'> <!-- <img src='img/foliosio.jpg'> -->     <b> Folio SIO</b>    </td>
     <td class="txtDetalle2" bgcolor='#BFC760'> <!-- <img src='img/turnado.jpg'> -->      <b> Turnado</b>  </td>
     <td class="txtDetalle2" bgcolor='#BFC760'> <!-- <img src='img/usuario.jpg'>  -->     <b> Usuario </b> </td>
     <td class="txtDetalle2" bgcolor='#BFC760' > <!-- <img src='img/status.jpg'>  -->     <b> Status </b>  </td>
     <td class="txtDetalle2" bgcolor='#BFC760' > <!-- <img src='img/conclusion.jpg'>  --> <b> Conclusión</b>   </td>     
     <td class="txtDetalle2" bgcolor='#BFC760'> <!-- <img src='img/responsable.jpg'>  --> <b> Responsable</b>    </td>     
     <td class="txtDetalle2" bgcolor='#BFC760'> <!-- <img src='img/f_respuesta.jpg'>  --> <b> Fecha Respuesta</b>   </td>     

     <td class="txtDetalle2" bgcolor='#BFC760'> <b>Fecha Vencimiento</b>    </td>     
     <td class="txtDetalle2" bgcolor='#BFC760'> <b>Iinstitución Financiera</b>      </td>     
     <td class="txtDetalle2" bgcolor='#BFC760'> <b>Seguimiento SIO</b>    </td>        
     
    </tr>
<%for(int i=0; i < v_listado.size(); i++){%>
   <form name='<%=i%>'>
    <tr>
        <td   bgcolor='gray' style='color:white' style="border-style:inset; border-top-width:1px; border-left-width:1px; border-right-width:0px; border-bottom-width:0px; border-color:#999999;padding:0px;  filter:alpha(opacity: 100); font-size:10pt" width='25' align=center > 
             
            <b><%=i+1%></b>
            
        </td>
        <td>
            <%
                    if(((Vector)v_listado.get(i)).get(12)!=null){
                        if(((Vector)v_listado.get(i)).get(12).toString().split("-").length==2)
                            semaforo = ((Vector)v_listado.get(i)).get(12).toString().split("-")[1];
                    }
            %>
        
                        <span style='font-size:4px; color:white'><%=semaforo%></span> <img src='img/semaforos/<%=semaforo%>.jpg'>
        </td>
        
            <% 
               if(((Vector)v_listado.get(i)).get(7)!=null){
                    conclusion=((Vector)v_listado.get(i)).get(7).toString().trim();
               }
               if(((Vector)v_listado.get(i)).get(4)!=null){
                    status = ((Vector)v_listado.get(i)).get(4).toString().trim();           
               }
            %>        
        <td  style="border-style:solid; border-top-width:1px; border-left-width:1px; border-right-width:1px; border-bottom-width:1px; border-color:#999999;padding:3px; background-color:white; filter:alpha(opacity: 100);" align='center' class="lbl_detalle" > 
            <!-- <input type='button'  name='valid' value='<%=((Vector)v_listado.get(i)).get(1)%>' onclick='enviar(this.form)' style="border-style:solid; border-top-width:0px; border-left-width:0px; border-right-width:0px; border-bottom-width:0px; border-color:#999999;padding:0px; background-color:white; filter:alpha(opacity: 100); cursor:hand" class="lbl_detalle" >
        -->
        <%if(status.equals("Concluido") || status.equals("Solicitud de Información Adicional al Usuario") || status.equals("Solicitud de Prórroga") || status.equals("Solicitud de Información Adicional a la Delegación")){%>
        
        <a style="border-style:solid; border-top-width:0px; border-left-width:0px; border-right-width:0px; 
        border-bottom-width:0px; border-color:#999999;padding:0px; background-color:white; 
            filter:alpha(opacity: 100); cursor:hand" class="lbl_detalle" 
            href='detalle.jsp?cons=<%=((Vector)v_listado.get(i)).get(0)%>&valid=udepo&status=<%=((Vector)v_listado.get(i)).get(4)%>&nombre=<%=((Vector)v_listado.get(i)).get(3)%>&vp=<%=request.getParameter("vp")%>'>
        <%}%>
                <%=((Vector)v_listado.get(i)).get(1)%>
        </a>
    </td>

    
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(2)%>  </b></td>
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(3)%> </b></td>
        <td class="txtDetalle2"> 
            <b> 
                <%=status%>

            </b>
        </td>
        <td class="txtDetalle2"> 
                <b><%
                        if(((Vector)v_listado.get(i)).get(4)!=null){
                            if(((Vector)v_listado.get(i)).get(4).toString().trim().equals("Concluido"))
                                out.println(conclusion);
                            else
                                out.println("---");
                        }
                    %></b>
        </td>        
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(5)%> </b></td>        
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(6)%> </b></td>                
        
        <td class="txtDetalle2"> 
            <b>
         
                
                <% 
                    if(((Vector)v_listado.get(i)).get(9)!=null){
                       if(((Vector)v_listado.get(i)).get(9).toString().trim().equals("No Encontr"))
                        out.println("");
                       else
                        out.println(((Vector)v_listado.get(i)).get(9));
                    }
                %> 
        
            </b>
        </td>        
        <td class="txtDetalle2"> <b><%=((Vector)v_listado.get(i)).get(10)%> </b></td>          
        <td class="txtDetalle2"> <b>
        
        <%
            if(((Vector)v_listado.get(i)).get(11)!=null){
                  if(((Vector)v_listado.get(i)).get(11).toString().equals("0"))
                      out.println("NO");
                  if(((Vector)v_listado.get(i)).get(11).toString().equals("1"))
                      out.println("SI");
            }else{
                out.println("---");
            }
            
        %>
        </b></td>                  
        
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
