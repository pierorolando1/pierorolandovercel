import { types } from '../types'

var initialState = {
    modalOpen: false
}


export const modalReducer = (state = initialState, action: {payload:any, type:string}) => {

    switch (action.type) {
        case types.openModal:
            return { ...state, modalOpen: true }

        case types.closeModal:
            return { ...state, modalOpen: false }

        default:
            return state;
    }

}