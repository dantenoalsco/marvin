function por42(n1, n2) {
    let num = n1 + 42;
    while (num <= n2) {
        if (num % 42 === 0) {
            return num;
        }
        num++;
    }
    console.log("Não encontrado");
    return false;
}
