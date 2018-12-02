<html>
  <head>
    <title>Week 11 : Problem 4</title>
  </head>
  <body>
    <p>
       <?php
          $translator = array('one'      =>       'uno',
                              'two'      =>       'dos',
                              'three'    =>      'tres',
                              'four'     =>    'cuatro',
                              'five'     =>     'cinco',
                              'six'      =>      'seis',
                              'seven'    =>     'siete',
                              'eight'    =>      'ocho',
                              'nine'     =>     'nueve',
                              'ten'      =>      'diez',
                              'eleven'   =>      'once',
                              'twelve'   =>      'doce',
                              'thirteen' =>     'trece',
                              'fourteen' =>   'catorce',
                              'fifteen'  =>    'quince',
                              'sixteen'  => 'dieciséis',
                              'seventeen'=>'diecisiete',
                              'eighteen' => 'dieciocho',
                              'nineteen' =>'diecinueve',
                              'twenty'   =>    'veinte'
                              );
                              
          $english = $_POST['input4'];
          $spanish = $translator[$english];
          if ($spanish !== NULL)
          {
              echo "The word \"$english\" in Spanish is \"$spanish\"";
          }
          else
          {
              echo "The English cardinal \"$english\" is not between \"one\" and \"twenty\"";
          }
       ?>
    </p>
  </body>
</html>