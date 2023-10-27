package PF;

import SQL.Asuntos;
import java.io.PrintStream;
import java.util.Vector;

// Referenced classes of package PF:
//            Entidad

public class BusqD
{

    public BusqD()
    {
    }

    public Entidad Bdasuins(Entidad ent)
    {
        Asuntos asu = new Asuntos();
        Vector Vbusq = new Vector();
        Vector Vbusqarch = new Vector();
        boolean respuesta = false;
        String path = "";
        String carpeta = "";
        int idrec = 0;
        Vbusq = asu.busquedagral(" id ", "unerecibidos where idasuins = " + ent.getIdasuins() + " and rownum<2");
        
        //path = "C:/AppServ/www/archivos_prueba";   //definir path de maquina para pruebas
        //path = "C:\\Users\\miguemtz\\Documents\\IOMEGA_320\\e\\Documents\\Visual Studio 2010\\Projects\\AppsMiguel\\SA\\subirArchivos\\archivos\\";   //definir path de maquina para pruebas
        //path = "C:\\doc\\archivos_prueba\\";   //definir path de maquina para pruebas
        
        
        path = "/archpdf/DELEGUNES/";//PRODUCCION
        
        //path = "//doc/archivos_prueba";
        
        String tam2 = ent.getNombre();
        ent.setExtension(ent.getNombre().split("\\.")[ent.getNombre().split("\\.").length - 1]);
        if(Vbusq.size() == 0)
        {
            System.out.println("No existe en unerecibidos el idasuins=" + ent.getIdasuins());
            ent.setEdo_archivo(0);
            idrec = 0;
            ent.setId_recibido(idrec);
        } else
        if(Vbusq.size() == 1)
        {
            System.out.println("Si existe en unerecibidos el idasuins=" + ent.getIdasuins());
            ent.setEdo_archivo(1);
            idrec = Integer.parseInt(((Vector)Vbusq.get(0)).get(0).toString());
            ent.setId_recibido(idrec);
        }
        asu = null;
        asu = new Asuntos();
        Vbusqarch = asu.busquedagral(" id_asuins ", " unedelegarchivosanex where id_asuins = " + ent.getIdasuins() + " and consecutivo=" + ent.getConsecutivo());
        if(Vbusqarch.size() == 0)
        {
            System.out.println("No existe en unedelegarchivosanex pero se agrego");
            respuesta = asu.Insertgral(ent);
        } else
        if(Vbusqarch.size() == 1)
        {
            System.out.println("Existe en unedelegarchivosanex pero se actualizo");
            respuesta = asu.Updategral(ent);
        }
        ent.setPath(path);
        ent.setRespuesta(respuesta);
        return ent;
    }
}
