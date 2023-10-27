<%@page contentType="text/html"%>
<%@page import="DB.Sio.*"%>
<%@page import='java.util.*'%>
<%@page import='Entidades.*'%>
<%@page import='DB.Asuntos.*'%>
<%@page import='Utilidades.*'%>
<%
    HttpSession s = request.getSession();

    String idusuario = (String)request.getParameter("id_usuario");
    String idins = (String)request.getParameter("id_ins");
    String idasuins = (String)request.getParameter("id_asuins");
    String s1aresp = (String)request.getParameter("i1aresp"); //indicador que se trata de asunto con 1a respuesta
    int iasuins=70349670;
    int iusuario=0;
    int iins=0;
    int i1aresp=0;
    if (idasuins!=null)
         iasuins = Integer.parseInt(idasuins);
    if (idusuario!=null)
        iusuario = Integer.parseInt(idusuario);
    if (idins!=null)
        iins = Integer.parseInt(idins);
    if (s1aresp!=null)
        i1aresp = Integer.parseInt(s1aresp);
    

    System.out.println("idasuins: "+idasuins+" idusuario: "+idusuario+" idins"+idins);
    System.out.println("iasuins: "+iasuins+" iusuario: "+iusuario+" iins"+iins+" i1aresp: "+i1aresp);
    
    String sSistema="";       //1    Indicar las siglas del sistema.
    String sUAU="";           //2    Indicar el nombre del área responsable de emisión
    String sTipoRes="";       //3    Identificar el tipo de acuse.
    String sProceso="";       //4    Establecer el tipo de proceso
    String sFolio="";         //6    Indicar el folio del acuse.
    String sResp="";          //7    Indicar la fecha y hora de emisión conforme a la siguiente estructura:  aa/mm/dd] [h24:mi:ss].
    String sInst="";          //8    Colocar el nombre de la Institución Financiera que realiza la entrega de la documentación.
    String sArchResp="";      //10   Datos Archivo Respuesta          
    String sArchAnex="";      //11   Datos Archivo Anexo
    String sFolioAcu="";      //12    Indicar el folio del acuse.

    String sARNombre="";
    String sARExtension="";
    String sARTipo="";
    String sARHash="";
    String sAANombre="";
    String sAAExtension="";
    String sAATipo="";
    String sAAHash="";
    String sSelloDigital="";
    String sDatos="";
    int iCaso=0;
    String sParrafo1="";
    String sParrafo2="";
    String sParrafo3="";
    String sParrafo4="";
    String sParrafo5="";
    String sImg1="";
    String sImg2="";

    String sEmision;

    Vector vDatosAcuse=new Vector();

    if (iasuins>0 && iusuario>0) {
        P_Sio dbSio = new P_Sio();
        vDatosAcuse = dbSio.P_UNE_DATOSACUSE(iasuins, iusuario, i1aresp);

        sSistema=(String)((Vector)vDatosAcuse.get(0)).get(0);
        sUAU=(String)((Vector)vDatosAcuse.get(0)).get(1);
        sTipoRes=(String)((Vector)vDatosAcuse.get(0)).get(2);
        sProceso=(String)((Vector)vDatosAcuse.get(0)).get(3);
        sFolio =(String)((Vector)vDatosAcuse.get(0)).get(4);        
        sResp =(String)((Vector)vDatosAcuse.get(0)).get(5);        
        sInst =(String)((Vector)vDatosAcuse.get(0)).get(6);        
        sArchResp =(String)((Vector)vDatosAcuse.get(0)).get(7);        
        sArchAnex =(String)((Vector)vDatosAcuse.get(0)).get(8);       
        sFolioAcu =(String)((Vector)vDatosAcuse.get(0)).get(9);       

        if (sResp.length()>8){
            System.out.println(sResp);
            sEmision = sResp.substring(6,10)+sResp.substring(3,5)+sResp.substring(0,2);
            if (Integer.parseInt(sEmision)>=20230224) {
                iCaso=2;
            } else if (Integer.parseInt(sEmision)>=20220803) {//deberá ser 20221130
                iCaso=1;
            }
        }
        switch(iCaso){
        case 1:
            sImg1="img/Hacienda_Condusef.png";
            sImg2="img/Pie_Anio2022.png";
            sParrafo1="Se hace de su conocimiento que se recibió respuesta de la Entidad Financiera sobre el asunto remitido en el proceso de Gestión Electrónica de conformidad con los artículos 164 y 165 de la disposición de la CONDUSEF.";
            sParrafo2="Para tal efecto, la Entidad Financiera presentó la siguiente documentación:";
            sParrafo3="Con lo anterior se da cumplimiento a lo establecido en los artículos 18, 164 y 165, de la Disposición en materia de Atención de Controversias ante la CONDUSEF.";
            sParrafo4="El presente acuse se expide en términos del artículo 69-C, de la Ley Federal de Procedimiento Administrativo, aplicable de conformidad con el artículo 1, tercer párrafo del mismo ordenamiento legal, así como del artículo 9 de la Disposición en materia de registros ante la CONDUSEF y en relación con el contenido de la Carta responsiva de representante y/o apoderado legal de la institución financiera para el uso de la Clave de Identidad CONDUSEF (CIC).";
            sParrafo5="Los datos personales proporcionados están protegidos conforme lo dispuesto en la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.";
            break;
        case 2:
            sImg1="img/Hacienda_Condusef.png";
            sImg2="img/Pie_Anio2023.png";
            sParrafo1="Se hace de su conocimiento que se recibió respuesta de la Entidad Financiera sobre el asunto remitido en el proceso de Gestión Electrónica de conformidad con los artículos 164 y 165 de la disposición de la CONDUSEF.";
            sParrafo2="Para tal efecto, la Entidad Financiera presentó la siguiente documentación:";
            sParrafo3="Con lo anterior se da cumplimiento a lo establecido en los artículos 18, 164 y 165, de la Disposición en materia de Atención de Controversias ante la CONDUSEF.";
            sParrafo4="El presente acuse se expide en términos del artículo 69-C, de la Ley Federal de Procedimiento Administrativo, aplicable de conformidad con el artículo 1, tercer párrafo del mismo ordenamiento legal, así como del artículo 9 de la Disposición en materia de registros ante la CONDUSEF y en relación con el contenido de la Carta responsiva de representante y/o apoderado legal de la institución financiera para el uso de la Clave de Identidad CONDUSEF (CIC).";
            sParrafo5="Los datos personales proporcionados están protegidos conforme lo dispuesto en la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.";
            break;
        }
        
        
        String[] sAR=sArchResp.split("\\|");
        String[] sAA=sArchAnex.split("\\|");
        if (sAR.length>3) { //Archivo Resolución
            sARNombre=sAR[0];
            sARExtension=sAR[1];
            sARTipo=sAR[2];
            sARHash=sAR[3];
        }
        if (sAA.length>3) { //Archivo Resolución
            sAANombre=sAA[0];
            sAAExtension=sAA[1];
            sAATipo=sAA[2];
            sAAHash=sAA[3];
        }
        sDatos=sSistema+"|"+sUAU+"|"+sTipoRes+"|"+sProceso+"|"+sFolio+"|"+sResp+"|"+sInst+"|"+sArchResp+"|"+sArchAnex;
        sSelloDigital=dbSio.hashSHA256(sDatos);
    
    }


