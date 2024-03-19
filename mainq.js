function contarVocales() {
    var texto = document.getElementById('inputTexto').value;
    var vocalesEncontradas = texto.match(/[aeiouAEIOU]/g);
    var numeroDeVocales = vocalesEncontradas ? vocalesEncontradas.length : 0;

    document.getElementById('resultado').innerHTML = 'Número de vocales: ' + numeroDeVocales;
}