<%@page contentType="text/html"%>
<%@page import='java.util.*'%>
<%@page import='DB.Asuntos.*'%>
<%@page import='Utilidades.*'%>
<%@page import='DB.Sio.*'%>
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

String unidadAdministrativa = "Unidad de Atenci&oacute;n a Usuarios";
BD_Sio consulta = new BD_Sio();
Vector vunidadadministrativa = new Vector();
Vector URL_LOGO_INST = new Vector();
Vector asu_ofi = new Vector();
AsuntoOficio asu = new AsuntoOficio();
pidAsuIns=Integer.parseInt(request.getParameter("pidAsuIns"));
int ban_srdesc;
if(request.getParameter("ban_sr") == null){
ban_srdesc = 0;
}
else{
 ban_srdesc = Integer.parseInt(request.getParameter("ban_sr"));
}
//out.println(ban_srdesc);
asu_ofi=asu.getAsuntosOficio(pidAsuIns);
Fechas_doc x= new Fechas_doc();

int idres = 0;
    if(((Vector) asu_ofi.get(0)).get(26)!=null){
        idres = Integer.parseInt(((Vector) asu_ofi.get(0)).get(26).toString());
    }

String Folio_cond="";
    if(((Vector) asu_ofi.get(0)).get(0)!=null){
        Folio_cond=(String)((Vector) asu_ofi.get(0)).get(0);
    }

String Dato40="";
        Dato40=(String)((Vector) asu_ofi.get(0)).get(40);
        if(Dato40==null) Dato40="--";

vunidadadministrativa = consulta.busquedagral("f_unidad_administrativa("+pidAsuIns+")","dual");

URL_LOGO_INST = consulta.busquedagral("f_url_logo_inst("+pidAsuIns+") ","dual");



if( vunidadadministrativa.size()!=0 )
    {
        unidadAdministrativa = ((Vector)vunidadadministrativa.get(0)).get(0).toString();
        }

        String ligaArchivosUNES = "";
        //Consultas con = new Consultas();        
        //Vector VLigaArchivos = new Vector();
        Vector vLiga_docts = new Vector();
        vLiga_docts.clear();
        BD_Sio dbsio2 = new BD_Sio();
        vLiga_docts=dbsio2.busquedagral(" f_url_aplicacion(14) "," dual "); 
        //VLigaArchivos = con.busquedagral("select f_une_aplicacion(2) from dual");
        if(vLiga_docts.size() > 0)
        {
            ligaArchivosUNES = (String)((Vector)vLiga_docts.get(0)).get(0);
        }

