package BD_UneSio;

import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import javax.servlet.*;
import javax.servlet.http.*;

// Referenced classes of package BD_UneSio:
//            SQL_UneSio

public class FinSioUne extends HttpServlet
{

    public FinSioUne()
    {
    }

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        SQL_UneSio sqlune = new SQL_UneSio();
        String idusi = request.getParameter("idusi") == null ? "" : request.getParameter("idusi");
        String sdel = request.getParameter("iddel") == null ? "" : request.getParameter("iddel");
        String sinicio = request.getParameter("f1") == null ? "" : request.getParameter("f1");
        String stermino = request.getParameter("f2") == null ? "" : request.getParameter("f2");
        sinicio = sinicio.toString().replaceAll("/", "");
        stermino = stermino.toString().replaceAll("/", "");
        if(sdel != null)
        {
            int id_del = sdel.compareTo("") == 0 ? 0 : Integer.parseInt(sdel);
            ArrayList tabla = new ArrayList();
            ArrayList fila = new ArrayList();
            ArrayList filatmp = new ArrayList();
            try
            {
                tabla = sqlune.getListado(id_del, sinicio, stermino);
                for(int i = 0; i < tabla.size(); i++)
                {
                    fila = (ArrayList)tabla.get(i);
                    filatmp = sqlune.getRespuestaInst(Integer.parseInt(fila.get(0).toString()));
                    fila.add(filatmp.get(0));
                    fila.add(filatmp.get(1));
                    tabla.set(i, fila);
                }

            }
            catch(Exception e)
            {
                System.out.println(e);
            }
            request.setAttribute("tabla", tabla);
            request.setAttribute("idusi", idusi);
            request.setAttribute("sdel", sdel);
            request.setAttribute("sinicio", sinicio);
            request.setAttribute("stermino", stermino);
            gotoPage("/UneSio_listado.jsp", request, response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        processRequest(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        processRequest(request, response);
    }

    private void gotoPage(String address, HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        RequestDispatcher disp = getServletContext().getRequestDispatcher(address);
        disp.forward(request, response);
    }
}
