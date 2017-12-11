var box = document.getElementById("vrednost");

function opa() {
    document.getElementById("upis").innerHTML = " ";
   
    document.getElementById("upis3").innerHTML = " ";
    document.getElementById("upis4").innerHTML = " ";
    
    
    var x = box.value;
    
   
   if (x.length>13) {
      document.getElementById("text").innerHTML = "imate vise od 13 cifara";   
       return x; 
    }
    if (x.length<13) {
       document.getElementById("text").innerHTML = "imate manje od 13 cifara"; 
        return x;
    }
    
     var res = x.split("");
    console.log(res);
    
     var m= (7*res[0]+6*res[1]+5*res[2]+4*res[3]+3*res[4]+2*res[5]+7*res[6]+6*res[7]+5*res[8]+4*res[9]+3*res[10]+2*res[11])%11;
    var K =11-m;
    console.log(m);
     console.log(K);

     if (m==1) {

       document.getElementById("text").innerHTML = "Nije ispravan broj";
         return x;
    }
    else {
       document.getElementById("text").innerHTML = "Matični broj je validan"; 
    }
   
    
    
   var DD=x.substring(0,2);
      var dd=Number(DD);
    console.log(dd);
    var MM=x.substring(2,4);
       var mm=Number(MM);
    console.log(mm);
    var GGG=x.substring(4,7);
        var ggg=Number(GGG);
    console.log(ggg);
    var RR=x.substring(7,9);
         var rr=Number(RR);
    console.log(rr);
    var BBB=x.substring(9,12);
          var bbb=Number(BBB);
    console.log(bbb);
    var K=x.substring(12);
          var k=Number(K);
    console.log(k);
    
    if (dd>31) {
      document.getElementById("text").innerHTML = "neispravan datum rodjenja";  
        return x;
        }
   
    
    if (mm>12) {
      document.getElementById("text").innerHTML = "neispravan mesec rodjenja";
        return mm;
        }
    
    
    if (ggg>900) {
    document.getElementById("upis").innerHTML = "Datum rodjenja"+ " "+dd+"." +mm+"." +1 +ggg+".";  
    }
    else if (ggg>=0&&ggg<17) {
      document.getElementById("upis").innerHTML = "Datum rodjenja"+ " "+dd+"." +mm+"."  +2 +GGG+".";    
    }
    
        
      if (rr==71) {
       document.getElementById("upis3").innerHTML = " Beograd region";   
    }
    
    if (rr==72) {
       document.getElementById("upis3").innerHTML = "Šumadija i Pomoravlje region";   
    }
    
     if (rr==73) {
       document.getElementById("upis3").innerHTML = "Niš region";   
    }
    
     if (rr==74) {
       document.getElementById("upis3").innerHTML = "Južna Morava region";   
    }
       if (rr==75) {
       document.getElementById("upis3").innerHTML = "Zaječar region";   
    }
       if (rr==76) {
       document.getElementById("upis3").innerHTML = "Podunavlje region";   
    }
       if (rr==77) {
       document.getElementById("upis3").innerHTML = "Podrinje i Kolubara region";   
    }
       if (rr==78) {
       document.getElementById("upis3").innerHTML = "Kraljevo region";   
    }
      if (rr==79) {
       document.getElementById("upis3").innerHTML = "Užice region";   
    }

    

    if (bbb<=499){
         document.getElementById("upis4").innerHTML = "Pol: muski";   
    }
    else {
        document.getElementById("upis4").innerHTML = "Pol: zenski";   
    }
    
   
    

}