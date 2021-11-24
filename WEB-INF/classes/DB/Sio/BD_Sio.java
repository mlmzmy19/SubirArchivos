package DB.Sio;

import DB.ConexionBD.Conexion_oracle;
import java.io.PrintStream;
import java.sql.*;
import java.util.Vector;
import oracle.jdbc.OracleCallableStatement;

public class BD_Sio
{

    public BD_Sio()
    {
    }
    /*
    public Vector busquedagral(String campos, String tabla)
    {
        String sql = "Select " + campos + " from " + tabla + "";
        System.out.println(sql);
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
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            ResultSetMetaData RSMD = rs.getMetaData();
            for(; rs.next(); Datos.clear())
            {
                for(int i = 1; i <= RSMD.getColumnCount(); i++)
                {
                    Datos.add(rs.getString(i));
                }

                DatosT.add(h, Datos.clone());
                h++;
            }

            stmt.close();
            rs.close();
            conn.close();
            conn = null;
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        return DatosT;
    }*/
    
    public Vector busquedagral(String campos, String tabla)
    {
        String sql = "Select " + campos + " from " + tabla + "";
        System.out.println(sql);
        int h = 0;
        Vector DatosT = new Vector();
        Vector Datos = new Vector();
        //Conexion_oracle pool = new Conexion_oracle();
        DatosT.clear();
        Datos.clear();
        try
        {
            Connection conn = Conexion_oracle.getConnection();
            Statement stmt = conn.createStatement();
            System.out.println("SQL=" + sql);
            ResultSet rs = stmt.executeQuery(sql);
            ResultSetMetaData RSMD = rs.getMetaData();
            for(; rs.next(); Datos.clear())
            {
                for(int i = 1; i <= RSMD.getColumnCount(); i++)
                {
                    Datos.add(rs.getString(i));
                }

                DatosT.add(h, Datos.clone());
                h++;
            }

            stmt.close();
            rs.close();
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
    
    public Vector P_DOCSDELEG_ASUINS(String pIDASUINS)
    {
        Vector DatosUnicos = new Vector();
        Vector DatosTodos = new Vector();
        int y = 0;
        Conexion_oracle pool = new Conexion_oracle();
        try
        {
            Connection conn = Conexion_oracle.getConnection();
            DatosUnicos.clear();
            DatosTodos.clear();
            System.out.println("USANDO PROCEDIMIENTO >> P_DOCSDELEG_ASUINS");
            CallableStatement cs = conn.prepareCall("{ call P_DOCSDELEG_ASUINS(?,?)} ");
            cs.setString(1, pIDASUINS);
            cs.registerOutParameter(2, -10);
            cs.execute();
            ResultSet rs = ((OracleCallableStatement)cs).getCursor(2);
            ResultSetMetaData RSMD = rs.getMetaData();
            DatosTodos.clear();
            System.out.println("Va a entrar al for del metodo P_DOCSDELEG_ASUINS");
            for(; rs.next(); DatosUnicos.clear())
            {
                for(int t = 1; t <= RSMD.getColumnCount(); t++)
                {
                    DatosUnicos.add(rs.getString(t));
                }

                DatosTodos.add(y, DatosUnicos.clone());
                y++;
            }

            System.out.println(DatosTodos);
            cs.close();
            rs.close();
            conn.close();
            conn = null;
        }
        catch(Exception e)
        {
            System.out.println(e);
            //log.escribe("Error: "+e);
        }
        return DatosTodos;
    }
}
