
export const transformToMatrix = ( lista, columnas ) => {
    const matriz = []
    let k = -1;
    for( let i = 0; i < lista.length; i++ ){
        if ( i%columnas === 0 ) {
            k++;
            matriz[k] = []
        }
        matriz[k].push( lista[i] )
    }
    return matriz
}
