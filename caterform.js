function calculatePrice(){

      //Get selected data  
 "use strict";
      
      elt = document.getElementById("numPeople");
      var people = elt.options[elt.selectedIndex].value;

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
      
      elt = document.getElementById("extraCond13");
      var cond24 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond23");
      var cond25 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond33");
      var cond26 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond43");
      var cond27 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond53");
      var cond28 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond63");
      var cond29 = elt.options[elt.selectedIndex].value;

      //convert data to integers
      
      people = parseInt(people);
      
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
      
      cond24 = parseInt(cond24);
      cond25 = parseInt(cond25);
      cond26 = parseInt(cond26);
      cond27 = parseInt(cond27);
      cond28 = parseInt(cond28);
      cond29 = parseInt(cond29);
      

      //calculate total value  
      var total = people <!--+ (people)*cond4 + (people)*cond5 +(people)*cond6+(people)*cond7+(people)*cond8+(people)*cond9+
                    (people)*cond14+(people)*cond15+(people)*cond16+(people)*cond17+(people)*cond18+(people)*cond19+
                    (people)*cond24+(people)*cond25+(people)*cond26+(people*cond27)+(people)*cond28+(people)*cond29+
                    (people)*drinkchoice--> ;

      //print value to  PicExtPrice 
      document.getElementById("PicExtPrice").value = total.toFixed(2);

 }
 
 function myFunction() {
     document.getElementById("secondOrder").style.display = "block";
 }
 
 function myFunction2() {
     document.getElementById("thirdOrder").style.display = "block";
 }
