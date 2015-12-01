 function calculatePriceC(){

      //Get selected data  
 "use strict";
      var elt = document.getElementById("macChoice");
      var mac = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond1");
      var cond4 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond2");
      var cond5 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond3");
      var cond6 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond4");
      var cond7 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond5");
      var cond8 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond6");
      var cond9 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("drink");
      var drinkchoice = elt.options[elt.selectedIndex].value;
   
      elt = document.getElementById("macChoice2");
      var mac2 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("firstCond2");
      var cond12 = elt.options[elt.selectedIndex].value;

      elt = document.getElementById("secondCond2");
      var cond22 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("thirdCond2");
      var cond32 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond12");
      var cond42 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond22");
      var cond52 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond32");
      var cond62 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond42");
      var cond72 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond52");
      var cond82 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond62");
      var cond92 = elt.options[elt.selectedIndex].value;
      
    

      //convert data to integers
      mac = parseInt(mac);
      if (mac !== 0) {
          mac = mac + 0.80;
      }
      
      mac2 = parseInt(mac2);
      if(mac2 !== 0) {
         mac = mac + 0.80;
      }
      
     
      cond4 = parseInt(cond4);
      cond5 = parseInt(cond5);
      cond6 = parseInt(cond6);
      cond7 = parseInt(cond7);
      cond8 = parseInt(cond8);
      cond9 = parseInt(cond9);
      drinkchoice = parseInt(drinkchoice);
      
      
      cond42 = parseInt(cond42);
      cond52 = parseInt(cond52);
      cond62 = parseInt(cond62);
      cond72 = parseInt(cond72);
      cond82 = parseInt(cond82);
      cond92 = parseInt(cond92);
     
      

      //calculate total value  
      var total = mac+cond4+cond5+cond6+cond7+cond8+cond9+drinkchoice+mac2+cond42+cond52+cond62+cond72+cond82+cond92; 

      //print value to  PicExtPrice 
      document.getElementById("PicExtPriceC").value = total.toFixed(2);

 }
 
 function myFunction() {
  "use strict";
     document.getElementById("secondOrder").style.display = "block";
 }
 
 function myFunction2() {
  "use strict";
     document.getElementById("thirdOrder").style.display = "block";
     
 }
  
