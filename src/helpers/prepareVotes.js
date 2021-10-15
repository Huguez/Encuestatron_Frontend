
const colorAleatorio = () => Math.floor( Math.random() * 255 )

export const prepareVotes = ( votos ) => {

    const etiquetas = []
    const colores = []
    const dictAux = {}


    votos.forEach( ( { opcion } ) => {
        
        if( !etiquetas.includes( opcion ) ) {
            etiquetas.push( opcion )
        }

        dictAux[opcion] = ( dictAux[opcion] || 0 ) + 1

        colores.push( `rgba( ${ colorAleatorio() }, ${ colorAleatorio() }, ${ colorAleatorio() }, 1 )` )

    });
     
    let dato = Object.values( dictAux )
    return {  label: "Votos", etiquetas, dato, colores }
}

// datos: [
//     {
//         label: "Votos",
//         data: [ 12, 19, 3, 5, 2, 3 ],
//         backgroundColor: [
//             'rgba(100, 99, 132 )',
//             'rgba(54, 162, 235 )',
//             'rgba(255, 206, 86 )',
//             'rgba(75, 192, 192 )',
//             'rgba(153, 102, 255 )',
//             'rgba(255, 159, 64 )',
//         ],
//         borderWidth: 2,
//     },
// ],