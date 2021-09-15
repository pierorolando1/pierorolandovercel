import React, { ChangeEvent } from 'react'
import { firebase } from '../../firebase.config'

import Swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { fileUpload } from '../helpers'

const MySwal = withReactContent(Swal2)


const ProfileAdmin = () => {

    const user = firebase.auth().currentUser

    const changePhoto = () => {
        const updateinput:any = document.querySelector("#updatephoto")
        updateinput.click()
    }

    const updateinputchange = async (e:ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0];
        if (file) {
            await fileUpload(file)
            console.log(file)
        }
    }

    return (
        <section className="w-full h-screen bg-gray-900 p-5 sm:p-14 sm:px-32 pt-10 overflow-auto flex flex-col overflow-y-auto">
            <div className="flex place-items-center justify-between">
                <img src={user.photoURL} className="w-24 h-24 object-cover rounded-full" />
                <button onClick={changePhoto} className="bg-blue-700 px-4 py-2 rounded-md text-gray-50 font-bold shadow-lg">Cambiar foto</button>
                <input onChange={updateinputchange} type="file"  accept="image/*" className="hidden" id="updatephoto"/>
            </div>
            <div className="transition-all bg-opacity-70 hover:bg-opacity-100 flex mt-6 my-2 place-items-center justify-between bg-gray-800 px-5 rounded py-3">
                <h1 className="text-gray-50 font-semibold text-xl">{user.displayName}</h1>
                <button className="bg-blue-700 px-4 py-2 rounded-md text-gray-50 font-bold shadow-lg">Cambiar nombre</button>
            </div>
            <div className="transition-all bg-opacity-70 hover:bg-opacity-100 flex my-2 place-items-center justify-between bg-gray-800 px-5 rounded py-3">
                <h1 className="text-gray-50 font-semibold text-lg">{user.email}</h1>
                <button className="bg-blue-700 px-4 py-2 rounded-md text-gray-50 font-bold shadow-lg">Cambiar email</button>
            </div>
            <div className="transition-all bg-opacity-70 hover:bg-opacity-100 flex my-2 place-items-center justify-between bg-gray-800 px-5 rounded py-3">
                <h1 className="text-gray-50 font-semibold text-lg">{user.phoneNumber ?? "Not phone"}</h1>
                <button className="bg-blue-700 px-4 py-2 rounded-md text-gray-50 font-bold shadow-lg">{user.phoneNumber ? "Cambiar telefono" : "Agregar telefono"}</button>
            </div>
        </section>
    )
}

export default ProfileAdmin
