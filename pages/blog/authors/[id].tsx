import React, { useEffect } from 'react'
import { useState } from 'react'
import { Author, getAllAuthorsIds, getAuthor } from '../../../components/helpers'
import { NormalPage } from '../../../components/NormalPage'
import PostElement from '../../../components/PostElement'
import PostElementLoading from '../../../components/PostElementLoading'
import { db } from '../../../firebase.config'

export async function getStaticPaths() {
    const data = await getAllAuthorsIds()
    
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
    const postData = await getAuthor(params.id)
    const post = JSON.stringify(postData)
    return {
        props: {
            authorData: post
        }
    }
}

const AuthorPage = ({authorData}) => {

    const author: Author = JSON.parse(authorData)

    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection("posts").where("authorID", "==", "pierorolando").onSnapshot((querySnapshot) => {
            const posts = [];
            querySnapshot.docs.forEach((doc) => {
                const { title, subtitle, date, category } = doc.data();
                posts.push({
                    id: doc.id,
                    title,
                    subtitle,
                    date,
                    category
                });
            });
            setPosts(posts);
            console.log(posts)
        });
    }, [])

    return (
        <NormalPage title={author.name} footer={false}>
            <div className="w-full h-full bg-gray-900">
                <div className="bg-gray-900 w-full py-40 px-6 container mx-auto">
                    <h1 className="text-gray-100 font-semibold text-xl">Piero Rolando's <span>Posts</span></h1>
                    {
                        posts.length > 0 ?
                        posts.map(post => (
                            post ? <PostElement id={post.id} date={post.date} title={post.title} subtitle={post.subtitle} category={post.category} /> : <h1>cargando....</h1>
                        )
                        ) : (
                            <>
                                <PostElementLoading />
                                <PostElementLoading />
                                <PostElementLoading />
                                <PostElementLoading />
                            </>
                        )
                    }
                </div>
                <div className="w-4/12 hidden lg:block fixed right-0 top-40 h-screen">
                    <div className="flex flex-col items-center bg-gray-800 max-w-sm px-6 py-6 mx-auto rounded-lg shadow-md">
                        <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Ffe516ac8-daaf-11eb-b92f-5fe539a30c29.jpg?crop=2334%2C1556%2C0%2C0" className="mb-2 w-20 h-20 object-cover rounded-full shadow" alt="" />
                        <h1 className="text-gray-300 font-black text-lg">Piero Rolando</h1>
                        <h1 className="text-gray-500 font-medium text-sm">rolandopiero63@gmail.com</h1>
                        <h1 className="text-gray-500 font-medium text-sm mb-3">+51962791928</h1>
                        <button className="transition-all hover:bg-blue-800 bg-blue-700 text-gray-200 font-black w-full py-2 rounded-full">Contact</button>
                    </div>
                </div>
            </div>
        </NormalPage>
    )
}

export default AuthorPage
