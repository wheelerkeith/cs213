<html>
  <head>
    <title>Week 11 : Problem 6</title>
  </head>
  <body>
    <p>
       <?php
          $words = explode(', ', $_POST['input6']);
          sort($words);
          foreach($words as $word)
          {
              echo "$word<br />";
          }
       ?>
    </p>
  </body>
</html>