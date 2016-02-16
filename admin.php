<link rel="stylesheet" type="text/css"
      href="//fonts.googleapis.com/css?family=Annie+Use+Your+Telescope">
<link href="admin.css" rel="stylesheet">

<body>
    <div class="nav" style="border-bottom: 2px solid #242222">
        <div class="navcenter">
          	<a href="index.html">MAC Truck</a>
        </div>
        <div class="navright">
            <ul>
                <li><a href="menu.html">Menu</a></li>
              	<li><a href="order.php">Order</a></li>
              	<li><a href="cater.html">Cater</a></li>
            	<li><a href="about.html">About</a></li>
             	<li><a href="contact-us.html">Contact Us</a></li>
            </ul>
         </div>
</div>


  <div class="ordertable">
    <h1> MAC ORDERS </h1>
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
      // output data of each row
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
          <h1> Delete order: </h1>
          <form>

              <input type="text" name="deleteinput" value="(name on order)">
              <input type="submit" value="Delete">
          </form>

          <?php

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
