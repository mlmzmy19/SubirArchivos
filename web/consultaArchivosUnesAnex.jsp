<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page import="SQL.*"%>
<%@page import="java.util.*"%>
<%@page import='DB.Sio.*'%>
<html>
<head><title>JSP Page</title></head>
<body>
<link href="css/estilos.css" rel="stylesheet" type="text/css">
    <script src="scripts/sorttable.js"></script>
    <script type="text/javascript">
        var GB_ROOT_DIR = "js/especiales/libPOP/greybox/";
    </script>
    <script type="text/javascript" src="js/especiales/libPOP/greybox/AJS.js"></script>
    <script type="text/javascript" src="js/especiales/libPOP/greybox/AJS_fx.js"></script>
    <script type="text/javascript" src="js/especiales/libPOP/greybox/gb_scripts.js"></script>    
    <link href="js/especiales/libPOP/greybox/gb_styles.css" rel="stylesheet" type="text/css" media="all" />      
<%
    String validar = "";
           validar = request.getParameter("validar");
           //validar = "CONDUSEF_udepo";
           if(validar!=null && validar.equals("udepo")){
    String 
            d_del    = "";
    String 
            f_inicio = "";    
    String 
            f_final  = "";        
    String 
            NArchivo = "";
    String 
            folioCOND = "";    
    
            d_del    = request.getParameter("id_del");
            f_inicio = request.getParameter("f_inicio");
            f_final  = request.getParameter("f_final");
            
            //d_del=200&f_inicio=27072008&f_final=02082008&valid=udepo
            
    Vector VarchUnes = new Vector();
         Asuntos asu = new Asuntos();
           VarchUnes = asu.busquedagral(" inst.descripción, to_char(unear.fecha,'dd/mm/yyyy'),unear.id_recibido,unear.id_asuins,unear.nombre,nom.año,nom.iddel,nom.consecutivo "," unearchivosanex unear inner join asuntoinstitución asuins on unear.id_asuins = asuins.id inner join nominales nom on asuins.idasu = nom.idasu inner join instituciones inst on asuins.idins=inst.id where  unear.EDO_ARCHIVO=1 and to_char(unear.FECHA,'yyyymmdd  hh24:mi:ss') between '"+f_inicio+" 00:00:01' and '"+f_final+" 23:59:59' and nom.iddel="+d_del+" order by fecha asc ");
           //out.println(VarchUnes);
;

           String ligaArchivosUNES = "";
        //Consultas con = new Consultas();        
        //Vector VLigaArchivos = new Vector();
        Vector vLiga_docts = new Vector();
        vLiga_docts.clear();
        BD_Sio dbsio = new BD_Sio();
        vLiga_docts=dbsio.busquedagral(" f_url_aplicacion(14) "," dual "); 
        //VLigaArchivos = con.busquedagral("select f_une_aplicacion(2) from dual");
        if(vLiga_docts.size() > 0)
        {
            ligaArchivosUNES = (String)((Vector)vLiga_docts.get(0)).get(0);
        }


%>
<table align=center>
    <form method='POST' action='consultaArchivosUnesAnex.jsp'>
    <tr><td  class='lbl_detalle'><a href='javascript:history.go(-1)'>regresar</a></td>
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
<table align='center' border='0' bgcolor='white' background='img/sio4.jpg' class="sortable">
    <tr style="cursor:pointer">
        <td class="txtDetalle2"><b>Fecha</b></td>
        <td class="txtDetalle2"><b>Folio SIO</b></td>        
        <td class="txtDetalle2"><b>Institución</b></td>
        <td class="txtDetalle2"><b>Archivo</b></td>
    </tr>
    <%
        for(int y=0; y<VarchUnes.size(); y++){
            if(((Vector)VarchUnes.get(y)).get(4)!=null && ((Vector)VarchUnes.get(y)).get(2)!=null){
               
               NArchivo = ((Vector)VarchUnes.get(y)).get(4).toString();
               NArchivo = ((Vector)VarchUnes.get(y)).get(3).toString()+"."+NArchivo.split("\\.")[NArchivo.split("\\.").length-1];
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
        <!-- <td class="txtDetalle2"><div align=center><a href='http://portalif.condusef.gob.mx/besFiles/UNES/ofic_anex/<%=NArchivo%>'><img src='img/doc.jpg' border='0' alt='<%=((Vector)VarchUnes.get(y)).get(4)%>'></a></div></td>-->
        <td class="txtDetalle2"><div align=center> <span style='cursor:hand'><img src='img/doc.jpg' border='0' onclick="abrirpop('<%=NArchivo%>')" alt='<%=((Vector)VarchUnes.get(y)).get(4)%>'></span></div></td>
    </tr>
    <%}%>
</table>
<script>
    function abrirpop(dato){
    
       //window.open("http://portalif.condusef.gob.mx/besFiles/UNES/ofic_anex/"+dato,null,"height=600,width=800,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes");
       //return GB_showCenter('Seguimiento', "http://webapps.condusef.gob.mx/UNES/ofic_anex/"+dato,600,800);     
       return GB_showCenter('Seguimiento', "<%=ligaArchivosUNES%>ofic_anex/"+dato,600,800);     

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
