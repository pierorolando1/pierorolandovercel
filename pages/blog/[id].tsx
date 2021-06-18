import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NormalPage } from '../../components/NormalPage'
import { db } from '../../firebase.config'
import { motion } from 'framer-motion'


const Post = () => {

    const router = useRouter()
    const { id } = router.query
    console.log(id)
    const [post, setPost] = useState<any>({})

    useEffect(() => {
        (async () => {
            const data = await db.collection("posts").doc(`${id}`).get()
            const post = data.data()
            setPost(post)
            document.getElementById("container").innerHTML = post.content
        })()


    }, [])

    return (
        <NormalPage footer={false} title={id}>
            <div className="bg-gray-900 w-full min-h-screen">
                <div className="top-0 fixed image-container w-full">
                    <div className="relative w-full h-full ">
                        <div className="w-full h-full absolute bg-gray-900 bg-opacity-80" />
                        <div className="absolute w-full h-full">
                            <h1 className="w-full h-full flex items-end p-4 md:pb-10 pb-4 md:text-5xl sm:text-3xl text-2xl font-bold text-gray-200 max-w-8xl mx-auto">{post.title}</h1>
                        </div>
                        <motion.img initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }} src={post.imagen} className="h-full w-full object-cover z-0 transition-opacity" />
                    </div>
                </div>
                <div className="bg-rd-600 w-full min-h-screen div-margin-top z-20 relative bg-gray-900 md:py-10 py-6">
                    <div className="w-full h-full max-w-8xl mx-auto px-4" id="container">
                        {/*AQUI IRIA TODO EL CODIGO EN FIREBASE*/}

                        {/*AQUI IRIA TODO EL CODIGO EN FIREBASE*/}
                    </div>
                </div>
            </div>
        </NormalPage>
    )
}

export default Post
