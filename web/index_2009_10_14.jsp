<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page import=' DB.Sio.*'%>
<%@page import=' java.util.*'%>
<html>
<head>
<title>Subir Archivos Gestión Electronica</title>
<link href="css/estilos-unes.css" rel="stylesheet" type="text/css">
</head>
<%
    String validar = "";
           validar = request.getParameter("validarUSR");
           //validar = "CONDUSEF_udepo";
           if(validar!=null && validar.equals("CONDUSEF_udepo")){
%>



<%

        String 
                idasuins = "";
                idasuins = request.getParameter("idasuins");
         String 
                Anombre   = "";
         String 
                coment    = "";
                //idasuins = "812223";        
        Vector 
                Varchivos = new Vector();
        BD_Sio Iarchivos  = new BD_Sio();
                Varchivos = Iarchivos.busquedagral(" uned.id_asuins,uned.consecutivo,to_char(uned.fecha,'dd/mm/yyyy'),uned.nombre,uned.extension,uned.checked,uned.comentario_archivo,uner.id "," unedelegarchivosanex uned left join  unerecibidos uner on uned.id_asuins=uner.idasuins where uned.id_asuins="+idasuins+" order by uned.consecutivo ");
                //out.println(Varchivos);
%>
<body ><!-- background='bg.gif'-->
    <!-- <iframe id="uploadFrameID" name="uploadFrame" height="0" width="0" frameborder="0" scrolling="yes"></iframe>-->
    <table border='0'  height="500" cellpadding='0' cellspacing='0' align='center' width='600'>
        <tr>
            <td align='center'>
                <img src='img/HomeloginT.jpg'>
            </td>
        </tr>    
        <tr>
            <td class='lbl_detalle' style='background-color:white;'>
                Subir archivos para gestion electrónica.
            </td>
        </tr>
        <tr>
            <td class='lbl_detalle' style='background-color:white;'>
                <!-- Unicamente admite archivos con extensión jpg, gif, tif ó pdf, -->
                Unicamente admite archivos con extensión pdf,
            </td>
        </tr>        
        <tr>
            <td class='lbl_detalle' style='background-color:white;'>
                y se recomienda no usar archivos con nombres demasido largos, con acentos etc.
            </td>
        </tr>         
        <tr>
        <td align='center'>

        </td>
        </tr>
        <%
        String validarComent = "";
        int    validarID     = 0;        
        String color[] = {"#B8D55F","orange","#55A3FF","#FDF0CC","pink"};
            for(int i=1; i<6; i++){
                validarComent = "0";
        %>
        
        <tr>
            <td width='100%' bgcolor='<%=color[i-1]%>' align='left'>
                <span class='lbl_campo' style='color:black' > <%=i%>-. Archivo </span>
            <%
                for(int y=0; y<Varchivos.size(); y++){
                    // if(((Vector)Varchivos.get(y)).get(6).toString()!=null)
                    //     comentario_archivo = ((Vector)Varchivos.get(y)).get(6).toString();
                     
                     if(((Vector)Varchivos.get(y)).get(1).toString()!=null){
                       if(((Vector)Varchivos.get(y)).get(1).toString().equals(String.valueOf(i))){
                           Anombre = ((Vector)Varchivos.get(y)).get(3).toString();
                           validarComent = ((Vector)Varchivos.get(y)).get(6).toString();
                           if (((Vector)Varchivos.get(y)).get(7)!=null)
                            validarID     = 1;
                           else
                            validarID     = 0;   
                           out.println("<span class='lbl_campo' style='color:black' > cargado  : "+Anombre+" ("+((Vector)Varchivos.get(y)).get(2)+")</span>");
                           
                           if(validarComent.equals("0"))
                                out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(Sin comentarios del archivo)</span>");
                           else if(validarComent.equals("1"))
                               out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(El archivo esta correcto)</span'>");
                           else if(validarComent.equals("2"))
                               out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(No se puede abrir el archivo)</span>");
                           else if(validarComent.equals("3"))
                               out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(Documento defectuoso o inteligible)</span>");
                           else if(validarComent.equals("4"))
                               out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(Archivo no corresponde al asunto)</span>");
                           else if(validarComent.equals("5"))
                               out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(Documento con información insuficiente)</span>");                           
                           
                           out.println("---->"+((Vector)Varchivos.get(y)).get(7));
                           //out.println("&nbsp;&nbsp;&nbsp;<a href='http://portalif.condusef.gob.mx/besFiles/UNES/DELEGUNES/"+((Vector)Varchivos.get(y)).get(0)+"_"+((Vector)Varchivos.get(y)).get(1)+"."+((Vector)Varchivos.get(0)).get(4)+"' class='txtDetalle' target='_blank'  style='color:black'>Abrir</a>");    //PRODUCCION
                           out.println("&nbsp;&nbsp;&nbsp;<a href='http://webapps.condusef.gob.mx/UNES/DELEGUNES/DESARROLLO/"+((Vector)Varchivos.get(y)).get(0)+"_"+((Vector)Varchivos.get(y)).get(1)+"."+((Vector)Varchivos.get(0)).get(4)+"' class='txtDetalle' target='_blank'  style='color:black'>Abrir **</a>");      //DESARROLLO
                       }
                     }
                }
                
            %><%="----x-aa-->"+validarComent%>
                <%//if(validarComent.compareTo("1")!=0){%>
                <%if(validarID==0){%>
                    <iframe  src='subirArchivosDeleg/archivo<%=i%>.jsp?validarUSR=<%=validar%>&idasuins=<%=idasuins%>&idusi=<%=request.getParameter("idusi")%>'   height="80" width="100%" frameborder=0 marginheight='0' marginwidth='0' ></iframe>
                <%}%>
            </td>
        </tr>
        <%
            }
        %>
        <!--
        <tr>
            <td width='100%'>
               <iframe  src='subirArchivosDeleg/archivo2.jsp?validarUSR=<%=validar%>&idasuins=<%=idasuins%>&idusi=<%=request.getParameter("idusi")%>'   height="80" width="100%" frameborder=0 marginheight='0' marginwidth='0' ></iframe>
            </td>
        </tr>        
        <tr>
            <td width='100%'>
               <iframe  src='subirArchivosDeleg/archivo3.jsp?validarUSR=<%=validar%>&idasuins=<%=idasuins%>&idusi=<%=request.getParameter("idusi")%>'   height="80" width="100%" frameborder=0 marginheight='0' marginwidth='0' ></iframe>
            </td>
        </tr>        
        <tr>
            <td width='100%'>
               <iframe  src='subirArchivosDeleg/archivo4.jsp?validarUSR=<%=validar%>&idasuins=<%=idasuins%>&idusi=<%=request.getParameter("idusi")%>'   height="80" width="100%" frameborder=0 marginheight='0' marginwidth='0' ></iframe>
            </td>
        </tr>        
        <tr>
            <td width='100%'>
               <iframe  src='subirArchivosDeleg/archivo5.jsp?validarUSR=<%=validar%>&idasuins=<%=idasuins%>&idusi=<%=request.getParameter("idusi")%>'   height="80" width="100%" frameborder=0 marginheight='0' marginwidth='0' ></iframe>
            </td>
        </tr> -->               
        </table>

    <br><br>
    <!-- Add hidden DIVs for updating and the progress bar (just a table) below the form -->
    <div id="initializing" style="visibility: hidden; position: absolute; top: 280px; left:100px"> 
        <table width="400" style="border: 1px; background-color: red;" border='3'>
            <tr>
                <td>
                    <table width="100%" style="border: 1px; background-color: red; color: white;">
                        <tr>
                            <td align="center" style="color: white; font-weight: bold; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 12px; color: #666666;">
                                <b>Inicializando Carga ...</b>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>

    <div id="progressBarTable" style="visibility: hidden; position: absolute; top: 280px; left:100px">
        <table width="400" style="border: 1px; background-color: red; color: white;">
            <tr>
                <td>
                    <table id="progressBar" width="0px" 
                        style="border: 1px; width: 0px; background-color: orange; font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 12px;	color: #666666; ">
                        <tr>
                            <td style="background-color: orange; font-family: Verdana, Arial, Helvetica, sans-serif;	font-size: 12px;	color: #666666; ">&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <table width="400" style="background-color: white; color: red;">
            <tr>
                <td align="center" nowrap="nowrap">
                    <span id="bytesRead" style="font-weight: bold;font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 12px; color: #666666;">&nbsp;</span>
                </td>
            </tr>
        </table>	
    </div>

    <div id="percentCompleteTable" align="center"
        style="visibility: hidden; position: absolute; top: 280px; left:100px">
        <table width="400" style="border: 1px;">
            <tr>
                <td>
                    <table width="100%" style="border: 1px;">
                        <tr>
                            <td align="center" nowrap="nowrap">
                                <span id="percentComplete" style="color: white; font-weight: bold; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 12px; color: #666666;">&nbsp;</span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
<!-- style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 12px; color: #666666; " -->
<!--<table>
    <tr>
        <form action='busquedaArchivo.jsp' method='POST'>
        <td height='100' class='lbl_campo_gris'>  Si desea ver el archivo despues de haber sido cargado porfavor de click <input type='button' value='Buscar' onclick='enviar(this.form)'> </td>
        <input type='hidden' value='<%=idasuins%>' name='idasuins'>
        <input type='hidden' value='<%=validar%>' name='validarUSR'>
        
        </form>
        <script>
            function enviar(form){
                    form.submit();
            }
        </script>
    </tr>
</table>-->
    <table align='center'>
        <tr>
            <td>
                <img src='img/Homelogin2.jpg'>
            </td>
        </tr>    
    </table>

    <%}else{
        out.println("Acceso Denegado");
      }
    %>
</body>
</html>

