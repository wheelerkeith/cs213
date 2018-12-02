<html>
  <head>
    <title>Week 11 : Problem 5</title>
  </head>
  <body>
    <p>
       <?php
          $x = $_POST['x'];
          $n = $_POST['n'];
          
          echo 'N x<sup>2</sup>';
          for ($i = 1, $product = 1; $i <= $n; $i++)
          {
              $product *= $x;
              echo "<br />$i - $product";
          }
       ?>
    </p>
  </body>
</html>