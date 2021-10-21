
export const types = {

    authLogin:          '[auth] Login',
    authRegister:       '[auth] Register',
    authLogout:         '[auth] Logout',
    authRenovarToken:   '[auth] Renovar Token',
    authFinChecking:    '[auth] Terminar de checar State Login ' ,
    
    encuestaLoad:       '[survey] Cargar Encuestas',
    encuestaCreate:     '[survey] Crear Encuesta',
    encuestaShow:       '[survey] Mostrar Encuesta',
    encuestaUpdate:     '[survey] Actualizar Encuesta',
    encuestaActive:     '[survey] Activar/Desactivar Encuesta',
    encuestaDelete:     '[survey] Eliminar Encuesta',
    encuestaRemoveShow: '[survey] Quitar Encuesta',
    encuestaRemoveGraph:'[survey] Quitar Grafica',
    encuestaClearGraph: '[survey] Quitar Loading',
    encuestaSearch:     '[survey] Search Loading',

    usuarioLoad:        '[usuarios] Cargar Usuarios',
    usuarioDelete:      '[usuarios] Eliminar Usuarios',
    usuarioChangeRol:   '[usuarios] Cambiar Rol del Usuarios',

    votoLoad:           '[vote] Cargar votos de una encuesta',
    votoEnviarOpcion:   '[vote] Votar una opcion',
    votoUsuario:        '[vote] Obtener votos del Usuario',
    votoEncuesta:       '[vote] Obtener votos de una encuesta',
    votoAsoc:           '[vote] Obtener el voto de Usuario-encuesta',
    votoFinishChecking: '[vote] Terminar de checar',
    votoClearState:     '[vote] Limpiar Estado',

    uiOpenModal:        '[ui] Abrir Modal ' ,
    uiCloseModal:       '[ui] Cerrar Modal' ,
}