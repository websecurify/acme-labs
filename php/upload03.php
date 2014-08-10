<?php
	if (isset($_FILES['upfile']) && isset($_FILES['upfile']['error']) && $_FILES['upfile']['error'] == UPLOAD_ERR_OK) {
		header('Content-Type: text/html; charset=utf-8');
		
		// ---
		
		echo($_FILES['upfile']['name']);
		
		// ---
		
		error_log('all good!');
		
		// ---
		
		exit(0);
	}
?>
<html>
	<body>
		<form method="POST" enctype="multipart/form-data">
			<input type="file" name="upfile"/>
			<input type="submit"/>
		</form>
	</body>
</html>