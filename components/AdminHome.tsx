import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Swal from 'sweetalert'
import Head from 'next/head'

export const AdminHomePage = () => {
    const router = useRouter()
    useEffect(() => {
        Swal(
            "Hola Val",
            "Espero estes bien:)",
            'success'
        )
    }, [])
    return (
        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet" />
            </Head>
            <div className="flex">
                <section className="w-1/6 h-screen bg-gray-800 overflow-auto md:block hidden">
                    <img onClick={() => Swal(
            "Hola Val",
            "Espero estes bien:)",
            'success'
        )} src="https://i2-prod.liverpoolecho.co.uk/incoming/article20510740.ece/ALTERNATES/s1200c/0_GettyImages-1232631276.jpg" alt="" className="w-16 h-16 lg:w-24 lg:h-24 md:mt-14 rounded-full mx-auto my-5 object-cover cursor-pointer" />
                    <button className="transition-all hover:bg-gray-900 w-full flex items-center justify-center text-gray-300 lg:py-0 py-2 bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <h1 className="p-3 lg:block hidden">Dashboard</h1>
                    </button>
                    <button className="transition-all hover:bg-gray-900 w-full flex items-center justify-center text-gray-500 lg:py-0 py-2 relative">
                        <div className="absolute bg-red-600 top-2 right-7 rounded-full w-5 h-5 flex justify-center items-center font-black text-gray-50 text-xs">1</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        <h1 className="p-3 lg:block hidden">Mensajes</h1>
                    </button>
                </section>
                <section className="w-full h-screen bg-gray-900 p-3 sm:p-10 pt-10 overflow-auto">
                    <h1 className="text-2xl text-gray-300 pb-6 font-black">Posts</h1>
                    <div className="w-full bg-gray-800 rounded-lg p-3">
                        <h1 className="text-gray-300 font-black pb-3">Recientes</h1>
                        <div className="py-2 border-b border-t border-gray-700 flex items-center">
                            <img alt="" src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2021/02/20181148/Jordan-Pickford-752x428.jpg" className="sm:h-14 sm:w-14 h-11 w-11 object-cover rounded-2xl" />
                            <div className="flex w-full items-center">
                                <div className="flex w-full justify-around">
                                    <h1 className="sm:text-lg text-sm font-medium text-gray-400 text-center">El mejor arquero de europa</h1>
                                </div>
                                <button className="bg-blue-700 text-gray-300 sm:py-2 sm:px-3 py-1 px-2 text-sm rounded-md shadow-md bg-opacity-90">
                                    <span className="md:block hidden">Editar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="block md:hidden h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </button>
                                <button className="bg-red-700 text-gray-300 sm:py-2 sm:px-3 py-1 px-2 text-sm rounded-md mx-3 shadow-md bg-opacity-90">
                                    <span className="hidden md:block">Eliminar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="block md:hidden h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="fixed bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur bottom-0 w-full md:hidden flex justify-evenly items-center py-2 text-gray-500">
                <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </button>
                <button className="bg-blue-700 bg-opacity-100 text-gray-50 font-black w-8 h-8 rounded-full">+</button>
                <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
