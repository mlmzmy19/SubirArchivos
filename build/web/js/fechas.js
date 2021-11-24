<!-- Begin
function calculate(day1,month1,year1) {

if (month1==1)
    month1="Jan";
else if(month1==2)
    month1="Feb";
else if(month1==3)
    month1="Mar";
else if(month1==4)
    month1="Apr";
else if(month1==5)
    month1="May";
else if(month1==6)
    month1="Jun";
else if(month1==7)
    month1="Jul";
else if(month1==8)
    month1="Aug";
else if(month1==9)
    month1="Sep";
else if(month1==10)
    month1="Oct";
else if(month1==11)
    month1="Nov";
else if(month1==12)
    month1="Dec";

var day = day1;
var month = month1;
var year="20"+year1;
var oyear=year

    wyear = year;
    dayborn = "";

var dob = " "+ year +", "+month + ",  "+day;
//alert (dob);
var thenx = new Date(dob);

var year=thenx.getYear();
if (year<100) year="19" + thenx.getYear();
else year=thenx.getYear();

if (year > 1969) wyear=year;
else {
if (oyear<1900) {
if (oyear>1800) {
wrelyear= (eval(oyear)-1801)%(28);
wyear = wrelyear+1981;
}
else wyear = 1970 
}
else
if (oyear>1900) {wrelyear= (eval(oyear)-1901)%(28); 
wyear= wrelyear+1985
}
else 
if (oyear==1900) {wyear= 1990;
   }              
}
//alert ("Año="+wyear);
//alert ("Mes="+month);
//alert ("Dia="+day);
var dob = " "+ wyear +", "+month + ",  "+day;
var thenx = new Date(dob);
 
var theday = thenx.getDay()+1;
var date=thenx.getDate();

var weekday = new Array(6);
weekday[1]="Domingo";
weekday[2]="Lunes";
weekday[3]="Martes";
weekday[4]="Miercoles";
weekday[5]="Jueves";
weekday[6]="Viernes";
weekday[7]="Sabado";
if (day != date) //alert("Sorry!  That appears to be an invalid date!"+day+" ..."+date+"::"+oyear+"..."+year+" "+dob+"=="+wyear+".-.-"+thenx+" "+day+" "+month);
{//alert("Fecha Incorrecta");
} 
else {
dayborn = weekday[theday];
dob = dayborn + ", " + month + " " + date + ", " + oyear + ".";
//alert("You were born on " + dob);
   }

return dayborn;
}
// End -->
