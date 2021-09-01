import React from 'react'
import { NormalPage } from '../components/NormalPage'
import LoginPage from '../components/LoginPage'
import { zeroLayout } from 'framer-motion/types/render/utils/state'
import Head from 'next/head'

const Login = () => {
    
    return (
        <>
            <Head>
                <title>Fuera sapos</title>
            </Head>
            <LoginPage />
        </>
    )
}

export default Login
