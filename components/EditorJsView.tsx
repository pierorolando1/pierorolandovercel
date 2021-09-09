import Quill from "quill"
import React, { useEffect } from "react"
import styled from "styled-components"

const ContainerEditor = styled.div`
    min-height: 100vh;
    background-color: rgba(31, 41, 55);
    h1,h2,h3 {
        color: rgba(209,213,219,1);
    }
    h2, h3 {
        padding-top: .45rem;
        padding-bottom: .45rem;
    }
    h1 {
        font-size: 1.125rem;
        line-height: 1.75rem;

        padding-top: .75rem;
        padding-bottom: .75rem;
    }
    
    @media (min-width: 768px){
        h1 {
            font-size: 1.5rem;
            line-height: 2rem;
        }
        h2 {
            font-size: 1.35rem;
            line-height: 1.85rem;
        }
        h3 {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
        color: rgba(156,163,175,1);
    }
    
    strong {
        font-weight: 700;
    }

    .ql-clipboard {
        display: none;
    }
`
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


