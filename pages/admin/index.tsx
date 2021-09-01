import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ProtectedComponent } from '../../components/Auth/ProtectedComponent'
import { authState } from '../../components/helpers'
import { Redirect } from '../../components/Redirect'
import { firebase } from '../../firebase.config'

const AdminHome = () => {

    const [user, setUser] = useState(authState.loading)
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            user == null? setUser(authState.notLoged) : setUser(authState.loged)
        })
    }, [])

    return (
        <ProtectedComponent userState={user} redirecTo="/login">
            <h1>dafsa</h1>
        </ProtectedComponent>
    )
}

export default AdminHome
