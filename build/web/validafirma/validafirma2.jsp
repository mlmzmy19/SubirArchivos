

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<% 
 String validarUSR = request.getParameter("validarUSR");
 String idasuins = request.getParameter("idasuins");
 String idusi =  request.getParameter("idusi");
  String si =  request.getParameter("si");
  
String parametros = "validarUSR="+validarUSR+"&idasuins="+idasuins+"&idusi="+idusi+"&si="+si;
%>



<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Valida Firma</title>
    </<head>
    <body>
        <iframe  src='../subirArchivosDeleg/archivos_FE.jsp?validarUSR=<%=validarUSR%>&idasuins=<%=idasuins%>&idusi=<%=idusi%>&si=<%=si%>'   height="100%" width="100%" frameborder=0 marginheight='0' marginwidth='0' ></iframe>
    </body>
       

</html>