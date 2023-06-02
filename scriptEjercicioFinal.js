function Enviar(){

  if (document.getElementById('nomid').value=="" && document.getElementById('apeid').value=="" && document.getElementById('apeid2').value=="" && document.getElementById('mail').value=="" && document.getElementById('user').value=="" && document.getElementById('password').value=="")
  {
	  
	  document.getElementById('nomb').innerHTML="Rellene el campo nombre";
	  document.getElementById("nomb").style.color = "red";
	  document.getElementById('surname').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname").style.color = "red";
	  document.getElementById('surname2').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname2").style.color = "red";
	  document.getElementById('correo').innerHTML="Rellene el campo email";
	  document.getElementById("correo").style.color = "red";
	  document.getElementById('usuario').innerHTML="Rellene el campo login";
	  document.getElementById("usuario").style.color = "red";
	  document.getElementById('contrasena').innerHTML="Rellene el campo password";
	  document.getElementById("contrasena").style.color = "red";
	  
  }
  
  else if (document.getElementById('nomid').value=="" && document.getElementById('apeid').value=="" && document.getElementById('apeid2').value=="" && document.getElementById('mail').value=="" && document.getElementById('user').value=="" ){
	  
	  document.getElementById('password').innerHTML="";
	  document.getElementById('nomb').innerHTML="Rellene el campo nombre";
	  document.getElementById("nomb").style.color = "red";
	  document.getElementById('surname').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname").style.color = "red";
	  document.getElementById('surname2').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname2").style.color = "red";
	  document.getElementById('correo').innerHTML="Rellene el campo email";
	  document.getElementById("correo").style.color = "red";
	  document.getElementById('usuario').innerHTML="Rellene el campo login";
	  document.getElementById("usuario").style.color = "red";
  }
  else if (document.getElementById('nomid').value=="" && document.getElementById('apeid').value=="" && document.getElementById('apeid2').value=="" && document.getElementById('mail').value=="" && document.getElementById('password').value=="" ){
	  document.getElementById('usuario').innerHTML="";
	  document.getElementById('nomb').innerHTML="Rellene el campo nombre";
	  document.getElementById("nomb").style.color = "red";
	  document.getElementById('surname').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname").style.color = "red";
	  document.getElementById('surname2').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname2").style.color = "red";
	  document.getElementById('correo').innerHTML="Rellene el campo email";
	  document.getElementById("correo").style.color = "red";
	  document.getElementById('contrasena').innerHTML="Rellene el campo password";
	  document.getElementById("contrasena").style.color = "red";
  }
  
  else if (document.getElementById('nomid').value=="" && document.getElementById('apeid').value=="" && document.getElementById('apeid2').value=="" && document.getElementById('user').value=="" && document.getElementById('password').value=="")
  {
	  document.getElementById('correo').innerHTML="";
	  document.getElementById('nomb').innerHTML="Rellene el campo nombre";
	  document.getElementById("nomb").style.color = "red";
	  document.getElementById('surname').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname").style.color = "red";
	  document.getElementById('surname2').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname2").style.color = "red";
	  document.getElementById('usuario').innerHTML="Rellene el campo login";
	  document.getElementById("usuario").style.color = "red";
	  document.getElementById('contrasena').innerHTML="Rellene el campo password";
	  document.getElementById("contrasena").style.color = "red";
  }
  
  else if (document.getElementById('nomid').value=="" && document.getElementById('apeid').value=="" && document.getElementById('mail').value=="" && document.getElementById('user').value=="" && document.getElementById('password').value==""){
	  
	  document.getElementById('surname2').innerHTML="";
	  document.getElementById('nomb').innerHTML="Rellene el campo nombre";
	  document.getElementById("nomb").style.color = "red";
	  document.getElementById('surname').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname").style.color = "red";
	  document.getElementById('correo').innerHTML="Rellene el campo email";
	  document.getElementById("correo").style.color = "red";
	  document.getElementById('usuario').innerHTML="Rellene el campo login";
	  document.getElementById("usuario").style.color = "red";
	  document.getElementById('contrasena').innerHTML="Rellene el campo password";
	  document.getElementById("contrasena").style.color = "red";
  }
  
  else if (document.getElementById('nomid').value=="" && document.getElementById('apeid2').value=="" && document.getElementById('mail').value=="" && document.getElementById('user').value=="" && document.getElementById('password').value==""){
	  
	  document.getElementById('surname').innerHTML="";
	  document.getElementById('nomb').innerHTML="Rellene el campo nombre";
	  document.getElementById("nomb").style.color = "red";
	  document.getElementById('surname2').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname2").style.color = "red";
	  document.getElementById('correo').innerHTML="Rellene el campo email";
	  document.getElementById("correo").style.color = "red";
	  document.getElementById('usuario').innerHTML="Rellene el campo login";
	  document.getElementById("usuario").style.color = "red";
	  document.getElementById('contrasena').innerHTML="Rellene el campo password";
	  document.getElementById("contrasena").style.color = "red";
  }
  
    else if (document.getElementById('apeid').value=="" && document.getElementById('apeid2').value=="" && document.getElementById('mail').value=="" && document.getElementById('user').value=="" && document.getElementById('password').value==""){
	  
	  document.getElementById('nomb').innerHTML="";
	  document.getElementById('username').innerHTML="Rellene el campo nombre";
	  document.getElementById("username").style.color = "red";
	  document.getElementById('surname2').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname2").style.color = "red";
	  document.getElementById('correo').innerHTML="Rellene el campo email";
	  document.getElementById("correo").style.color = "red";
	  document.getElementById('usuario').innerHTML="Rellene el campo login";
	  document.getElementById("usuario").style.color = "red";
	  document.getElementById('contrasena').innerHTML="Rellene el campo password";
	  document.getElementById("contrasena").style.color = "red";
  }

  else if(document.getElementById('nomid').value=="")
  {
	  document.getElementById('surname').innerHTML="";
	  document.getElementById('surname2').innerHTML="";
	  document.getElementById('correo').innerHTML="";
	  document.getElementById('usuario').innerHTML="";
	  document.getElementById('contrasena').innerHTML="";
	  document.getElementById('nomb').innerHTML="Rellene el campo nombre";
	  document.getElementById("nomb").style.color = "red";
	  if(document.getElementById('apeid').value==""){
		 document.getElementById('surname').innerHTML="Rellene el campo apellido";
		 document.getElementById("surname").style.color = "red";
	  }
	  if(document.getElementById('apeid2').value==""){
		 document.getElementById('surname2').innerHTML="Rellene el campo apellido";
		 document.getElementById("surname2").style.color = "red";
	  }
	  if(document.getElementById('mail').value==""){
		 document.getElementById('correo').innerHTML="Rellene el campo email";
		 document.getElementById("correo").style.color = "red";
	  }
	  if(document.getElementById('user').value==""){
		 document.getElementById('usuario').innerHTML="Rellene el campo login";
		 document.getElementById("usuario").style.color = "red";
	  }
	  if(document.getElementById('password').value==""){
		 document.getElementById('contrasena').innerHTML="Rellene el campo password";
		 document.getElementById("contrasena").style.color = "red";
	  }
  }
  
  else if (document.getElementById('apeid').value==""){
	  document.getElementById('nomb').innerHTML="";
	  document.getElementById('surname2').innerHTML="";
	  document.getElementById('correo').innerHTML="";
	  document.getElementById('usuario').innerHTML="";
	  document.getElementById('contrasena').innerHTML="";
	  document.getElementById('surname').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname").style.color = "red";
	  if(document.getElementById('nomid').value==""){
		 document.getElementById('nomb').innerHTML="Rellene el campo nombre";
		 document.getElementById("nomb").style.color = "red";
	  }
	  if(document.getElementById('apeid2').value==""){
		 document.getElementById('surname2').innerHTML="Rellene el campo apellido";
		 document.getElementById("surname2").style.color = "red";
	  }
	  if(document.getElementById('mail').value==""){
		 document.getElementById('correo').innerHTML="Rellene el campo email";
		 document.getElementById("correo").style.color = "red";
	  }
	  if(document.getElementById('user').value==""){
		 document.getElementById('usuario').innerHTML="Rellene el campo login";
		 document.getElementById("usuario").style.color = "red";
	  }
	  if(document.getElementById('password').value==""){
		 document.getElementById('contrasena').innerHTML="Rellene el campo password";
		 document.getElementById("contrasena").style.color = "red";
	  }
  }
  
  else if (document.getElementById('apeid2').value==""){
	  document.getElementById('nomb').innerHTML="";
	  document.getElementById('surname2').innerHTML="";
	  document.getElementById('correo').innerHTML="";
	  document.getElementById('usuario').innerHTML="";
	  document.getElementById('contrasena').innerHTML="";
	  document.getElementById('surname2').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname2").style.color = "red";
	  if(document.getElementById('nomid').value==""){
		 document.getElementById('nomb').innerHTML="Rellene el campo nombre";
		 document.getElementById("nomb").style.color = "red";
	  }
	  if(document.getElementById('apeid').value==""){
		 document.getElementById('surname').innerHTML="Rellene el campo apellido";
		 document.getElementById("surname").style.color = "red";
	  }
	  if(document.getElementById('mail').value==""){
		 document.getElementById('correo').innerHTML="Rellene el campo email";
		 document.getElementById("correo").style.color = "red";
	  }
	  if(document.getElementById('user').value==""){
		 document.getElementById('usuario').innerHTML="Rellene el campo login";
		 document.getElementById("usuario").style.color = "red";
	  }
	  if(document.getElementById('password').value==""){
		 document.getElementById('contrasena').innerHTML="Rellene el campo password";
		 document.getElementById("contrasena").style.color = "red";
	  }
	  
  }
  
  else if (document.getElementById('mail').value==""){
	  document.getElementById('nomb').innerHTML="";
	  document.getElementById('surname').innerHTML="";
	  document.getElementById('surname2').innerHTML="";
	  document.getElementById('usuario').innerHTML="";
	  document.getElementById('contrasena').innerHTML="";
	  document.getElementById('correo').innerHTML="Rellene el campo email";
	  document.getElementById("correo").style.color = "red";
	  if(document.getElementById('nomid').value==""){
		 document.getElementById('nomb').innerHTML="Rellene el campo nombre";
		 document.getElementById("nomb").style.color = "red";
	  }
	  if(document.getElementById('apeid').value==""){
		 document.getElementById('surname').innerHTML="Rellene el campo apellido";
		 document.getElementById("surname").style.color = "red";
	  }
	  if(document.getElementById('apeid2').value==""){
		 document.getElementById('username2').innerHTML="Rellene el campo apellido";
		 document.getElementById("username2").style.color = "red";
	  }
	  if(document.getElementById('user').value==""){
		 document.getElementById('usuario').innerHTML="Rellene el campo login";
		 document.getElementById("usuario").style.color = "red";
	  }
	  if(document.getElementById('password').value==""){
		 document.getElementById('contrasena').innerHTML="Rellene el campo password";
		 document.getElementById("contrasena").style.color = "red";
	  }
  }
  
  else if(document.getElementById('user').value==""){
	  
	  document.getElementById('nomb').innerHTML="";
	  document.getElementById('surname').innerHTML="";
	  document.getElementById('surname2').innerHTML="";
	  document.getElementById('correo').innerHTML="";
	  document.getElementById('contrasena').innerHTML="";
	  document.getElementById('usuario').innerHTML="Rellene el campo login";
	  document.getElementById("usuario").style.color = "red";
	  if(document.getElementById('nomid').value==""){
		 document.getElementById('nomb').innerHTML="Rellene el campo nombre";
		 document.getElementById("nomb").style.color = "red";
	  }
	  if(document.getElementById('apeid').value==""){
		 document.getElementById('surname').innerHTML="Rellene el campo apellido";
		 document.getElementById("surname").style.color = "red";
	  }
	  if(document.getElementById('apeid2').value==""){
		 document.getElementById('surname2').innerHTML="Rellene el campo apellido";
		 document.getElementById("surname2").style.color = "red";
	  }
	  if(document.getElementById('mail').value==""){
		 document.getElementById('correo').innerHTML="Rellene el campo email";
		 document.getElementById("correo").style.color = "red";
	  }
	  if(document.getElementById('password').value==""){
		 document.getElementById('contrasena').innerHTML="Rellene el campo password";
		 document.getElementById("contrasena").style.color = "red";
	  }
	  
  }
  
  else if(document.getElementById('password').value==""){
	  
	  document.getElementById('nomb').innerHTML="";
	  document.getElementById('surname').innerHTML="";
	  document.getElementById('surname2').innerHTML="";
	  document.getElementById('correo').innerHTML="";
	  document.getElementById('user').innerHTML="";
	  document.getElementById('contrasena').innerHTML="Rellene el campo password";
	  document.getElementById("contrasena").style.color = "red";
	  if(document.getElementById('nomid').value==""){
		 document.getElementById('nomb').innerHTML="Rellene el campo nombre";
		 document.getElementById("nomb").style.color = "red";
	  }
	  if(document.getElementById('apeid').value==""){
		 document.getElementById('surname').innerHTML="Rellene el campo apellido";
		 document.getElementById("surname").style.color = "red";
	  }
	  if(document.getElementById('apeid2').value==""){
		 document.getElementById('surname2').innerHTML="Rellene el campo apellido";
		 document.getElementById("surname2").style.color = "red";
	  }
	  if(document.getElementById('mail').value==""){
		 document.getElementById('correo').innerHTML="Rellene el campo email";
		 document.getElementById("correo").style.color = "red";
	  }
	  if(document.getElementById('user').value==""){
		 document.getElementById('usuario').innerHTML="Rellene el campo login";
		 document.getElementById("usuario").style.color = "red";
	  }
  }

  
 }
