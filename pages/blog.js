import React, { useEffect, useState } from 'react'
import { NormalPage } from '../components/NormalPage'
import { db } from '../firebase.config'

const Blog = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection("posts").onSnapshot((querySnapshot) => {
            const posts = [];
            querySnapshot.docs.forEach((doc) => {
                const { title, subtitle, date } = doc.data();
                posts.push({
                    id: doc.id,
                    title,
                    subtitle,
                    date,
                });
            });
            setPosts(posts);
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

                                    posts.map(post => (
                                        <>
                                            <h1>{posts.toString}</h1>
                                            <div className="mt-6">
                                                <div className="max-w-4xl px-10 py-6 bg-gray-800 rounded-lg shadow-xl">
                                                    <div className="flex justify-between items-center"><span className="font-light text-gray-400">Jun 1, 2020</span><a href="#" className="px-2 py-1 bg-gray-700 text-gray-100 font-bold rounded hover:bg-blue-600 transition-all" >Laravel</a></div>
                                                    <div className="mt-2">
                                                        <a href="#" className="text-2xl text-gray-300 font-bold hover:underline">Build Your New Idea with Laravel Freamwork.</a>
                                                        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                                    </div>
                                                    <div className="flex justify-between items-center mt-4">
                                                        <a href="#" className="text-blue-500 hover:underline">Read more</a>
                                                        <div>
                                                            <a href="#" className="flex items-center"
                                                            ><img src="https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fprincerupertstower.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1231288004-850x560.jpeg" alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
                                                                <h1 className="text-gray-400 font-bold hover:underline">Piero Rolando</h1>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
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
                                                <img src="https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fprincerupertstower.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1231288004-850x560.jpeg" alt="avatar" className="w-10 h-10 object-cover rounded-full mx-4" />
                                                <p><a href="#" className="text-gray-400 font-bold mx-1 hover:underline">Piero Rolando</a><span className="text-gray-500 text-sm font-light">Created 23 Posts</span></p>
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
