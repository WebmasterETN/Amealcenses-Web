<?php
function conectar(){
	// Datos de la base de datos
	$usuario = "webmaster-2020E";
	$password = "ETN$2020#WEBmasTer*$";
	$servidor = "localhost:3306";
	$basededatos = "ETNOFICINASWEB_REL";
	  
	// creación de la conexión a la base de datos con mysql_connect()
	$conexion = mysqli_connect( $servidor, $usuario, $password) or die ("No se ha podido conectar al servidor de Base de datos");

	// Selección del a base de datos a utilizar
	$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

    return $conexion;
}

function desconectar($conexion){
    $close = mysqli_close($conexion) 
        or die("Hubo un error con la desconexion de la base de datos");
    return $close;
}
?>