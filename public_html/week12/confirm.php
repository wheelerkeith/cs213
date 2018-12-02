<html>
	<head>
		<title>Rogue Nation Garage Confirmed Purchase</title>
		<link rel="stylesheet" type="text/css" href="week12.css">
		<?php session_start(); ?>
	</head>
	<body>
		<?php 
			if ($_POST['action'] === "confirm")
				echo 'Order Confirmed';
			else
				echo 'Order Canceled';
		?>
	</body>
</html>