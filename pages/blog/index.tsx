import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { NormalPage } from '../../components/NormalPage'
import PostElement from '../../components/PostElement'
import PostElementLoading from '../../components/PostElementLoading'
import { db } from '../../firebase.config'

interface Author {
    name: string,
    id: string,
    photo: string,
}

const Blog = () => {

    const [posts, setPosts] = useState([])
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        db.collection("posts").orderBy("date", "desc").onSnapshot((querySnapshot) => {
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
            console.log(authors)
        });
        
    }, []);

    return (
        <NormalPage title="Blog" footer={false}>
            <div className="w-full h-screen">
                <div className="bg-gray-900 overflow-x-hidden">
                    <div className="px-6 py-40">
                        <div className="flex justify-between container mx-auto">
                            <div className="w-full lg:w-8/12">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-xl font-bold text-gray-300 md:text-2xl">Posts</h1>
                                </div>

                                {/* <!-- init the post --> */}
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



                                <div className="mt-8">
                                    <div className="flex">
                                        <a className="mx-1 px-3 py-2 bg-gray-800 text-gray-300 font-medium rounded-md cursor-not-allowed"> previous </a>

                                        <a href="#" className="mx-1 px-3 py-2 bg-gray-800 text-gray-300 font-medium hover:bg-blue-500 hover:text-white rounded-md"> 1 </a>

                                        <a href="#" className="mx-1 px-3 py-2 bg-gray-800 text-gray-300 font-medium hover:bg-blue-500 hover:text-white rounded-md"> Next </a>
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-8 w-4/12 hidden lg:block  fixed right-10">
                                <div className="px-8">
                                    <h1 className="mb-4 text-xl font-bold text-gray-300">Authors</h1>
                                    <div className="flex flex-col bg-gray-800 max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
                                        <ul className="-mx-4">
                                            <li className="flex items-center">
                                                {
                                                    authors.map((author: Author) => {
                                                        return <>
                                                            <img src={author.photo} alt="avatar" className="w-10 h-10 object-cover rounded-full mx-4" />
                                                            <p><Link href={`blog/authors/${author.id}`}><a className="text-gray-400 font-bold mx-1 hover:underline">{author.name}</a></Link></p>
                                                        </>
                                                    })
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-10 px-8">
                                    <h1 className="mb-4 text-xl font-bold text-gray-300">Categories</h1>
                                    <div className="flex flex-col bg-gray-800 px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md relative">
                                        <div className="absolute w-full h-full z-10 bg-gray-900 rounded-lg top-0 right-0 opacity-50 cursor-not-allowed flex justify-center place-items-center"><span className="text-white font-bold text-3xl z-50">En desarrollo 👷🚫</span></div>
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


export default Blog
