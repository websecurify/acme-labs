<?php

$name = $_GET['name'];

# ---

$db = new PDO("sqlite::memory:");

# ---

$db->exec("SELECT $name");
