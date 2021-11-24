<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<html>
<head><title>JSP Page</title></head>
<body>

<%-- <jsp:useBean id="beanInstanceName" scope="session" class="beanPackage.BeanClassName" /> --%>
<%-- <jsp:getProperty name="beanInstanceName"  property="propertyName" /> --%>
<form action='listado.jsp' method='post'>
<table>
<tr>
<td> <input type='text' name='id_del' value='90'>  </td>
<td> <input type='text' name='f_inicio' value='01012008'>  </td>
<td> <input type='text' name='f_final' value='30012008'>  </td>
<td> <input type='text' name='valid' >  </td>
<td> <input type='text' name='pistatus' value='0' >  </td>
<td> <input type='submit' name='enviar' value='send'>  </td>

</tr>
</table>
</form>
</body>
</html>
