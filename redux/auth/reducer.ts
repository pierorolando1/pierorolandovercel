import { types } from '../types'

var initialState = {
    login: false
}

export const authReducer = (state = initialState, action: {payload:any, type:string}) => {

    switch (action.type) {
        case types.login:
            return { ...state, ...action.payload, login: true }

        case types.logout:
            return { login: false }

        case types.addUsername:
            return { ...state, username: action.payload }

        default:
            return state;
    }

}