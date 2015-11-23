 function calculatePrice(){

      //Get selected data  
	  "use strict";
      var elt = document.getElementById("macChoice");
      var mac = elt.options[elt.selectedIndex].value;

      elt = document.getElementById("firstCond");
      var cond1 = elt.options[elt.selectedIndex].value;

      elt = document.getElementById("secondCond");
      var cond2 = elt.options[elt.selectedIndex].value;

      //convert data to integers
      mac = parseFloat(mac).toFixed(2);
      cond1 = parseFloat(cond1).toFixed(2);
      cond2 = parseFloat(cond2).toFixed(2);

      //calculate total value  
      var total = mac+cond1+cond2; 

      //print value to  PicExtPrice 
      document.getElementById("PicExtPrice").value=total;

 }
