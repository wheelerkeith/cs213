<html>
	<head>
	</head>
		<title>Rogue Nation Garage Purchase Review</title>
		<link rel="stylesheet" type="text/css" href="week12.css" />
		<?php
			session_start();
			$html = new domDocument;
			$html->loadHTML('week12.html');
			$total = $html->getElementById("price");
		?>
	<body>
		<form action="confirm.php" method="post">
			<h2><?php echo 'Order Confirmation'; ?></h2>
			<table>
				<tr>
					<td><?php echo 'Name: '    . $_POST['billingFName'] . ' ' . $_POST['billingLName']; ?></td>
				</tr>
				<tr>
					<td><?php echo 'Address: ' . $_POST['billingAddress1'] . ' ' . $_POST['billingAddress2'] . ', ' . $_POST['billingZip']; ?></td>
				</tr>
				<tr>
					<td><?php echo 'Phone: '   . $_POST['billingPhone']; ?></td>
				</tr>
				<tr>
					<td><?php echo 'Total: '   . $total->nodeValue; ?></td>
				</tr>
				<tr>
					<td><?php echo 'Card Number: ' . $_POST['cardNumber']; ?></td>
				</tr>
				<tr>
					<td><?php echo 'Expiration Date: ' . $_POST['expirationMonth'] . '/' . $_POST['expirationYear']; ?></td>
				</tr>
			</table>
			
			<button name="action" value="confirm">Confirm</button><br/>
			<button name="action" value="cancel">Cancel</button>
		</form>
	</body>
</html>