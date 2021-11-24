package SQL;

import DB.ConexionBD.Conexion_oracle;
import PF.Entidad;
import java.io.PrintStream;
import java.sql.*;
import java.util.Vector;

public class Asuntos
{

    public Asuntos()
    {
    }

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
    }

    public boolean Insertgral(Entidad ent)
    {
        ResultSet rs = null;
        boolean respuesta = false;
        Connection conn = null;
        Conexion_oracle pool = new Conexion_oracle();
        try
        {
            Conexion_oracle _tmp = pool;
            conn = Conexion_oracle.getConnection();
            PreparedStatement psmt = conn.prepareStatement("insert into unedelegarchivosanex(id_recibido,id_asuins,edo_archivo,nombre,id_usi" +
",extension,consecutivo,tipo) values(?,?,?,?,?,?,?,?)"
);
            psmt.setInt(1, ent.getId_recibido());
            psmt.setInt(2, ent.getIdasuins());
            psmt.setInt(3, ent.getEdo_archivo());
            psmt.setString(4, ent.getNombre());
            psmt.setInt(5, ent.getIdusi());
            psmt.setString(6, ent.getExtension());
            psmt.setInt(7, ent.getConsecutivo());
            psmt.setInt(8, ent.getSi());
            if(!psmt.execute())
            {
                respuesta = true;
            } else
            {
                respuesta = false;
            }
            psmt.close();
            conn.close();
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        return respuesta;
    }

    public boolean Updategral(Entidad ent)
    {
        boolean respuesta = false;
        Connection conn = null;
        Conexion_oracle pool = new Conexion_oracle();
        try
        {
            Conexion_oracle _tmp = pool;
            conn = Conexion_oracle.getConnection();
            PreparedStatement psmt = conn.prepareStatement("update unedelegarchivosanex  set nombre=?, edo_archivo=?, id_usi=?, extension=?," +
" fecha=sysdate, tipo=? where id_asuins="
 + ent.getIdasuins() + " and consecutivo=" + ent.getConsecutivo());
            psmt.setString(1, ent.getNombre());
            psmt.setInt(2, ent.getEdo_archivo());
            psmt.setInt(3, ent.getIdusi());
            psmt.setString(4, ent.getExtension());
            psmt.setInt(5, ent.getSi());
            if(!psmt.execute())
            {
                respuesta = true;
            } else
            {
                respuesta = false;
            }
            psmt.close();
            conn.close();
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        return respuesta;
    }
}
