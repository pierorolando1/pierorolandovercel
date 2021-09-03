import { motion } from 'framer-motion'
import { db } from '../firebase.config'
import swal from '@sweetalert/with-react'
import Swal from 'sweetalert'

export const AdminPost = ({ id, title, image }) => {

    const deletePost = async () => {
        swal({
            title: "Deseas eliminar '"+title+"'?",
            buttons: {
                confirm: "Si"
            },
            dangerMode: true,
            content: (
                <div className="bg-red-600">
                    <img src={image} alt="" />
                </div>
            )
        }).then(async (willDelete:boolean) => {
            if (willDelete) {
                Swal({
                    title: "Una vez borrado no podrá recuperarse",
                    buttons: {
                        cancel: true,
                        catch: {
                          text: "YA!",
                          value: "confirm",
                        }
                    },  
                }).then(async value => {
                    if(value == "confirm") {
                        await db.collection("posts").doc(id).delete()
                        Swal("Listo", "borrao", "success")
                    }
                })
                
              }
        })
    }

    return (
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} className="py-2 border-b border-t border-gray-700 flex items-center">
            <img alt="" src={ image } className="sm:h-14 sm:w-14 h-11 w-11 object-cover rounded-2xl" />
            <div className="flex w-full items-center">
                <div className="flex w-full justify-around">
                    <h1 className="sm:text-lg text-sm font-medium text-gray-400 text-center">{title}</h1>
                </div>
                <button className="bg-blue-700 text-gray-300 sm:py-2 sm:px-3 py-1 px-2 text-sm rounded-md shadow-md bg-opacity-90">
                    <span className="md:block hidden">Editar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="block md:hidden h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </button>
                <button onClick={deletePost} className="bg-red-700 text-gray-300 sm:py-2 sm:px-3 py-1 px-2 text-sm rounded-md mx-3 shadow-md bg-opacity-90">
                    <span className="hidden md:block">Eliminar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="block md:hidden h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </motion.div>
    )
}
