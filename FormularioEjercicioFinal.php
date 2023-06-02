<!DOCTYPE html>
<html lang="es">
<head>
  <title>Formulario</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <script src="scriptEjercicioFinal.js" type="text/javascript"></script>
  <link rel="stylesheet" href="style.css" type="text/css"/>
</head>
<body>
  <div>
    <h1>Añadir un registro</h1>
    <br>
    <form method="POST" action="InsertarEjercicioFinal.php">
	<label for="Nombre">Nombre:</label><br>
      <input type="TEXT" id="nomid" name="nombre" class="campos" maxlength= "50" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,}" value="" placeholder="Introduzca nombre" required onblur="ValidarNombre();"><br>
	  <span id="nomb"></span>
      <br>
	  <label for="Apellido1">Primer apellido:</label><br>
      <input type="TEXT" id= "apeid" name="apellido1" class="campos" maxlength= "50" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,}" value="" placeholder="Introduzca primer apellido" required onblur="ValidarApellido();"><br>
	  <span id="surname"></span>
	  <br>
	  <label for="Apellido2">Segundo apellido:</label><br>
      <input type="TEXT" id= "apeid2" name="apellido2" class="campos" maxlength= "50" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,}" value="" placeholder="Introduzca segundo apellido" required onblur="ValidarApellido2();"><br>
	  <span id="surname2"></span>
	  <br>
	  <label for="email">Email:</label><br>
      <input type="text" id="mail" name="email" class="campos" maxlength= "100" pattern ="[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$" value ="" placeholder="Introduzca email" required onblur="ValidarEmail();"><br>
	  <span id="correo"></span>
	  <br>
	  <label for="login">Login:</label><br>
      <input type="TEXT" id= "user" name="login" class="campos" maxlength= "20" pattern ="[a-zA-ZñÑáéíóúÁÉÍÓÚ.]{3,}" value ="" placeholder="Introduzca login"required onblur="ValidarLogin();"><br>
	  <span id="usuario"></span>
	  <br>
	  <label for="pass">Password:</label><br>
      <input type="PASSWORD" id= "password" name="pass" class="campos"  value ="" placeholder="Introduzca contraseña entre 4 y 8 caracteres" required onblur="ValidarPassword();"><br>
	  <span id="contrasena"></span>
	  <br>
      <input id ="boton" type="SUBMIT" value="Enviar" onclick="Enviar();">
	  <br>
    </form>
  </div>
</body>
</html>