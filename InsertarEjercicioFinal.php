<?php
include "ConexionEjercicioFinal.php";
include "Comprobar.php";
$conexion = conexion();

if ( isset($_POST["nombre"],$_POST["apellido1"],$_POST["apellido2"], $_POST["email"], $_POST["login"], $_POST["pass"])
	and $_POST["nombre"]!="" and $_POST["apellido1"]!="" and $_POST["apellido2"]!="" and $_POST["email"]!="" and $_POST["login"]!="" and $_POST["pass"]!=""){ 

	$Comprobar_email=Comprobar($conexion,$_POST["email"]);
	if($Comprobar_email==0){

		if (preg_match('/^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/', $_POST["email"]) and
			(strlen($_POST["pass"]) >=4 and strlen($_POST["pass"])<=8))
			{
		// Recuperamos los datos del formulario
		$nombre = $_POST["nombre"];
		$apellido1 = $_POST["apellido1"];
		$apellido2 = $_POST["apellido2"];
		$email = $_POST["email"];
		$login = $_POST["login"];
		$password = $_POST["pass"];

		$fp = fopen('Insertar.sql', 'a');
		$datos = "('$nombre','$apellido1','$apellido2','$email','$login','$password');";

		fwrite ($fp,$datos);
		$ssql=file_get_contents('Insertar.sql');
		
		// Ejecutamos la sentencia y comprobamos si ha ido bien
		if($conexion->query($ssql)) {
		  echo "<p>Registro insertado con éxito</p>";
		   $aLineas = file("Insertar.sql");
		    array_splice($aLineas,1);
			$archivo = fopen("Insertar.sql", "w+b");
			foreach( $aLineas as $linea )
				fwrite($archivo, $linea);
		
		} else {
		  echo "<p>Hubo un error al ejecutar la sentencia de inserción: {$conexion->error}</p>";
		}
		$conexion->close();
		}
		else{
			echo '<p>Datos introducidos no correctos</p>';
			echo '<p>Por favor, complete el <a href="FormularioEjercicioFinal.php"formulario</a></p>'; 
		}
	}
	else{
		echo '<p>Por favor, complete el </p><a href="FormularioEjercicioFinal.php"formulario</a></p>'; 
	}
} 

else { 
echo '<p>Por favor, complete el </p><a href="FormularioEjercicioFinal.php"formulario</a></p>';  
}


?>
<p><a href="FormularioEjercicioFinal.html">Volver al formulario</a></p>
<form method="GET" action="Consulta.php">
	<input type="SUBMIT" value="Consulta">
</form>


