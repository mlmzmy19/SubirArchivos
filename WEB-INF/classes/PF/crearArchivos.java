package PF;

import java.io.*;

public class crearArchivos
{

    public crearArchivos()
    {
    }

    public static void main(String args[])
        throws IOException
    {
        PrintWriter out;
        try
        {
            out = new PrintWriter(new FileWriter("prog3spiral.txt"));
        }
        catch(IOException e)
        {
            System.out.println("Unable to open file: prog3spiral.txt" + e);
        }
    }
}
