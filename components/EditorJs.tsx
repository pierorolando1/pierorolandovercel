import EditorJS from "@editorjs/editorjs"
import { useEffect } from "react";
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import { useState } from "react";

export default function EditorJs() {
    
    const [editor, setEditor] = useState<Quill>(null)

    useEffect(() => {
        /*new EditorJS({
            holder: 'editorjs'
        });*/
        var container = document.getElementById('editor');
        //var toolbarOptions = ['bold', 'italic', 'underline', 'strike']
        let editor: Quill = new Quill("#editor", {
            theme: 'snow',
            
        });
        editor.setText("hola mundo")
        setEditor(editor)
        
    }, [])
    
    return (
        <>
            {/*<div id="toolbar"/>*/}
            <div className="bg-gray-800 text-white max-w-7xl mx-auto">
                <div id="editor" className="bg-gray-800" />
                <button onClick={() => console.log(JSON.stringify(editor.getContents()))}>hola</button>
            </div>
        </>
    )
}
  