function ValidarNombre()
{
	Nombre=document.getElementById('nomid').value;
    var validarNombre = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,}/;
	
	if(!validarNombre.test(Nombre)){
       document.getElementById('nomb').innerHTML="El nombre no es correcto";
       document.getElementById("nomb").style.color = "red";
	}
	else{
		document.getElementById('nomb').innerHTML="";
	
	}		
}

function ValidarApellido(){
	
	Apellido=document.getElementById('apeid').value;
	var validarApellido = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,}/;
	
	if(!validarApellido.test(Apellido)){
       document.getElementById('surname').innerHTML="El apellido no es correcto";
       document.getElementById("surname").style.color = "red";
	}
	else{
		document.getElementById('surname').innerHTML="";
	
	}

}

function ValidarApellido2(){
	
	Apellido2=document.getElementById('apeid2').value;
	var validarApellido2 = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,}/;
	
	if(!validarApellido2.test(Apellido2)){
       document.getElementById('surname2').innerHTML="El apellido no es correcto";
       document.getElementById("surname2").style.color = "red";
	}
	else{
		document.getElementById('surname2').innerHTML="";
	
	}
	
}

function ValidarEmail(){
	
	Email = document.getElementById('mail').value;
	var validarEmail = /^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/;
	
	if(!validarEmail.test(Email)){
       document.getElementById('correo').innerHTML="El email no es correcto";
       document.getElementById("correo").style.color = "red";
	}
	else{
		document.getElementById('correo').innerHTML="";
	
	}	
}

function ValidarLogin(){
	Login = document.getElementById('user').value;
	var validarLogin= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ.]{3,}/;
	
	if(!validarLogin.test(Login)){
       document.getElementById('usuario').innerHTML="El email no es correcto";
       document.getElementById("usuario").style.color = "red";
	}
	else{
		document.getElementById('usuario').innerHTML="";
	
	}
}

function ValidarPassword(){
	
	var longitud = document.getElementById("password");

	if(longitud.value.length > 8){
	 document.getElementById('contrasena').innerHTML="La password tiene que tener menos de 8 caracteres";
	 document.getElementById("contrasena").style.color = "red";
	}
	if(longitud.value.length <4){
	 document.getElementById('contrasena').innerHTML="La password tiene que tener más de 4 caracteres";
	 document.getElementById("contrasena").style.color = "red";
	}
	
	if(longitud.value.length >=4 && longitud.value.length <=8){
		document.getElementById('contrasena').innerHTML="";
	}
	
	
}
