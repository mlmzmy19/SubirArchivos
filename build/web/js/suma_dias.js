

  var aFinMesS1 = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 

  function finMesS1(nMesS1, nAnoS1){ 
   return aFinMesS1[nMesS1 - 1] + (((nMesS1 == 2) && (nAnoS1 % 4) == 0)? 1: 0); 
  } 

   function padNmbS1(nStrS1, nLenS1, sChrS1){ 
    var sResS1 = String(nStrS1); 
    for (var iS1 = 0; iS1 < nLenS1 - String(nStrS1).length; iS1++) 
     sResS1 = sChrS1 + sResS1; 
    return sResS1; 
   } 

   function makeDateFormatS1(nDayS1, nMonthS1, nYearS1){ 
    var sResS1; 
    sResS1 = padNmb(nDayS1, 2, "0") + "/" + padNmb(nMonthS1, 2, "0") + "/" + padNmb(nYearS1, 4, "0"); 
    return sResS1; 
   } 
    
  function incDateS1(sFec0S1){ 
   var nDiaS1 = parseInt(sFec0S1.substr(0, 2), 10); 
   var nMesS1 = parseInt(sFec0S1.substr(3, 2), 10); 
   var nAnoS1 = parseInt(sFec0S1.substr(6, 4), 10); 

   nDiaS1 += 1; 
   if (nDiaS1 > finMesS1(nMesS1, nAnoS1)){ 
    nDiaS1 = 1; 
    nMesS1 += 1; 
    if (nMesS1 == 13){ 
     nMesS1 = 1; 
     nAnoS1 += 1; 
    } 
   } 
   return makeDateFormatS1(nDiaS1, nMesS1, nAnoS1); 
  } 

  function decDateS1(sFec0S1){ 
   var nDiaS1 = Number(sFec0S1.substr(0, 2)); 
   var nMesS1 = Number(sFec0S1.substr(3, 2)); 
   var nAnoS1 = Number(sFec0S1.substr(6, 4)); 
   nDiaS1 -= 1; 
   if (nDiaS1 == 0){ 
    nMesS1 -= 1; 
    if (nMesS1 == 0){ 
     nMesS1 = 12; 
     nAnoS1 -= 1; 
    } 
    nDiaS1 = finMesS1(nMesS1, nAnoS1); 
   } 
   return makeDateFormatS1(nDiaS1, nMesS1, nAnoS1); 
  } 

  function addToDateS1(sFec0S1, sIncS1){ 
   var nIncS1 = Math.abs(parseInt(sIncS1)); 
   var sResS1 = sFec0S1; 
   if (parseInt(sIncS1) >= 0) 
    for (var iS1 = 0; iS1 < nIncS1; iS1++) sResS1 = incDateS1(sResS1); 
   else 
    for (var iS1 = 0; iS1 < nIncS1; iS1++) sResS1 = decDateS1(sResS1); 


    /*Modificamos la fecha para q se pueda trabajar*/

   return sResS1.substr(0, 6)+sResS1.substr(8, 2); 
    
  } 

  function recalcF1S1(form,fecha_tratar,numdias){ 
    //alert("--->"+fecha_tratar);
   with (document){ 
    //fecha1S1.value = addToDate('24/07/2007', 2); 
    return addToDateS1(fecha_tratar, parseInt(numdias)); 
   } 
  } 

