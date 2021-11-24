function MM_findObj(n, d) { //v4.0
  var p,i,x;  
  if(!d) d=document; 

  if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; 
	n=n.substring(0,p);

  }
  if(!(x=d[n])&&d.all) x=d.all[n]; 
  for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) 
	  x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n);
  return x;
}




function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  if ((obj=MM_findObj(args[i],parent.frames[0].document))!=null) { 
	  v=args[i+2];
	  if (obj.style) { 
		  obj=obj.style; 
		v=(v=='show')?'visible':(v=='hide')?'hidden':v; 
	  }
     obj.visibility=v; 
   }

}


function MM_clear(btn) { //v3.0
 var cad, obj; 
	   if ((obj = MM_findObj(btn,parent.frames[0].document)) != null)   {  
				cad=obj.src;
				iPunto=cad.indexOf(".gif");
				cad=cad.substring(0,iPunto-1);
				cad=cad+"0.gif";
		  	    obj.src = cad; 
			    obj.MM_up = cad; 
		     	obj.MM_dn = 0;

		 }
}



function MM_clearAll(opc) { //v3.0
 var cad, obj, nbArr, btn, args=MM_clearAll.arguments; 
  switch(opc) {

	case 1: MM_clear("btn_cons_saldos");			
			MM_clear("btn_cons_saldoscons");			
			MM_clear("btn_cons_movimientos");			
			MM_clear("btn_cons_estados");			
			MM_clear("btn_cons_operaciones");			
		break; 
	
	case 2: MM_clear("btn_trans_cuentasprop");
			MM_clear("btn_trans_cuentaster");
			MM_clear("btn_trans_inter");
			MM_clear("btn_trans_pago");
			
		break; 

	case 3: MM_clear("btn_inver_vista");
			MM_clear("btn_inver_plazo");
			MM_clear("btn_inver_728");
			MM_clear("btn_inver_cambio");
			MM_clear("btn_inver_fondos");
		break; 

	case 4: MM_clear("btn_pagos_telmex");
		break; 
	
	case 5: MM_clear("btn_admin_servicios");
			MM_clear("btn_admin_datos");
			MM_clear("btn_admin_seguridad");
			MM_clear("btn_admin_cuentas");
		break; 
		
  }
}


function MM_clearAllNav(nav) { //v3.0


		if (nav!="nav_tit_consul")
			MM_clear("nav_tit_consul");			

		if (nav!="nav_tit_transfer")
			MM_clear("nav_tit_transfer");			
		
		if (nav!="nav_tit_inver")
			MM_clear("nav_tit_inver");			

		if (nav!="nav_tit_pagos")
			MM_clear("nav_tit_pagos");			
		
		if (nav!="nav_tit_admin")
				MM_clear("nav_tit_admin");
	


}



function MM_changeImage() { //v3.0
 var i,img,nbArr,args=MM_changeImage.arguments; 
 var cad, iPunto,d;
 var consultas, transferencias,inversiones, pagos, administracion ;
 var objNav, imgName, nNav;


consultas="hide";
transferencias="hide";
inversiones="hide";
pagos = "hide";
administracion="hide";

 nNav=args[2];
 switch(nNav){
	case 1: objNav="nav_tit_consul";	consultas = "show";  		break;
	case 2: objNav="nav_tit_transfer";	transferencias = "show";	break;
	case 3: objNav="nav_tit_inver";		inversiones ="show";		break;
	case 4: objNav="nav_tit_pagos";		pagos = "show";				break;
	case 5: objNav="nav_tit_admin";		administracion="show";		break;
 }
	  
	  	MM_clearAll(nNav);
	  
	  if ((img = MM_findObj(args[0],parent.frames[0].document)) != null) {		
			cad=img.src;
			iPunto=cad.indexOf(".gif");
			cad=cad.substring(0,iPunto-1);
			cad=cad+"2.gif";
			if (cad!= img.src)	{
				img.src = cad;
				img.MM_up=0;
				img.MM_dn = img.src;
			} 
          }  

// Navegacion por modulo

		MM_clearAllNav(objNav);


          MM_showHideLayers("consultas","",consultas,"transferencias","",transferencias,"inversiones","",inversiones,"pagos","",pagos,"administracion","",administracion);

	  
	  if ((img = MM_findObj(objNav,parent.frames[0].document)) != null) {		
			cad=img.src;
			iPunto=cad.indexOf(".gif");
			cad=cad.substring(0,iPunto-1);
			cad=cad+"2.gif";
			if (cad!= img.src)	{
				img.src = cad;
				img.MM_up=0;
				img.MM_dn = img.src;
			}
          }  


	





}