%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>.::: Sistema de Gestión Electrónica - Unes :::.</title>
<link href="estilodocto.css" rel="stylesheet" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body class="body_docto">
<%if(idres!=0){%>

<%if(idres==343){%>
<table align='center' width='500'>
    <tr>
        <td height='100'>    &nbsp;
        </td>
    </tr>
    <tr>
        <td height='100'>    <img src='../img/logo_condusef.jpg' border=0>
        </td>
    </tr>    
    <tr>
        <td style="text-align:justify">
        
            Lo sentimos mucho pero la Institución Financiera (<%if(((Vector)asu_ofi.get(0)).get(22)!=null){out.println(((Vector) asu_ofi.get(0)).get(22));}%>)
        
                       <%
                        if(Folio_cond.indexOf("MAE")>=0 || Folio_cond.indexOf("PGC")>=0){
                       %>
                        no dio respuesta en el plazo establecido de los 20 días hábiles, por lo que le sugerimos acudir a una de nuestras Delegaciones que más le convenga, para que uno de nuestros funcionarios lo asesore; los domicilios de nuestras oficinas las puede consultar en <b><a href='http://www.condusef.gob.mx'>www.condusef.gob.mx.</a></b>
                       <%}else{%>
                        
                        
                         no dio respuesta en el plazo establecido de los 20 días hábiles, por lo que le sugerimos acudir a la Delegación donde presentó su asunto para que uno de nuestros funcionarios lo asesore.                       
                        
                        <%}%>
        
           
        </td>
    </tr>
</table>
<%}else{%>

<table width="630" height="920" border="0">
	<tr>
		<td valign="top">
			<table width="630" height="850" border="0" cellpadding="0" cellspacing="0" align="center">
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
								 <td width="50%" height="80" valign="top">
                                                                         <img src="<%=((Vector)URL_LOGO_INST.get(0)).get(0).toString()%>" border="0" style='max-width:200px;max-height:50px;'> 
                                                                        
                                                                        
								</td>		
                                                        <!-- Archivos anexos solo para cuando se notifica al usuario via email-->
				<%
                                
                                    String banduser = "";
                                    BD_Sio dbsio    = new BD_Sio();                                                                                                
                                    
                                   if(request.getParameter("idinsttmp")==null){
                                                banduser = "01";
                                    }
                                    if(banduser.equals("01")){
                                                                                                
                                    int contfiles       = 0 ;
                                    Vector archivo1user = new Vector();
                                    archivo1user.clear();
                                    archivo1user        = dbsio.busquedagral("*"," unearchivos where id_asuins="+pidAsuIns);
                                    String ext_tmp      = "";
                                    String ext_tmp_1    = "";                                    

                                    
                                    if(archivo1user.size()>0){
                                        contfiles = contfiles + 1 ;
                                            if(((Vector)archivo1user.get(0)).get(4)!=null){
                                               ext_tmp   = (String)((Vector)archivo1user.get(0)).get(4);
                                               String [] ext_tmp2 = ext_tmp.split("\\.");
                                               if(ext_tmp2.length==2)
                                                ext_tmp_1 = ext_tmp2[1];
                                            }                                    
                                    }
                                    
                                    
                                    dbsio               = null;                                    
                                    Vector archivo2user = new Vector();
                                    archivo2user.clear();
                                    dbsio               = new BD_Sio();
                                    archivo2user        = dbsio.busquedagral("*"," unearchivosanex where id_asuins="+pidAsuIns);                                    
                                    String ext2_tmp     = "";
                                    String [] ext2_tmp2 = null;
                                    
                                    if(archivo2user.size()>0){
                                        contfiles = contfiles + 1 ; 
                                        ext2_tmp = (String)((Vector)archivo2user.get(0)).get(4);
                                        ext2_tmp2 = ext2_tmp.split("\\.");                                        
                                    }

                                    
                                   

                                %>				
					<td align="left">
                                            <table width="100%" border='1' style='border-collapse: collapse'>
                                                <tr>
                                                    <td align="left">
                                            
                                            <%
                                                if(contfiles>0){
                                            %>
                                                <span style='cursor:hand' >Documentos anexos:</span>
                                                <script>
                                                    function verdocs(){
                                                        document.getElementById('divdocs').style.display='';
                                                    }
                                                </script>
                                                <div id='divdocs' style='display:'>
                                                <table>
                                                 <%if(archivo1user.size()>0){%>
                                                    <tr>
                                                        <td style='font-family:Arial; font-size:12px'>
                                                                Documento Anexo Respuesta: <% out.println("&nbsp;&nbsp;<a href='"+ligaArchivosUNES+"ofic_resol/"+pidAsuIns+"."+ext_tmp_1+"' target='_blank'><img src='../img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'></a> &nbsp;&nbsp;&nbsp;");%>
                                                        </td>
                                                    </tr>
                                                 <%}%>
                                                 <%if(archivo2user.size()>0){%>
                                                    <tr>
                                                        <td style='font-family:Arial; font-size:12px'>
                                                                Documento Anexo: <% out.println("&nbsp;&nbsp;<a href='"+ligaArchivosUNES+"ofic_anex/"+pidAsuIns+"."+ext2_tmp2[1]+"' target='_blank'><img src='../img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'></a> &nbsp;&nbsp;&nbsp;"); %>
                                                        </td>
                                                    </tr>
                                                 <%}%>                                                 
                                                    <tr>
                                                        <td>
                                                    
                                                        </td>
                                                    </tr>
                                                    
                                                </table>
                                                </div>
                                            <%
                                                }
                                            %>
                                                    </td>
                                               </tr>
                                            </table>
                                            
					</td>				
				<%}%>
				<!-- Archivos anexos solo para cuando se notifica al usuario via email-->        
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
                                                                          if(ban_srdesc == 0){
                                                                                                        fecha1=(String)((Vector) asu_ofi.get(0)).get(21);
                                                                                                        }else{
                                                                                                            fecha1=(String)((Vector) asu_ofi.get(0)).get(39);
                                                                                                            }
                                                                                                        if(fecha1==null) fecha1="";
                                                                                                        
                                                                                            String Oficio="";
                                                                                                        Oficio=(String)((Vector) asu_ofi.get(0)).get(17);
                                                                                                        if(Oficio==null) Oficio="";
                                                                                                        
                                                                                            String Expediente="";
                                                                                                        Expediente=(String)((Vector) asu_ofi.get(0)).get(16);
                                                                                                        if(Expediente==null) Expediente="";
                                                                                                        
                                                                                            
                                                                                                        
                                                                                                        if(Folio_cond==null) Folio_cond="";      
                                                                                           
                                                                                        %>
												M&eacute;xico, D.F. a <%=fecha1%><br>
												<%=(Oficio==null?"":(Oficio.compareTo("")==0?"":"Oficio: "+Oficio))%><br>
												<%=(Expediente==null?"":(Expediente.compareTo("")==0?"":"Expediente: "+Expediente))%><br><br>&nbsp;<br>
												Folio CONDUSEF<br>
												<b><%=Folio_cond%></b>
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
					<%
                                                            String Dato1="";
                                                                        Dato1=(String)((Vector) asu_ofi.get(0)).get(15);
                                                                        if(Dato1==null) Dato1="";
                                                                            
                                                            String Delegacion="";
                                                                        Delegacion=(String)((Vector) asu_ofi.get(0)).get(5);
                                                                        if(Delegacion==null) Delegacion="";
                                                                        
                                                            String Dato30="";
                                                                        nom_usuario=(String)((Vector) asu_ofi.get(0)).get(30);                                                                              
                                        %>
										<tr>
											<td width="50%" align="left">
                                                                                                <b>
                                                                                       <%
                                                                                                if(Folio_cond.indexOf("MAE")>=0 || Folio_cond.indexOf("PGC")>=0)
                                                                                                   out.println(nom_usuario);
                                                                                                else 
                                                                                                   out.println(Dato1);
                                                                                       %>
												<br>
												<b>
                                                                                       <%
                                                                                                if(Folio_cond.indexOf("MAE")>=0){
                                                                                                out.println("(MAE) Módulo de Atención Electrónica CONDUSEF");
                                                                                                out.println("<br>PRESENTE");
                                                                                                }else if(Folio_cond.indexOf("PGC")>=0){
                                                                                                out.println("Portal de Gestión de Cobranza");
                                                                                                out.println("<br>PRESENTE");                                                                                                    
                                                                                                }else{
                                                                                       %>
                                                                                                Comisión Nacional para la Protección<br>
												y Defensa de los Usuarios de Servicios Financieros<br>
												<%=(Delegacion.indexOf("D.F.")<0?unidadAdministrativa:"")%> <%=(Delegacion.indexOf("D.F.")<0?Delegacion:"DIRECCI&Oacute;N DE ORIENTACI&Oacute;N, SUPERVISI&Oacute;N Y UNIDADES ESPECIALIZADAS")%></b><br> 
												PRESENTE
										       <%}%>
											</td>
											<td width="50%" ></td>													
										</tr>
										<tr>
											<td height="50" colspan="2" align='right'>
                                                                                       <%
                                                                                       String tipo_resolucion="";
                                                                                                if(Folio_cond.indexOf("MAE")>=0 || Folio_cond.indexOf("PGC")>=0){
                                                                                                     tipo_resolucion=(String)((Vector) asu_ofi.get(0)).get(29);
                                                                                                     if(tipo_resolucion!=null){
                                                                                                        out.println("<b>Resolución:</b>"+tipo_resolucion.split(":")[1]);
                                                                                                     }
                                                                                                }else{
                                                                                                    out.println("&nbsp;");
                                                                                                }
                                                                                       
                                                                                       %>											
											</td>
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
                                                                                        if(ban_srdesc == 0){
                                                                                              Dato4=(String)((Vector) asu_ofi.get(0)).get(18);
                                                                                              }else{
                                                                                                  Dato4=(String)((Vector) asu_ofi.get(0)).get(38);
                                                                                                    }
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
                                                                                       <%
                                                                                                if(Folio_cond.indexOf("MAE")>=0 || Folio_cond.indexOf("PGC")>=0){
                                                                                       %>
												Con relación a su asunto el cual recibimos con fecha <%=fecha2%>, respecto a la problem&aacute;tica consistente a 
                                                                                                <b><%=Dato2%></b>
                                                                                                <%=Dato3%>, 
                                                                                                nos permitimos informarles lo siguiente:                                                                                       
                                                                                       <%
                                                                                                }else{
                                                                                       %>
												Con relación al asunto del <b>C. <%=nom_usuario%> </b>
												el cual nos remitieron con fecha <%=fecha2%>, respecto a la problem&aacute;tica consistente en 
                                                                                                <b><%=Dato2%></b>
                                                                                                <%=Dato3%>, 
                                                                                                nos permitimos informarles lo siguiente:
                                                                                       <%}%>
                                                                                                
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
												<%=Dato4%>
                                                                                                <% if (Dato40.length()>10) { %>
                                                                                                    <br><p>
                                                                                                    <%=Dato40%>
                                                                                                    </p>
                                                                                                <% } %>                                                                                                
												<!--La tarjeta de crédito que nos ocupa presenta un saldo deudor de $3,377 pesos y considerando la solicitud de nuestro cliente, 
												le ofrecemos un plan de apoyo de la siguiente forma:</p>
												<p>&nbsp;</p>
												<p>Una quinta del 60% pagando unicamente la cantidad de $1,000 pesos a mas tardar el 20 de mayo de 2007.</p>-->
												<p>&nbsp;</p>
												<p>
												<!-- En espera de que el trámite proporcionado sea de su completa satisfacción, quedamos a sus apreciables órdenes.-->
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
				
				
				
				
				<!-- Archivos anexos solo para cuando se notifica al usuario via email-->
				<%
                                /**
                                    String banduser = "";
                                    BD_Sio dbsio    = new BD_Sio();                                                                                                
                                    
                                   if(request.getParameter("idinsttmp")==null){
                                                banduser = "01";
                                    }
                                    if(banduser.equals("01")){
                                                                                                
                                    int contfiles       = 0 ;
                                    Vector archivo1user = new Vector();
                                    archivo1user.clear();
                                    archivo1user        = dbsio.busquedagral("*"," unearchivos where id_asuins="+pidAsuIns);
                                    String ext_tmp      = "";
                                    String ext_tmp_1    = "";                                    

                                    
                                    if(archivo1user.size()>0){
                                        contfiles = contfiles + 1 ;
                                            if(((Vector)archivo1user.get(0)).get(4)!=null){
                                               ext_tmp   = (String)((Vector)archivo1user.get(0)).get(4);
                                               String [] ext_tmp2 = ext_tmp.split("\\.");
                                               if(ext_tmp2.length==2)
                                                ext_tmp_1 = ext_tmp2[1];
                                            }                                    
                                    }
                                    
                                    
                                    dbsio               = null;                                    
                                    Vector archivo2user = new Vector();
                                    archivo2user.clear();
                                    dbsio               = new BD_Sio();
                                    archivo2user        = dbsio.busquedagral("*"," unearchivosanex where id_asuins="+pidAsuIns);                                    
                                    String ext2_tmp     = "";
                                    String [] ext2_tmp2 = null;
                                    
                                    if(archivo2user.size()>0){
                                        contfiles = contfiles + 1 ; 
                                        ext2_tmp = (String)((Vector)archivo2user.get(0)).get(4);
                                        ext2_tmp2 = ext2_tmp.split("\\.");                                        
                                    }
                                    **/
                                    
                                   

                                %>
				<!--<tr>
					<td>
                                            <table width="100%">
                                                <tr>
                                                    <td align="left">
                                            
                                            <%
                                                //if(contfiles>0){
                                            %>
                                                <span style='cursor:hand' onclick='verdocs()'>Ver Archivos</span>
                                                <script>
                                                    function verdocs(){
                                                        document.getElementById('divdocs').style.display='';
                                                    }
                                                </script>
                                                <div id='divdocs' style='display:none'>
                                                <table>
                                                 <%//if(archivo1user.size()>0){%>
                                                    <tr>
                                                        <td style='font-family:Arial; font-size:12px'>
                                                                Documento Anexo Respuesta: <% //out.println("&nbsp;&nbsp;<a href='"+ligaArchivosUNES+"ofic_resol/"+pidAsuIns+"."+ext_tmp_1+"' target='_blank'><img src='../img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'></a> &nbsp;&nbsp;&nbsp;");%>
                                                        </td>
                                                    </tr>
                                                 <%//}%>
                                                 <%//if(archivo2user.size()>0){%>
                                                    <tr>
                                                        <td style='font-family:Arial; font-size:12px'>
                                                                Documento Anexo: <% //out.println("&nbsp;&nbsp;<a href='"+ligaArchivosUNES+"ofic_anex/"+pidAsuIns+"."+ext2_tmp2[1]+"' target='_blank'><img src='../img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'></a> &nbsp;&nbsp;&nbsp;"); %>
                                                        </td>
                                                    </tr>
                                                 <%//}%>                                                 
                                                    <tr>
                                                        <td>
                                                    
                                                        </td>
                                                    </tr>
                                                    
                                                </table>
                                                </div>
                                            <%
                                                //}
                                            %>
                                                    </td>
                                               </tr>
                                            </table>
                                            
					</td>
				</tr>-->
				<%//}%>
				<!-- Archivos anexos solo para cuando se notifica al usuario via email-->
				
			</table>
		</td>
	</tr>	
</table>
 <%}%>
 <%}else{%>
 <table align='center'>
    <tr>
        <td>
            <img src='../img/logo_condusef.jpg' border=0>
        </td>
    </tr>
 </table>
 <%}%>
</body>
</html>

