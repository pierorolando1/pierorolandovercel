import React from 'react'

const LoginPage = () => {
    return (
        <div className="bg-gray-900 ">
            {/* <!-- Container --> */}
            <div className="container mx-auto h-screen">
                <div className="flex justify-center py-60 px-6">
                    {/* <!-- Row --> */}
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex h-auto">
                        {/* <!-- Col --> */}
                        <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                            style={{ backgroundImage: "url(https://resources.evertonfc.com/photo-resources/2020/12/29/54cd1eab-619b-41ba-8286-8bedc5bf7b55/1KwwAlPV.jpg?width=1200&height=675)", backgroundPosition: 'center'}}
                        ></div>
                        {/* <!-- Col --> */}
                        <div className="w-full lg:w-1/2 bg-gray-800 p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center text-white font-semibold">Welcome Pickford!</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-gray-800 rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-500" htmlFor="username"> Username </label>
                                    <input className="w-full bg-gray-900 px-3 py-2 text-sm leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-500" htmlFor="password"> Password </label>
                                    <input className="w-full px-3 py-2 mb-3 text-sm leading-tight bg-gray-900 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                    <p className="text-xs italic text-red-500">Andas muy sapo amigo.</p>
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-500" htmlFor="password"> Second Password </label>
                                    <input className="w-full px-3 py-2 mb-3 text-sm leading-tight bg-gray-900 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                    <p className="text-xs italic text-red-500">Solo don Piero puede entrar aquí.</p>
                                </div>

                                <div className="text-center">
                                    <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage
