<%@page contentType="text/html"%>
<%@page import='java.util.*'%>
<%@page import='DB.Sio.*'%>
<html>
<head><title>JSP Page</title></head>
<body bgcolor='gray'>
<link href="css/estilos.css" rel="stylesheet" type="text/css">
<%-- <jsp:useBean id="beanInstanceName" scope="session" class="beanPackage.BeanClassName" /> --%>
<%-- <jsp:getProperty name="beanInstanceName"  property="propertyName" /> --%>

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
String valid      = "";
String sLigaSIGEDet = "";

       valid = request.getParameter("valid");   
       
       
       
if(valid!=null){

    if(valid.equals("udepo")){
     
     String id_asuins = request.getParameter("cons");
  if(id_asuins!=null){
       Vector v_detalle = new Vector();

       P_Sio p_sio = new P_Sio();
              
       v_detalle =p_sio.getDetalle(Integer.parseInt(id_asuins));

       //out.println(v_detalle);
       
       if(v_detalle.size()>0){          ///validamos que tenga informacion el detalle
            
        BD_Sio dbsio = new BD_Sio();
        Vector archivo1 = new Vector();
        archivo1.clear();
        
        archivo1=dbsio.busquedagral("*"," unearchivos where id_asuins="+id_asuins);
        //out.println(archivo1);
        
        dbsio = null;
        Vector archivo2 = new Vector();
        archivo2.clear();
        dbsio = new BD_Sio();
        archivo2=dbsio.busquedagral("*"," unearchivosanex where id_asuins="+id_asuins);
         
        dbsio = null;
        Vector archivo3 = new Vector();
        archivo3.clear();
        dbsio = new BD_Sio();
        archivo3=dbsio.busquedagral("*"," unedelegarchivosanex where id_asuins="+id_asuins+" order by consecutivo ");
        
        
        dbsio = null;
        Vector archivo4 = new Vector();
        archivo4.clear();
        dbsio = new BD_Sio();
        archivo4=dbsio.busquedagral(" F_SIGE_SIO_CHECKENVIOMAILUSU('"+id_asuins+"') "," dual ");        

        dbsio = null;
        Vector vLiga = new Vector();
        vLiga.clear();
        dbsio = new BD_Sio();
        vLiga=dbsio.busquedagral(" f_url_aplicacion(2) "," dual ");        
        
        if(vLiga.size()>0){
            //out.println(((Vector)vLiga.get(0)).get(0));
            sLigaSIGEDet=((Vector)vLiga.get(0)).get(0).toString();
        }else{
            
            sLigaSIGEDet="http://webapps.condusef.gob.mx/unes/detalleStatus.jsp";
        }

        int idres = 0;
            if( ((Vector)v_detalle.get(0)).get(11)!=null)
               idres = Integer.parseInt(((Vector)v_detalle.get(0)).get(11).toString());        

        String validarCand = "";
        if(request.getParameter("vp")!=null){
               if(request.getParameter("vp").equals("20"))
                   validarCand="_cand";
        }
           
        int idins = 0;
            idins = Integer.parseInt(((Vector)v_detalle.get(0)).get(8).toString());

        int idrec = 0;
            idrec = Integer.parseInt(((Vector)v_detalle.get(0)).get(14).toString());           
            
            
        String ligaArchivosUNES = "";
        String ligaArchivosUNES_2 = "";
        //Consultas con = new Consultas();        
        //Vector VLigaArchivos = new Vector();
        Vector vLiga_docts = new Vector();
        vLiga_docts.clear();
        //dbsio = null;
        BD_Sio dbsio2 = new BD_Sio();
        vLiga_docts=dbsio2.busquedagral(" f_url_aplicacion(13) "," dual "); 
        //VLigaArchivos = con.busquedagral("select f_une_aplicacion(2) from dual");
        if(vLiga_docts.size() > 0)
        {
            ligaArchivosUNES = (String)((Vector)vLiga_docts.get(0)).get(0);
        } 
        //dbsio = null;
        //dbsio = new BD_Sio();
        Vector vLiga_docts_2 = new Vector();
        vLiga_docts_2.clear();        
        vLiga_docts_2=dbsio2.busquedagral(" f_url_aplicacion(14) "," dual "); 
        //VLigaArchivos = con.busquedagral("select f_une_aplicacion(2) from dual");
        if(vLiga_docts_2.size() > 0)
        {
            ligaArchivosUNES_2 = (String)((Vector)vLiga_docts_2.get(0)).get(0);
        } 

        //********Para la poliza y vigencia*******
        
        String idcau = "";
        System.out.println("Hasta aqui paso sin problemas");
        Vector Vcausa = new Vector();
        Vcausa=dbsio2.busquedagral(" F_ASUINS_IDCAUOK("+id_asuins+") "," dual ");
        System.out.println("Hasta aqui paso sin problemas: "+((Vector)Vcausa.get(0)).get(0));
        idcau = ((Vector)Vcausa.get(0)).get(0).toString(); 
        
        if (idcau.equals("778")){
            
        }
        //********Fin de la poliza y vigencia
%>







<p>&nbsp;</p>
<table align=center>
<tr>
<td class="lbl_detalle">
Detalle de Asunto
</td>
</tr>
<tr>
 <td> <span onclick="javascript:history.go(-1);"  class='txtDetalle2' style='cursor:hand; color:white'><b><< atras</b></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onclick="javascript:window.close();" class='txtDetalle2' style='cursor:hand; color:white' >cerrar</span>
 </td>
</tr>
</table>
<table width="615" border="0" align="center" bgcolor='white' background='img/sio3.jpg'>

<%
    if(request.getParameter("viewuser")==null){
%>

  <tr>
    <td colspan='2' >  <div style='text-align: right'> <img src='img/unessio.jpg' >  </div> </td>
  </tr>
    
  <tr>
    <td width="142" class="lbl_detalle" >FOLIO:</td>
    <td width="557" class="txtDetalle2"><%
         String folio = "";
                folio = (String)((Vector)v_detalle.get(0)).get(0);
          if(folio!=null)
             out.println(folio);
          else
             out.println("&nbsp;");
        %>
    </td>
  </tr>
  <tr>
    <td class="lbl_detalle">RECEPCI&Oacute;N:</td>
    <td class="txtDetalle2"><%
         String recepcion = "";
                recepcion = (String)((Vector)v_detalle.get(0)).get(1);
          if(recepcion!=null)
             out.println(recepcion);
          else
             out.println("&nbsp;");
        %>
     </td>
  </tr>
  <tr>
    <td class="lbl_detalle">TURNADO:</td>
    <td class="txtDetalle2"><%
         String turnado = "";
                turnado = (String)((Vector)v_detalle.get(0)).get(2);
          if(turnado!=null)
             out.println(turnado);
          else
             out.println("&nbsp;");
        %>
     </td>
  </tr>
  <tr>
    <td class="lbl_detalle">SEG1:</td>
    <td class="txtDetalle2"><%
         String seg1 = "";
                seg1 = (String)((Vector)v_detalle.get(0)).get(3);
          if(seg1!=null)
             out.println(seg1);
          else
             out.println("&nbsp;");
        %>
     </td>
  </tr>
  <tr>
    <td class="lbl_detalle">SEG2:</td>
    <td class="txtDetalle2"><%
         String seg2 = "";
                seg2 = (String)((Vector)v_detalle.get(0)).get(4);
          if(seg2!=null)
             out.println(seg2);
          else
             out.println("&nbsp;");
        %>
     </td>
  </tr>
  <tr>
    <td class="lbl_detalle">Historial Solicitudes</td>
      <td class="txtDetalle2"><a href='<%=sLigaSIGEDet%>?psPid=<%=id_asuins%>' target='_blank'><b>VER</b></a></td>  <!-- Produccion -->
      <!-- <td class="txtDetalle2"><a href='http://10.33.1.170:8097/unes/detalleStatus.jsp?psPid=<%=id_asuins%>' target='_blank'><b>VER</b></a></td>  -->
  </tr>
<%if(idins==1483){%>  
  <tr>
    <td class="lbl_detalle">Contraseña Circulo de Crédito</td>
<%
        dbsio = null;
        Vector Vcirculopass = new Vector();
        Vcirculopass.clear();
        dbsio = new BD_Sio();
        Vcirculopass=dbsio.busquedagral("clave"," une_clavecirculo where idrec="+idrec);
%>  
    <td class="txtDetalle2">
<%
        if(Vcirculopass.size()>0){
            out.println(((Vector)Vcirculopass.get(0)).get(0));
        }else{
            out.println("No Aplica.");
            
        }
%>    
    </td>
  </tr>  
<%}%>    
    
  <%
 if(((Vector)v_detalle.get(0)).get(13).toString().equals("1")){
                         BD_Sio srFechas = new BD_Sio();
                        Vector archSR = new Vector();
                        //out.println(id_asuins);
                        String camposT = "";
                        String tablaT = "";
                        camposT = "to_char(UR.F_RES,'dd-mon-yyyy') as fecha1 ,case when UR.COMENTARIOS is null then K.DESCRIPCIÓN else ur.comentarios end as com1,";
                        camposT = camposT + "to_char(UR1.F_RESPUESTA,'dd-mon-yyyy') as fecha2 ,case when UR1.COMENTARIOS is null then K1.DESCRIPCIÓN else ur1.comentarios end as com2";
                        tablaT = "UNE_SR_RECIBIDOS ur,"; 
                        tablaT = tablaT + "unekres k,";
                        tablaT = tablaT + "UNEKRES K1,"; 
                        tablaT = tablaT + "UNERECIBIDOS UR1"; 
                       tablaT = tablaT + " WHERE UR.IDREC = UR1.ID"; 
                       tablaT = tablaT + " AND UR1.IDRES = K1.ID"; 
                       tablaT = tablaT + " AND UR.IDRES = K.ID"; 
                       tablaT = tablaT + " AND UR.IDASUINS = " + id_asuins;/**/
                        archSR = srFechas.busquedagral(camposT,tablaT);
                        //out.println(((Vector)v_detalle.get(0)).get(5));
                        //out.println(archSR);
                        %>
                         <tr>
    <td class="lbl_detalle">1°FECHA_RESPUESTA:</td>
    <td class="txtDetalle2"><%
          if(((Vector)archSR.get(0)).get(0)!=null)
             out.println(((Vector)archSR.get(0)).get(0));
          else
             out.println("&nbsp;");
        %>
     </td>
  </tr>
   <tr>
    <td height="23" class="lbl_detalle">1°RESPUESTA:</td>
    <td class="txtDetalle2"><%
          if(((Vector)archSR.get(0)).get(1)!=null)
             out.println(((Vector)archSR.get(0)).get(1));
          else
             out.println("&nbsp;");
        %>
     </td>
  </tr>  
           <tr>
    <td class="lbl_detalle">2°FECHA_RESPUESTA:</td>
    <td class="txtDetalle2"><%
          if(((Vector)archSR.get(0)).get(2)!=null)
             out.println(((Vector)archSR.get(0)).get(2));
          else
             out.println("&nbsp;");
        %>
     </td>
  </tr>
   <tr>
    <td height="23" class="lbl_detalle">2°RESPUESTA:</td>
    <td class="txtDetalle2"><%
          if(((Vector)archSR.get(0)).get(3)!=null)
             out.println(((Vector)archSR.get(0)).get(3));
          else
             out.println("&nbsp;");
        %>
     </td>
  </tr> 
               <%}else{
    %>
  <tr>
    <td class="lbl_detalle">FECHA_RESPUESTA:</td>
    <td class="txtDetalle2"><%
         String f_res = "";
  //out.println(((Vector)v_detalle.get(0)).get(13).toString());
               
                f_res = (String)((Vector)v_detalle.get(0)).get(5);
          if(f_res!=null)
             out.println(f_res);
          else
             out.println("&nbsp;");
        %>
     </td>
  </tr>
  <!--****************Para visualizar poliza y viegncia de SIAB VIDA 14/03/2018*********-->
  
  <%if (idcau.equals("778")){
    Vector Vpolizas_vig = new Vector();
            //BD_Sio ddpoliza = new BD_Sio();
            Vpolizas_vig.clear();
            Vpolizas_vig=dbsio2.busquedagral(" poliza, vigencia "," UNESIAB_POLIZA WHERE IDASUINS ="+id_asuins); 
            System.out.println("El resultado de la busqueda es: "+Vpolizas_vig);
            System.out.println("El tamaño del vector es: "+Vpolizas_vig.size());
            System.out.println("La respuesta es: "+(String)((Vector)v_detalle.get(0)).get(7));
    %>
  <tr>
      <td class="lbl_detalle">
        Información referente al seguro
      </td>
      <td>
        <%if(Vpolizas_vig.size()>0&&((Vector)Vpolizas_vig.get(0)).get(0)!=null){%>
            <table>
                <tr>
                    <td class="lbl_detalle">
                        Póliza
                    </td>
                    <td class="lbl_detalle">
                        Vigencia
                    </td>
                </tr>
                <% for(int i=0; i < Vpolizas_vig.size(); i++ ){ %>
                    <tr>
                        <% for(int j=0; j<((Vector)Vpolizas_vig.get(i)).size(); j++ ){ %>
                            <td class="txtDetalle2">
                                <%=((Vector)Vpolizas_vig.get(i)).get(j)%>
                            </td>
                        <% } %>
                    </tr>
                <% } %>
            </table>
        <%}else{%>
            <table>
                <tr>
                    <td class="txtDetalle2">
                        <!--No aplica por ser no procedente-->
                        
                    </td>
                </tr>
            </table>
        <%}%>
      </td>
  </tr>
  <% } %>
 
  <!--****************Fin del apartado para visualizar poliza y vigencia**************-->
  <tr>
    <td height="23" class="lbl_detalle">RESPUESTA:</td>
    <td class="txtDetalle2"><%
         String res = "";
                res = (String)((Vector)v_detalle.get(0)).get(6);
          if(res!=null)
             out.println(res);
          else
             out.println("&nbsp;");
        %>
     </td>
  </tr>
<%}%>
  <tr>
    <td height="23" class="lbl_detalle">Se envio correo a usuario:</td>
    <td class="txtDetalle2">
        <b>
<%
        if(((Vector)archivo4.get(0)).get(0)!=null){
            if(((Vector)archivo4.get(0)).get(0).toString().equals("1"))
                out.println("SI");
            else
                out.println("NO");
        }
        %>
        </b>
     </td>
  </tr>
  
  
<%
        if(((Vector)v_detalle.get(0)).get(9)!=null){
         String archivo = "";
                archivo = (String)((Vector)v_detalle.get(0)).get(9);
                
         String validarComent ="";
         String ComentarioUNE ="";
%>  
  
  <tr>
    <td height="23" class="lbl_detalle">Archivo Anexo por la delegación</td>
    <td class="txtDetalle2">
     <table>
     <%for(int j=0; j<archivo3.size(); j++){%>
     <%
        if(((Vector)archivo3.get(j)).get(8)!=null){
            validarComent=((Vector)archivo3.get(j)).get(8).toString();
        }else{
            validarComent="";
        }
        ComentarioUNE = ((Vector)archivo3.get(j)).get(9).toString();
         
    %>
      <tr>
       <td>
        <%
            out.println(validarComent+"-.");
        %>
        <span style='cursor:hand'> <img src='img/doc<%=validarCand%>.jpg' border='0' onclick="return abrirpop('<%=id_asuins+"_"+((Vector)archivo3.get(j)).get(8)+"."+((Vector)archivo3.get(j)).get(6)%>')"></span>           
       <span class='lbl_campo'  style='color:black'>
        <%
            if(((Vector)archivo3.get(j)).get(4)!=null){        
                    out.println(((Vector)archivo3.get(j)).get(4));
            }
        
        %>

       </span>
       
        <%
                           if(ComentarioUNE.equals("0"))
                                out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(Sin comentarios del archivo)</span>");
                           else if(ComentarioUNE.equals("1"))
                               out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(El archivo esta correcto)</span'>");
                           else if(ComentarioUNE.equals("2"))
                               out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(No se puede abrir el archivo)</span>");
                           else if(ComentarioUNE.equals("3"))
                               out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(Documento defectuoso o inteligible)</span>");
                           else if(ComentarioUNE.equals("4"))
                               out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(Archivo no corresponde al asunto)</span>");
                           else if(ComentarioUNE.equals("5"))
                               out.println("&nbsp;&nbsp;&nbsp;<span class='lbl_campo'  style='color:black'>(Documento con información insuficiente)</span>");                           
        %>
       </td>
      </tr>
     <%}%>
     </table>
    </td>
  </tr>  

    <script>
        function abrirpop(dato){

           //window.open("http://portalif.condusef.gob.mx/besFiles/UNES/ofic_anex/"+dato,null,"height=600,width=800,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes");
           <%if(request.getParameter("vp")!=null){
               if(request.getParameter("vp").equals("19")){
           %>
              
              
              //return GB_showCenter('Seguimiento', "http://webapps.condusef.gob.mx/DELEGUNES/"+dato,600,800);   //Desarrollo
              return GB_showCenter('Seguimiento', "<%=ligaArchivosUNES%>"+dato,600,800);   //Desarrollo

          <%
               }
            }
          %>
        }
    </script>  
<%
        }
%>  
  
  <tr>
    <td class="lbl_detalle">Comentarios CONDUSEF</td>
    <td  class="txtDetalle2">
      <%
        String obsCOND ="";
        if(((Vector)v_detalle.get(0)).get(12)!=null)
            obsCOND = (String)((Vector)v_detalle.get(0)).get(12);
            out.println(obsCOND);
      %> 
    </td>
  </tr>
  <tr>
    <td height="23" class="lbl_detalle">STATUS</td>
    <td class="txtDetalle2"><%
         String status = "";
                status = (String)((Vector)v_detalle.get(0)).get(7);
                
    
        if(idres==343){

                out.println("<span style='color:blue'><b>Cerrado por CONDUSEF</b></span>");

        }else{
                     
          if(status!=null)
             out.println(status);
          else
             out.println("&nbsp;");
        }
        %>
     </td>
  </tr>  
<%
}  // Fin de validacion de muestra usuario
       if(idres>0 && idres!=343){
%>
 <!--segunda respuesta-->
 <% if(((Vector)v_detalle.get(0)).get(13).toString().equals("1")){%>
  <tr>
  <td height="23" class="lbl_detalle">
  </td>
  <td class="txtDetalle2">
  <%  
            if("Concluido".equals(request.getParameter("status"))){
        %>
    Documento de 1° respuesta al Usuario            
                    &nbsp;
                     <%if(((Vector)v_detalle.get(0)).get(10)!=null){
                        
                          if(Integer.parseInt(((Vector)v_detalle.get(0)).get(10).toString())>=621 && Integer.parseInt(((Vector)v_detalle.get(0)).get(10).toString())<=626){
                    %>
                    <a href="plantilla/doctoNC.jsp?pidAsuIns=<%=id_asuins%>&nombre=<%=request.getParameter("nombre")%>&idinsttmp=<%=((Vector)v_detalle.get(0)).get(8)%>&ban_sr=1" target="_blank" >
                          <img src='img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'>
                    </a>                       
                    <%
                            }else{
                    %>
                    
                    <a href="plantilla/docto.jsp?pidAsuIns=<%=id_asuins%>&nombre=<%=request.getParameter("nombre")%>&idinsttmp=<%=((Vector)v_detalle.get(0)).get(8)%>&ban_sr=1" target="_blank" >
                          <img src='img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'>
                    </a>            
                    <%  
                            }
                        }  
 }
                    %>
                    
  </td>
  </tr>
  <%}%>
  <!--segunda respuesta-->
  <tr>
    <td height="23" class="lbl_detalle">
        
    </td>
 

    <td class="txtDetalle2">

        <%  
            
          if( !((Vector)v_detalle.get(0)).get(11).toString().equals("515") || id_asuins.equals("4483273") )
          {
            if("Concluido".equals(request.getParameter("status"))){
        %>
        

        
                <%//if (archivo1.size()==0){%>
                    Documento de <%if(((Vector)v_detalle.get(0)).get(13).toString().equals("1")){%> 2°<%}%> respuesta al Usuario            
                    &nbsp;   
                    
                    <%//=id_asuins%>
                    <%if(((Vector)v_detalle.get(0)).get(10)!=null){
                        
                          if(Integer.parseInt(((Vector)v_detalle.get(0)).get(10).toString())>=621 && Integer.parseInt(((Vector)v_detalle.get(0)).get(10).toString())<=626){
                    %>
                    <a href="plantilla/doctoNC.jsp?pidAsuIns=<%=id_asuins%>&nombre=<%=request.getParameter("nombre")%>&idinsttmp=<%=((Vector)v_detalle.get(0)).get(8)%>&ban_sr=0" target="_blank" >
                          <img src='img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'>
                    </a>                       
                    <%
                            }else{
                    %>
                    
                    <a href="plantilla/docto.jsp?pidAsuIns=<%=id_asuins%>&nombre=<%=request.getParameter("nombre")%>&idinsttmp=<%=((Vector)v_detalle.get(0)).get(8)%>&ban_sr=0" target="_blank" >
                          <img src='img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'>
                    </a>            
                    <%  
                            }
                        }   
                    %>
                   
                    <br>
                    
                    <%//if (archivo1!=null){%>
                    <%if (archivo1.size()>0){%>
                <%//}else{
                            out.println("Documento anexo de respuesta al Usuario por la IF. ");
                            String ext_tmp  ="";
                            String ext_tmp_1="";
                                if(((Vector)archivo1.get(0)).get(4)!=null){
                                   ext_tmp   = (String)((Vector)archivo1.get(0)).get(4);
                                   String [] ext_tmp2 = ext_tmp.split("\\.");
                                   if(ext_tmp2.length==2)
                                    ext_tmp_1 = ext_tmp2[1];
                                   
                                   
                                }
                            
                                
                            //out.println("&nbsp;&nbsp;<a href='http://webapps.condusef.gob.mx/UNES/ofic_resol/"+id_asuins+"."+ext_tmp_1+"' target='_blank'><img src='img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'></a> &nbsp;&nbsp;&nbsp;");
                                out.println("&nbsp;&nbsp;<a href='"+ligaArchivosUNES_2+"ofic_resol/"+id_asuins+"."+ext_tmp_1+"' target='_blank'><img src='img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'></a> &nbsp;&nbsp;&nbsp;");
                  //  }%>
                    <%}%>
                    
                <%if (archivo2.size()>0){
                     try{
                            String ext2_tmp="";
                                   ext2_tmp = (String)((Vector)archivo2.get(0)).get(4);
                                   String [] ext2_tmp2 = ext2_tmp.split("\\.");
                                  

                            %>
                          
                    <br>
                    Documento anexo.            
                    &nbsp;        
          <% 
                        
                    //out.println("&nbsp;&nbsp;<a href='http://webapps.condusef.gob.mx/UNES/ofic_anex/"+id_asuins+"."+ext2_tmp2[1]+"' target='_blank'><img src='img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'></a> &nbsp;&nbsp;&nbsp;"); 
          out.println("&nbsp;&nbsp;<a href='"+ligaArchivosUNES_2+"ofic_anex/"+id_asuins+"."+ext2_tmp2[1]+"' target='_blank'><img src='img/doc.jpg' alt='Mostrar la carta'  name='Image10' border='0'></a> &nbsp;&nbsp;&nbsp;"); 
          %>

                        
                <%
                       }catch(Exception ex){System.out.println("Error de archivo="+ex);}
                 }
                %>                    
                
        <%}%>
            
     </td>
  </tr>   
            <%}}%>  
</table>
<p>&nbsp;</p>
<%      }
      }
    }
  }%>
</body>
</html>