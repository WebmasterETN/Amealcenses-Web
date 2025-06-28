<?php
$opcion = $_POST['opcion'];
$cve_oficina = $_POST["elemento"];

require_once ("conexion.php");

if ($opcion==1) {
	$conexion = conectar();

	$consulta = "SELECT TRIM(ACLAVEOFICINADESTINO) AS ACLAVEOFICINADESTINO, TRIM(ADESCRIPCIONREG) AS ADESCRIPCIONREG, TRIM(AESTADOREG) AS AESTADOREG, TRIM(AFAVORITAREG) AS AFAVORITAREG
        FROM VTOFICINASWEB_REL
        WHERE LACTIVA = 1
        AND TRIM(ACLAVEOFICINAORIGEN) = TRIM('$cve_oficina')
        ORDER BY ADESCRIPCIONREG ";
	$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

    $num_rows=$resultado->num_rows;
    if($num_rows<=10){
        $tot_columas=1;
    } elseif ($num_rows>10 && $num_rows<=20) {
        $tot_columas=2;
    } elseif ($num_rows>20 && $num_rows<=40) {
        $tot_columas=3;
    } elseif ($num_rows>40 && $num_rows<=50) {
        $tot_columas=4;
    } elseif ($num_rows>50) {
        $tot_columas=5;
    }
    $cont_ren = 0;
    $cont_col = 1;
    $tot_elem_col = round($num_rows/$tot_columas);
    if($num_rows>0){

        echo '<ul class="sub-list">';
        
        foreach ($resultado as $columna) {

            if($columna['AFAVORITAREG']=="SI"){
                $clase="tbold";
            } else {
                $clase="";
            }

            echo "<li><a href='#' class='sel_destino $clase' onclick='form2val(this)' data-estado='".$columna['AESTADOREG']."' data-clave='".$columna['ACLAVEOFICINADESTINO']."' data-nombre='".strtolower($columna['ADESCRIPCIONREG'])."' data-nombrest='".$columna['AESTADOREG']."'>".strtolower($columna['ADESCRIPCIONREG'])." <span clase='nombre-estado'>(".$columna['AESTADOREG'].")</span></a></li>";

            if(($cont_ren%$tot_elem_col)==0 && $cont_ren>0 && $cont_col<=$tot_columas-1) {
                echo '</ul>';
                echo '<ul class="sub-list">';
                $cont_col = $cont_col + 1;
            }    
            $cont_ren = $cont_ren + 1;
        }
        echo '</ul>';
    }
	mysqli_close( $conexion );
}
?>
