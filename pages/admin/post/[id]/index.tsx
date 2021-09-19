import { useEffect } from 'react'
import { GeneralPage } from '../../../../components/GeneralPage'

import dynamic from "next/dynamic"
import router from 'next/router'
import { EditPostPlaceholder } from '../../../../components/Admin Panel/EditPostPlaceholder'
import { db } from '../../../../firebase.config'
import { useState } from 'react'
import { Redirect } from '../../../../components/Redirect'
import { fileUpload, Post } from '../../../../helpers'
import { AdminNavBar } from '../../../../components/Navbar/AdminNavBar'

const EditorJs = dynamic(() => import("../../../../components/EditorJs"), { ssr: false })

const PostEdit = () => {

    const [postLoading, setPostLoading] = useState(true)
    const [post, setPost] = useState<Post>(null)
    const [imagen, setImagen] = useState(null)
    useEffect(() => {
        const main = async () => {
            const postId = window.location.pathname.split("/admin/post/")[1]
            const postF = await db.collection("posts").doc(postId).get()
            console.log(postF.data())
            setPost({
                ...postF.data(),
                id: postF.id,
            })
            setPostLoading(false)
        }
        main()
    }, [])

    const photoChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const imagenurl = await fileUpload(file)
            const postId = window.location.pathname.split("/admin/post/")[1]
            await db.collection("posts").doc(postId).update({
                imagen: imagenurl
            })
            setImagen(imagen)

            router.reload()
        }
    }

    return (
        !postLoading ?
            <GeneralPage>
                {
                    (post != null) ? (
                        <div className="h-full min-h-screen bg-gray-900 transition-all">
                            <AdminNavBar />
                            <div className="image-container relative">
                                <div className="w-full h-full absolute bg-gray-900 bg-opacity-80 flex flex-col sm:p-14 p-7">
                                    <div className="max-w-7xl mx-auto w-full h-full">
                                    </div>
                                    <div className="max-w-7xl mx-auto w-full">
                                        <button
                                            onClick={() => {
                                                const temp:any = document.querySelector("#imageselector")
                                                console.log(temp)
                                                temp.click()
                                            }}
                                            className="bg-blue-700 text-gray-50 p-3 px-4 rounded font-black sm:text-base text-sm">Change photo</button>
                                        <input type="file" accept="image/*" id="imageselector" className="hidden" onChange={photoChange} />
                                    </div>
                                </div>
                                <div className="w-full h-full" 
                                    style={{ background: `url('${imagen == null ? post.imagen : imagen}')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                            </div>
                            <div className="flex mx-auto max-w-7xl justify-between sm:px-1 px-3 py-5 pb-3">
                                <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold text-gray-200">{post.title}</h1>
                                <div className="flex items-center">
                                    <button className="bg-blue-700 text-gray-50 font-black p-2 rounded-md sm:text-sm text-xs">Edit title</button>
                                </div>
                            </div>
                            <div className="flex mx-auto max-w-7xl justify-between sm:px-1 px-3 pb-2">
                                <h1 className="md:text-2xl text-lg font-semibold text-gray-300 py-3">{post.subtitle}</h1>
                                <div className="flex items-center">
                                    <button className="bg-blue-700  text-gray-50 font-black p-2 rounded-md sm:text-sm text-xs">Edit subtitle</button>
                                </div>
                            </div>
                            <EditorJs post={post} />
                            <div className="w-full h-8"></div>
                            <button onClick={() => router.push(`/admin/post/${window.location.pathname.split("/admin/post/")[1]}/prev`)} className="transition-all fixed bottom-5 right-5 sm:bottom-10 sm:right-10 bg-indigo-700 text-white font-black p-3 px-5 rounded-full hover:bg-blue-600 shadow-xl sm:text-base text-sm hover:shadow-2xl">Previsualizar</button>
                        </div>
                    )
                        : <Redirect to="/admin/" />
                }
            </GeneralPage> :
            <EditPostPlaceholder />
    )
}

export default PostEdit
