import React, { useState } from 'react'
import { delay, fileUpload, PostToBlog, removeSpecials, stateRedux } from "../helpers";
import BarLoader from 'react-spinners/BarLoader'
import ClockLoader from 'react-spinners/ClockLoader'
import { firebase, db } from '../firebase.config'
import { useSelector } from 'react-redux';
import router from 'next/router';
import Swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal2)


export const CreatePost = ({authState}) => {

    const [loadingImage, setLoadingImage] = useState(false)
    const [loadingPostUpload, setLoadingPostUpload] = useState(false)

    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [content, setcontent] = useState("")
    const [imagen, setImagen] = useState("")
    const [url, setUrl] = useState("")
    

    const handleFileChange = async (e: any) => {
        const file = e.target.files[0];
        if (file) {
            console.log(file)
            setLoadingImage(true)
            const imagen = await fileUpload(file)
            setImagen(imagen)
            setLoadingImage(false)
        }
    }
    
    const handleClick = async () => {
        //const urlId = removeSpecials(title).trim().toLowerCase().replaceAll(" ","-") //TODO:
        //const urlId = title
        const newPost: PostToBlog = {
            title,
            subtitle,
            content,
            authorID: authState.username,
            authorName: authState.displayName,
            authorPhoto: authState.photoUrl,
            date: new Date(),
            category: "General",
            imagen
        }
        console.log(newPost)

        try {
            setLoadingPostUpload(true)
            await db.collection("posts").doc(`${url}`).set(newPost)
            await delay(1000)
            setLoadingPostUpload(false)
            MySwal.close()
            router.push(`/admin/post/${url}`)
        } catch (error) {
            console.log(error.toString())
            
            MySwal.fire({
                title: "Algo salió mal",
                text: error
            })
        }
    }

    
    return (
        <form className="flex flex-col" onSubmit={e => e.preventDefault()}>
            <input required value={title} onChange={e => setTitle(e.target.value)} className="w-full text-3xl font-bold bg-transparent focus:outline-none focus:border-transparent text-primary-200 placeholder-opacity-70" type="text" placeholder="Titulo" />
            <input required value={subtitle} onChange={e => setSubtitle(e.target.value)} className="py-2 w-full text-xl bg-transparent font-semibold text-primary-200 placeholder-opacity-60 focus:outline-none focus:border-transparent" type="text" placeholder="Descripción" />
            <textarea value={content} onChange={e => setcontent(e.target.value)} className="w-full bg-transparent text-base placeholder-primary-200 placeholder-opacity-50 focus:outline-none focus:border-transparent text-primary-100" placeholder="Contenido (opcional)"></textarea>
            <div className="flex text-sm">
                <h1>/blog/</h1>
                <input type="text" className="p-0 bg-transparent" value={url} onChange={e => setUrl(e.target.value)} />
            </div>
            {
                loadingImage ? <BarLoader color="#1d4ed8" /> :
                <label htmlFor="upload-photo" className="transition-all bg-gradient-to-r opacity-80 from-blue-700 to-indigo-700 hover:opacity-100 max-w-xs cursor-pointer select-none py-2 rounded-3xl shadow hover:shadow-xl text-gray-50 font-bold text-base my-4">{imagen.length > 0?"Cambiar imagen":"Subir imagen"}</label>
            }
            {
                imagen.length>0 && !loadingImage ? <img src={imagen} className="max-w-xs" /> : <></>
            }
            <input required type="file" id="upload-photo" onChange={handleFileChange} className="hidden" /> 
                <div className="flex w-full justify-end">
                {
                    loadingPostUpload ? <ClockLoader size="30" color="#1d4ed8" /> :
                    <>
                        <button type="button" onClick={() => MySwal.close()} className="transition-all px-4 bg-gradient-to-r hover:shadow-xl from-red-600 to-pink-700 text-base text-gray-50 py-2 rounded-lg mr-2">Cancelar</button>
                        <button type="submit" onClick={handleClick} disabled={(title == "")} className={`transition-all px-4 bg-gradient-to-r hover:shadow-xl from-blue-600 to-indigo-700 text-base text-gray-50 py-2 rounded-lg ${(title === "") ? "from-blue-900 to-indigo-900 cursor-default" : ""}`}>Crear</button>
                    </>
                }
                </div>
        </form>
    )
}
