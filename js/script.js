function mandandoMensagem(elementoHtml) {
    var textoHtml = elementoHtml.firstElementChild.innerText;
    var numeroDigitado = prompt("Digite seu número");
    var linkWhatsApp = `https://api.whatsapp.com/?phone=55${numeroDigitado}&text=${textoHtml}`;
    window.open(linkWhatsApp);
}


