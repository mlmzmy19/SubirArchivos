package DB.ConexionBD;

import java.io.PrintStream;
import java.sql.*;
//import mx.gob.condusef.logging.Log;

// Referenced classes of package BD.ConexionBD:
//            OracleException

public class Conexion_oracle
{
    
   // static Log log = new Log();

    public static String driver = "oracle.jdbc.driver.OracleDriver";    

    public Conexion_oracle()
    {
    }

    public static Connection getConnection()
        throws OracleException
    {
        Connection conn = null;
        String connectDescriptor = "";
        try
        {
            Class.forName(driver);
        }
        catch(Exception e)
        {
            System.out.println(e);
            //log.escribe("Error: "+e);
        }
        try
        {
            /*
            connectDescriptor = "(DESCRIPTION=(LOAD_BALANCE=yes)(ADDRESS=(PROTOCOL=TCP)(HOST=10.33.1.176)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=siobk2d)))";
            conn = DriverManager.getConnection("jdbc:oracle:thin:@" + connectDescriptor, "sio", "siodesa");
            */
            connectDescriptor = "(DESCRIPTION=(LOAD_BALANCE=yes)(ADDRESS=(PROTOCOL=TCP)(HOST=10.33.1.176)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=siobk2D)))";
            //connectDescriptor = "(DESCRIPTION=(LOAD_BALANCE=yes)(ADDRESS=(PROTOCOL=TCP)(HOST=scan-prod.condusef.gob.mx)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=siobk2)))";
            //conn = DriverManager.getConnection("jdbc:oracle:thin:@" + connectDescriptor, "SIO", "siodesarrollo");
            conn = DriverManager.getConnection("jdbc:oracle:thin:@" + connectDescriptor, "sio", "desarrollo176");
            
            
            
            
            System.out.println("ConnectDescriptor: " + connectDescriptor);
            if(conn != null)
            {
                System.out.println("Connection succesful to DataBases");
            }
        }
        catch(SQLException ex)
        {
            System.out.println(ex);
            //log.escribe("Error: "+ex);
            throw new OracleException("OracleConnect.getConnection(): " + ex.getLocalizedMessage());
        }
        return conn;
    }

    public static void main(String args[])
    {
        Conexion_oracle oracle = new Conexion_oracle();
        Connection con = null;
        try
        {
            con = getConnection();
            if(con != null){
                System.out.println("si hay conexión");
            }
        }
        catch(Exception e)
        {
            System.out.println(e);
            //log.escribe("Error: "+e);
        }
    }

}
