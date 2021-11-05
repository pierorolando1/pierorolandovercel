import React from 'react'
import Link from 'next/link'
import moment from 'moment';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShareSelector } from './ui/Share';


const PostElement = ({ id, date, title, subtitle, category = "Todo", authorName, authorID, authorPhoto, imagen }) => {
    const [hover, setHover] = useState(false)
    //console.log(typeof date)

    return (
        <div className="my-8 transition-all">

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                className="group shadow-md max-w-4xl w-full rounded p-3 py-3 hover:py-6 px-6 transition-all bg-primary-800 bg-opacity-0 active:bg-opacity-90">
                <div className="w-full md:h-72 h-36 mb-3 rounded-md">
                    <img src={imagen} className="rounded-t-md w-full h-full object-cover bg-cover transform scale-100 group-hover:scale-105 transition-all opacity-60 group-hover:opacity-90" alt="" />
                </div>
                <div className="w-full flex items-center justify-between py-1">
                    <Link href={`/blog/authors/${authorID}`}>
                        <a className="flex items-center cursor-pointer hover:underline">
                            <img className="w-7 h-7 object-cover rounded-full" src={authorPhoto} alt="" />
                            <h1 className="text-xs pl-2 font-semibold text-primary-300 hover:underline">{authorName}</h1>
                        </a>
                    </Link>
                    <div className="relative">
                        <ShareSelector postId={id}/>
                    </div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-600 hover:text-accent h-5 w-5 transition-all cursor-pointer ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg> */}
                </div>
                <Link href={`/blog/${id}`}>
                    <a className="text-primary-100 sm:text-3xl text-2xl font-semibold py-2 hover:underline transition-all">{title}</a>
                </Link>
                <h3 className="text-primary-300 sm:text-base text-sm">{subtitle}</h3>
                <div className="flex items-center text-primary-200 font-semibold py-2 hover:text-accent transition-all cursor-pointer">
                    <h4 className="text-sm font-bold pr-1 pb-1">Read more</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </motion.div>

        </div>
    )
}

export default PostElement
