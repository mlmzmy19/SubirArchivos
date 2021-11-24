/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Manejador;

import firma.RutaFirma;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author gdelgadillo
 */
public class EliminarFirma extends HttpServlet {

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
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet EliminarFirma</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet EliminarFirma at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        } finally {
            out.close();
        }
    }

        @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession Sesion = request.getSession(true);   
        String  strSecreto = (String) Sesion.getAttribute("strSecreto");

        // archivo cert
        String  strArchivoCert = (String) Sesion.getAttribute("strArchivoCert");
        String pathCert = (String) Sesion.getAttribute("pathCert");
        System.out.println("ARCHIVO CERT"+pathCert);
        //archivo key
        String  strArchivoKey = (String) Sesion.getAttribute("strArchivoKey");
        String   pathKey= (String) Sesion.getAttribute("pathKey");
        System.out.println("ARCHIVO  KEY"+pathKey);
        File archivoCert = new File(pathCert);
        if(archivoCert.exists()){
            System.out.println("ENTRO A ELIMINAR EL ARCHIVO!!1");
            archivoCert.delete();
        }
        File archivoKey = new File(pathKey);
        if(archivoKey.exists()){
            System.out.println("ENTRO A ELIMINAR EL ARCHIVO!!2");
            archivoKey.delete();
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("ENTO AL POST!!!!");
        response.getWriter().write("HOLA");
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
