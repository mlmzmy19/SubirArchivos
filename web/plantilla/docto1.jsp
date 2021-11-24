<%@page contentType="text/html"%>
<%@page import='java.util.*'%>
<%@page import='Entidades.*'%>
<%@page import='DB.Asuntos.*'%>
<%@page import='Utilidades.*'%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>.::: Sistema de Gestión Electrónica - Unes :::.</title>
<link href="estilodocto.css" rel="stylesheet" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<style type="text/css">
<!--
.Estilo1 {
	color: #FF0000;
	font-weight: bold;
}
-->
</style>
<%
    HttpSession s = request.getSession();
    String id_usuario = (String)s.getAttribute("id_usuario");

if(id_usuario!=null)
    {

    String nom_usuario = (String)s.getAttribute("nom_usuario");
    String baja = (String)s.getAttribute("baja");
    String id_ins = (String)s.getAttribute("id_ins");
        
    String fechasistema = (String)s.getAttribute("fechasistema");    
%>
<!-- <img src="../img/LogosIF/<%=id_ins%>.gif" border="0">-->
<%
int pidAsuIns=0;
Vector asu_ofi = new Vector();
AsuntoOficio asu = new AsuntoOficio();
String SpidAsuIns = request.getParameter("pidAsuIns");
pidAsuIns=Integer.parseInt(SpidAsuIns);
//pidAsuIns=30007801;
asu_ofi=asu.getAsuntosOficio(pidAsuIns);
String comentarios="";

Fechas_doc x= new Fechas_doc();

//comentarios = request.getParameter("FCKeditor1"); //cambio DB

if(((Vector) asu_ofi.get(0)).get(26)!=null){


String oficioBD ="";
String expedienteBD="";
 


comentarios=comentarios.replaceAll("2q3","%");
comentarios=comentarios.replaceAll("7q8","#");
//out.println(asu_ofi);


oficioBD     = (String)((Vector) asu_ofi.get(0)).get(23);
    if(oficioBD==null) oficioBD="";
expedienteBD = (String)((Vector) asu_ofi.get(0)).get(24);
    if(expedienteBD==null) expedienteBD="";
comentarios  = (String)((Vector) asu_ofi.get(0)).get(25);
    if(comentarios==null) comentarios="";

String fecha1 = (String)((Vector) asu_ofi.get(0)).get(21);
    if(fecha1==null)
        fecha1="";

String fol_con = (String)((Vector) asu_ofi.get(0)).get(0);
    if(fol_con==null)
        fol_con="";

String lic = (String)((Vector) asu_ofi.get(0)).get(15);
    if(lic==null)
        lic="";

String deleg = (String)((Vector) asu_ofi.get(0)).get(5);
    if(deleg==null)
        deleg="";

String fecha2 = (String)((Vector) asu_ofi.get(0)).get(19);
    if(fecha2==null)
        fecha2="";

String dato1_tmp = "";
    dato1_tmp = (String)((Vector) asu_ofi.get(0)).get(1);
    if(dato1_tmp==null)
        dato1_tmp="";

String dato2_tmp = "";
       dato2_tmp =(String)((Vector) asu_ofi.get(0)).get(2);
    if(dato2_tmp==null)
        dato2_tmp="";

       
String dato3_tmp = ""; 
       //dato3_tmp = (String)((Vector) asu_ofi.get(0)).get(12);
        dato3_tmp = (String)((Vector) asu_ofi.get(0)).get(27);
    if(dato3_tmp==null)
        dato3_tmp="";       
        
String dato4_tmp = "";
       dato4_tmp = (String)((Vector) asu_ofi.get(0)).get(13);
    if(dato4_tmp==null)
        dato4_tmp="";       

String dato5_tmp = "";
       dato5_tmp = (String)((Vector) asu_ofi.get(0)).get(22);
    if(dato5_tmp==null)
        dato5_tmp="";       

String dato6_tmp = "";
       dato6_tmp = (String)((Vector) asu_ofi.get(0)).get(14);
    if(dato6_tmp==null)
        dato6_tmp="";       


%>


</head>

<body class="body_docto">

<table width="630" height="920" border="0">
	<tr>
		<td valign="top">
			<table width="630" height="850" border="0" cellpadding="0" cellspacing="0" align="center">
				<tr><!-- Margen Superior -->
					<td height="20" valign="top" align="center"><span class="Estilo1" style='cursor:hand' onclick='javascript:history.go(-1);'><!--Regresar--> &nbsp;</span></td>
				</tr>
				<tr>
					<td height="60" valign="top">
						<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
							<tr>
								<td width="50%" height="80" valign="top"><img src="../img/LogosIF/<%=id_ins%>.jpg" border="0">
								
								</td>			
							</tr>
						</table>	  
					</td>
				</tr>
				<tr>
					<td valign="top">
						<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
							<tr>
								<td>
									<table width="95%" border="0" cellpadding="0" cellspacing="0" align="right">
										<tr>
											<td width="50%"></td>
											<td width="50%" align="right">
												M&eacute;xico, D.F. a <%=fecha1%><br>
												<%=(oficioBD==null?"":(oficioBD.compareTo("")==0?"":"Oficio: "+oficioBD))%><br>
												<%=(expedienteBD==null?"":(expedienteBD.compareTo("")==0?"":"Expediente: "+expedienteBD))%><br><br>&nbsp;<br>
												Folio de CONDUSEF<br>
												<b><%=fol_con%></b>
                                                                                                <%
                                                                                                  if(((Vector) asu_ofi.get(0)).get(37)!=null){
                                                                                                      if(((String)((Vector) asu_ofi.get(0)).get(37)).compareTo("0")!=0)
                                                                                                        out.println("<br><br>NSS: <b>"+((Vector) asu_ofi.get(0)).get(37)+"</b>");
                                                                                                  }
                                                                                                %>												
										
											</td>													
										</tr>
										<tr>
											<td height="30" colspan="2"></td>
										</tr>											
										<tr>
											<td width="50%" align="left">
												<b><%=lic%><br>
												<b>Comisión Nacional para la Protección<br>
												y Defensa de los Usuarios de Servicios Financieros<br>
												Delegaci&oacute;n <%=deleg%></b><br> 
												PRESENTE
											</td>
											<td width="50%" ></td>													
										</tr>
										<tr>
											<td height="50" colspan="2"></td>
										</tr>												
									</table>
								</td>						
							</tr>
							<tr>
								<td valign="middle">
									<table width="95%" border="0" cellpadding="0" cellspacing="0" align="right">
										<tr>
											<td align="justify" style='text-align:justify'>
												<p>
												Con relación al asunto del <b>C. <%=request.getParameter("Nomusuario")%> </b>
												el cual nos remitieron con fecha <%=fecha2%>, respecto a la problem&aacute;tica consistente en 
                                                                                                <b><%=dato1_tmp%></b>
                                                                                                <%=dato2_tmp%>, 
                                                                                                nos permitimos informarles lo siguiente:
												</p>
												
                                                                                                    <%try{
                                                                                                        if(((Vector) asu_ofi.get(0)).get(29).toString().split(",")[2]!=null){
                                                                                                            
                                                                                                            if (((String)((String)(((Vector) asu_ofi.get(0)).get(29).toString().split(",")[2])).split(":")[1]).trim().equals("3")){
                                                                                                                out.println("<p><strong>CONCLUIDO POR OTRO MOTIVO</strong></p>");
                                                                                                                out.println("<p><strong>"+((Vector) asu_ofi.get(0)).get(29).toString().toUpperCase().split(",")[0]+"</strong>     </p>");
                                                                                                            }
                                                                                                        }
                                                                                                     }catch(Exception ex){} 
                                                                                                    %>                                                                                                    												
												<p>
												<%=comentarios%>
												<!--La tarjeta de crédito que nos ocupa presenta un saldo deudor de $3,377 pesos y considerando la solicitud de nuestro cliente, 
												le ofrecemos un plan de apoyo de la siguiente forma:</p>
												<p>&nbsp;</p>
												<p>Una quinta del 60% pagando unicamente la cantidad de $1,000 pesos a mas tardar el 20 de mayo de 2007.</p>-->
												<p>&nbsp;</p>
												<p>
												<!-- En espera de que el trámite proporcionado sea de su completa satisfacción, quedamos a sus apreciables órdenes. -->
												<%=(fecha1.compareTo("")==0?"":(x.DocumentoMayorFecha(fecha1)<0?"":"<p>Quedamos a sus apreciables órdenes, para cualquier aclaración o duda al respecto.</p>"))%>
												</p>
												<p>&nbsp;</p>												
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr>
					<td valign="bottom">
						<table width="95%" border="0" cellpadding="0" cellspacing="0" align="right">
							<tr>
								<td>Atentamente<br>
									&nbsp;<br>
									&nbsp;<br>
									&nbsp;<br>
									Lic. <%=dato3_tmp%>
									<!--Lic. Humberto Pardo Cruz-->
                                                                <br>
									<%=dato4_tmp%>
								</td>
							</tr>
							<tr>
								<td height="40">
								</td>
							</tr>														
						</table>
					</td>
				</tr>
				<tr>
					<td><table width="100%"><tr><td align="center">
                                            <%=dato5_tmp%><br>
                                            <%=dato6_tmp%></td></tr></table>
					</td>
				</tr>
				
			</table>
		</td>
	</tr>	
</table>
 <%
    }else
        { out.println("<span class='Estilo1'>Aun no existe resolución.</span> "); }
}%> 
</body>
</html>

