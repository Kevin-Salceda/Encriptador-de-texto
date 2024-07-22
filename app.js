let encriptarBtn = document.querySelector('.button');
let desencriptarBtn = document.querySelector('.button2');
let copiarBtn = document.getElementById('copiar');
let muñeco = document.getElementById('muñeco');
let textoInput = document.getElementById('texto');
let terminosDiv = document.querySelector('.terminos');

encriptarBtn.addEventListener('click', encriptar);
desencriptarBtn.addEventListener('click', desencriptar);
copiarBtn.addEventListener('click', copiarTexto);

function encriptar() {
    let texto = textoInput.value;
    let tituloMensaje = document.getElementById('titulo-mensaje');
    let parrafo = document.getElementById('parrafo');

    // Verificar si el texto contiene mayúsculas
    if (/[A-Z]/.test(texto)) {
        terminosDiv.classList.add('resaltar');
        tituloMensaje.textContent = 'Error: Solo se permiten letras minúsculas';
        parrafo.textContent = 'Ingresa un texto válido';
        parrafo.classList.remove('encriptado');
        copiarBtn.style.display = 'none';
        muñeco.style.display = 'block';
        return; // Detener el proceso de encriptado
    } else {
        terminosDiv.classList.remove('resaltar');
    }

    let textoCifrado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    if (texto !== "") {
        tituloMensaje.textContent = 'Texto encriptado con éxito';
        parrafo.textContent = textoCifrado;
        parrafo.classList.add('encriptado');
        copiarBtn.style.display = 'block';
        muñeco.style.display = 'none'; 
    } else {
        tituloMensaje.textContent = 'Ningún mensaje fue encontrado';
        parrafo.textContent = 'Ingresa el texto que desees encriptar o desencriptar';
        parrafo.classList.remove('encriptado');
        copiarBtn.style.display = 'none';
        muñeco.style.display = 'block';
    }
}

function desencriptar() {
    let texto = textoInput.value;
    let tituloMensaje = document.getElementById('titulo-mensaje');
    let parrafo = document.getElementById('parrafo');

    // Verificar si el texto contiene mayúsculas
    if (/[A-Z]/.test(texto)) {
        terminosDiv.classList.add('resaltar');
        tituloMensaje.textContent = 'Error: Solo se permiten letras minúsculas';
        parrafo.textContent = 'Ingresa un texto válido';
        parrafo.classList.remove('encriptado');
        copiarBtn.style.display = 'none';
        muñeco.style.display = 'block';
        return; // Detener el proceso de desencriptado
    } else {
        terminosDiv.classList.remove('resaltar');
    }

    let textoDescifrado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    if (texto !== "") {
        tituloMensaje.textContent = 'Texto desencriptado con éxito';
        parrafo.textContent = textoDescifrado;
        parrafo.classList.add('encriptado');
        copiarBtn.style.display = 'block';
        muñeco.style.display = 'none'; 
    } else {
        tituloMensaje.textContent = 'Ningún mensaje fue encontrado';
        parrafo.textContent = 'Ingresa el texto que desees encriptar o desencriptar';
        parrafo.classList.remove('encriptado');
        copiarBtn.style.display = 'none';
        muñeco.style.display = 'block'; 
    }
}

function copiarTexto() {
    let parrafo = document.getElementById('parrafo');
    navigator.clipboard.writeText(parrafo.textContent).then(function() {
        mostrarMensaje('Texto copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
}

function mostrarMensaje(mensaje) {
    let mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.position = 'fixed';
    mensajeDiv.style.bottom = '20px';
    mensajeDiv.style.right = '20px';
    mensajeDiv.style.backgroundColor = '#333';
    mensajeDiv.style.color = '#fff';
    mensajeDiv.style.padding = '10px';
    mensajeDiv.style.borderRadius = '5px';
    mensajeDiv.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)';
    mensajeDiv.style.zIndex = '1000'; // Asegura que el mensaje esté sobre otros elementos
    document.body.appendChild(mensajeDiv);

    setTimeout(() => {
        mensajeDiv.remove();
    }, 2000); // El mensaje se muestra durante 2 segundos
}
