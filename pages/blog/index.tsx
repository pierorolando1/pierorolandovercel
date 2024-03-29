import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { delay, getAllPosts } from '../../helpers'
import { NormalPage } from '../../components/NormalPage'
import PostElement from '../../components/PostElement'
import PostElementLoading from '../../components/PostElementLoading'
import { db } from '../../firebase.config'

interface Author {
    uid?: string,
    name: string,
    id: string,
    photo: string,
}

export default function Blog({ postsd }){
    const posts = JSON.parse(postsd)

    const [authors, setAuthors] = useState([])
    
    useEffect(() => {
        db.collection("authors").onSnapshot((querySnapshot) => {
            const authors = [];
            querySnapshot.docs.forEach((doc) => {
                const { name, photo } = doc.data();
                authors.push({
                    id: doc.id,
                    name,
                    photo,

                });
            });
            setAuthors(authors);
        });
        
    }, []);

    return (
        <NormalPage title="Blog" footer={false}>
            <div className="w-full h-screen">
                <div className="bg-primary-900 overflow-x-hidden">
                    <div className="lg:px-4 xl:px-2 md:px-4 px-2 py-36">
                        <div className="flex justify-between container mx-auto">
                            <div className="w-full lg:w-8/12">
                                <div className="flex items-center justify-between pb-2">
                                    <h1 className="text-xl font-bold text-gray-300 md:text-2xl sm:text-left text-center w-full">Posts</h1>
                                </div>

                                {/* <!-- init the post --> */}
                                {
                                    (posts.length > 0) ?
                                        posts.map((post, index) => (
                                            post ? 
                                            <PostElement
                                                key={index}
                                                imagen={post.imagen}
                                                authorPhoto={post.authorPhoto} 
                                                authorID={post.authorID} 
                                                authorName={post.authorName} 
                                                id={post.id} 
                                                date={post.date} 
                                                title={post.title} 
                                                subtitle={post.subtitle} 
                                                category={post.category} 
                                            />
                                            : <h1>cargando....</h1>
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



                                <div className="mt-8">
                                    <div className="flex transition-all">
                                        <a className="mx-1 px-3 py-2 bg-primary-800 text-gray-300 font-medium rounded cursor-not-allowed">previous</a>

                                        <a href="#" className="mx-1 px-3 py-2 bg-primary-800 text-gray-300 font-medium hover:bg-accent transition-all hover:text-white rounded">1</a>

                                        <a href="#" className="mx-1 px-3 py-2 bg-primary-800 text-gray-300 font-medium hover:bg-accent transition-all hover:text-white rounded">Next</a>
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-8 w-4/12 hidden lg:block  fixed right-10">
                                <div className="px-8">
                                    <h1 className="mb-4 text-xl font-bold text-gray-300">Authors</h1>
                                    <div className={"transition-all bg-opacity-0 flex flex-col bg-primary-800 hover:bg-opacity-90 max-w-sm px-0 hover:px-6 py-1 rounded-md" + (authors.length == 0 ? "animate-pulse" : "")}>
                                        <ul className="-mx-4">
                                                {
                                                    authors.length > 0 ?
                                                    authors.map((author: Author, index: number) => {
                                                        return  <li key={index} className="flex my-5 items-center animate__animated animate__fadeIn animate__fast">
                                                                    <img placeholder={"<h1>hola</h1>"} src={author.photo} alt=" " className="bg-gray-700 w-10 h-10 object-cover rounded-full mx-4" />
                                                                    <p><Link href={`blog/authors/${author.id}`}><a className="text-gray-400 font-bold mx-1 hover:underline">{author.name}</a></Link></p>
                                                                </li>
                                                    })
                                                    : (
                                                        <li className="flex my-5 items-center animate__animated animate__fast animate__fadeOut animate-pulse">
                                                            <div className="w-10 h-10 bg-gray-700 rounded-full mx-4"></div>
                                                            <div className="bg-gray-700 w-2/4 h-5 rounded-lg"></div>
                                                        </li>
                                                    )
                                                }
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-10 px-8">
                                    <h1 className="mb-4 text-xl font-bold text-gray-300">Categories</h1>
                                    <div className="flex flex-col bg-primary-800 px-4 py-6 max-w-sm rounded-lg shadow-md relative">
                                        <div className="absolute w-full h-full z-10 bg-primary-900  rounded-lg top-0 right-0 opacity-50 cursor-not-allowed flex justify-center place-items-center">
                                            <span className="text-white font-bold text-3xl z-50">En desarrollo 👷🚫</span>
                                        </div>
                                        <ul>
                                            <li><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- AWS</a></li>
                                            <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Laravel</a></li>
                                            <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Vue</a></li>
                                            <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Design</a></li>
                                            <li className="flex items-center mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Django</a></li>
                                            <li className="flex items-center mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- PHP</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </NormalPage>
    )
}

export async function getStaticProps() {

    const posts = await getAllPosts()

    return {
        props: {
            postsd: JSON.stringify(posts.sort())
        },
    }
}
