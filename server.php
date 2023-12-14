<?php
$jsson=file_get_contents('todos.json');
// var_dump($jsson);
$jsonArray=json_decode($jsson,true);
// var_dump($jsonArray);

$json=json_encode($jsonArray);

// var_dump($json);

header('Content-Type: application/json');
echo $json;