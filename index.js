function utolsoSzamjegy(n){
    if (n === undefined) {
        return "Nincs paraméter";
    }
    if (arguments.length > 1) {
        return "Egynél több paraméter";
    }
    if (isNaN(n)) {
        return "Nem szám a bemenet";
    }
    if(!isFinite(n)){
        return "Túlcsordulás";
    }
    return n % 10;
}
function sorozat(n){
    const LISTA = []
    for(let i = 0; i<n.length; i++ ){
        LISTA.push(utolsoSzamjegy(n[i]))
    }
    return LISTA.join(", ");
}