%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>.::: Sistema de Gestión Electrónica - Unes :::.</title>
<link href="estiloacuse.css" rel="stylesheet" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body class="body_docto">

<table width="690" height="1020" border="0" align="center">
    <tr>
        <td valign="top">
            <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                <tr><!-- Margen Superior -->
                    <td height="20"></td>
                </tr>
                <tr>
                    <td height="60" valign="top">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                            <tr>
                                <td width="60%" valign="top">
                                    <!-- img style='MAX-WIDTH: 200px; MAX-HEIGHT: 50px' src="< %=((Vector)logos.get(0)).get(0)%>" -->
                                    <img src="<%=sImg1%>" >
                                </td>				
                                <td width="40%" valign="top" align="center">
                                    <b>Acuse de Recibo Electrónico<br>
                                        <%=sSistema%></b>
                                </td>	
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                            <tr>
                                <td valign="top" align="right">
                                    Folio Acuse: <%=sFolioAcu%><br>
                                </td>	
                            </tr>
                            <tr>
                                <td valign="top" align="right">
                                    <%=sUAU%>
                                </td>	
                            </tr>
                            <tr>
                                <td valign="top" align="right">
                                    <%=sTipoRes%>
                                </td>	
                            </tr>
                            <tr>
                                <td valign="top" align="right">
                                    Proceso: <%=sProceso%>
                                </td>	
                            </tr>
                            <tr>
                                <td valign="top" align="right">
                                    Folio: <%=sFolio%>
                                </td>	
                            </tr>
                            <tr>
                                <td valign="top" align="right">
                                    Fecha y Hora de Recepción: <%=sResp%><br>
                                </td>	
                            </tr>
                        </table>	  
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                            <tr>
                                <td width="100%" valign="top" align="justify">
                                    <p><b><%=sInst%></b><br><br>
                                        <%=sParrafo1%><br><br>
                                        <%=sParrafo2%><br>
                                    </p>
                                </td>	
                            </tr>
                            <tr>
                                <td valign="top">
                                    <!--Coloca tabla de datos archivos de Resolución y anexos -->
                                    <table width="100%" border="1" cellpadding="0" cellspacing="0" align="center">
                                        <thead>
                                            <tr bgcolor="#FFFFFF"> 
                                              <th width="25%" align="center"><span>NOMBRE</span></th>
                                              <th width="17.5%" align="center"><span>EXT / TAM BYTES</span></th>
                                              <th width="17.5%" align="center"><span>TIPO</span></th>
                                              <th width="40%" align="center"><span>HASH</span></th>
                                            </tr>    
                                        </thead>
                                        <tbody> 
                                            <tr bgcolor="#EEFFEE">
                                                <td width="25%" valign="top" align="center"><%=sARNombre%></td>
                                                <td width="17.5%" valign="top" align="center"><%=sARExtension%></td>
                                                <td width="17.5%" valign="top" align="center"><%=sARTipo%></td>
                                                <% if (sARHash.length()>40) { %>
                                                    <td width="40%" valign="top" align="center"><%=sARHash.substring(0, 40)%><br><%=sARHash.substring(40,sARHash.length())%>
                                                    </td>
                                                <% } else { %>
                                                    <td width="40%" valign="top" align="center"><%=sARHash%></td>
                                                <% } %>
                                            </tr>
                                            <tr bgcolor="#FFFFFF">
                                                <td width="25%" valign="top" align="center"><%=sAANombre%></td>
                                                <td width="17.5%" valign="top" align="center"><%=sAAExtension%></td>
                                                <td width="17.5%" valign="top" align="center"><%=sAATipo%></td>
                                                <% if (sAAHash.length()>40) { %>
                                                    <td width="40%" valign="top" align="center"><%=sAAHash.substring(0, 40)%><br><%=sAAHash.substring(40,sAAHash.length())%>
                                                    </td>
                                                <% } else { %>
                                                    <td width="40%" valign="top" align="center"><%=sAAHash%></td>
                                                <% } %>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td width="100%" valign="top" align="justify">
                                    <p align="justify"><br>
                                        <%=sParrafo3%><br><br>
                                        <%=sParrafo4%><br><br>
                                        <%=sParrafo5%><br><br>
                                    </p>
                                </td>	
                            </tr>
                            <tr>
                                <td width="100%" valign="top" style="font-size: 10px;" align="justify">
                                    <b>Cadena Original: <%=sDatos%></b><br><br>
                                </td>	
                            </tr>
                            <tr>
                                <td width="100%" valign="top" style="font-size: 10px;" align="justify">
                                    <b>Sello Digital: <%=sSelloDigital%></b>
                                </td>	
                            </tr>
                            <tr><td><br><br></td></tr>
                            <tr>
                                <td width="100%" valign="top" >
                                    <img src="<%=sImg2%>" >
                                </td>				
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>	
</table>
</body>
</html>
