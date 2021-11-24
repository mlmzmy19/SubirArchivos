package Manejador;

import DB.Usuario.BDUsuario;
import Entidades.Usuarios;
import java.io.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.*;
import javax.servlet.http.*;

public class servletusuario extends HttpServlet
{

    Usuarios usr;
    BDUsuario db_usr;

    public servletusuario()
    {
        usr = new Usuarios();
        db_usr = new BDUsuario();
    }

    public void init(ServletConfig config)
        throws ServletException
    {
        super.init(config);
    }

    public void destroy()
    {
    }

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        processRequest(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        PrintWriter out = response.getWriter();
        out.println("llega");
        usr.setUsuario(request.getParameter("user"));
        usr.setPassword(request.getParameter("pass"));
        String respuesta = "";
        if(usr.getUsuario().equals("udepo"))
        {
            respuesta = "true";
        } else
        {
            respuesta = "false";
        }
        if(usr.getPassword().equals("udep0"))
        {
            respuesta = "true";
        } else
        {
            respuesta = "false";
        }
        HttpSession s = request.getSession();
        System.out.println(respuesta);
        Date now = new Date();
        DateFormat df = DateFormat.getDateInstance();
        String fechasistema = df.format(now);
        SimpleDateFormat FO = new SimpleDateFormat("MM/yy");
        SimpleDateFormat FO2 = new SimpleDateFormat("yy");
        if(!Boolean.valueOf(respuesta).booleanValue())
        {
            response.sendRedirect("/unes/login.jsp?respuesta=incorrecto");
        } else
        {
            s.setAttribute("validarUSR", "udepo_C");
            System.out.println(s.getAttribute("validarUSR"));
            response.sendRedirect(request.getContextPath() + "/estadisticas/");
        }
    }

    private void gotoPage(String address, HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        RequestDispatcher disp = getServletContext().getRequestDispatcher(address);
        disp.forward(request, response);
    }

    public String getServletInfo()
    {
        return "Short description";
    }
}
