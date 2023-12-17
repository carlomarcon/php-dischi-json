<?php
$jsson=file_get_contents('todos.json');
// var_dump($jsson);
$jsonArray=json_decode($jsson,true);

if (isset($_GET['index'])) {
    $selected_disk=$jsonArray[$_GET['index']];
    $json=json_encode($selected_disk);
}
else {
    $json=json_encode($jsonArray);
}
// var_dump($jsonArray);



// var_dump($json);

header('Content-Type: application/json');
echo $json;