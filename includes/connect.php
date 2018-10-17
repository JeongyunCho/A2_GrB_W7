<?php
$user = "root";
$password = "root"; //windows users leave this blank
$host = "localhost";
$db = "cooperInfo"; //db you named when importing

$conn = mysqli_connect($host, $user, $password, $db);

if(!$conn){
    echo "connection didn't work..";
    exit;
}

//echo "connected!"

// //get all the car data
// $myQuery = "SELECT * FROM mainmodel";

// // make the query
// $result = mysqli_query($conn, $myQuery);

// $rows = array();

// while($row = mysqli_fetch_assoc($result)){
//     $rows[] = $row;
// }

// // Instead of getting all the cars get only car
if (isset($_GET["carModel"])){ //check for a parameter
    $car = $_GET["carModel"];
    
    $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";

    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
}

//send the entire result set as a json encode array
echo json_encode($rows);
?>