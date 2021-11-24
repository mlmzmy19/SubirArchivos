<%@page contentType="text/html"%>
<%@page import='java.util.*'%>
<%@page import='DB.Sio.*'%>
<html>
<head><title>JSP Page</title></head>
<body>
<link href="../css/estilos-unes.css" rel="stylesheet" type="text/css">
    <script src="../scripts/sorttable.js"></script>
<%
    HttpSession s = request.getSession();
    String validar = (String)s.getAttribute("validarUSR");

            if(validar!=null && validar.equals("udepo_C") ){
                    P_Sio p_sio   = new P_Sio();
                    Vector Vp_sio = new Vector();                
                
                    String pidP  = "";
                    String nProc = "";
                    if(pidP!=null && nProc!=null){
                           Vp_sio = p_sio.P_UnedelegarchivosestadVarios(1,"P_UnedelegarchivosestadVarios");                

%>
<%-- <jsp:useBean id="beanInstanceName" scope="session" class="beanPackage.BeanClassName" /> --%>
<%-- <jsp:getProperty name="beanInstanceName"  property="propertyName" /> --%>
<table align='center'>
    <tr>
                        <td><img src='../img/HomeloginT.jpg'></td>
    </tr>
    <tr>
                          <td class='tbl_title_table_con' style='text-align:left'> <a href='login.jsp'>salir</a></td>
    </tr>    
</table>
<table border=0 align='center'>
    <tr>
        <td class='tbl_title_table'>
            <a href='totalFILES.jsp?validarUSR=udepo'> Estadisticas Delegaciones VS Documentos </a>
        </td>
    </tr>     
   
    <%
        for(int y=0; y<Vp_sio.size(); y++){
    %>
    <tr>
        <% for(int z=0; z<((Vector)Vp_sio.get(y)).size(); z++){ %>
            <td class='tbl_title_table'>
                <%=((Vector)Vp_sio.get(y)).get(z)%>
            </td>
        <% }  %>
    </tr>
    <%
        }
    %>
</table>
    


<table align='center' >


<table align='center'>
    <tr>
                <td><img src='../img/Homelogin2.jpg'></td>
    </tr>
</table>

<%      }
    }else{
            out.println("<span class='tbl_title_table_con'>Acceso Denegado</span>");
}%>
<%-- <jsp:useBean id="beanInstanceName" scope="session" class="beanPackage.BeanClassName" /> --%>
<%-- <jsp:getProperty name="beanInstanceName"  property="propertyName" /> --%>

</body>
</html>
