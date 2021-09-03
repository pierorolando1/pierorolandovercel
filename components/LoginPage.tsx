import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase.config'
import { login } from '../redux/auth/actions'
import { authState } from './helpers'
import { Redirect } from './Redirect'


const LoginPage = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(authState.loading)
    const dispatch = useDispatch()

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await firebase.auth().signInWithEmailAndPassword(email, password)
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
        (<div className="bg-gray-900 h-full">
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
                        <div className="w-full lg:w-1/2 bg-gray-800 p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center text-white font-semibold">Welcome papu!</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-gray-800 rounded" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-500" htmlFor="email"> Email </label>
                                    <input className="w-full bg-gray-900 px-3 py-2 text-sm leading-tight text-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-500" htmlFor="password"> Password </label>
                                    <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-400 bg-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="text-center">
                                    <button className="transition-all w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">Sign In</button>
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
