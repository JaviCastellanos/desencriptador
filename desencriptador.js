function encriptarTexto(texto) {
    const sustituciones = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    let textoEncriptado = texto.toLowerCase();
    for (const [letra, reemplazo] of sustituciones) {
        textoEncriptado = textoEncriptado.replaceAll(letra, reemplazo);
    }
    return textoEncriptado;
}
function desencriptarTexto(textoEncriptado) {
    const sustitucionesInversas = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    let textoOriginal = textoEncriptado.toLowerCase();
    for (const [reemplazo, letra] of sustitucionesInversas) {
        textoOriginal = textoOriginal.replaceAll(reemplazo, letra);
    }
    return textoOriginal;
}
function borrarContenido() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
    document.querySelector("#encriptarButton").removeAttribute("disabled");
    document.querySelector("#desencriptarButton").removeAttribute("disabled");
    document.querySelector("#encriptarButton").style.backgroundColor = "blue";
    document.querySelector("#desencriptarButton").style.backgroundColor = "blue";
}
function encriptar() {
    const textoOriginal = document.getElementById("inputText").value;
    const textoEncriptado = encriptarTexto(textoOriginal);
    document.getElementById("outputText").value = textoEncriptado;
    document.querySelector("#desencriptarButton").disabled = true;
    document.querySelector("#desencriptarButton").style.backgroundColor = "gray";
  }
  
  function desencriptar() {
    const textoEncriptado = document.getElementById("inputText").value;
    const textoOriginal = desencriptarTexto(textoEncriptado);
    document.getElementById("outputText").value = textoOriginal;
    document.querySelector("#encriptarButton").disabled = true;
    document.querySelector("#encriptarButton").style.backgroundColor = "gray";
  }

  




  function manejarEntradaTexto() {
    const textoOriginal = document.getElementById("inputText").value;
    const re = /[A-ZÀ-ÖØ-öø-ÿñÑáéíóúÁÉÍÓÚüÜ]/g;
    const contieneMayusculas = re.test(textoOriginal);
    //const contieneMayusculas = /[A-Z]/.test(textoOriginal);
  
    if (contieneMayusculas) {
      deshabilitarBotones();
      mostrarMensajeError("Lo sentimos, no se aceptan mayúsculas ni tampoco letras con acentos ni caracteres especiales");
    } else {
      habilitarBotones();
      esconderMensajeError();
    }
  
    // Encriptar o desencriptar según el botón presionado (código existente)
  }
  
  document.getElementById("inputText").addEventListener("keyup", manejarEntradaTexto);
  document.querySelector("#encriptarButton").addEventListener("click", encriptar);
  document.querySelector("#desencriptarButton").addEventListener("click", desencriptar);
  
  function deshabilitarBotones() {
    document.querySelector("#encriptarButton").disabled = true;
    document.querySelector("#encriptarButton").style.backgroundColor = "gray";
    document.querySelector("#desencriptarButton").disabled = true;
    document.querySelector("#desencriptarButton").style.backgroundColor = "gray";
  }
  
  function habilitarBotones() {
    document.querySelector("#encriptarButton").disabled = false;
    document.querySelector("#encriptarButton").style.backgroundColor = "";
    document.querySelector("#desencriptarButton").disabled = false;
    document.querySelector("#desencriptarButton").style.backgroundColor = "";
  }
  
  function mostrarMensajeError(mensaje) {
    document.getElementById("outputText").value = mensaje;
  }
  
  function esconderMensajeError() {
    document.getElementById("outputText").value = "";
  }
  

  function copiarTexto() {
    const textoACopiar = document.getElementById("outputText").value;
    navigator.clipboard.writeText(textoACopiar);
  
    // Bloquear y cambiar el color de los botones "Encriptar" y "Desencriptar"
    document.querySelector("#encriptarButton").disabled = true;
    document.querySelector("#encriptarButton").style.backgroundColor = "gray";
    document.querySelector("#desencriptarButton").disabled = true;
    document.querySelector("#desencriptarButton").style.backgroundColor = "gray";
  
    // Opcional: Mostrar mensaje de éxito (alerta o notificación)
  }