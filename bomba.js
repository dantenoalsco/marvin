function rand(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarSerial() {
    const length = 6;
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";
    let i = 0;
    while (i < length) {
        retVal += charset.charAt(rand(charset.length));
        i++;
    }
    return retVal.concat(rand(9));
}

function escolherDaArray(arr) {
    return arr[rand(arr.length - 1)];
}

function gerarFios() {
    const fios = [];
    const tamanho = rand(6, 3);
    const cores = [
        'azul',
        'amarelo',
        'vermelho',
        'preto',
        'branco'
    ];
    let i = 0;
    while (i < tamanho) {
        fios[i] = escolherDaArray(cores);
        i++;
    }
    return fios;
}

function gerarBomba() {
    const bomba = {};
    const etiquetasPossiveis = ['CAR', 'NSI', 'JFK', null, null];
    bomba.serial = gerarSerial();
    bomba.baterias = rand(3);
    bomba.fios = gerarFios();
    bomba.etiquetas = [
        escolherDaArray(etiquetasPossiveis),
        escolherDaArray(etiquetasPossiveis),
    ];
    return bomba;
}

console.log(gerarBomba());
