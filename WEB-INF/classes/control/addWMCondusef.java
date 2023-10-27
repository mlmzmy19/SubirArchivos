/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package control;

import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Image;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.pdf.PdfContentByte;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.io.PrintStream;
import com.mycompany.maven.*;



/**
 *
 * @author neftalic
 */
public class addWMCondusef {
    
    public File agregaImg(File pdf, String contexto) throws IOException, DocumentException{
        
        int alto = 0;
        int ancho= 0;                
       
        //String pathimg  = "C:/AppServ/www/img/"; //contexto.replace("\\build\\web\\", "\\web\\imgs\\");
        String pathimg;
        if (contexto.indexOf("808")>0) 
            pathimg= contexto+"\\imgs\\";
        else
            pathimg= contexto+"/imgs/";
        
          
        System.out.println("el contexto es: "+contexto);
        //String pathimg  = contexto.replace("\\build\\web\\", "\\web\\imgs\\");  
        //pathimg  = "/u01/middle_OHS/user_projects/domains/CONDUSEF_OHS2_domain/config/fmwconfig/components/OHS/instances/ohs1/htdocs/images/";
        //pathimg  = "https://webapps.condusef.gob.mx/images/";
        //pathimg = "http://10.33.21.51:8080/subirArchivos/imgs/";
        //pathimg = "https://webappsdesa.condusef.gob.mx/subirArchivos/imgs/";
        //pathimg  = "/archpdf/UNES/webimg/";        
        //url_img = getClass().getClassLoader().getResource(pathimg+"wm_CONDUSEF_color_carta_vertical.png");
        //System.out.println("La url de la imagen es: "+url_img);
        //System.out.println("La ruta del proyecto: "+System.getProperty("user.dir"));
        String pathfile = pdf.getCanonicalPath(); 
        System.out.println("el pathfile "+pathfile);
        String newname  = pathfile.replace(pdf.getName(), "")+"Nuevoarchivo.pdf";        
        System.out.println("El nombre del archivo "+newname);
        File newfile    = new File("");
        PdfReader reader = new PdfReader(pdf.getAbsolutePath());
        System.out.println("el path absoluto del file: "+pdf.getAbsolutePath());
        PdfStamper pdfStamper = new PdfStamper(reader,new FileOutputStream(newname));
        String mimeType = Files.probeContentType(pdf.toPath());
        PdfContentByte content = null;
        //AsuntoOficio asunto = new AsuntoOficio();
        //Vector url_imagenes    = new Vector();  
        //url_imagenes   = asuntooficio.ejecutaFuncion("F_URL_FONDO_DOCS()");     
        //url_imagenes   = ejecutaFuncion("F_URL_FONDO_DOCS()");     
        //System.out.println("El vector de las ligas: "+url_imagenes);
        //System.out.println("La url de las imagenes : "+url_imagenes);
        //pathimg  =(String)((Vector)url_imagenes.get(0)).get(0);
        //pathimg  = "C:/AppServ/www/img/";
        System.out.println("El pathimg: "+pathimg);
        //Image image = Image.getInstance(pathimg+"wm_CONDUSEF_color_carta_vertical.png");
        Image image = Image.getInstance(pathimg+"wm_CONDUSEF_color_carta_vertical.png");
        
        try {
            
            if(!mimeType.contains("application/pdf")){
                System.out.println("Tipo de archivo no válido");
            }else{
                //System.out.println("Núm. págs. --> "+reader.getNumberOfPages());
                for(int i=1; i<= reader.getNumberOfPages(); i++){
                    Rectangle mediabox = reader.getPageSize(i);
                    alto = (int) mediabox.getHeight();
                    ancho = (int) mediabox.getWidth();
                    System.out.print("Página "+i+": "+ancho+"x"+alto+"");
                    if(ancho>1000){
                        System.out.println("OFICIO HORIZONTAL<br/>");
                        image = Image.getInstance(pathimg+"wm_CONDUSEF_color_oficio_horizontal.png");
                    }else if(ancho>700){
                        System.out.println("CARTA HORIZONTAL<br/>");
                        image = Image.getInstance(pathimg+"wm_CONDUSEF_color_carta_horizontal.png");
                    }else if(alto>1000){ 
                        System.out.println("OFICIO VERTICAL<br/>");
                        image = Image.getInstance(pathimg+"wm_CONDUSEF_color_oficio_vertical.png");
                    }else{ 
                        System.out.println("CARTA VERTICAL<br/>");
                        System.out.println("Va a crear la imagen");
                        image = Image.getInstance(pathimg+"wm_CONDUSEF_color_carta_vertical.png");                        
                        System.out.println("La imagen es : "+image);
                    }
                    content = pdfStamper.getOverContent(i);
                    image.setAbsolutePosition(0f, 0f);
                    content.addImage(image);
                }

                pdfStamper.close();
                reader.close();
                newfile =new File(newname);
                pdf.delete();
                if(newfile.renameTo(pdf)){                      //termino el mismo path archivo nuevo con imagenes
                    System.out.println("File rename success");
                }else{
                    System.out.println("File rename failed");
                }
            }
        } catch (IOException e) {
		throw new IllegalArgumentException("No se puede leer el archivo " + pathfile , e);
	}
        
     
        
        
        return newfile;
    }
        
    
    public static void main(String[] args) throws IOException, DocumentException
    {
      /*  addWMCondusef addWMCondusef = new addWMCondusef();
        File archivo = new File("miife_bn.pdf");
        //String pathimg = new File("").getCanonicalPath()+"\\imgs";
        File nuevo = addWMCondusef.agregaImg(archivo);
        System.out.println(nuevo.getName()+"-"+nuevo.getCanonicalPath());*/
    }
}
