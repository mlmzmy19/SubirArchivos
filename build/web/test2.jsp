<%@page contentType="application/msword"%>
<%@page import='BD.Usuario.*'%>
<%@page import='java.lang.*'%>
<%@page import='java.util.*'%>
<html>
<head><title>JSP Page</title></head>
<body>
<%
BDUsuario ji = new BDUsuario();
Vector j= new Vector();
j = ji.busquedagral("  F_Formatosio("+ 1 +")  "," dual ");

out.println(j);

//StringBuffer Uno = new StringBuffer( "Hola Mundo" );


%>
<%-- <jsp:useBean id="beanInstanceName" scope="session" class="beanPackage.BeanClassName" /> --%>
<%-- <jsp:getProperty name="beanInstanceName"  property="propertyName" /> --%>

</body>
</html>
