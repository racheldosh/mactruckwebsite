function calculatePrice(){
// function for calculating the price of a regular order

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

      elt = document.getElementById("drink");
      var drinkchoice = elt.options[elt.selectedIndex].value;

      //convert data to integers
      mac = parseInt(mac);
      if (mac != 0) {
          mac = mac + 0.80;
      }

      cond4 = parseInt(cond4);
      cond5 = parseInt(cond5);
      cond6 = parseInt(cond6);
      drinkchoice = parseInt(drinkchoice);

      //calculate total value
      var total = mac+cond4+cond5+cond6+drinkchoice;

      //print value to PicExtPrice
      document.getElementById("PicExtPrice").value = total.toFixed(2);
 }
