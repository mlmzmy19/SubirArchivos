package Entidades;


public class Usuarios
{

    private String usuario;
    private int id_usuario;
    private int id_usr;
    private int id_ins;
    private int status;
    private String password;
    private int id_rol_usuario;
    private String descripcion_rol;
    private int id_deleg;
    private int edo_usr;
    private String nom_deleg;
    private String nom_usuario;
    private String respuesta;
    private String correo;

    public Usuarios()
    {
        status = 0;
    }

    public void setUsuario(String usuario)
    {
        this.usuario = usuario;
    }

    public void setId_usuario(int id_usuario)
    {
        this.id_usuario = id_usuario;
    }

    public void setId_usr(int id_usr)
    {
        this.id_usr = id_usr;
    }

    public void setId_ins(int id_ins)
    {
        this.id_ins = id_ins;
    }

    public void setStatus(int status)
    {
        this.status = status;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public void setId_rol_Usuario(int id_rol_usuario)
    {
        this.id_rol_usuario = id_rol_usuario;
    }

    public void setDescripcion_rol(String descripcion_rol)
    {
        this.descripcion_rol = descripcion_rol;
    }

    public void setId_deleg(int id_deleg)
    {
        this.id_deleg = id_deleg;
    }

    public void setEdo_usr(int edo_usr)
    {
        this.edo_usr = edo_usr;
    }

    public void setNom_deleg(String nom_deleg)
    {
        this.nom_deleg = nom_deleg;
    }

    public void setNom_usuario(String nom_usuario)
    {
        this.nom_usuario = nom_usuario;
    }

    public void setRespuesta(String respuesta)
    {
        this.respuesta = respuesta;
    }

    public void setCorreo(String correo)
    {
        this.correo = correo;
    }

    public String getUsuario()
    {
        return usuario;
    }

    public int getId_usuario()
    {
        return id_usuario;
    }

    public int getId_usr()
    {
        return id_usr;
    }

    public int getId_ins()
    {
        return id_ins;
    }

    public int getStatus()
    {
        return status;
    }

    public String getPassword()
    {
        return password;
    }

    public int getId_rol_Usuario()
    {
        return id_rol_usuario;
    }

    public String getDescripcion_rol()
    {
        return descripcion_rol;
    }

    public int getId_deleg()
    {
        return id_deleg;
    }

    public int getEdo_usr()
    {
        return edo_usr;
    }

    public String getNom_deleg()
    {
        return nom_deleg;
    }

    public String getNom_usuario()
    {
        return nom_usuario;
    }

    public String getRespuesta()
    {
        return respuesta;
    }

    public String getCorreo()
    {
        return correo;
    }
}
