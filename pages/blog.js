import React from 'react'
import { NormalPage } from '../components/NormalPage'

const Blog = () => {
    return (
        <NormalPage title="Blog" footer={ false }>
            <div className="w-full h-screen">
                <div class="bg-gray-900 overflow-x-hidden">
                    <div class="px-6 py-40">
                        <div class="flex justify-between container mx-auto">
                            <div class="w-full lg:w-8/12">
                                <div class="flex items-center justify-between">
                                    <h1 class="text-xl font-bold text-gray-300 md:text-2xl">Posts</h1>
                                </div>

                                {/* <!-- init the post --> */}
                                {
                                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,].map(post => (
                                        <div class="mt-6">
                                        <div class="max-w-4xl px-10 py-6 bg-gray-800 rounded-lg shadow-xl">
                                            <div class="flex justify-between items-center"><span class="font-light text-gray-400">Jun 1, 2020</span><a href="#" class="px-2 py-1 bg-gray-700 text-gray-100 font-bold rounded hover:bg-blue-600 transition-all" >Laravel</a></div>
                                            <div class="mt-2">
                                                <a href="#" class="text-2xl text-gray-300 font-bold hover:underline">Build Your New Idea with Laravel Freamwork.</a>
                                                <p class="mt-2 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                            </div>
                                            <div class="flex justify-between items-center mt-4">
                                                <a href="#" class="text-blue-500 hover:underline">Read more</a>
                                                <div>
                                                    <a href="#" class="flex items-center"
                                                    ><img src="https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fprincerupertstower.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1231288004-850x560.jpeg" alt="avatar" class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
                                                        <h1 class="text-gray-400 font-bold hover:underline">Piero Rolando</h1>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                    )
                                }



                                <div class="mt-8">
                                    <div class="flex">
                                        <a class="mx-1 px-3 py-2 bg-gray-800 text-gray-300 font-medium rounded-md cursor-not-allowed"> previous </a>

                                        <a href="#" class="mx-1 px-3 py-2 bg-gray-800 text-gray-300 font-medium hover:bg-blue-500 hover:text-white rounded-md"> 1 </a>

                                        <a href="#" class="mx-1 px-3 py-2 bg-gray-800 text-gray-300 font-medium hover:bg-blue-500 hover:text-white rounded-md"> Next </a>
                                    </div>
                                </div>
                            </div>
                            <div class="-mx-8 w-4/12 hidden lg:block  fixed right-10">
                                <div class="px-8">
                                    <h1 class="mb-4 text-xl font-bold text-gray-300">Authors</h1>
                                    <div class="flex flex-col bg-gray-800 max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
                                        <ul class="-mx-4">
                                            <li class="flex items-center">
                                                <img src="https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fprincerupertstower.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1231288004-850x560.jpeg" alt="avatar" class="w-10 h-10 object-cover rounded-full mx-4" />
                                                <p><a href="#" class="text-gray-400 font-bold mx-1 hover:underline">Piero Rolando</a><span class="text-gray-500 text-sm font-light">Created 23 Posts</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mt-10 px-8">
                                    <h1 class="mb-4 text-xl font-bold text-gray-300">Categories</h1>
                                    <div class="flex flex-col bg-gray-800 px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md relative">
                                        <div class="absolute w-full h-full z-10 bg-gray-900 rounded-lg top-0 right-0 opacity-50 cursor-not-allowed flex justify-center place-items-center"><span class="text-white font-bold text-3xl z-50">En desarrollo 👷🚫</span></div>
                                        <ul>
                                            <li><a href="#" class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- AWS</a></li>
                                            <li class="mt-2"><a href="#" class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Laravel</a></li>
                                            <li class="mt-2"><a href="#" class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Vue</a></li>
                                            <li class="mt-2"><a href="#" class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Design</a></li>
                                            <li class="flex items-center mt-2"><a href="#" class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Django</a></li>
                                            <li class="flex items-center mt-2"><a href="#" class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- PHP</a></li>
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
