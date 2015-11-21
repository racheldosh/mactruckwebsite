 function calculatePrice(){

      //Get selected data  
      var elt = document.getElementById("memoryItem");
      var memory = elt.options[elt.selectedIndex].value;

      elt = document.getElementById("hddItem");
      var hdd = elt.options[elt.selectedIndex].value;

      elt = document.getElementById("networkItem");
      var network = elt.options[elt.selectedIndex].value;

      //convert data to integers
      memory = parseInt(memory);
      hdd = parseInt(hdd);
      network = parseInt(network);

      //calculate total value  
      var total = memory+hdd+network; 

      //print value to  PicExtPrice 
      document.getElementById("PicExtPrice").value=total;

 }
