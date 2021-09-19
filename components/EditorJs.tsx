import EditorJS from '@editorjs/editorjs'
import { useEffect } from 'react';
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { useState } from 'react';
import { delay } from '../helpers';
import ClockLoader from 'react-spinners/ClockLoader'
import { db } from '../firebase.config';
import swal from 'sweetalert';

export default function EditorJs({ post }) {

    const [editor, setEditor] = useState<Quill>(null)
    const [saving, setSaving] = useState(false)

    const publishAndSave = async () => {
        setSaving(true)
        await db.collection("posts").doc(post.id).update({ content: editor.root.innerHTML })
        setSaving(false)
        swal({
            title: "Actualizado con exito!",
            icon: "success",
        })
    }

    useEffect(() => {

        const main = async () => {
            let editor: Quill = new Quill('#editor', {
                theme: 'snow',
            });

            editor.root.innerHTML = post.content
            setEditor(editor)
        }
        main()
        //var container = document.getElementById('editor');
        //var toolbarOptions = ['bold', 'italic', 'underline', 'strike']
        //window.location.pathname.split('/admin/post/')[1]


    }, [])

    return (
        <>
            {/*<div id='toolbar'/>*/}
            <div className='bg-gray-800 text-white max-w-7xl mx-auto'>
                <div id='editor' className='bg-gray-800' />
            </div>
            <div className='max-w-7xl mx-auto flex w-full py-3'>
                {/* <button onClick={() => console.log(JSON.stringify( editor.root.innerHTML ))} className='bg-blue-700 rounded text-gray-50 font-extrabold p-2 px-3'>Guardar</button> */}
                {
                    saving ? <ClockLoader size="30" color="#1d4ed8" /> :
                    <button onClick={ publishAndSave } className='transition-all px-4 bg-gradient-to-r hover:shadow-xl from-blue-600 to-indigo-700 text-gray-50 py-2 rounded ml-1 font-bold sm:text-base text-sm'>Publicar y guardar</button>
                }
            </div>
        </>
    )
}
