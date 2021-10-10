import { types } from "../types/types";

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