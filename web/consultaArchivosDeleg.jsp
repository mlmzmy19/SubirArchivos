<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page import="SQL.*"%>
<%@page import="java.util.*"%>
<%@page import='DB.Sio.*'%>
<html>
<head><title>JSP Page</title></head>
<body>

    <script src="scripts/sorttable.js"></script>
    <script type="text/javascript">
        var GB_ROOT_DIR = "js/especiales/libPOP/greybox/";
    </script>
    <script type="text/javascript" src="js/especiales/libPOP/greybox/AJS.js"></script>
    <script type="text/javascript" src="js/especiales/libPOP/greybox/AJS_fx.js"></script>
    <script type="text/javascript" src="js/especiales/libPOP/greybox/gb_scripts.js"></script>    
    <link href="js/especiales/libPOP/greybox/gb_styles.css" rel="stylesheet" type="text/css" media="all" />      
    <link href="css/estilos.css" rel="stylesheet" type="text/css">
<%
    String validar = "";
           validar = request.getParameter("valid");
           //validar = "CONDUSEF_udepo";
           if(validar!=null && validar.equals("udepo")){
    String 
            d_del     = "";
    String 
            f_inicio  = "";    
    String 
            f_final   = "";        
    String 
            NArchivo  = "";
    String 
            folioCOND = "";
    String 
            coment    = "";    
    String 
            consecut  = "";       
    

            d_del    = request.getParameter("id_del");
            f_inicio = request.getParameter("f_inicio");
            f_final  = request.getParameter("f_final");
            
            /*if(d_del==null)
                d_del="90";
            if(f_inicio==null)            
                f_inicio = "20070101";
            if(f_final==null)            
                f_final  = "20080931";*/
            
            //d_del=200&f_inicio=27072008&f_final=02082008&valid=udepo
            
    Vector VarchUnes = new Vector();
         Asuntos asu = new Asuntos();
           VarchUnes = asu.busquedagral(" nvl(inst.descripción,'En tránsito'), to_char(unear.fecha,'dd/mm/yyyy'),unear.id_recibido,unear.id_asuins,unear.nombre,nom.año,nom.iddel,nom.consecutivo, unear.consecutivo,unear.comentario_archivo, unear.consecutivo "," UNEDELEGARCHIVOSANEX unear left join asuntoinstitución asuins ON unear.id_asuins = asuins.id left join NOMINALES nom ON asuins.idasu = nom.idasu left join INSTITUCIONES inst ON asuins.idins=inst.id WHERE  unear.FECHA BETWEEN TO_DATE('"+f_inicio+" 00:00:01','ddmmyyyy hh24:mi:ss') AND TO_DATE('"+f_final+" 23:59:59','ddmmyyyy  hh24:mi:ss') AND (nom.iddel="+d_del+" OR nom.iddel IS NULL AND unear.id_asuins BETWEEN "+d_del+"*1000000 AND (1+"+d_del+")*1000000) ORDER BY fecha ASC ");
           //out.println(VarchUnes);

        String ligaArchivosUNES = "";
        //Consultas con = new Consultas();        
        //Vector VLigaArchivos = new Vector();
        Vector vLiga_docts = new Vector();
        vLiga_docts.clear();
        BD_Sio dbsio = new BD_Sio();
        vLiga_docts=dbsio.busquedagral(" f_url_aplicacion(13) "," dual "); 
        //VLigaArchivos = con.busquedagral("select f_une_aplicacion(2) from dual");
        if(vLiga_docts.size() > 0)
        {
            ligaArchivosUNES = (String)((Vector)vLiga_docts.get(0)).get(0);
        }



           
%>

<table align=center>
    <form method='POST' action='consultaArchivosUnesAnex.jsp'>
<!--    <tr><td class='lbl_detalle'>Si desea ver los archivos anexos de click </td><td><input type='image' src='img/ver_graf.jpg' onclick='ver(this.form)' value='VER'></td>
    </tr>
    -->
    <tr>
        <td class='lbl_detalle' colspan='2'>Total de Asuntos(<%=VarchUnes.size()%>)</td>
    </tr>    
    <input type='hidden' name='validar' value='<%=validar%>'>
    <input type='hidden' name='d_del' value='<%=d_del%>'>
    <input type='hidden' name='f_inicio' value='<%=f_inicio%>'>
    <input type='hidden' name='f_final' value='<%=f_final%>'>
    </form>
    <script>
        function ver(form){
            form.submit();
        }
    </script>
</table>
<table align='center' border='0' bgcolor='white' background='img/sio4.jpg' class="sortable" width='1000'>
    <tr style="cursor:pointer">
        <td class="txtDetalle2"><b>Fecha</b></td>
        <td class="txtDetalle2"><b>Folio SIO</b></td>        
        <td class="txtDetalle2"><b>Institución</b></td>
        <td class="txtDetalle2"><b>Comentarios del Archivo de la I.F.</b></td>                
        <td class="txtDetalle2"><b>Archivo</b></td>

    </tr>
    <%
        for(int y=0; y<VarchUnes.size(); y++){
            if(((Vector)VarchUnes.get(y)).get(4)!=null && ((Vector)VarchUnes.get(y)).get(2)!=null){
               
               NArchivo = ((Vector)VarchUnes.get(y)).get(4).toString();
               NArchivo = ((Vector)VarchUnes.get(y)).get(3).toString()+"_"+((Vector)VarchUnes.get(y)).get(8).toString()+"."+NArchivo.split("\\.")[NArchivo.split("\\.").length-1];
            }
            
            if(((Vector)VarchUnes.get(y)).get(10)!=null){
                consecut = ((Vector)VarchUnes.get(y)).get(10).toString();
            }
    %>  
    <tr>
        <td class="txtDetalle2"><%=((Vector)VarchUnes.get(y)).get(1)%></td>
    <%
         
         if(((Vector)VarchUnes.get(y)).get(5)!=null)
             folioCOND = ((Vector)VarchUnes.get(y)).get(5).toString()+"/"+((Vector)VarchUnes.get(y)).get(6).toString()+"/"+((Vector)VarchUnes.get(y)).get(7).toString();
         else
             folioCOND = "En tránsito";
    %>        
        <td class="txtDetalle2"><%=folioCOND%></td>          
        <td class="txtDetalle2"><%=((Vector)VarchUnes.get(y)).get(0)%></td>
        <td class="txtDetalle2">
        <% coment = ((Vector)VarchUnes.get(y)).get(9).toString();
                          if(coment.equals("0"))
                                out.println("<span  style='color:black'>Sin comentarios del archivo</span>");
                           else if(coment.equals("1"))
                               out.println("<span   style='color:black'>El archivo esta correcto</span'>");
                           else if(coment.equals("2"))
                               out.println("<span   style='color:black'>El archivo esta incorrecto</span>");
                           else if(coment.equals("3"))
                               out.println("<span   style='color:black'>Documento defectuoso o inteligible</span>");
                           else if(coment.equals("4"))
                               out.println("<span   style='color:black'>Archivo no corresponde al asunto</span>");
                           else if(coment.equals("5"))
                               out.println("<span   style='color:black'>Documento con información insuficiente</span>");                           
                           
        %>
        </td>        
        <td class="txtDetalle2">
            <div align=center>
                <span style='cursor:hand'>
                  <%=consecut%>  <img src='img/doc.jpg' border='0' onclick="abrirpop('<%=NArchivo%>')" alt='<%=((Vector)VarchUnes.get(y)).get(4)%>'>
                </span>
            </div>
        </td>
    </tr>
    <%}%>
</table>
<script>
    function abrirpop(dato){
    
       //window.open("http://portalif.condusef.gob.mx/besFiles/UNES/DELEGUNES/"+dato,null,"height=600,width=800,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes");
              //return GB_showCenter('Seguimiento', "http://webapps.condusef.gob.mx/DELEGUNES/"+dato,600,800);     
              return GB_showCenter('Seguimiento', "<%=ligaArchivosUNES%>"+dato,600,800);  

    }
</script>
<%-- <jsp:useBean id="beanInstanceName" scope="session" class="beanPackage.BeanClassName" /> --%>
<%-- <jsp:getProperty name="beanInstanceName"  property="propertyName" /> --%>
    <%}else{
        out.println("Acceso Denegado");
      }
    %>
</body>
</html>
