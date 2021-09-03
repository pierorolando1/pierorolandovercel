import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NormalPage } from '../../components/NormalPage'
import { db } from '../../firebase.config'
import { motion } from 'framer-motion'
import { getAllPostIds, getPost, Post } from '../../components/helpers'
import { DefaultSeo } from 'next-seo'

export async function getStaticPaths() {
    const data = await getAllPostIds()
    
    const paths = data.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPost(params.id)
    const post = JSON.stringify(postData)
    return {
        props: {
            postData: post
        }
    }
}

const PostPage = ({postData}) => {
            //const { id } = router.query
    const post: Post = JSON.parse(postData)
    useEffect(() => {
        console.log(post)
        /*(async () => {
            document.getElementById("container").innerHTML = post.content
        })()*/


    }, [])

    return (

        <>
            <DefaultSeo
                title={post.title}
                description={post.subtitle}
                openGraph={{
                    title: post.title,
                      description: post.subtitle,
                      images: [
                        {
                          url: post.imagen,
                          width: 900,
                          height: 506,
                          alt: 'Image',
                        },
                      ],
                      site_name: 'Blog',
                    }}
                />
        <NormalPage footer={false} title={post?.title}>
                <div className="bg-gray-900 w-full min-h-screen">
                    <div className="top-0 fixed image-container w-full">
                        <div className="relative w-full h-full ">
                            <div className="w-full h-full absolute bg-gray-900 bg-opacity-80" />
                            <div className="absolute w-full h-full">
                                <h1 className="w-full h-full flex items-end p-4 md:pb-10 pb-4 md:text-5xl sm:text-3xl text-2xl font-bold text-gray-200 max-w-8xl mx-auto">{post?.title}</h1>
                            </div>
                            {/* <motion.img initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }} src={post?.imagen} className="h-full w-full object-cover z-0 transition-opacity" /> */}
                                <div className="w-full h-full z-0 bg-cover bg-center" style={{backgroundImage: `url(${post?.imagen})`}}></div>
                        </div>
                    </div>
                    <div className="bg-rd-600 w-full min-h-screen div-margin-top z-20 relative bg-gray-900 md:py-10 py-6">
                        <div className="w-full h-full max-w-8xl mx-auto px-4" id="container" dangerouslySetInnerHTML={{__html: post.content}}>
                            {/*AQUI IRIA TODO EL CODIGO EN FIREBASE*/}

                            {/*AQUI IRIA TODO EL CODIGO EN FIREBASE*/}
                        </div>
                    </div>
                </div>
            </NormalPage>
        </>
    )
}

export default PostPage


