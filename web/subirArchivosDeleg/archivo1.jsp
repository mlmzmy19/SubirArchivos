<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<html>
<head>
        <meta http-equiv="pragma" content="no-cache">
        <meta http-equiv="cache-control" content="no-cache">
        <meta http-equiv="expires" content="0"> 
        <meta http-equiv="cache-request-directive" content="no-cache">
        <meta http-equiv="cache-response-directive" content="must-revalidate"> 
<title>archivo1</title></head>
<link href="../css/estilos-unes.css" rel="stylesheet" type="text/css">
<script language="JavaScript" src="../js/subirArchivos.js"> </script>	
<body>
<%
response.setHeader("Cache-Control","no-cache");
response.setHeader("Pragma","no-cache");
    String validar = "";
           validar = request.getParameter("validarUSR");
           
        String 
                idasuins = "";
                idasuins = request.getParameter("idasuins");
        String si="1";
                if(request.getParameter("si")!=null)
                   si=(request.getParameter("si").compareTo("1")==0?"2":"1");                
               
%>
    <table border=0  bgcolor='#B8D55F'>
        <tr>
            <td  class='lbl_detalle' style='background-color:#B8D55F'>&nbsp;&nbsp; </td>
            <td valign=top>
            <form id="myForm" enctype="multipart/form-data" method="post"  action="../servlet/FileUploadServlet_1" >
            <input type="hidden" id="idasuins" name="idasuins" value="<%=idasuins%>" />     <!-- 812223 -->    <!-- 9809 -->   
            <input type="hidden" id="edo_archivo" name="edo_archivo" value="1" />          
            <input type="hidden" id="validar" name="validar" value="<%=validar%>" />                   
            <input type="hidden" id="consecutivo" name="consecutivo" value="1" />              
            <input type="hidden" id="idusi" name="idusi" value="<%=request.getParameter("idusi")%>" />              
            <input type="hidden" id="si" name="si" value="<%=si%>" />
            <br>
            <input type="file" name="txtFile" id="txtFile"  /><br />
            &nbsp;
            </td>
            <td valign=center> <br>
            <input type="submit" id="submitID" name="submit" value="Subir" onclick='return testExt(this.form,this.form.txtFile.value)'/>
            </form>
            </td>
            <td align=center>
                    <div id='inicializando' style='visibility:hidden'><img src='../img/subirArchivo.gif'></div>
            </td>
            <td align=right>
            <script type="text/javascript">
            MyFunction = function(){
            const btn = document.querySelector('#btn');
            btn.addEventListener('click', (event) => {
            let checkboxes = document.querySelectorAll('input[name="id"]:checked');
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            alert(values);
            });    
            }
            <!--/script>
                <input type="checkbox" name= "id" id="cbox1" value="Firmar" > Firmar<br>
                <input type="checkbox" name= "id" id="cbox1" value="Sellar"> Sellar<br>
                <button type="button" id="btn" onclick= 'javascript:MyFunction()'>Get</button>
            </td-->
        </tr>
     </table>
            
            <%
             String s[] = request.getParameterValues("cbox");
            if (s != null && s.length != 0) {
                out.println("You have selected the option is: ");
                for (int i = 0; i < s.length; i++) {
                    out.println(s[i] + "\n" + "Thank you");
                }
            }
             else{
                        out.println("You ");
                        }
                %>
</body>
</html>
