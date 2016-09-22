// still playing around with this...


<link rel="stylesheet" type="text/css"
      href="//fonts.googleapis.com/css?family=Annie+Use+Your+Telescope">
<link href="admin.css" rel="stylesheet">
  <!-- link to style sheet and also google font (unsure if this is working) -->


<body>
    <div class="nav" style="border-bottom: 2px solid #242222">
    <!-- navigation bar -->
        <div class="navcenter">
        <!-- links to home screen -->
          	<a href="index.html">MAC Truck</a>
        </div>
        <div class="navright">
          <!-- links to other pages-->
            <ul>
                  <li><a href="menu.html">Menu</a></li>
              	<li><a href="order.html">Order</a></li>
              	<li><a href="cater.html">Cater</a></li>
            	<li><a href="about.html">About</a></li>
             	<li><a href="contact-us.html">Contact Us</a></li>
            </ul>
        </div>
    </div>


     <div class="ordertable">

            <h1> MAC ORDERS </h1>
            <!-- creates table, first row with labels -->
                  <table>
                  <thead>
                  <tr>
                    <td>Mac</td>
                    <td>Cond1</td>
                    <td>Cond2</td>
                    <td>Cond3</td>
                    <td>Extra1</td>
                    <td>Extra2</td>
                    <td>Extra3</td>
                    <td>Drink</td>
                    <td>Name</td>
                    <td>Number</td>
                    <td>Delivery?</td>
                    <td>Building</td>
                    <td>Room</td>
                    <td>Total</td>
                </tr>
                </thead>
                <tbody>

  <?php
  /* still playing around with this, working with php and querying mySQL database */
  $servername = "localhost:3306";
  $username = "rcollins@localhost";
  $password = "password";
  $dbname = "mac_and_choose";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }


  $sql = "SELECT * FROM my_orders";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
      // output data of each row as fetched from database, input in corresponding columns+rows
      while($row = $result->fetch_assoc()) {
        ?>
        <form>
        <tr>
            <td><?php echo $row['macChoice']?></td>
            <td><?php echo $row['cond1']?></td>
            <td><?php echo $row['cond2']?></td>
            <td><?php echo $row['cond3']?></td>
            <td><?php echo $row['extracond1']?></td>
              <td><?php echo $row['extracond2']?></td>
                <td><?php echo $row['extracond3']?></td>
            <td><?php echo $row['drink']?></td>
            <td><?php echo $row['name']?></td>
            <td><?php echo $row['number']?></td>
            <td><?php echo $row['deliveryoptions']?></td>
            <td><?php echo $row['building']?></td>
            <td><?php echo $row['roomnumber']?></td>
            <td><?php echo $row['totalprice']?></td>
        </tr>
        <?php
      }}
        ?>
        </tbody>
        </table>
      </div>
      
      
      

      <div class="admintools">
      <!-- class for the admin so can delete orders from table (and thus the database) -->
          <h1> Delete order: </h1>
          <form>
              <input type="text" name="deleteinput" value="(name on order)">
              <input type="submit" value="Delete">
          </form>

          <?php
          /* accessing the database once again to delete orders from the database 
          if admin chooses to do so */
          
          $servername = "localhost:3306";
          $username = "rcollins@localhost";
          $password = "password";
          $dbname = "mac_and_choose";

          // Create connection
          $conn = new mysqli($servername, $username, $password, $dbname);
          // Check connection
          if ($conn->connect_error) {
              die("Connection failed: " . $conn->connect_error);
          }
          $input = $_GET['deleteinput'];
          if (isset($_GET['deleteinput'])) {
          $sql = "DELETE from my_orders WHERE name='$input' LIMIT 1";
          $result = $conn->query($sql);
        }
          ?>
      </div>
</body>
