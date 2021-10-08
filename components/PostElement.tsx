import React from 'react'
import Link from 'next/link'
import moment from 'moment';
import { motion } from 'framer-motion';
import { useState } from 'react';


const PostElement = ({ id, date, title, subtitle, category = "Todo", authorName, authorID, authorPhoto, imagen}) => {
    const [hover, setHover] = useState(false)
    
    return (
        <div className="mt-3 transition-all">
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl sm:px-10 sm:py-6 px-8 py-4 bg-primary-800 sm:rounded-lg rounded-sm shadow-lg relative bg-cover bg-center" 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={
                    hover ?
                    {background: `url(${imagen})`, backgroundPosition: "center", backgroundSize: "cover"}
                    : {}
                }
            >
                <div className="flex justify-between items-center">
                    <span className="font-light text-gray-400 sm:text-base text-sm">{date ? `${ moment(date.toDate()).format("DD | MM | YY")}` : '  '}</span>
                    <a href="#" className="px-2 py-1 bg-primary-700 text-gray-100 font-bold rounded hover:bg-accent-hover transition-all sm:text-base text-sm">{ category }</a>
                </div>
                <div className="mt-2">
                    <Link href={`/blog/${id}`}>
                        <a className="sm:text-2xl text-xl text-gray-300 font-bold hover:underline">{title}</a>
                    </Link>
                    <p className="mt-2 text-gray-500 sm:text-base text-sm">{subtitle}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <a href="#" className="text-accent hover:underline">Read more</a>
                    <Link href={`/blog/authors/${authorID}`}>
                        <a className="flex items-center">
                            <img src={authorPhoto} alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
                            <h1 className="text-gray-400 font-bold hover:underline sm:text-base text-sm">{authorName}</h1>
                        </a>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default PostElement
