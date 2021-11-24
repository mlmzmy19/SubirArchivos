package BD_UneSio;

import DB.ConexionBD.Conexion_oracle;
import java.io.PrintStream;
import java.sql.*;
import java.util.ArrayList;
import java.util.Vector;
import oracle.jdbc.OracleCallableStatement;

public class SQL_UneSio
{

    public SQL_UneSio()
    {
    }

    public ArrayList getListado(int id_del, String f_inicio, String f_final)
    {
        Connection conn = null;
        CallableStatement cs = null;
        ResultSet rs = null;
        ResultSetMetaData RSMD = null;
        Conexion_oracle opendb = new Conexion_oracle();
        ArrayList filas = null;
        ArrayList tabla = new ArrayList();
        String reportes = "2348";
        try
        {
            //opendb;
            conn = Conexion_oracle.getConnection();
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        try
        {
label0:
            for(int j = 0; j < reportes.length(); j++)
            {
                cs = conn.prepareCall("{call P_Une_StatusAsunSioOK(?,?,?,?,?)} ");
                cs.setInt(1, id_del);
                cs.setString(2, f_inicio);
                cs.setString(3, f_final);
                cs.setInt(4, Integer.parseInt(reportes.substring(j, j + 1)));
                cs.registerOutParameter(5, -10);
                cs.execute();
                rs = ((OracleCallableStatement)cs).getCursor(5);
                RSMD = rs.getMetaData();
                do
                {
                    if(!rs.next())
                    {
                        continue label0;
                    }
                    filas = new ArrayList();
                    for(int i = 1; i <= RSMD.getColumnCount(); i++)
                    {
                        if(i == 1)
                        {
                            filas.add(Integer.toString(rs.getInt(i)));
                        } else
                        {
                            filas.add(rs.getString(i));
                        }
                    }

                    if(filas.get(11).toString().compareTo("0") == 0)
                    {
                        tabla.add(filas);
                        filas = null;
                    }
                } while(true);
            }

            if(cs != null)
            {
                cs.close();
                cs = null;
            }
            if(rs != null)
            {
                rs.close();
                rs = null;
            }
            if(conn != null)
            {
                conn.close();
                conn = null;
            }
        }
        catch(SQLException e)
        {
            System.out.println(e);
        }
        finally
        {
            try
            {
                if(cs != null)
                {
                    cs.close();
                    cs = null;
                }
                if(rs != null)
                {
                    rs.close();
                    rs = null;
                }
                if(conn != null)
                {
                    conn.close();
                    conn = null;
                }
            }
            catch(Exception e)
            {
                System.out.println(e);
            }
        }
        return tabla;
    }

    public ArrayList getRespuestaInst(int id_asuins)
    {
        Connection conn = null;
        CallableStatement cs = null;
        ResultSet rs = null;
        ResultSetMetaData RSMD = null;
        Conexion_oracle opendb = new Conexion_oracle();
        ArrayList filas = new ArrayList();
        try
        {
            //opendb;
            conn = Conexion_oracle.getConnection();
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        try
        {
            cs = conn.prepareCall("{ call P_DesgloseAsuntoUneOK(?,?)} ");
            cs.setInt(1, id_asuins);
            cs.registerOutParameter(2, -10);
            cs.execute();
            rs = ((OracleCallableStatement)cs).getCursor(2);
            RSMD = rs.getMetaData();
            for(; rs.next(); filas.add(Integer.toString(rs.getInt(9))))
            {
                filas.add(rs.getString(7));
            }

            if(cs != null)
            {
                cs.close();
                cs = null;
            }
            if(rs != null)
            {
                rs.close();
                rs = null;
            }
            if(conn != null)
            {
                conn.close();
                conn = null;
            }
        }
        catch(SQLException e)
        {
            System.out.println(e);
        }
        finally
        {
            try
            {
                if(cs != null)
                {
                    cs.close();
                    cs = null;
                }
                if(rs != null)
                {
                    rs.close();
                    rs = null;
                }
                if(conn != null)
                {
                    conn.close();
                    conn = null;
                }
            }
            catch(Exception e)
            {
                System.out.println(e);
            }
        }
        return filas;
    }

    public ArrayList getOficio(int id_asuins)
    {
        Connection conn = null;
        CallableStatement cs = null;
        ResultSet rs = null;
        ResultSetMetaData RSMD = null;
        Conexion_oracle opendb = new Conexion_oracle();
        ArrayList filas = null;
        ArrayList tabla = new ArrayList();
        try
        {
            //opendb;
            conn = Conexion_oracle.getConnection();
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        try
        {
            cs = conn.prepareCall("{ call P_GeneraOfi_UneAsuConOK(?,?)} ");
            cs.setInt(1, id_asuins);
            cs.registerOutParameter(2, -10);
            cs.execute();
            rs = ((OracleCallableStatement)cs).getCursor(2);
            RSMD = rs.getMetaData();
            while(rs.next()) 
            {
                filas = new ArrayList();
                for(int i = 1; i <= RSMD.getColumnCount(); i++)
                {
                    if(RSMD.getColumnType(i) == 2)
                    {
                        filas.add(Integer.toString(rs.getInt(i)));
                    } else
                    {
                        filas.add(rs.getString(i));
                    }
                }

                tabla.add(filas);
                filas = null;
            }
            if(cs != null)
            {
                cs.close();
                cs = null;
            }
            if(rs != null)
            {
                rs.close();
                rs = null;
            }
            if(conn != null)
            {
                conn.close();
                conn = null;
            }
        }
        catch(SQLException e)
        {
            System.out.println(e);
        }
        finally
        {
            try
            {
                if(cs != null)
                {
                    cs.close();
                    cs = null;
                }
                if(rs != null)
                {
                    rs.close();
                    rs = null;
                }
                if(conn != null)
                {
                    conn.close();
                    conn = null;
                }
            }
            catch(Exception e)
            {
                System.out.println(e);
            }
        }
        return tabla;
    }

    public Vector getListado2(int id_del, String f_inicio, String f_final, int pistatus)
    {
        Vector DatosUnicos = new Vector();
        Vector DatosTodos = new Vector();
        int y = 0;
        Conexion_oracle pool = new Conexion_oracle();
        System.out.println("id_del=" + id_del);
        System.out.println("f_inicio=" + f_inicio);
        System.out.println("f_final=" + f_final);
        try
        {
            Conexion_oracle _tmp = pool;
            Connection conn = Conexion_oracle.getConnection();
            DatosUnicos.clear();
            DatosTodos.clear();
            CallableStatement cs = conn.prepareCall("{ call P_Une_StatusAsunSioOK(?,?,?,?,?)} ");
            cs.setInt(1, id_del);
            cs.setString(2, f_inicio);
            cs.setString(3, f_final);
            cs.setInt(4, pistatus);
            cs.registerOutParameter(5, -10);
            cs.execute();
            ResultSet rs = ((OracleCallableStatement)cs).getCursor(5);
            ResultSetMetaData RSMD = rs.getMetaData();
            System.out.println("Num Col=" + RSMD.getColumnCount());
            for(int u = 1; u <= RSMD.getColumnCount(); u++)
            {
                System.out.println("Nom Col=" + RSMD.getColumnName(u));
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
        System.out.println("Numero de registros = " + DatosTodos.size());
        return DatosTodos;
    }

    public static void main(String args[])
    {
        SQL_UneSio x = new SQL_UneSio();
        ArrayList tabla = new ArrayList();
        tabla = x.getListado(93, "01012009", "30042009");
        for(int i = 0; i < tabla.size(); i++)
        {
            System.out.println(i + "-->" + tabla.get(i));
        }

    }
}
