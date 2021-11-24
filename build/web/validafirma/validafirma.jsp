

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<% 
 String validarUSR = request.getParameter("validarUSR");
 String idasuins = request.getParameter("idasuins");
 String idusi =  request.getParameter("idusi");
  String si =  request.getParameter("si");
  
String parametros = "validarUSR="+validarUSR+"&idasuins="+idasuins+"&idusi="+idusi+"&si="+si;
%>



<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Valida Firma</title>
        
       

<style>
    
    .boton {
    background-color:#4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

    
.subir{
    padding: 5px 10px;
    background: #4CAF50;
    color:#fff;
    border:0px solid #fff;
    display: block;
    width: 158px;
    border-radius: 7px;
    
}
 
.boton:hover , .subir:hover{
    color:#fff;
    background: #078A06;
}
#secreto {
    
   border-color:#078A06;;
    
}
.MAr
{
    position: relative;
    top:-10px;
    
    
}

    
    </style>


        
    </head>
    
    
    <%/*
HttpSession Sesion = request.getSession();      
String pathCert= (String) Sesion.getAttribute("pathCert");
//Sesion.invalidate(); // cerrar sesion rutas.
 */       %>
    
    <body>
        
    <center>
       
         
       
       <!-- <form id="validaForm" action="../ServletGuardaFirma" method="post" enctype="multipart/form-data" >-->
       <form id="validaForm"  method="post" enctype="multipart/form-data" >
            <table>
                <tr><img src="../img/HomeloginT.jpg"/></tr>
            <tr> <h1>Validación Firma Electrónica</h1>
                <h4>Versión 1.9</h4>
            </tr>
                <tr valign="top">
                    <td><Strong>Archivo .Cer</strong></td>
                    <td>
                        <%-- <input  type="file" name="filecer" id="filecer"  accept="application/cer"/>--%>
                        
                        
                        <label for="filecer" class="subir">
                          Subir archivo
                        </label>
                      <input id="filecer"  onchange='cambiar()' type="file" style='display: none;' name="filecer"  accept=".cer"/>
                      <div id="info"><p></p></div>
                        
                        
                    </td>                   
                </tr>
                <tr></tr>
                <tr valign="top">
                    <td><Strong>Archivo .Key</strong></td>
                    <td>
             <%--<input type="file" name="filekey" id="filekey"  accept="application/key"/>--%>
                  <label for="filekey" class="subir">
                          Subir archivo
                        </label>
                      <input id="filekey"  onchange='cambiar2()' type="file" style='display: none;' name="filekey"  accept=".key"/>
                                <div id="info2"><p></p></div>
             
                    </td>                    
                </tr>
                <tr></tr>
                 <tr>
                    <td><Strong>Contraseña</strong></td>
                    <td>
            <input type="password" name="secreto" id="secreto"  accept=""/>
                    </td>                    
                </tr>
                <tr></tr>
             </table>
            </br>
            <input  type="submit" id="submitID" name="submit" value="Validar Firma Electrónica"  class="boton" />
           
        </form>
       </center>

    </body>

       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
               <script type="text/javascript">
    $(document).ready(function() {
    
    //$(document).on("submit","#validaForm",function(e){
    $("#validaForm").submit(function(e) {
      
      
      /********validaciones *********/
      var valida = 1;  
     if( $("#filecer").get(0).files.length === 0)  
     { valida = 0; alert("No ha selecionado archivo CER.");}
     
      if( $("#filekey").get(0).files.length === 0)  
     { valida = 0; alert("No ha selecionado archivo KEY.");} 
     
     if($("#secreto").val().length < 1)
     { valida = 0; alert("No ha Capturado la CONTRASEÑA.");}
     
        
        /******** FIN validaciones *********/ 
       
       if (valida == 1) 
       {   
    e.preventDefault();    
    var formData = new FormData(this);
        //  ajax
    $.ajax({
        url: "/subirArchivos/ServletGuardarFirma",
        type: 'POST',
        data: formData,
        success: function (data) {
            var res =  parseInt(data);
            if (res == 200)
            {
            alert("FIRMA CORRECTA");
            $(location).attr('href','../index.jsp?<%=parametros%>');
            }
            else{
             alert('Datos Incorrectos');
                }
        },
        cache: false,
        contentType: false,
        processData: false
         }); // fin ajax
         
         }else{return false;}//fin if valida
}); //fin submit
    
    


});

function cambiar(){
    var pdrs = document.getElementById('filecer').files[0].name;
    document.getElementById('info').innerHTML = '<p class="MAr" style="color:blue;">'+ pdrs+'</p>';
}

function cambiar2(){
    var pdrs = document.getElementById('filekey').files[0].name;
    document.getElementById('info2').innerHTML = '<p class="MAr" style="color:blue;">'+ pdrs+'</p>';
}
</script>
</html>