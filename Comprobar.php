<?php
	
	function Comprobar($conexion,$email) 
	{
		$fp = fopen('Comprobar.sql', 'a');
		$datos = "('$email');";

		fwrite ($fp,$datos);
		$consulta =file_get_contents('Comprobar.sql');
		$Verif_Dato = mysqli_query($conexion, $consulta);
		$N_Dato = mysqli_num_rows($Verif_Dato);
		
		$aLineas = file("Comprobar.sql");
		array_splice($aLineas,1);
		$archivo = fopen("Comprobar.sql", "w+b");
		foreach( $aLineas as $linea )
			fwrite($archivo, $linea);
		
		
		if($N_Dato > 0) {
			// Existe el dato
			echo "El email <b>$email</b> existe.";
			return $N_Dato;
		} else {
			// No existe el dato
			return $N_Dato;
		}
		
	
	}
	
?>