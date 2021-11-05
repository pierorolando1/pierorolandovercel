import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase.config'
import { login } from '../redux/auth/actions'
import { authState } from '../helpers'
import { Redirect } from './Redirect'
import Swal from 'sweetalert'


const LoginPage = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(authState.loading)
    const dispatch = useDispatch()

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                Swal('Error', 'User not found', 'error')
            } else if (error.code === 'auth/wrong-password') {
                Swal('Error', 'Wrong password', 'error')
            }
        }
            
    }

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
        user == authState.notLoged ?
        (<div className="bg-primary-900 h-full">
            {/* <!-- Container --> */}
            <div className="container mx-auto min-h-screen h-full">
                <div className="flex justify-center py-60 px-6">
                    {/* <!-- Row --> */}
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex h-auto">
                        {/* <!-- Col --> */}
                        <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                            style={{ backgroundImage: "url(https://resources.evertonfc.com/photo-resources/2020/12/29/54cd1eab-619b-41ba-8286-8bedc5bf7b55/1KwwAlPV.jpg?width=1200&height=675)", backgroundPosition: 'center'}}
                        ></div>
                        {/* <!-- Col --> */}
                        <div className="w-full lg:w-1/2 bg-primary-800 p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center text-white font-semibold">Welcome papu!</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-primary-800 rounded" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-500" htmlFor="email"> Email </label>
                                    <input className="w-full bg-primary-900 px-3 py-2 text-sm leading-tight text-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-500" htmlFor="password"> Password </label>
                                    <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-400 bg-primary-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="text-center">
                                    <button 
                                        disabled={ email.length == 0 || password.length == 0 }
                                        className={`transition-all w-full px-4 py-2 font-bold text-white bg-accent bg-opacity-100 disabled:opacity-20 disabled:cursor-not-allowed rounded-full hover:opacity-80 focus:outline-none focus:shadow-outline`} type="submit">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
:
    user == authState.loged && (<Redirect to="/admin" />)

    )

    
}


export default LoginPage
