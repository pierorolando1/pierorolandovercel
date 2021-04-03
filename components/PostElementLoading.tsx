import React from 'react'

const PostElementLoading = () => {
  return (
    <div className="mt-6">
      <div className="max-w-4xl px-10 py-6 bg-gray-800 rounded-lg shadow-xl         animate__animated animate__fadeIn animate__fast     animate__animated animate__fast animate__fadeOut">
        <div className="flex justify-between items-center animate-pulse"><span className="bg-gray-600 rounded-md h-6 w-20"></span><a href="#" className="px-2 py-1 bg-blue-600 text-blue-600 font-bold rounded-md hover:bg-blue-600 transition-all">Laravel</a></div>
        <div className="mt-2">
          <div className="text-2xl text-gray-300 font-bold hover:underline bg-gray-600 w-11/12 rounded-md h-8 animate-pulse"></div>
          <p className="mt-2 text-gray-500 bg-gray-700 rounded-md h-6 w-full animate-pulse"></p>
          <p className="mt-2 text-gray-500 bg-gray-700 rounded-md h-6 w-10/12 animate-pulse"></p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <a href="#" className="text-blue-500 hover:underline bg-blue-900 rounded-md animate-pulse opacity-95 h-6 w-20"></a>
          <div>
            <a href="#" className="flex items-center"
            ><div className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block bg-gray-900 animate-pulse"></div>
              <h1 className="font-bold hover:underline bg-gray-900 rounded-md animate-pulse h-6 text-gray-900">Piero Rolando</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostElementLoading
