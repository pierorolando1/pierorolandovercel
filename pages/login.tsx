import React, { useEffect, useState } from 'react'
import { NormalPage } from '../components/NormalPage'
import LoginPage from '../components/LoginPage'
import { zeroLayout } from 'framer-motion/types/render/utils/state'
import Head from 'next/head'
import { NoProtectedComponent } from '../components/Auth/NoProtectedComponent'
import { firebase } from '../firebase.config'
import { authState } from '../helpers'
import { useDispatch } from 'react-redux'
import { login } from '../redux/auth/actions'

const Login = () => {

    const [user, setUser] = useState(authState.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async user => {
            if(user == null) {
                setUser(authState.notLoged)
            } else {
                const newUser = {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoUrl: user.photoURL,
                    email: user.email,
                }
                setUser(authState.loged),
                dispatch(login(newUser))
            }
        })
    }, [])


    
    return (
        <>
            <Head>
                <title>Fuera sapos</title>
            </Head>
            <NoProtectedComponent userState={user} redirecTo="/admin">
                <LoginPage />
            </NoProtectedComponent>
        </>
    )
}

export default Login
