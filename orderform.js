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
      
      elt = document.getElementById("drink");
      var drinkchoice = elt.options[elt.selectedIndex].value;
      
      function myFunction() {
           document.getElementById("secondOrder").style.display = "block";
      }

      //convert data to integers
      mac = parseInt(mac);
      if (mac != 0) {
          mac = mac + 0.80
      }
      
      cond1 = parseInt(cond1);
      cond2 = parseInt(cond2);
      cond3 = parseInt(cond3);
      drinkchoice = parseInt(drinkchoice);
      

      //calculate total value  
      var total = mac+cond1+cond2+cond3+drinkchoice; 

      //print value to  PicExtPrice 
      document.getElementById("PicExtPrice").value = total.toFixed(2);

 }
