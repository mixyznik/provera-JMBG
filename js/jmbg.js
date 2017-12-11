var box = document.getElementById("vrednost");

function opa() {
     document.getElementById("upis").innerHTML = " ";
    document.getElementById("upis1").innerHTML = " ";
    document.getElementById("upis2").innerHTML = " ";
     document.getElementById("upis3").innerHTML = " ";
    document.getElementById("upis4").innerHTML = " ";
    
    
    var x = box.value;
    
    if (x.length==13) {
       document.getElementById("text").innerHTML = "ok";   }
        
   else if (x.length>13) {
      document.getElementById("text").innerHTML = "imate vise od 13 cifara";   
       return x; 
    }
    else if (x.length<13) {
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

       document.getElementById("text").innerHTML = "nije ispravan broj";
         return x;
    }
    else {
       document.getElementById("text").innerHTML = "maticni broj je validan"; 
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
    else {
         document.getElementById("upis").innerHTML = "datum rodjenja"+ " " +dd+".";  
    }
    if (mm>12) {
      document.getElementById("text").innerHTML = "neispravan mesec rodjenja";
        return mm;
        }
    else {
        document.getElementById("upis1").innerHTML = "mesec rodjenja"+ " " +mm+".";  
    }
    if (ggg>900) {
    document.getElementById("upis2").innerHTML = "godina rodjenja"+ " "+1 +ggg+".";  
    }
    else if (ggg>=0&&ggg<17) {
      document.getElementById("upis2").innerHTML = "godina rodjenja"+ " "+2 +GGG+".";    
    }
    
        
      if (rr==71) {
       document.getElementById("upis3").innerHTML = " Beograd region";   
    }
    
    if (rr==72) {
       document.getElementById("upis3").innerHTML = "Šumadija i Pomoravlje region";   
    }
    


    if (bbb<=499){
         document.getElementById("upis4").innerHTML = "pol: muski";   
    }
    else {
        document.getElementById("upis4").innerHTML = "pol: zenski";   
    }
    
   
    

}