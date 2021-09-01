import React from 'react'
import { Redirect } from '../Redirect'
import { authState } from "../helpers"

export const ProtectedComponent : React.FunctionComponent<{userState: authState, redirecTo: string}>= (props) => {
    return (
        props.userState == authState.notLoged ?
            <Redirect to={props.redirecTo} />
        : props.userState == authState.loged &&
            <>{
                props.children
            }</>
    )
}
