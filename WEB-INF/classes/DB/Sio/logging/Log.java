package DB.Sio.logging;

import java.io.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Log
{

    private static String myname = "DB.Sio.logging.Log.java";
    private String logfile;
    private boolean verbose;
    private boolean sysdate;
    private SimpleDateFormat df;
    private SimpleDateFormat sdf;

    public Log(String archivo, String ext)
    {
        logfile = null;
        verbose = false;
        sysdate = true;
        df = new SimpleDateFormat("yyyy_MM_dd");
        sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date now = new Date();
        logfile = archivo + "_" + df.format(now) + "." + ext;
        //escribe(myname + ": Se ha iniciado el log con el archivo " + logfile);
        escribe((new StringBuilder()).append(myname).append(": Se ha iniciado el log con el archivo ").append(logfile).toString());
    }

    public Log(String archivo, String ext, boolean verbose, boolean sysdate)
    {
        logfile = null;
        this.verbose = false;
        this.sysdate = true;
        df = new SimpleDateFormat("yyyy_MM_dd");
        sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date now = new Date();
        //logfile = archivo + "_" + df.format(now) + "." + ext;
        logfile = (new StringBuilder()).append(archivo).append("_").append(df.format(now)).append(".").append(ext).toString();
    }
    
    public Log()
    {
        logfile = null;
        this.verbose = false;
        this.sysdate = true;
        df = new SimpleDateFormat("yyyy_MM_dd");
        sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date now = new Date();
        //logfile = archivo + "_" + df.format(now) + "." + ext;        
        logfile = (new StringBuilder()).append("C:/AppServ/www/Log/log_ejecucionSIGE").append("_").append(df.format(now)).append(".").append("txt").toString();
    }

    public void escribe(String mensaje)
    {
        String cadena = "";
        if(verbose)
        {
            //System.out.println(myname + ": " + mensaje);
        }
        if(sysdate)
        {
            Date now = new Date();
            String fecha = sdf.format(now);
            cadena = "[" + fecha + "] " + mensaje;
        }        
        //writeToFile(cadena);
        System.out.println(cadena);
    }

    public void setSysdate(boolean sysdate)
    {
        this.sysdate = sysdate;
    }

    public boolean getSysdate()
    {
        return sysdate;
    }

    public void setVerbose(boolean verb)
    {
        verbose = verb;
    }

    public boolean getVerbose()
    {
        return verbose;
    }

    public void setLogfile(String archivo, String ext)
    {
        Date now = new Date();
        logfile = archivo + "_" + df.format(now) + "." + ext;
    }

    public String getLogfile()
    {
        return logfile;
    }

    public void setLogDateFormat(SimpleDateFormat sdf)
    {
        this.sdf = sdf;
    }

    public DateFormat getLogDateFormat()
    {
        return sdf;
    }

    /*public Log()
    {
        logfile = null;
        verbose = false;
        sysdate = true;
        df = new SimpleDateFormat("yyyy_MM_dd");
        sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
    }*/

    public void writeToFile(String cadena)
    {
        boolean existe = false;
        try
        {
            File f = new File(logfile);
            if(f.exists())
            {
                existe = true;
            }
            FileWriter fw = new FileWriter(logfile, true);
            BufferedWriter writer = new BufferedWriter(fw);
            if(existe)
            {
                writer.newLine();
                writer.newLine();
            }
            writer.write(cadena);
            writer.close();
            fw.close();
        }
        catch(Exception e)
        {
            //System.out.println(myname + " en writeToFile() arroj\363 la siguiente excepci\363n: " + e);
            e.printStackTrace();
        }
    }

    public static void main(String args[])
    {
        Log reg = new Log("C:\\loggin1", "txt");
        reg.escribe("nueva linea 1");
    }

}
