import React from 'react'
import Link from 'next/link'
import moment from 'moment';
import { motion } from 'framer-motion';
import { useState } from 'react';


const PostElement = ({ id, date, title, subtitle, category = "Todo", authorName, authorID, authorPhoto, imagen }) => {
    const [hover, setHover] = useState(false)
    console.log(typeof date)

    return (
        // <div className="mt-3 transition-all">
        //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        //         className="max-w-4xl sm:px-10 sm:py-6 px-8 py-4 bg-primary-800 sm:rounded-lg rounded-sm shadow-lg relative bg-cover bg-center" 
        //         onMouseEnter={() => setHover(true)}
        //         onMouseLeave={() => setHover(false)}
        //         style={
        //             hover ?
        //             {background: `url(${imagen})`, backgroundPosition: "center", backgroundSize: "cover"}
        //             : {}
        //         }
        //     >
        //         <div className="flex justify-between items-center">
        //             <span className="font-light text-gray-400 sm:text-base text-sm">{date ? `${ moment.unix(date.seconds).format("DD | MM | YY")}` : '  '}</span>
        //             <a href="#" className="px-2 py-1 bg-primary-700 text-gray-100 font-bold rounded hover:bg-accent-hover transition-all sm:text-base text-sm">{ category }</a>
        //         </div>
        //         <div className="mt-2">
        //             <Link href={`/blog/${id}`}>
        //                 <a className="sm:text-2xl text-xl text-gray-300 font-bold hover:underline">{title}</a>
        //             </Link>
        //             <p className="mt-2 text-gray-500 sm:text-base text-sm">{subtitle}</p>
        //         </div>
        //         <div className="flex justify-between items-center mt-4">
        //             <a href="#" className="text-accent hover:underline">Read more</a>
        //             <Link href={`/blog/authors/${authorID}`}>
        //                 <a className="flex items-center">
        //                     <img src={authorPhoto} alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
        //                     <h1 className="text-gray-400 font-bold hover:underline sm:text-base text-sm">{authorName}</h1>
        //                 </a>
        //             </Link>
        //         </div>
        //     </motion.div>
        // </div>
        <div className="my-6 transition-all">

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-4xl w-full rounded p-3 sm:px-1 px-6">
                <div className="w-full flex items-center justify-between py-1">
                    <a href="/" className="flex items-center cursor-pointer hover:underline">
                        <img className="w-7 h-7 object-cover rounded-full" src={authorPhoto} alt="" />
                        <h1 className="text-sm pl-2 font-semibold text-primary-300 hover:underline">{authorName}</h1>
                    </a>
                    <div className="flex">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-600 hover:text-accent h-5 w-5 transition-all cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-600 hover:text-accent h-5 w-5 transition-all cursor-pointer ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </div>
                </div>
                <h1 className="text-primary-100 sm:text-3xl text-2xl font-semibold py-2 hover:underline transition-all">{title}</h1>
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
