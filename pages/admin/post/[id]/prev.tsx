import React from 'react'
import { useEffect } from 'react'
import Quill from 'quill'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import { delay } from '../../../../helpers'

const EditorJsView = dynamic(() => import("../../../../components/EditorJsView"),{ssr:false})

const Previsualization = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const main = async () => {
            await delay(1000)
            setLoading(false)
        }
        main()
    }, [])

    return (
        loading ? <div className="bg-gray-900 h-screen">
                <BarLoader color="#1d4ed8" />
            </div>
        :
        <EditorJsView />
    )
}

export default Previsualization


/*
    {'ops':[{'attributes':{'bold':true},'insert':'hola mundo'},{'attributes':{'header':1},'insert':'\n'},{'insert':'hola mundo\nasdfsafafdsafsa\na'},{'attributes':{'list':'ordered'},'insert':'\n'},{'insert':'2'},{'attributes':{'list':'ordered'},'insert':'\n'},{'insert':'2'},{'attributes':{'list':'ordered'},'insert':'\n'},{'insert':'2'},{'attributes':{'list':'ordered'},'insert':'\n'},{'insert':'2'},{'attributes':{'list':'ordered'},'insert':'\n'},{'insert':'2'},{'attributes':{'list':'ordered'},'insert':'\n\n'}]}
*/