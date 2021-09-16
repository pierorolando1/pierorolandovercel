
import Head from 'next/head'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AdminHomePage } from '../../components/AdminHome'
import { ProtectedComponent } from '../../components/Auth/ProtectedComponent'
import { GeneralPage } from '../../components/GeneralPage'
import { authState } from '../../helpers'
import { firebase } from '../../firebase.config'
import { login } from '../../redux/auth/actions'

const AdminHome = () => {    
    const dispatch = useDispatch()
    const [user, setUser] = useState(authState.loading)
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
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
            <link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet" />
        </Head>
        <ProtectedComponent userState={user} redirecTo="/login">
            <GeneralPage>
                <AdminHomePage />
            </GeneralPage>
        </ProtectedComponent>
        </>
    )
}

export default AdminHome
