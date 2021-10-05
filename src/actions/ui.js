import { types } from "../types/types";

export const startLoading = () => ({
    type: types.uiStartLoading,
    payload: {
        loading: true
    }
});

export const endLoading = () => ({
    type: types.uiEndLoading,
    payload: {
        loading: false
    }
});