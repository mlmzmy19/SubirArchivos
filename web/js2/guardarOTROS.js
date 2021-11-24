function guardarOtrosProd(consec,text,ids,capa){
//alert("consec="+consec+",text="+text+",ids="+ids+",capa="+capa);
piUsi = document.registro.PiUsi.value;
    eval("FAjax_Otros('../../sioWEB/servlets/GuardaOtros','"+capa+"','consec='+consec+'&text='+text+'&ids='+ids+'&piUsi='+piUsi+'&capa='+capa,'POST');"); return false;

//servlets/Catalogos_otros
}

/*
eval("FAjax('../../sioWEB/servlets/Catalogos_otros','"+contenedor_selec.id+"','piTipo="+arr_int_tip[consec]+"&piPadre="+piPadre+"&descTipo=Otro&nombreSelect="+contenedor_selec.id+"&consec="+consec+"','POST');"); return false;    
*/