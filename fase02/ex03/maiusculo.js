function maiusculo(str) {
    const inicio = str.substr(0, 3).toUpperCase();
    const fim = str.substr(3);
    return inicio + fim;
}
