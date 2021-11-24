/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package firma;

import com.mycompany.maven.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 *
 * @author abloaiza
 */
@WebServlet(name = "ServletGuardaFirma", urlPatterns = {"/ServletGuardaFirma"})
public class ServletGuardaFirma extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, FileUploadException, Exception {
        response.setContentType("text/html;charset=UTF-8");
       
        
        
      String  strSecreto="", strArchivoCert ="", pathCert ="", strArchivoKey="", pathKey="", strPDFPRUEBA="", pathpdf="";
        
        
     String respuesta ="";   
     int numero = (int) (Math.random() * 1000) + 1;   
        
      
FileItemFactory factory = new DiskFileItemFactory();
ServletFileUpload upload = new ServletFileUpload(factory);


  List<org.apache.commons.fileupload.FileItem> items = upload.parseRequest(request);


for (Object item : items) {
   FileItem uploaded = (FileItem) item;

  
   
   
   if (!uploaded.isFormField()) {
      // No es campo de formulario, guardamos el fichero en algún sitio
  
   File  f = new File(uploaded.getName()); // solo para sacar el nombre del formulario ya que uploaded getname regresa toda la ruta
  String NOMBREARCHIVO = numero+f.getName();
   String pathArchivo = RutaFirma.ruta()+NOMBREARCHIVO;
   
     File fichero = new File(pathArchivo);  //crear archivo
      uploaded.write(fichero);
      

            String fieldname = uploaded.getFieldName();
        
          if (fieldname.equals("filecer")){ strArchivoCert=NOMBREARCHIVO; pathCert= pathArchivo; respuesta += strArchivoCert;}
          if (fieldname.equals("filekey")){  strArchivoKey=NOMBREARCHIVO; pathKey= pathArchivo;  respuesta += strArchivoKey; }    
           
      
   } else {
      // es un campo de formulario, podemos obtener clave y valor

     if (uploaded.getFieldName().equals("secreto")){ strSecreto= uploaded.getString();  respuesta =  respuesta+strSecreto+"|";}   
      
    }
} //fin de leer archivos
 
   /*******************************firmar para comprobar mensaje 200************************************************************/
      
//crear un arcihvo de copia de pruebaA
   
           strPDFPRUEBA="pruebaA.pdf"; pathpdf=RutaFirma.ruta()+strPDFPRUEBA;
           
           
                File origen = new File(pathpdf);
                
            strPDFPRUEBA = numero+"pruebaA.pdf"; pathpdf=RutaFirma.ruta()+strPDFPRUEBA;     
                
                File destino = new File(pathpdf);

                try {
                        InputStream in = new FileInputStream(origen);
                        OutputStream out = new FileOutputStream(destino);
                          byte[] buf = new byte[1024];
                        int len;
                          while ((len = in.read(buf)) > 0) {
                                out.write(buf, 0, len);
                        }

                        in.close();
                        out.close();
                } catch (IOException ioe){
                        ioe.printStackTrace();
                }
           
        
    FE firma = new FE();

       respuesta =  ""+ firma.parametro(strSecreto, strArchivoCert, pathCert, strArchivoKey, pathKey, strPDFPRUEBA, pathpdf);
       destino.delete();
       
       
      // session.setAttribute("variable", new Integer(22));
       
   /*******************************firmar para comprobar mensaje 200************************************************************/
       
   
   if (respuesta.equals("200"))
       
   {
   HttpSession session=request.getSession(true);
   session.setAttribute("strSecreto", strSecreto);
   
    session.setAttribute("strArchivoCert", strArchivoCert);
     session.setAttribute("pathCert", pathCert);
     
      session.setAttribute("strArchivoKey", strArchivoKey);
       session.setAttribute("pathKey", pathKey);
       
         session.setAttribute("strPDFPRUEBA", strPDFPRUEBA); 
           session.setAttribute("pathpdf", pathpdf); 

   
   }
   
       
       
        PrintWriter out = response.getWriter();
        
        
        
        
        
        try {
            /* TODO output your page here. You may use following sample code. */
            out.println(respuesta+"");
        } finally {
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(ServletGuardaFirma.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(ServletGuardaFirma.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
