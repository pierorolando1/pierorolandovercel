import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Swal from 'sweetalert'
import { useState } from 'react'
import { Dashboard } from '../../../Dashboard'
import { Messages } from '../../../Messages'
import { CreatePost } from '../../../CreatePost'

import Swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useSelector } from 'react-redux'
import { stateRedux } from '../../../../helpers'
import { firebase } from '../../../../firebase.config'
import ProfileAdmin from '../../../Auth/ProfileAdmin'
import Modal from 'react-modal';
import { EditProfile } from './EditProfile'

const MySwal = withReactContent(Swal2)

export const AdminHomePage = () => {
    enum page {
        home,
        messages,
        profile
    }

    const router = useRouter()
    const [actualPage, setActualPage] = useState(page.home)
    const authState = useSelector((state:stateRedux) => state.auth)
    const [modalopen, setModalopen] = useState(false)

    const handleClick = () => {
        console.log("HOLA")
        const input:any = document.querySelector("#fileupload")
        input.click()
    }

    const openModalToEditProfile = () => {
        setModalopen(true)
    }

    const newPost = () => {
        console.log(authState)
        MySwal.fire({
            title: <CreatePost authState={authState} />,
            allowOutsideClick: false,
            showConfirmButton: false,
            
        }
            //TODO button: {catch: "Crear"},
            //button: "Crear",
            
        )
    }

    useEffect(() => {
        const saludar = localStorage.getItem("saludar")
        if(saludar == null){
            localStorage.setItem("saludar", "no")
            Swal(
                "Hola Val",
                "Espero estes bien:)",
                'success'
            )
        }

    }, [])
    return (
        <div>
            <div className="flex transition-all">
                <Modal
                    isOpen={modalopen}
                    onRequestClose={() => setModalopen(false)}
                    style={{
                        overlay: {
                            backdropFilter: 'blur(8px)',
                            background: "rgba(0,0,0,.4)"
                        },
                        content: {
                            maxWidth: "32rem",
                            maxHeight:"35rem",
                            padding: "0px",
                            margin: "auto",
                            background: "rgba(31, 41, 55)",
                            border: '0.3px',
                        }
                    }}
                >
                    <EditProfile setModalopen={setModalopen} />
                </Modal>
                <section className="w-1/6 min-h-screen h-full bg-gray-800 overflow-auto md:block hidden text-gray-500 ">
                    <img onClick={openModalToEditProfile} src={firebase.auth().currentUser.photoURL} alt="" className="w-16 h-16 lg:w-24 lg:h-24 md:mt-14 rounded-full mx-auto my-5 object-cover cursor-pointer" />
                    <button className={ `focus:outline-none transition-all hover:bg-gray-900 w-full flex items-center justify-center lg:py-0 py-2 ${actualPage == page.home ? "bg-gray-900 text-gray-200": ""}`} onClick={() => setActualPage(page.home)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <h1 className="p-3 lg:block hidden">Dashboard</h1>
                    </button>
                    <button className={`focus:outline-none transition-all hover:bg-gray-900 w-full flex items-center justify-center lg:py-0 py-2 relative ${actualPage == page.messages ? "bg-gray-900 text-gray-200": ""}`} onClick={() => setActualPage(page.messages)}>
                        <div className="absolute bg-red-600 top-2 right-7 rounded-full w-5 h-5 flex justify-center items-center font-black text-gray-50 text-xs">1</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        <h1 className="p-3 lg:block hidden">Mensajes</h1>
                    </button>
                    <button 
                        className={`focus:outline-none transition-all hover:bg-gray-900 w-full flex items-center justify-center lg:py-0 py-2 ${actualPage == page.profile ? "bg-gray-900 text-gray-200": ""}`} 
                        onClick={openModalToEditProfile}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <h1 className="p-3 lg:block hidden">Profile</h1>
                    </button>
                    <div className="p-2">
                        <button onClick={newPost} className="transition-all bg-gradient-to-r from-blue-600 to-blue-800 hover:to-blue-600 hover:from-blue-800 w-full py-3 text-gray-50 mx-auto font-black rounded-3xl text-sm">New</button>
                    </div>
                </section>
                {
                    actualPage == page.home ?
                    <Dashboard /> : <Messages />
                }
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
