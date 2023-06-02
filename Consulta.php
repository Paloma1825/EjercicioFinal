<?php
	include "ConexionEjercicioFinal.php";

	$conexion = conexion();
	$consulta=file_get_contents('ConsultaGet.sql');
	if($resultado = $conexion->query($consulta)){
		
		while ($fila = $resultado->fetch_assoc())
		{ 
			echo "<p>"; 
			echo $fila["ID"]; 
			echo " - "; // un separador 
			echo $fila["Nombre"]; 
			echo " - "; // un separador 
			echo $fila["Apellido1"]; 
			echo " - "; // un separador
			echo $fila["Apellido2"]; 
			echo " - "; // un separador
			echo $fila["Email"]; 
			echo " - "; // un separador 
			echo $fila["Login"]; 
			echo " - "; // un separador 
			echo $fila["Password"]; 
			echo "</p>"; 
		}
		
	}
?>
<p><a href="FormularioEjercicioFinal.html">Volver al formulario</a></p>
