var req;

function ajaxFunction()
{

    var url = "servlet/FileUploadServlet";

    if (window.XMLHttpRequest) // Non-IE browsers
    { 
        req = new XMLHttpRequest();
        req.onReadyStateChange = processStateChange;

        try 
        {
            req.open("GET", url, true);
        } 
        catch (e) 
        {
            alert(e);
        }
        req.send(null);
    } 
    else if (window.ActiveXObject) // IE Browsers
    { 
        req = new ActiveXObject("Microsoft.XMLHTTP");

        if (req) 
        {
            req.onReadyStateChange = processStateChange;
            req.open("GET", url, true);
            req.send();
        }
    }
}

function processStateChange()
{

    /**
    *  State    Description
    *    0      The request is not initialized
    *    1      The request has been set up
    *    2      The request has been sent
    *    3      The request is in process
    *    4      The request is complete
    */
    if (req.readyState == 4)
    {
        if (req.status == 200) // OK response
        {
            
            var xml = req.responseXML;

            // No need to iterate since there will only be one set of lines
            var isNotFinished = xml.getElementsByTagName("finished")[0];
            var myBytesRead = xml.getElementsByTagName("bytes_read")[0];
            var myContentLength = xml.getElementsByTagName("content_length")[0];
            var myPercent = xml.getElementsByTagName("percent_complete")[0];

            // Check to see if it's even started yet
            if ((isNotFinished == null) && (myPercent == null))
            {
                document.getElementById("initializing").style.visibility = "visible";

                // Sleep then call the function again
                window.setTimeout("ajaxFunction();", 100);
            }
            else 
            {
                document.getElementById("initializing" ).style.visibility = "hidden";
                document.getElementById("progressBarTable" ).style.visibility = "visible";
                document.getElementById("percentCompleteTable" ).style.visibility = "visible";
                document.getElementById("bytesRead" ).style.visibility = "visible";

                myBytesRead = myBytesRead.firstChild.data;
                myContentLength = myContentLength.firstChild.data;

                if (myPercent != null) // It's started, get the status of the upload
                {
                    myPercent = myPercent.firstChild.data;

                    document.getElementById("progressBar").style.width = myPercent + "%";
                    document.getElementById("bytesRead").innerHTML = myBytesRead + " of " + 
                        myContentLength + " bytes read";
                    document.getElementById("percentComplete").innerHTML = myPercent + "%";

                    // Sleep then call the function again
                    window.setTimeout("ajaxFunction();", 100);
                }
                else
                {
                    document.getElementById("bytesRead").style.visibility = "hidden";
                    document.getElementById("progressBar").style.width = "100%";
                    document.getElementById("percentComplete").innerHTML = "Carga Completa!";
                }
            }
        }
        else
        {
            alert(req.statusText);
        }
    }
}


function comprueba_extension(formulario, archivo) { 

   //extensiones_permitidas = new Array(".pdf",".tif",".gif",".jpg",".war"); 
    extensiones_permitidas = new Array(".pdf"); 
   mierror = ""; 
   if (!archivo) { 
   
      //Si no tengo archivo, es que no se ha seleccionado un archivo en el formulario 
       mierror = "No has seleccionado ningún archivo"; 
       alert(mierror);
       return false;
   }else{ 

      //recupero la extensión de este nombre de archivo 
      extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase(); 
      //alert(extension);
      //alert (extension); 
      //compruebo si la extensión está entre las permitidas 
      permitida = false; 
      for (var i = 0; i < extensiones_permitidas.length; i++) { 
         if (extensiones_permitidas[i] == extension) { 
         permitida = true; 
         break; 
         } 
      } 
      if (!permitida) { 
         mierror = "Comprueba la extensión de los archivos a subir. \nSólo se pueden subir archivos con extensiones: " + extensiones_permitidas.join(); 
         alert (mierror);
       }else{ 
          //submito! 
         //alert ("Todo correcto. Voy a submitir el formulario."); 
         //formulario.submit(); 
         permitida = true;
       } 
   } 
   //si estoy aqui es que no se ha podido submitir 
   
   //alert(permitida);
   return permitida; 
   //onclick='return comprueba_extension(this.form,document.form.importFile.value)'
}
function testExt(form,valor){

/*var oas = new ActiveXObject("Scripting.FileSystemObject");
var d = document.a.b.value;var e = oas.getFile(d);var f = e.size;alert(f + " bytes");
*/
/*img = document.createElement("IMG"); 
img.src = document.getElementById("txtFile").value; 
alert(document.getElementById("txtFile").name);
img.id = "fotoFinal"; 
img.style.visibility = "hidden"; 
document.body.appendChild(img); 


//setTimeout("alert(\"--->\"+Math.round((document.getElementById('fotoFinal').fileSize / 1024)*Math.pow(10,2)) / Math.pow(10,2)); ",5000); 
setTimeout("alert(document.getElementById('fotoFinal').fileSize)",50000); 

 return false;
*/
    if(comprueba_extension(form,valor)){
           document.getElementById("inicializando" ).style.visibility = "visible";    
           return true;
    }else{
        return false;
    }
}




function showSize(f) {

if ((new Image()).fileSize) {
var img = new Image();
img.onload = imgOnload;
img.onerror = imgOnerror;
img.src = f.elements['txtFile'].value;
}
}
function imgOnload() {
if (this.fileSize) {
var size = this.fileSize;
if (size > 1024) {
size = Math.round((size / 1024) * 100) / 100;
}
document.write(
'The file is ' + size +
(this.fileSize > 1024 ? ' kilobytes' : ' bytes') +
' in size.'
);
}
}
function imgOnerror() {
alert('The file is not an image or did not load.');
}