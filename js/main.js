window.onload = function () {
	  
 /* section */
  const info = document.getElementById('informacion');
  const show = document.getElementById('show');
  /* end */
  
  /* var repo */
  const apache = document.getElementById('apache');
  const git = document.getElementById('git');
  const pad = document.getElementById('pad');
  const repository = document.getElementById('repository');
  /* end repo */
  
  const name = document.getElementById('name');
  
  /* languaje */
  const languaje = document.getElementById('languaje');
  const c = document.getElementById('c');
  const python = document.getElementById('python');
  const multi = document.getElementById('multi');
  const shell = document.getElementById('shell');
  const sql = document.getElementById('sql');
  /* end */
  
  /* var info */
  const contacts = document.getElementById('contacts');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const direction = document.getElementById('direction');
  /* end info */
  
  name.innerText = 'Frederick Valdez';
  
  /* define languaje */
  c.innerText = 'C/C++';
  python.innerText = 'Python';
  multi.innerText = 'JavaScript, HTML, CSS';
  shell.innerText = 'Shell Script (Linux, basic Windows)';
  sql.innerText = 'SQL Query';
  languaje.innerText = 'Lenguajes de programacion';
  /* end Languaje */
  
  /* define info_user */
  direction.innerText = 'Direccion: Las Barias Bani, \nPronvincia Peravia, \nRepublica Dominicana';
  email.innerText = 'Correo: frederickgvaldez@gmail.com';
  contacts.innerText = 'Contactos';
  phone.innerText = 'Telefono: 8293130239';	
  
  /* define repository link */
  repository.innerText = 'Repositorios Link';
  pad.innerText = 'Launchpad.net';
  git.innerText = 'Github';
  apache.innerText = 'Apache Repository';
  /* end repository link */
  
  info.innerText = 'Informacion';
  show.innerText = '¡Hola! Te doy la bienvenida.' +
                   ' Soy un joven que, por diversas razones,' +
                   'no ha encontrado personas que me ayuden a explotar mi potencial' +
		           '.He creado esta página web para reflejar mi trabajo y lo que hago con pasión. ' +
		           'Espero que personas se interesen en ver mis proyectos y en mi potencial.' +
		           '\n\nPara acceder a los proyectos, busca la sección "Repositorio Link" y encontrarás fragmentos para explorar.' +
		           ' y tambien debajo';
		           
 const ts_info = document.getElementById('info_ts');
 ts_info.innerText = 'Este es un proyecto que desarrolle que se basa' +
                      ' En realizar las tareas de compilacion en linux.\n' +
                      '\nEn que consiste?\n\n' +
                      'En que el programa pueda realizar las tareas de compilacion, por que para crear un programa en un pc  se necesitan una serie de factores como ' +
                      'dependencias, bibliotecas de desarrollo y el programa que vas a crear, ' +
                      'entonces el programa hace todo eso solo escribir en un archivo en la carpeta del poreyecto deps. El programa es resiente';
                      
    
  const oslg_info = document.getElementById('info_oslg');
  oslg_info.innerText = 'Es un gestor de arranque o bootloader para pc basado en gnu grub,' +
                        'el proyecto se llamaba burg por lo que este proyecto fue abandonado,' +
                        'entonces lo descargue de internet y le realice adaptaciones para que sea compatible con las maquinas (PC) x64/32.\n' +
                        '\nQue hace?\n\nEn una PC Al iniciar la BIOS/UEFI esta busca el gestor de arraque y despligua el menu de arranque.';
                        
   const qrfx_info = document.getElementById('info_qrfx');
   qrfx_info.innerText = 'Es un recovery desarrollado para linux, el objetivo es remplazar friend-recovery tradicional,' +
                         ' este se ejecuta en el Servidor de pantallas Xorg Server de gnu linux.\n' + 
                         '\nQue hace?\n' + 
                         'Arreglar los paquetes rotos y ejecutar script ya sea en python u otro lenguaje atraves de bash.\n\n' +
                         'Actualmente esta en la version beta.';
   
  const swh = document.getElementById('info_swh');
  swh.innerText = 'Es un script escrito en python que se basa en enviar una solicitud al servidor' +  'o varias y la respuesta que envia es el encabezado (head), numero de respuesta, dns from ding, el ping testing.' +
' Usando el metodo GET';
};
