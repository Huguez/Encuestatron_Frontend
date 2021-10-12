
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
    encuestaDelete:     '[survey] Eliminar Encuesta',
    encuestaRemoveShow: '[survey] Quitar Encuesta',

    votoEnviarOpcion:   '[vote] Votar una opcion',
    votoUsuario:        '[vote] Obtener votos del Usuario',
    votoEncuesta:       '[vote] Obtener votos de una encuesta',
    votoAsoc:           '[vote] Obtener el voto de Usuario-encuesta',
    votoFinishChecking: '[vote] Terminar de checar', 

    uiOpenModal:        '[ui] Abrir Modal ' ,
    uiCloseModal:       '[ui] Cerrar Modal' ,
}