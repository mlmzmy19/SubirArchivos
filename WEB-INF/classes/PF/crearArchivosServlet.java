package PF;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class crearArchivosServlet extends HttpServlet
{

    public crearArchivosServlet()
    {
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
        PrintWriter out = response.getWriter();
        ServletContext context = getServletContext();
        String absoluteWebInfPath = getServletContext().getRealPath("/WEB-INF");
        out.println(absoluteWebInfPath);
        try
        {
            out = new PrintWriter(new FileWriter(absoluteWebInfPath + "\\josejuan.txt"));
        }
        catch(IOException e)
        {
            System.out.println("Unable to open file: prog3spiral.txt" + e);
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        processRequest(request, response);
    }

    public String getServletInfo()
    {
        return "Short description";
    }
}
