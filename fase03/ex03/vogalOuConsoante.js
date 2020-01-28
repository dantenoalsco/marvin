function vogalOuConsoante(letra) {
    const min = letra.toLowerCase();
    const letras = 'aeiou';
    if (letras.includes(min)) {
        return 'vogal';
    } else {
        return 'consoante';
    }
}
