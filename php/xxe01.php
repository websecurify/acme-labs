<?php

// ---

$xml = file_get_contents('php://input');
$doc = simplexml_load_string($xml, null, LIBXML_NOENT);

// ---

header('Content-type: text/xml');

// ---

?>
<doc>
	<message>Hello <?php echo $doc->name ?></message>
</doc>
