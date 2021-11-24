<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page import='DB.Sio.*'%>
<%@page import=' java.util.*'%>
<%@page import="DB.Asuntos.*"%>
<html>
<head>

        <meta http-equiv="pragma" content="no-cache">
        <meta http-equiv="cache-control" content="no-cache">
        <meta http-equiv="expires" content="0"> 
        <meta http-equiv="cache-request-directive" content="no-cache">
        <meta http-equiv="cache-response-directive" content="must-revalidate"> 

<title>Subir Archivos Gestión Electronica</title>
<link href="css/estilos-unes.css" rel="stylesheet" type="text/css">
</head>
<%
response.setHeader("Cache-Control","no-cache");
response.setHeader("Pragma","no-cache");
    String validar = "";
           //validar = request.getParameter("validarUSR");
           validar = "CONDUSEF_udepo";
           if(validar!=null && validar.equals("CONDUSEF_udepo")){
%>



<%

        String 
                idasuins = "";
                idasuins = request.getParameter("idasuins");
        String 
                si       = "";
                if(request.getParameter("si")!=null) si = request.getParameter("si");                
        
        String  apertura = "";
                if(request.getParameter("ap")!=null){
                        apertura = request.getParameter("ap");
                }
         String 
                Anombre   = "";
         String 
                coment    = "";
                //idasuins = "812223";        
        Vector 
                Varchivos = new Vector();
        BD_Sio Iarchivos  = new BD_Sio();
        System.out.println("Va a coupar por primera vez el metodo busquedagral");
        
                //Varchivos = Iarchivos.P_DOCSDELEG_ASUINS(idasuins);
                Varchivos = Iarchivos.busquedagral(" uned.id_asuins,uned.consecutivo,to_char(uned.fecha,'dd/mm/yyyy'),uned.nombre,uned.extension,uned.checked,uned.comentario_archivo,uner.id "," unedelegarchivosanex uned left join  unerecibidos uner on uned.id_asuins=uner.idasuins where uned.id_asuins="+idasuins+" order by uned.consecutivo ");
                
                /*
                PLSQLNamedProgram P_DOCSDELEG_ASUINS = PLSQLNamedProgram.Procedure("P_DOCSDELEG_ASUINS",new Conexion().SIGEProduccion(),
                                                                                      "<PIDASUINS,IN,0,"+idasuins+",0>"+                                                                                    
                                                                                      "<PCUR,OUT,CURSOR,-1,1>"
                                                                                      );
                             
               P_DOCSDELEG_ASUINS.execute(true);
               
               System.out.println("Resultado del PLSQLNamedProgram: "+P_DOCSDELEG_ASUINS.getStatusMsg());
               
               if(P_DOCSDELEG_ASUINS.isExecutionOK())
               {
                 System.out.println("Se encontraron "+P_DOCSDELEG_ASUINS.getDataFromOutCursor("PCUR").getNumeroRegistros()+" registros...");                
                 if (P_DOCSDELEG_ASUINS.getDataFromOutCursor("PCUR").getNumeroRegistros() > 0 )
                     {
                         DataSet dataSet = P_DOCSDELEG_ASUINS.getDataFromOutCursor("PCUR");
                         Vector data = new Vector();
                         Varchivos = dataSet.getData();
                     }
               }*/
                
        System.out.println("Realizo sin problemas el select");
        
           String ligaArchivosUNES = "";
        //Consultas con = new Consultas();        
        //Vector VLigaArchivos = new Vector();
        Vector vLiga_docts = new Vector();
        vLiga_docts.clear();
        BD_Sio dbsio = new BD_Sio();
        AsuntoOficio asunto = new AsuntoOficio();
        System.out.println("Va a usar el método ejectuaFuncion");
        vLiga_docts=asunto.ejecutaFuncion("f_url_aplicacion(13)");        
        System.out.println("Ocupando el método ejecutaFuncion");
        //VLigaArchivos = con.busquedagral("select f_une_aplicacion(2) from dual");
        if(vLiga_docts.size() > 0)
        {
            
            ligaArchivosUNES = (String)((Vector)vLiga_docts.get(0)).get(0);
            System.out.println("La liga es la siguiente: "+ligaArchivosUNES);
        }     
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
            <td class='lbl_detalle' style='background-color:white; color:red'>
                <%
                    if(Varchivos.size()>0){
                            if(((Vector)Varchivos.get(0)).get(7)!=null)
                                out.println("ASUNTO INICIADO EN EL PROCESO DEL SIGE <br>( Ya no se pueden modificar los archivos a menos que dentro del proceso se solicite su apertura para modificarlos ).");
                    }
                %>
            </td>
        </tr>         
        <tr>
            <td class='lbl_detalle' style='background-color:white; color:red'>
                <%
                    if(si.equals("1")){
                                out.println("*** Se solicita Información Adicional ***");
                    }
                %>
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

        int u=5;

        if(Varchivos.size()>0){                                 //////////// Caso en el q existen ya archivos cargados
           if (((Vector)Varchivos.get(0)).get(7)!=null){        //////////// Caso en el q existen ya archivos y ya fue tomado por la une
             u = Varchivos.size();                              
           }else{
             u = 5;
           }
        }else{                                                  //////////// Caso en el q no existen archivos cargados
            u=5;
        }
            
        if(si.equals("1"))                                      //////////// Caso en el q piden solicitar se suban nuevos documentos este dato lo envia el sioWEB en solicitar informacion adicional
            u=5;

        //    for(int i=1; i<6; i++){
            for(int i=1; i<=u; i++){
                validarComent = "0";
                validarID     = 0;  
        %>
        
        <tr>
            <td width='100%' bgcolor='<%=color[i-1]%>' align='left'>
                <span class='lbl_campo' style='color:black' > <%=i%>-. Archivo </span>
            <%
                for(int y=0; y<Varchivos.size(); y++){
                        
                     if(((Vector)Varchivos.get(y)).get(1).toString()!=null){                            ///// unicamente comprobamos q traiga datos y no nulos
                       if(((Vector)Varchivos.get(y)).get(1).toString().equals(String.valueOf(i))){      ///// comprobamos q el consecutivo corresponda
                           Anombre = ((Vector)Varchivos.get(y)).get(3).toString();                      ///// obtenemos el nombre del archivo
                           validarComent = ((Vector)Varchivos.get(y)).get(6).toString();                ///// obtenemos el los comentarios hechos por las unes al archivo
                           if (((Vector)Varchivos.get(y)).get(7)!=null){                                ///// verificamos si ya existe el asunto en el SIGE 
                            validarID     = 1;
                           }else{
                            validarID     = 0;   
                           }
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
                           
                           

                           //out.println("&nbsp;&nbsp;&nbsp;<a href='http://webapps.condusef.gob.mx/DELEGUNES/"+((Vector)Varchivos.get(y)).get(0)+"_"+((Vector)Varchivos.get(y)).get(1)+"."+((Vector)Varchivos.get(0)).get(4)+"' class='txtDetalle' target='_blank'  style='color:black'>Abrir</a>");    //PRODUCCION
                           out.println("&nbsp;&nbsp;&nbsp;<a href='"+ligaArchivosUNES+((Vector)Varchivos.get(y)).get(0)+"_"+((Vector)Varchivos.get(y)).get(1)+"."+((Vector)Varchivos.get(0)).get(4)+"' class='txtDetalle' target='_blank'  style='color:black'>Abrir</a>");    //PRODUCCION

                       }
                     }
                }
                
                
                /////   Se pone temporalmente apertura igual a 1 
                ////apertura="1";
            %>
                <%//if(validarComent.compareTo("1")!=0)%>
                <%//if(validarID==0 || validarComent.equals("2") || validarComent.equals("3") || validarComent.equals("4") || validarComent.equals("5")){%>
                <%if(validarID==0 ||  apertura.equals("1")){%>
                    <!-- <iframe  src='subirArchivosDeleg/archivo<%=i%>.jsp?validarUSR=<%=validar%>&idasuins=<%=idasuins%>&idusi=<%=request.getParameter("idusi")%>'   height="80" width="100%" frameborder=0 marginheight='0' marginwidth='0' ></iframe> -->
                    <iframe  src='subirArchivosDeleg/archivo<%=i%>.jsp?validarUSR=<%=validar%>&idasuins=<%=idasuins%>&idusi=<%=request.getParameter("idusi")%>&si=<%=si%>'   height="80" width="100%" frameborder=0 marginheight='0' marginwidth='0' ></iframe>
                    
                <%}%>
            </td>
        </tr>
        <%
            }
        %>
           
        </table>

    <br><br>

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


    <table align='center'>
        <tr>
            <td>
                <img src='img/Homelogin2.jpg'>
            </td>
        </tr>    
        <tr align="center">
                <td class='lbl_detalle' style='background-color:white;'>
                    Versión 1.0.0
                </td>
            </tr>
    </table>

    <%}else{
        out.println("Acceso Denegado");
      }
    %>
</body>
</html>