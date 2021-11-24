<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page import="SQL.*"%>
<%@page import="java.util.*"%>
<%@page import='DB.Sio.*'%>
<html>
<head><title>JSP Page</title></head>
<link href="css/estilos-unes.css" rel="stylesheet" type="text/css">
<script>
    function cargaPadre(){
        parent.location.reload();
    }
</script>
<body>
<%
    String validar = "";
           validar = request.getParameter("validarUSR");
  if(validar!=null && validar.equals("CONDUSEF_udepo")){

    String 
            idasuins = "";
            idasuins = request.getParameter("idasuins");
    String 
            consecutivo = "";
            consecutivo = request.getParameter("consecutivo");
            
    String 
            idusi = "";
            idusi = request.getParameter("idusi");            
            
    Asuntos busqasu = new Asuntos();
    Vector Vbusqasu = new Vector();
    Vbusqasu = busqasu.busquedagral("id_asuins, extension,id_recibido,consecutivo"," unedelegarchivosanex where id_asuins="+idasuins+" and consecutivo="+consecutivo);

    String ligaArchivosUNES = "";
        //Consultas con = new Consultas();        
        //Vector VLigaArchivos = new Vector();
        Vector vLiga_docts = new Vector();
        vLiga_docts.clear();
        BD_Sio dbsio = new BD_Sio();
        vLiga_docts=dbsio.busquedagral("f_url_aplicacion(13) "," dual "); 
        //VLigaArchivos = con.busquedagral("select f_une_aplicacion(2) from dual");
        if(vLiga_docts.size() > 0)
        {
            ligaArchivosUNES = (String)((Vector)vLiga_docts.get(0)).get(0);
        }     
    
    out.println("<table width='100%' border=0><tr><td align='center'>");
    //out.println("<a href='subirArchivosDeleg/archivo"+consecutivo+".jsp?validarUSR="+validar+"&idasuins="+idasuins+"&"+idasuins+"' class='txtDetalle'>Regresar</a>");
    out.println("<span style='cursor:hand' onclick='cargaPadre()' class='txtDetalle'>Editar</span>");
    out.println("</td></tr></table>");
    if(Vbusqasu.size()>0){
    
        if(Integer.parseInt(((Vector)Vbusqasu.get(0)).get(0).toString())==0){
                out.println("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='lbl_detalle'>El asunto aun no esta en el SIGE</span>");
        }else{
                out.println("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='lbl_detalle'>El asunto ya esta en el SIGE</span>");
        }
    
        //out.println("<span onclick='javascript:window.close()' style='cursor:hand' class='lbl_detalle'>cerrar</span><br>");   
        if(((Vector)Vbusqasu.get(0)).get(1)!=null){
           if(((Vector)Vbusqasu.get(0)).get(1).toString().compareTo("pdf")!=0){
               out.println("&nbsp;&nbsp;&nbsp;<a href='"+ligaArchivosUNES+((Vector)Vbusqasu.get(0)).get(0)+"_"+((Vector)Vbusqasu.get(0)).get(3)+"."+((Vector)Vbusqasu.get(0)).get(1)+"' class='txtDetalle'>Abrir</a>");           //PRODUCCION
           }else{
                   out.println("&nbsp;&nbsp;&nbsp;<a href='"+ligaArchivosUNES+((Vector)Vbusqasu.get(0)).get(0)+"_"+((Vector)Vbusqasu.get(0)).get(3)+"."+((Vector)Vbusqasu.get(0)).get(1)+"' target='_blank'><img src='img/doc_vista.jpg' id='imagenV' border=0></a>");                //PRODUCCION
            
               %>
                    <script type="text/javascript">
                    
                    function addLoadEvent(func) {
                        var oldonload = window.onload;
                        if (typeof window.onload != 'function') {
                            window.onload = func;
                        } else {
                            window.onload = function() {
                                if (oldonload) {
                                    oldonload();
                                }
                                func();
                            }
                        }
                    }

                    addLoadEvent(function() {
                          document.getElementById("imagenV").click();
                    })

                    </script>
               
               <%
           }
        }
        //out.println("<img src='http://localhost/tmpProduccion/"+((Vector)Vbusqasu.get(0)).get(0)+"."+((Vector)Vbusqasu.get(0)).get(1)+"'");

    }else{
                out.println("<span class='lbl_detalle'>Vuelva a intentar subir el archivo y verifique que halla termindo de subir correctamente .</span>");

    }
    
   }else{
        out.println("Acceso Denegado");
      }
    %>
</body>
</html>
