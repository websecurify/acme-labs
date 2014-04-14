<?php

$db = new PDO("sqlite::memory:");
$db->exec("CREATE TABLE blog (Id INTEGER PRIMARY KEY, text TEXT)");
