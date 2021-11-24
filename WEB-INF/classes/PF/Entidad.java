package PF;


public class Entidad
{

    private int idasuins;
    private int idusi;
    private int edo_archivo;
    private int consecutivo;
    private int id_recibido;
    private int si;
    private boolean respuesta;
    private String textorespuesta;
    private String path;
    private String nombre;
    private String extension;

    public Entidad()
    {
        idasuins = 0;
        idusi = 0;
        edo_archivo = 0;
        consecutivo = 0;
        id_recibido = 0;
        si = 1;
        respuesta = false;
        textorespuesta = "";
        path = "";
        nombre = "";
        extension = "";
    }

    public void setIdasuins(int idasuins)
    {
        this.idasuins = idasuins;
    }

    public void setIdusi(int idusi)
    {
        this.idusi = idusi;
    }

    public void setEdo_archivo(int edo_archivo)
    {
        this.edo_archivo = edo_archivo;
    }

    public void setRespuesta(boolean respuesta)
    {
        this.respuesta = respuesta;
    }

    public void setTextorespuesta(String textorespuesta)
    {
        this.textorespuesta = textorespuesta;
    }

    public void setPath(String path)
    {
        this.path = path;
    }

    public void setNombre(String nombre)
    {
        this.nombre = nombre;
    }

    public void setExtension(String extension)
    {
        this.extension = extension;
    }

    public void setConsecutivo(int consecutivo)
    {
        this.consecutivo = consecutivo;
    }

    public void setId_recibido(int id_recibido)
    {
        this.id_recibido = id_recibido;
    }

    public void setSi(int si)
    {
        this.si = si;
    }

    public int getIdasuins()
    {
        return idasuins;
    }

    public int getIdusi()
    {
        return idusi;
    }

    public int getEdo_archivo()
    {
        return edo_archivo;
    }

    public boolean getRespuesta()
    {
        return respuesta;
    }

    public String getTextorespuesta()
    {
        return textorespuesta;
    }

    public String getPath()
    {
        return path;
    }

    public String getNombre()
    {
        return nombre;
    }

    public String getExtension()
    {
        return extension;
    }

    public int getConsecutivo()
    {
        return consecutivo;
    }

    public int getId_recibido()
    {
        return id_recibido;
    }

    public int getSi()
    {
        return si;
    }
}
