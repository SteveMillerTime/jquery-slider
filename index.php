<!doctype html>
<html>
<head>
	<meta charset=utf-8>
	<title>Steve Miller - jQuery Carousel Test</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

<div id="carousel">
	<ul> 
		<?php //This script will automatically pull all images from the images/ folder and display them in list form
		$directory = "images/";
		$images = glob($directory . "*.jpg");
		foreach($images as $image)
		{ echo "<li><img src='$image' alt='$image' /></li>"; }
		?>
	</ul>
</div>

<div id="carousel-nav">
	<button data-dir="prev">Previous</button>
	<button data-dir="next" id="next">Next</button>
</div>

<!--scripts are put at the bottom to help decrease load time-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="carousel.js"></script>

</body>
</html>