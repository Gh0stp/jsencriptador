function encriptarTexto() {
    let entrada = document.getElementById('textoEntrada').value;
    entrada = entrada.toLowerCase();
    entrada = entrada.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    entrada = entrada.replace(/[^a-z\s]/g, '');
    let encriptar = entrada
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('textoSalida').value = encriptar;
}

function desencriptarTexto() {
    let entrada = document.getElementById('textoEntrada').value;
    entrada = entrada.toLowerCase();
    entrada = entrada.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    entrada = entrada.replace(/[^a-z\s]/g, '');
    let desencriptar = entrada
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('textoSalida').value = desencriptar;
}

function copyToClipboard() {
    let salida = document.getElementById('textoSalida');
    salida.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}