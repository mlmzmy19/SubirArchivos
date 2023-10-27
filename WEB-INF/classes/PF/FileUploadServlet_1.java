package PF;

import java.io.*;
import java.util.*;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import control.addWMCondusef;
import DB.Asuntos.*;
import com.mycompany.maven.cliente;

// Referenced classes of package PF:
//            BusqD, Entidad, FileUploadListener

public class FileUploadServlet_1 extends HttpServlet
    implements Servlet
{

    private static final long serialVersionUID = 0x2608e661050009f0L;

    public FileUploadServlet_1()
    {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        PrintWriter out = response.getWriter();
        out.close();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        PrintWriter out = response.getWriter();
        out.println("<link href='../css/estilos-unes.css' rel='stylesheet' type='text/css'>");
        System.out.println("Paso el comentario");
        org.apache.commons.fileupload.FileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        BusqD basuins = new BusqD();
        Entidad ent = new Entidad();
        FileUploadListener listener = new FileUploadListener();
        List uploadedItems = null;
        FileItem fileItem = null;
        String filePath = "";
        AsuntoOficio asunto = new AsuntoOficio();
        Vector Vverifica_pori = new Vector();        
        String verifica_pori = "";
        String idasuins = "";
        String nombrearch = "";
        String edo_archivo = "";
        String idusi = "";
        String validar = "";
        String consecutivo = "";
        String si = "1";
        Vector VBidasuins = new Vector();
        try
        {
            System.out.println("entro al try");
            System.out.println("entro al tryx2");
            uploadedItems = upload.parseRequest(request);
            System.out.println("una intermedia");
            Iterator i = uploadedItems.iterator();
            System.out.println("va a entrar al do");
            do
            {
                if(!i.hasNext())
                {
                    break;
                }
                System.out.println("ya esta en el do");
                fileItem = (FileItem)i.next();
                if(fileItem.getFieldName().equals("idasuins"))
                {
                    idasuins = fileItem.getString().trim();
                }
                if(fileItem.getFieldName().equals("edo_archivo"))
                {
                    edo_archivo = fileItem.getString().trim();
                }
                if(fileItem.getFieldName().equals("idusi"))
                {
                    idusi = fileItem.getString().trim();
                }
                if(fileItem.getFieldName().equals("validar"))
                {
                    validar = fileItem.getString().trim();
                }
                if(fileItem.getFieldName().equals("consecutivo"))
                {
                    consecutivo = fileItem.getString().trim();
                }
                if(fileItem.getFieldName().equals("si"))
                {
                    si = fileItem.getString().trim();
                }
                if(!fileItem.isFormField() && fileItem.getSize() > 0L)
                {
                    System.out.println("ya va a crear el archivo");
                    File uploadedFile = null;
                    String myFullFileName = fileItem.getName();
                    String myFileName = "";
                    String slashType = myFullFileName.lastIndexOf("\\") > 0 ? "\\" : "/";
                    int startIndex = myFullFileName.lastIndexOf(slashType);
                    myFileName = myFullFileName.substring(startIndex + 1, myFullFileName.length());
                    ent.setIdasuins(Integer.parseInt(idasuins));
                    ent.setIdusi(Integer.parseInt(idusi));
                    ent.setEdo_archivo(Integer.parseInt(edo_archivo));
                    ent.setNombre(myFileName);
                    ent.setConsecutivo(Integer.parseInt(consecutivo));
                    ent.setSi(Integer.parseInt(si));
                    nombrearch = idasuins + "_" + consecutivo + "." + myFileName.split("\\.")[myFileName.split("\\.").length - 1];
                    basuins.Bdasuins(ent); //AQUI SE LE ASIGNA EL PATH!!!!!!
                    System.out.println("----*" + myFileName + ",nombrearch=" + nombrearch);   
                    String contexto = getServletContext().getRealPath("/");
                    uploadedFile = new File(ent.getPath(), nombrearch);    //crear archivo 
                    System.out.println("borrado a ver que pasa");
                    addWMCondusef addwm = new addWMCondusef();
                    uploadedFile.delete();
                    System.out.println("ya lo borro");
                    fileItem.write(uploadedFile);
                    System.out.println("ya lo agrego");
                    Vverifica_pori = asunto.ejecutaFuncion("F_VERIFICA_PORI("+idasuins+")");
                    verifica_pori = (String)((Vector)Vverifica_pori.get(0)).get(0);
                    System.out.println("El valor de verifica pori: "+verifica_pori);
                    if(verifica_pori.equals("1")||idasuins.equals("330005936")){
                        System.out.println("Entro al if: "+idasuins);
                        addwm.agregaImg(uploadedFile,contexto);
                    };
                     System.out.println("ya le puso el fondo");
                    
                     
    /*************************** SISTEMAS ******************************************* /  
     /* System.out.println(uploadedFile.getAbsolutePath()+"ruta de archivo<> ");
          System.out.println("ruta Final del archivo:"+ uploadedFile.getAbsolutePath());
         System.out.println("nombre del archivo:"+ uploadedFile.getName());* /
         
        cliente firma = new cliente();
   
     //contraseña
       HttpSession Sesion = request.getSession(true);   
     
    String  strSecreto = (String) Sesion.getAttribute("strSecreto");
    
    // archivo cert
    String  strArchivoCert = (String) Sesion.getAttribute("strArchivoCert");
    String pathCert = (String) Sesion.getAttribute("pathCert");
    
    //archivo key
    String  strArchivoKey = (String) Sesion.getAttribute("strArchivoKey");
    String   pathKey= (String) Sesion.getAttribute("pathKey");
    
    //archivopdf  
    String  strPDFPRUEBA =uploadedFile.getName();            
    String   pathpdf= uploadedFile.getAbsolutePath();
     String pathorigen = pathpdf.replace(strPDFPRUEBA, "") ;   
  
        
        firma.firmar(strSecreto, strArchivoCert, pathCert, strArchivoKey, pathKey, strPDFPRUEBA, pathpdf);
                    
          /***************** FIN SISTEMAS ***********************************************/
                   
                }
            } while(true);
            out.println("<script>function cargaPadre(){parent.location.reload();}</script>");
            out.println("<table border=0 align='left' cellpadding='0' cellspacing='0' heigth='50'>");
            out.println("<tr>  <form action='../busquedaArchivo.jsp' method='POST'> <td  class='lbl_campo" +
"_gris'>  Si desea ver el archivo despues de haber sido cargado porfavor de click" +
" <input type='button' value='Abrir' onclick='enviar(this.form)'> </td></tr><tr><" +
"td class='lbl_campo_gris'>Desea volver a subir el archivo <span style='cursor:ha" +
"nd' onclick='cargaPadre()' class='txtDetalle'>Editar</span></td></tr><input type" +
"='hidden' value='"
 + idasuins + "' name='idasuins'>" + "<input type='hidden' value='" + validar + "' name='validarUSR'>" + "<input type='hidden' value='" + consecutivo + "' name='consecutivo'>" + "<input type='hidden' value='" + idusi + "' name='idusi'>" + "</form>" + "<script>" + "function enviar(form){" + "form.submit();" + "}" + "</script>" + "");
            out.println("</table>");
        }
        catch(FileUploadException e)
        {
            System.out.println(e);
            out.println(" "+ e.getMessage());
            e.printStackTrace();
        }
        catch(Exception e)
        {
            System.out.println("Error=" + e);
            out.println(" "+ e.getMessage());
            e.printStackTrace();
        }
        out.close();
    }
}
