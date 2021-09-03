import { firebase } from "../../firebase.config";
import { types } from "../types";

export const login = (user) => ({
    type: types.login,
    payload: user
});

export const startLogout = () => {
    return async (dispatch: any) => {
        firebase.auth().signOut()
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout
})

export const addUsername = (username:string) => ({
    type: types.addUsername,
    payload: username
})