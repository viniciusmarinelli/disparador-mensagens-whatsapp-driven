function mandandoMensagem(elementoHtml) {
    var textoHtml = elementoHtml.firstElementChild.innerText;
    var numeroDigitado = prompt("Digite seu número");
    var linkWhatsApp = `https://wa.me/55${numeroDigitado}?text=${textoHtml}`;
    window.open(linkWhatsApp);
}


