 function calculatePrice(){

      //Get selected data  
 "use strict";
      var elt = document.getElementById("macChoice");
      var mac = elt.options[elt.selectedIndex].value;

      elt = document.getElementById("firstCond");
      var cond1 = elt.options[elt.selectedIndex].value;

      elt = document.getElementById("secondCond");
      var cond2 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("thirdCond");
      var cond3 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond1");
      var cond4 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond1");
      var cond5 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond1");
      var cond6 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond1");
      var cond7 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond1");
      var cond8 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond1");
      var cond9 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("drink");
      var drinkchoice = elt.options[elt.selectedIndex].value;
   
      $("#order2button").click(function() { 
          $("#secondOrder").toggle();
      });

      //convert data to integers
      mac = parseInt(mac);
      if (mac != 0) {
          mac = mac + 0.80
      }
      
      cond1 = parseInt(cond1);
      cond2 = parseInt(cond2);
      cond3 = parseInt(cond3);
      cond4 = parseInt(cond4);
      cond5 = parseInt(cond5);
      cond6 = parseInt(cond6);
      cond7 = parseInt(cond7);
      cond8 = parseInt(cond8);
      cond9 = parseInt(cond9);
      drinkchoice = parseInt(drinkchoice);
      

      //calculate total value  
      var total = mac+cond1+cond2+cond3+cond4+cond5+cond6+cond7+cond8+cond9+drinkchoice; 

      //print value to  PicExtPrice 
      document.getElementById("PicExtPrice").value = total.toFixed(2);

 }
