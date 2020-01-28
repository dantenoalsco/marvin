function tempo(t1, t2, unidade) {
    const date1 = new Date(t1).valueOf();
    const date2 = new Date(t2).valueOf();
    const diff = Math.abs(date1 - date2);
    
    const dias = 1000 * 60 * 60 * 24;
    const mes = dias * 30;
    const ano = mes * 12;
    
    if (unidade === 'dia')
            return Math.round(diff / dias);
    if (unidade ==='mês')
            return Math.round(diff / mes);
    if (unidade === 'ano')
            return Math.round(diff / ano);
}

