import { types } from "../types/types";

export const setMsgError = ( msg ) => ({
    type: types.uiSetMsgError,
    payload: {
        msg
    }
})

export const cleanMsgError = () => ({
    type: types.uiCleanMsgError
})

export const openModal = () => ({
    type: types.uiOpenModal,
    payload: {
        openModal: true
    }
});

export const closeModal = () => ({
    type: types.uiCloseModal,
    payload: {
        openModal: false
    }
});