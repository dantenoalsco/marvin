function por42(n1, n2) {
    const target = n1 + 84;
    const round = Math.floor(target / 42) * 42;
    if (round < n2) {
        return round;
    } else {
        console.log("Não encontrado");
        return false;
    }
}
