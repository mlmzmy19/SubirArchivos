package DB.Asuntos;

import DB.ConexionBD.Conexion_oracle;
import java.io.PrintStream;
import java.sql.*;
import java.util.Vector;
import oracle.jdbc.OracleCallableStatement;

public class AsuntoOficio
{
    
    public AsuntoOficio()
    {
    }

    public Vector getAsuntosOficio(int pidAsuIns)
    {
        Vector DatosUnicos = new Vector();
        Vector DatosTodos = new Vector();
        int y = 0;
        Conexion_oracle pool = new Conexion_oracle();
        System.out.println("Asunto ->" + pidAsuIns);
        try
        {
            Conexion_oracle _tmp = pool;
            Connection conn = Conexion_oracle.getConnection();
            DatosUnicos.clear();
            DatosTodos.clear();
            System.out.println("IO:" + pidAsuIns);
            CallableStatement cs = conn.prepareCall("{ call P_GeneraOfi_UneAsuConOK(?,?)} ");
            cs.setInt(1, pidAsuIns);
            cs.registerOutParameter(2, -10);
            cs.execute();
            ResultSet rs = ((OracleCallableStatement)cs).getCursor(2);
            ResultSetMetaData RSMD = rs.getMetaData();
            for(int u = 1; u <= RSMD.getColumnCount(); u++)
            {
                System.out.println(RSMD.getColumnName(u));
            }

            DatosTodos.clear();
            for(; rs.next(); DatosUnicos.clear())
            {
                for(int t = 1; t <= RSMD.getColumnCount(); t++)
                {
                    DatosUnicos.add(rs.getString(t));
                    System.out.println(rs.getString(t));
                }

                DatosTodos.add(y, DatosUnicos.clone());
                y++;
            }

            cs.close();
            rs.close();
            conn.close();
            conn = null;
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        return DatosTodos;
    }

    public Vector ejecutaFuncion(String funcion)
    {
        int h = 0;
        Conexion_oracle pool = new Conexion_oracle();
        Connection conn = null;
        Vector DatosT = new Vector();
        Vector Datos = new Vector();
        DatosT.clear();
        Datos.clear();
        DatosT.clear();
        try
        {
            Conexion_oracle _tmp = pool;
            conn = Conexion_oracle.getConnection();            
            CallableStatement cs = conn.prepareCall("{? = call " + funcion + "}");            
            cs.registerOutParameter(1, 12);            
            cs.execute();           
            Datos.add(cs.getString(1));
            DatosT.add(0, Datos);
            System.out.println(DatosT);
            cs.close();
            conn.close();
            conn = null;
        }
        catch(Exception e)
        {
            System.out.println(e);
            //log.escribe("Error: "+e);
        }
        return DatosT;
    }
    
    public Vector getAsuntosOficio2(int pidAsuIns)
    {
        Vector DatosUnicos = new Vector();
        Vector DatosTodos = new Vector();
        int y = 0;
        Conexion_oracle pool = new Conexion_oracle();
        System.out.println("Asunto ->" + pidAsuIns);
        try
        {
            Conexion_oracle _tmp = pool;
            Connection conn = Conexion_oracle.getConnection();
            DatosUnicos.clear();
            DatosTodos.clear();
            System.out.println("IO:" + pidAsuIns);
            CallableStatement cs = conn.prepareCall("{ call P_GeneraOfi_UneAsuConOK(?,?)} ");
            cs.setInt(1, pidAsuIns);
            cs.registerOutParameter(2, -10);
            cs.execute();
            ResultSet rs = ((OracleCallableStatement)cs).getCursor(2);
            ResultSetMetaData RSMD = rs.getMetaData();
            for(int u = 1; u <= RSMD.getColumnCount(); u++)
            {
                System.out.println(RSMD.getColumnName(u));
            }

            DatosTodos.clear();
            for(; rs.next(); DatosUnicos.clear())
            {
                for(int t = 1; t <= RSMD.getColumnCount(); t++)
                {
                    DatosUnicos.add(rs.getString(t));
                }

                DatosTodos.add(y, DatosUnicos.clone());
                y++;
            }

            cs.close();
            rs.close();
            conn.close();
            conn = null;
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        return DatosTodos;
    }

    public static void main(String args[])
    {
        AsuntoOficio as = new AsuntoOficio();
    }
}
