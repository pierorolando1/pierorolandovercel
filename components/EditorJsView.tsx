import Quill from "quill"
import React, { useEffect } from "react"
import { ContainerEditor } from "../helpers"

const EditorJsView = () => {
    useEffect(() => {
        const postId:string = window.location.pathname.split("/admin/post/")[1].split("/prev")[0]
        
        let editor: Quill = new Quill("#editorview", {
            readOnly: true,
            theme: "bubble",
            modules: {
                toolbar: false,
            }
        });

        //editor.setText("fsdajfhajfh")
        //const algo = {"ops":[{"attributes":{"bold":true},"insert":"Hola"},{"attributes":{"header":1},"insert":"\n"}]}
        // @ts-ignore
        editor.setContents({ops:[{attributes:{bold:true},insert:"Heading 1"},{attributes:{header:1},insert:"\n"},{attributes:{bold:true},insert:"Heading 2"},{attributes:{header:2},insert:"\n"},{attributes:{bold:true},insert:"Heading 3"},{attributes:{header:3},insert:"\n"},{insert:"normal\n"}]})
        
    }, [])

    return (
        <ContainerEditor>
            <div id="editorview" className="bg-gray-900 max-w-8xl mx-auto"></div>
        </ContainerEditor>
    )
}

export default EditorJsView


