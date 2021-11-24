/* 
	Autor: 		Alfonso Valverio Gaytán
	Fecha: 		30 Mayo 2006
	Proyecto:	CNBV Nip 4 a 8 posiciones
	E-mail:		alfvalverio@altecmx-santander.com
	Version:	1.0
	
	JS creado para el manejo del tiempo de la session de SuperNet
*/


var secs = 0;
var timerID = null
var timerRunning = false
var delay = 100

function InitializeTimer(timeSession){

    secs = timeSession
    StopTheClock()
    StartTheTimer()
}

function StopTheClock(){
    if(timerRunning)
        clearTimeout(timerID)
    timerRunning = false
}

function StartTheTimer(){

    if (secs==120){
        alert("Tu sesión terminará en 2 minutos.");
    }

    if(secs==0){
        StopTheClock()
    }
    else{
        //window.self.status = secs
        secs = secs - 1
        timerRunning = true
        timerID = self.setTimeout("StartTheTimer()", delay)
    }
}
