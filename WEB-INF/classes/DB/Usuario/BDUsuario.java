package DB.Usuario;

import DB.ConexionBD.Conexion_oracle;
import Entidades.Usuarios;
import java.io.PrintStream;
import java.sql.*;
import java.util.Hashtable;
import java.util.Vector;

public class BDUsuario
{

    public BDUsuario()
    {
    }

    public Hashtable busq_user(Usuarios usr)
    {
        Hashtable hash_usr = new Hashtable();
        String sql = "Select * from UNEUSUARIOS where usuario='" + usr.getUsuario() + "' and contrase\361a='" + usr.getPassword() + "' and baja=0";
        System.out.println("SQL=" + sql);
        boolean respuesta = false;
        int h = 0;
        hash_usr.clear();
        Conexion_oracle pool = new Conexion_oracle();
        try
        {
            Conexion_oracle _tmp = pool;
            Connection conn = Conexion_oracle.getConnection();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            if(rs.next())
            {
                System.out.println("id_usuario=" + rs.getString("descripci\363n"));
                respuesta = true;
                hash_usr.put("id_usuario", String.valueOf(rs.getInt("id")));
                hash_usr.put("nom_usuario", rs.getString("usuario"));
                hash_usr.put("baja", String.valueOf(rs.getInt("baja")));
                hash_usr.put("id_ins", rs.getString("idins"));
                hash_usr.put("descripcion", rs.getString("descripci\363n"));
                hash_usr.put("tipo_fun", rs.getString("tipo_fun"));
            }
            hash_usr.put("respuesta", String.valueOf(respuesta));
            stmt.close();
            rs.close();
            conn.close();
            conn = null;
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        System.out.println(respuesta);
        return hash_usr;
    }

    public Vector busquedagral(String campos, String tabla)
    {
        String sql = "Select " + campos + " from " + tabla + "";
        System.out.println(sql);
        int h = 0;
        Vector DatosT = new Vector();
        Vector Datos = new Vector();
        Conexion_oracle pool = new Conexion_oracle();
        DatosT.clear();
        Datos.clear();
        try
        {
            Conexion_oracle _tmp = pool;
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
        }
        return DatosT;
    }

    public Vector busquedagral2(String campos, String tabla)
    {
        String sql = "Select " + campos + " from " + tabla + "";
        System.out.println(sql);
        int h = 0;
        Vector DatosT = new Vector();
        Vector Datos = new Vector();
        Conexion_oracle pool = new Conexion_oracle();
        DatosT.clear();
        Datos.clear();
        try
        {
            Conexion_oracle _tmp = pool;
            Connection conn = Conexion_oracle.getConnection();
            Statement stmt = conn.createStatement();
            System.out.println("SQL=" + sql);
            ResultSet rs = stmt.executeQuery(sql);
            ResultSetMetaData RSMD = rs.getMetaData();
            for(; rs.next(); Datos.clear())
            {
                for(int i = 1; i <= RSMD.getColumnCount(); i++)
                {
                    Datos.add(rs.getBlob(i));
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
    }
}
