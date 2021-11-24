package Utilidades;

import java.io.PrintStream;
import java.util.GregorianCalendar;

public class Fechas_doc
{

    public Fechas_doc()
    {
    }

    public String getIntmes(String mes)
    {
        String smes = "0";
        mes = mes.toUpperCase();
        if(mes.equals("ENERO"))
        {
            smes = "1";
        } else
        if(mes.equals("FEBRERO"))
        {
            smes = "2";
        } else
        if(mes.equals("MARZO"))
        {
            smes = "3";
        } else
        if(mes.equals("ABRIL"))
        {
            smes = "4";
        } else
        if(mes.equals("MAYO"))
        {
            smes = "5";
        } else
        if(mes.equals("JUNIO"))
        {
            smes = "6";
        } else
        if(mes.equals("JULIO"))
        {
            smes = "7";
        } else
        if(mes.equals("AGOSTO"))
        {
            smes = "8";
        } else
        if(mes.equals("SEPTIEMBRE"))
        {
            smes = "9";
        } else
        if(mes.equals("OCTUBRE"))
        {
            smes = "10";
        } else
        if(mes.equals("NOVIEMBRE"))
        {
            smes = "11";
        } else
        if(mes.equals("DICIEMBRE"))
        {
            smes = "12";
        }
        return smes;
    }

    public int[] FormatoFecha(String cadena)
    {
        int arr2[] = {
            0, 0, 0
        };
        String arr[] = cadena.split(" ");
        arr2[0] = Integer.parseInt(arr[0]);
        arr2[1] = Integer.parseInt(getIntmes(arr[2]));
        arr2[2] = Integer.parseInt(arr[4]);
        return arr2;
    }

    public long difDiasEntre2fechas(int Y1, int M1, int D1, int Y2, int M2, int D2)
    {
        GregorianCalendar date1 = new GregorianCalendar(Y1, M1, D1);
        GregorianCalendar date2 = new GregorianCalendar(Y2, M2, D2);
        long difms = date2.getTimeInMillis() - date1.getTimeInMillis();
        long difd = difms / 0x5265c00L;
        return difd;
    }

    public long DocumentoMayorFecha(String cadena)
    {
        int anio = 2009;
        int mes = 4;
        int dia = 23;
        int arrfch[] = FormatoFecha(cadena);
        long valor = difDiasEntre2fechas(arrfch[2], arrfch[1], arrfch[0], anio, mes, dia);
        return valor;
    }

    public static void main(String args[])
    {
        Fechas_doc x = new Fechas_doc();
        String cadf = "12 de Enero de 2010";
        long aplica = x.DocumentoMayorFecha(cadf);
        System.out.println("=>" + (aplica < 0L ? "No aplica: " + aplica : "Aplica: " + aplica));
    }
}
