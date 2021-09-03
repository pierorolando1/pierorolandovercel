import React from 'react'
import Link from 'next/link'
import moment from 'moment';
import { motion } from 'framer-motion';


const PostElement = ({ id, date, title, subtitle, category = "Todo", authorName, authorID, authorPhoto}) => {
    return (
        <div className="mt-6">
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} className="max-w-4xl px-10 py-6 bg-gray-800 rounded-lg shadow-xl">
                <div className="flex justify-between items-center"><span className="font-light text-gray-400">{date ? `${ moment(date.toDate()).format("DD | MM | YY")}` : 'no hay'}</span><a href="#" className="px-2 py-1 bg-gray-700 text-gray-100 font-bold rounded hover:bg-blue-600 transition-all" >{category}</a></div>
                <div className="mt-2">
                    <Link href={`/blog/${id}`}>
                        <a className="text-2xl text-gray-300 font-bold hover:underline">{title}</a>
                    </Link>
                    <p className="mt-2 text-gray-500">{subtitle}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                    <Link href={`/blog/authors/${authorID}`}>
                        <a className="flex items-center">
                            <img src={authorPhoto} alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
                            <h1 className="text-gray-400 font-bold hover:underline">{authorName}</h1>
                        </a>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default PostElement
