function encriptar() {
    // Obtener el valor del textarea y de la clave
    let texto_original = document.getElementById("texto").value;
    let clave = document.getElementById("clave").value;

    // Verificar que ambos campos estén llenos
    if (texto_original === '' || clave === '') {
        alert('Por favor, ingresa tanto el texto como la clave.');
        return;
    }

    // Crear una cadena combinada con el texto y la clave
    let texto_combinado = clave + ':' + texto_original;

    // Codificar el texto combinado en Base64
    let texto_encriptado = btoa(texto_combinado);

    // Mostrar el texto encriptado en el HTML y ocultar la clave
    document.getElementById("Texto_encriptado").textContent = texto_encriptado;
    document.getElementById("clave").value = ''; // Limpiar el campo de clave
    document.getElementById("Texto_desencriptado").textContent = '';
}

function desencriptar() {
    // Obtener el valor del campo de texto encriptado y la clave
    let texto_encriptado = document.getElementById("Texto_encriptado").textContent;
    let clave = document.getElementById("clave").value;

    // Verificar que ambos campos estén llenos
    if (texto_encriptado === '' || clave === '') {
        alert('Por favor, ingresa la clave.');
        return;
    }

    // Decodificar el texto de Base64
    let texto_combinado = atob(texto_encriptado);

    // Separar la clave del texto desencriptado
    let partes = texto_combinado.split(':');
    let clave_correcta = partes[0];
    let texto_desencriptado = partes[1];

    // Verificar si la clave coincide
    if (clave === clave_correcta) {
        // Mostrar el texto desencriptado en el HTML
        document.getElementById("Texto_desencriptado").textContent = texto_desencriptado;
        document.getElementById("clave").value = ''; // Limpiar el campo de clave
    } else {
        alert('La clave es incorrecta.');
        document.getElementById("Texto_desencriptado").textContent = '';
    }
}

function limpiar() {
    // Limpiar los campos de texto, clave y resultados
    document.getElementById("texto").value = '';
    document.getElementById("clave").value = '';
    document.getElementById("Texto_encriptado").textContent = '';
    document.getElementById("Texto_desencriptado").textContent = '';
}
