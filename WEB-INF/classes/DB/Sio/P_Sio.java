package DB.Sio;

import DB.ConexionBD.Conexion_oracle;
import java.io.PrintStream;
import java.sql.*;
import java.util.Vector;
import oracle.jdbc.OracleCallableStatement;
import DB.Sio.logging.Log;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.nio.charset.StandardCharsets;
public class P_Sio
{

    Log log = new Log();

    public P_Sio()
    {
    }

    public Vector getListado(int id_del, String f_inicio, String f_final, int pistatus)
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

    public String hashSHA256(String password) throws NoSuchAlgorithmException {
        MessageDigest md = null;
        try {
                md = MessageDigest.getInstance("SHA-256");
                md.update(password.getBytes(StandardCharsets.UTF_8));

                byte[] bytes = md.digest();
                BigInteger bi = new BigInteger(1, bytes);
                String digest = String.format("%0" + (bytes.length << 1) + "x", bi);
                return digest;
        } 
        catch (NoSuchAlgorithmException e) {		
                e.printStackTrace();
                return null;
        }
    }

    
        public Vector P_UNE_DATOSACUSE(int idasuins, int idusuario, int i1aresp)
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
            System.out.println("Lamando al procedimiento  P_UNE_DATOSACUSE del oracle");
            System.out.println("idasuins: " + idasuins+"  idusuario: "+idusuario);
            System.out.println("");
            CallableStatement cs;
            ResultSet rs;
            if (i1aresp==1) {
                cs = conn.prepareCall("{ call  P_UNE_DATOSACUSE(?,?,?,?)} ");
                cs.setInt(1, idasuins);
                cs.setInt(2, idusuario);
                cs.registerOutParameter(3, -10);
                cs.setInt(4, 1);
                cs.execute();
                rs = ((OracleCallableStatement)cs).getCursor(3);
            } else {
                cs = conn.prepareCall("{ call  P_UNE_DATOSACUSE(?,?,?)} ");
                cs.setInt(1, idasuins);
                cs.setInt(2, idusuario);
                cs.registerOutParameter(3, -10);
                cs.execute();
                rs = ((OracleCallableStatement)cs).getCursor(3);                
            }
            ResultSetMetaData RSMD = rs.getMetaData();
            DatosTodos.clear();
            do
            {
                if(!rs.next())
                {
                    break;
                }
                if(rs.getString(1) != null)
                {
                    for(int t = 1; t <= RSMD.getColumnCount(); t++)
                    {
                        DatosUnicos.add(rs.getString(t));
                    }

                    DatosTodos.add(y, DatosUnicos.clone());
                    y++;
                    DatosUnicos.clear();
                }
            } while(true);
            cs.close();
            rs.close();
            conn.close();
            conn = null;
        }
        catch(Exception e)
        {
            //System.out.println(e);
            log.escribe("Error: "+e);
        }
        return DatosTodos;

    }

    
    public Vector getListado_Folio(String folio)
    {
        Vector DatosUnicos = new Vector();
        Vector DatosTodos = new Vector();
        int y = 0;
        Conexion_oracle pool = new Conexion_oracle();
        try
        {
            Conexion_oracle _tmp = pool;
            Connection conn = Conexion_oracle.getConnection();
            DatosUnicos.clear();
            DatosTodos.clear();
            CallableStatement cs = conn.prepareCall("{ call P_Une_StatusasuntosXFolioSIOOK(?,?)} ");
            cs.setString(1, folio);
            cs.registerOutParameter(2, -10);
            cs.execute();
            ResultSet rs = ((OracleCallableStatement)cs).getCursor(2);
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

    public Vector getDetalle(int id_asuins)
    {
        Vector DatosUnicos = new Vector();
        Vector DatosTodos = new Vector();
        int y = 0;
        Conexion_oracle pool = new Conexion_oracle();
        try
        {
            Conexion_oracle _tmp = pool;
            Connection conn = Conexion_oracle.getConnection();
            DatosUnicos.clear();
            DatosTodos.clear();
            CallableStatement cs = conn.prepareCall("{ call P_DesgloseAsuntoUneOK(?,?)} ");
            cs.setInt(1, id_asuins);
            cs.registerOutParameter(2, -10);
            cs.execute();
            ResultSet rs = ((OracleCallableStatement)cs).getCursor(2);
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
        return DatosTodos;
    }

    public Vector P_Une_AsuntosNoIniciados(int id_del, String f_inicio, String f_final)
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
            CallableStatement cs = conn.prepareCall("{ call P_Une_AsuntosNoIniciadosOK(?,?,?,?)} ");
            cs.setInt(1, id_del);
            cs.setString(2, f_inicio);
            cs.setString(3, f_final);
            cs.registerOutParameter(4, -10);
            cs.execute();
            ResultSet rs = ((OracleCallableStatement)cs).getCursor(4);
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

    public Vector P_UNEDELEGARCHIVOSESTAD()
    {
        Vector DatosUnicos = new Vector();
        Vector DatosTodos = new Vector();
        int y = 1;
        Conexion_oracle pool = new Conexion_oracle();
        try
        {
            Conexion_oracle _tmp = pool;
            Connection conn = Conexion_oracle.getConnection();
            DatosUnicos.clear();
            DatosTodos.clear();
            CallableStatement cs = conn.prepareCall("{ call P_UNEDELEGARCHIVOSESTADOK(?)} ");
            cs.registerOutParameter(1, -10);
            cs.execute();
            ResultSet rs = ((OracleCallableStatement)cs).getCursor(1);
            ResultSetMetaData RSMD = rs.getMetaData();
            System.out.println("Num Col=" + RSMD.getColumnCount());
            DatosUnicos.clear();
            DatosTodos.clear();
            for(int u = 1; u <= RSMD.getColumnCount(); u++)
            {
                System.out.println("Nom Col=" + RSMD.getColumnName(u));
            }

            for(int t2 = 1; t2 <= RSMD.getColumnCount(); t2++)
            {
                DatosUnicos.add(RSMD.getColumnName(t2));
            }

            DatosTodos.add(0, DatosUnicos.clone());
            DatosUnicos.clear();
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

    public Vector P_UnedelegarchivosestadVarios(int pidP, String nProc)
    {
        Vector DatosUnicos = new Vector();
        Vector DatosTodos = new Vector();
        int y = 1;
        Conexion_oracle pool = new Conexion_oracle();
        try
        {
            Conexion_oracle _tmp = pool;
            Connection conn = Conexion_oracle.getConnection();
            DatosUnicos.clear();
            DatosTodos.clear();
            CallableStatement cs = conn.prepareCall("{ call " + nProc + "(?,?)} ");
            cs.setInt(1, pidP);
            cs.registerOutParameter(2, -10);
            cs.execute();
            ResultSet rs = ((OracleCallableStatement)cs).getCursor(2);
            ResultSetMetaData RSMD = rs.getMetaData();
            System.out.println("Num Col=" + RSMD.getColumnCount());
            DatosUnicos.clear();
            DatosTodos.clear();
            for(int u = 1; u <= RSMD.getColumnCount(); u++)
            {
                System.out.println("Nom Col=" + RSMD.getColumnName(u));
            }

            for(int t2 = 1; t2 <= RSMD.getColumnCount(); t2++)
            {
                DatosUnicos.add(RSMD.getColumnName(t2));
            }

            DatosTodos.add(0, DatosUnicos.clone());
            DatosUnicos.clear();
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
        P_Sio p_sio = new P_Sio();
        System.out.println(p_sio.getDetalle(0x58b6e68));
    }
}
