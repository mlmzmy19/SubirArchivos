<%@page contentType="text/html"%>
<%@page import='java.util.*'%>
<%@page import='Entidades.*'%>
<%@page import='DB.Asuntos.*'%>
<%@page import='Utilidades.*'%>

<%
   HttpSession s = request.getSession();
   String id_usuario = (String)s.getAttribute("id_usuario");

//if(id_usuario!=null)
 //   {

    String nom_usuario = (String)s.getAttribute("nom_usuario");
    String baja = (String)s.getAttribute("baja");
    String id_ins = (String)s.getAttribute("id_ins");
    
    String fechasistema = (String)s.getAttribute("fechasistema");    
%>

<%
int pidAsuIns=0;
Vector asu_ofi = new Vector();
AsuntoOficio asu = new AsuntoOficio();
pidAsuIns=Integer.parseInt(request.getParameter("pidAsuIns"));
//pidAsuIns=30007801;
asu_ofi=asu.getAsuntosOficio(pidAsuIns);
//out.println(asu_ofi);
Fechas_doc x= new Fechas_doc();

%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>.::: Sistema de Gestión Electrónica - Unes :::.</title>
<link href="estilodocto.css" rel="stylesheet" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"></head>

<body class="body_docto">

<table width="630" height="920" border="0">
	<tr>
		<td valign="top">
			<table width="630" height="800" border="0" cellpadding="0" cellspacing="0" align="center">
				<tr><!-- Margen Superior -->
					<td height="20">
					</td>
				</tr>
				<tr>
					<td height="60" valign="top">
						<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
							<tr>
							<%
                                                         if(id_ins==null)
                                                            id_ins=request.getParameter("idinsttmp");


                                                          String idins="";
                                                                 idins=(String)((Vector) asu_ofi.get(0)).get(36); 
                                                                 if(idins==null) idins="";  
                                                                 
                                                        %>
								<td width="50%" height="80" valign="top"><img src="../img/LogosIF/<%=idins%>.jpg" border="0">
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
											<%
                                                                                            String fecha1="";
                                                                                                        fecha1=(String)((Vector) asu_ofi.get(0)).get(21);
                                                                                                        if(fecha1==null) fecha1="";
                                                                                                        
                                                                                            String Oficio="";
                                                                                                        Oficio=(String)((Vector) asu_ofi.get(0)).get(17);
                                                                                                        if(Oficio==null) Oficio="";
                                                                                                        
                                                                                            String Expediente="";
                                                                                                        Expediente=(String)((Vector) asu_ofi.get(0)).get(16);
                                                                                                        if(Expediente==null) Expediente="";
                                                                                                        
                                                                                            String Folio_cond="";
                                                                                                        Folio_cond=(String)((Vector) asu_ofi.get(0)).get(0);
                                                                                                        if(Folio_cond==null) Folio_cond="";                                                                                                        
                                                                                            
                                                                                        %>
												M&eacute;xico, D.F. a <%=fecha1%><br>
												<%=(Oficio==null?"":(Oficio.compareTo("")==0?"":"Oficio: "+Oficio))%><br>
												<%=(Expediente==null?"":(Expediente.compareTo("")==0?"":"Expediente: "+Expediente))%><br><br>&nbsp;<br>
												Folio de CONDUSEF<br>
												<b><%=Folio_cond%></b>
										
											</td>													
										</tr>
										<tr>
											<td height="30" colspan="2"></td>
										</tr>						
					<%
                                                            String Dato1="";
                                                                        Dato1=(String)((Vector) asu_ofi.get(0)).get(15);
                                                                        if(Dato1==null) Dato1="";
                                                                            
                                                            String Delegacion="";
                                                                        Delegacion=(String)((Vector) asu_ofi.get(0)).get(5);
                                                                        if(Delegacion==null) Delegacion="";
                                        %>
										<tr>
											<td width="50%" align="left">
												<b><%=Dato1%><br>
												<b>Comisión Nacional para la Protección<br>
												y Defensa de los Usuarios de Servicios Financieros<br>
												<%=(Delegacion.indexOf("D.F.")<0?"Delegaci&oacute;n":"")%> <%=(Delegacion.indexOf("D.F.")<0?Delegacion:"DIRECCI&Oacute;N DE ORIENTACI&Oacute;N, SUPERVISI&Oacute;N Y UNIDADES ESPECIALIZADAS")%></b><br> 
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
										<%
                                                                                        String fecha2="";
                                                                                             fecha2=(String)((Vector) asu_ofi.get(0)).get(19);
                                                                                             if(fecha2==null) fecha2="";
                                                                                             
                                                                                        String Dato2="";
                                                                                              Dato2=(String)((Vector) asu_ofi.get(0)).get(1);
                                                                                              if(Dato2==null) Dato2="";
                                                                                              
                                                                                        String Dato3="";
                                                                                              Dato3=(String)((Vector) asu_ofi.get(0)).get(2);                                                                                              
                                                                                              if(Dato3==null) Dato3="";
                                                                                              
                                                                                        String Dato4="";
                                                                                              Dato4=(String)((Vector) asu_ofi.get(0)).get(18);
                                                                                              if(Dato4==null) Dato4="";
                                                                                              
                                                                                        String Responsable="";
                                                                                              //Responsable=(String)((Vector) asu_ofi.get(0)).get(12);                                                                                              
                                                                                              Responsable=(String)((Vector) asu_ofi.get(0)).get(27);                                                                                              
                                                                                              if(Responsable==null) Responsable="";
                                                                                              
                                                                                        String Dato5="";
                                                                                              Dato5=(String)((Vector) asu_ofi.get(0)).get(13);    
                                                                                              if(Dato5==null) Dato5="";
                                                                                          
                                                                                        String Dato6="";
                                                                                              Dato6=(String)((Vector) asu_ofi.get(0)).get(22); 
                                                                                              if(Dato6==null) Dato6="";
                                                                                              
                                                                                        String Dato7="";
                                                                                              Dato7=(String)((Vector) asu_ofi.get(0)).get(14);                                                                                               
                                                                                              if(Dato7==null) Dato7="";
                                                                                %>
											<td align="justify" style='text-align:justify'>
											  <p>
												Con relación a la solicitud de negociaci&oacute;n de cr&eacute;dito del <b>C. 
												<%if(request.getParameter("nombre")!=null)
													out.println(request.getParameter("nombre"));
												   else
  													out.println(request.getParameter("Nomusuario"));
												%> 
												</b>
												el cual nos remitieron con fecha <%=fecha2%>, le informamos lo siguiente:												</p>
												<!-- <p>Resoluci&oacute;n de la Solicitud :<strong> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX </strong></p> -->
												<p>
                                                                                                    <strong>
                                                                                                    <%try{
																	
                                                                                                        if(((Vector) asu_ofi.get(0)).get(29).toString().split(",")[2]!=null){
                                                                                                            
                                                                                                            if(((String)((String)(((Vector) asu_ofi.get(0)).get(29).toString().split(",")[2])).split(":")[1]).trim().equals("1"))
                                                                                                                out.println("PROPUESTA OTORGADA");
                                                                                                            else if (((String)((String)(((Vector) asu_ofi.get(0)).get(29).toString().split(",")[2])).split(":")[1]).trim().equals("2"))
                                                                                                                out.println("SOLICITUD DECLINADA");
                                                                                                            else if (((String)((String)(((Vector) asu_ofi.get(0)).get(29).toString().split(",")[2])).split(":")[1]).trim().equals("3"))
                                                                                                                out.println("CONCLUIDO POR OTRO MOTIVO");
                                                                                                        }
																	
                                                                                                     }catch(Exception ex){} 
                                                                                                    %>
                                                                                                    </strong>     
												</p>
												<p><strong><%=((Vector) asu_ofi.get(0)).get(29).toString().toUpperCase().split(",")[0]%></strong>     </p>
												<% try{ 
													 if (((String)((String)(((Vector) asu_ofi.get(0)).get(29).toString().split(",")[2])).split(":")[1]).trim().equals("1") && ((String)((Vector) asu_ofi.get(0)).get(29).toString().split(",")[0]).toUpperCase().indexOf("NO")<0 && ((String)((Vector) asu_ofi.get(0)).get(29).toString().split(",")[0]).toUpperCase().indexOf("ESPECIAL")<0){ %>
												<p><!--La tarjeta de crédito que nos ocupa presenta un saldo deudor de $3,377 pesos y considerando la solicitud de nuestro cliente, 
												le ofrecemos un plan de apoyo de la siguiente forma:</p>
												<p>&nbsp;</p>
												<p>Una quinta del 60% pagando unicamente la cantidad de $1,000 pesos a mas tardar el 20 de mayo de 2007.</p>-->
												
												<strong><%=((Vector) asu_ofi.get(0)).get(29).toString().split(",")[1]%></strong>
												<p><strong>Vigencia de la Propuesta: <%=(String)((Vector) asu_ofi.get(0)).get(28)%> </p>
                                                                                                <% } }   
                                                                                                    catch(Exception e){ System.out.println(e); }
                                                                                                    %>
												<p>        <%=(String)((Vector) asu_ofi.get(0)).get(18)%></strong><strong></strong>
												<%=(fecha1.compareTo("")==0?"":(x.DocumentoMayorFecha(fecha1)<0?"":"<p>Quedamos a sus apreciables órdenes, para cualquier aclaración o duda al respecto.</p>"))%>
																								
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td valign="top">
						<table width="95%" border="0" cellpadding="0" cellspacing="0" align="right">
							<tr>
								<td>Atentamente<br>
									&nbsp;<br>
									&nbsp;<br>
									&nbsp;<br>
									Lic. <%=Responsable%>
									<!--Lic. Humberto Pardo Cruz-->
                                                                <br>
									<%=Dato5%>
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
                                            <%=Dato6%><br>
                                            <%=Dato7%></td></tr></table>
					</td>
				</tr>
				
			</table>
		</td>
	</tr>	
</table>
 <%//}%> 
</body>
</html>

