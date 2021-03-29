import React from 'react'

const PostElement = () => {
    return (
        <div className="mt-6">
            <div className="max-w-4xl px-10 py-6 bg-gray-800 rounded-lg shadow-xl    animate__animated animate__fadeIn animate__fast">
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
    )
}

export default PostElement
