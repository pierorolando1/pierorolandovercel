import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ClockLoader from 'react-spinners/ClockLoader'
import Swal from 'sweetalert2'
import { firebase } from '../../../../firebase.config'
import { fileUpload, updateEmailInAll, updateNameInAll, updatePhoneInAll, updatePhotoInAll } from '../../../../helpers'

export const EditProfile = ({setModalopen}) => {

    const [passwordChanged, setPasswordChanged] = useState(false)
    const [loadingImage, setLoadingImage] = useState(false)
    const [updating, setUpdating] = useState(false)

    const [imagen, setImagen] = useState(firebase.auth().currentUser.photoURL)
    const [displayName, setDisplayName] = useState(firebase.auth().currentUser.displayName)
    const [email, setEmail] = useState(firebase.auth().currentUser.email)
    const [phone, setPhone] = useState(firebase.auth().currentUser.phoneNumber)

    const { username } = useSelector((state:any) => state.auth)

    const photoChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setLoadingImage(true)
            const imagen = await fileUpload(file)
            setImagen(imagen)

            await updatePhotoInAll({
                photoURL: imagen,
                username
            })

            setLoadingImage(false)
        }
    }

    const onSave = async () => {
        setUpdating(true)

        await updatePhotoInAll({
            photoURL: imagen,
            username
        })
        await updateNameInAll({
            username,
            newName: displayName
        })
        await updateEmailInAll({
            username,
            newEmail: email
        })
        await updatePhoneInAll({
            username,
            newPhone: phone
        })

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            background: "rgba(31, 41, 55)"
        })
        setUpdating(true)
        
        Toast.fire({
            icon: 'success',
            title: 'Actualizado satisfactoriamente'
        })
        
        setModalopen(false)
    }

    return (
        <div className="w-full h-full overflow-hidden">
            <div className="bg-gray-900 w-full border border-gray-800 rounded-t-md top-0 left-0 flex items-center justify-between p-2">
                <h1 className="text-gray-50 text-sm font-bold">Edit profile</h1>
                {
                    !updating ?
                    <button onClick={onSave} className="bg-gray-200 py-1 text-sm px-2 rounded-full font-bold">Guardar</button>
                    : <ClockLoader size="28" color="#1d4ed8" />
                }
            </div>
            <div className="w-full max-h-full overflow-auto bg-gray-900 bg-opacity-80 p-2 px-4 h-full border-r border-l border-gray-800">
                {
                !loadingImage ?
                <>
                    <label className="text-gray-400 font-semibold text-xs">Photo</label>
                    <img 
                        onClick={() => {
                            const temp:any = document.querySelector("#imageselector")
                            temp.click()
                        }}
                        src={imagen}
                        className="transition-all cursor-pointer hover:opacity-60 w-20 h-20 rounded-full object-cover" />
                        <input accept="image/*" onChange={photoChange} type="file" className="hidden" id="imageselector" />
                </>
                :   <div className="w-20 h-20">
                        <ClockLoader size="80" color="#1d4ed8" />
                    </div>
                }
                
                <label className="text-gray-400 font-semibold text-xs">Nombre</label>
                <input type="text" className="w-full bg-gray-800 text-gray-50 rounded-md px-4 font-medium text-sm shadow-md" placeholder="Nombre" 
                    defaultValue={ displayName }
                    onChange={e => setDisplayName(e.target.value)} 
                />
                <label className="text-gray-400 font-semibold text-xs">Email</label>
                <input type="email" className="w-full bg-gray-800 text-gray-50 rounded-md px-4 font-medium text-sm shadow-md" placeholder="Email" 
                    defaultValue={ email } 
                    onChange={e => setEmail(e.target.value)}
                />
                <label className="text-gray-400 font-semibold text-xs">Phone</label>
                <input type="number" className="w-full bg-gray-800 text-gray-50 rounded-md px-4 font-medium text-sm shadow-md" placeholder="Phone" 
                    defaultValue={phone} 
                    onChange={e => setPhone(e.target.value)}
                />
                {
                    passwordChanged ? 
                    <h1 className="text-gray-100 text-sm font-semibold py-2">Se te envió un email para que cambies tu contraseña!</h1>
                    :
                    <button
                        onClick={async () => {
                            await firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
                            console.log("adas")
                            setPasswordChanged(true)
                        }}
                        className="bg-gray-200 py-1 text-sm px-3 rounded-full font-bold my-3">Cambiar contraseña</button>
                }
            </div>
        </div>
    )
}
