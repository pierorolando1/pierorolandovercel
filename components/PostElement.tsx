import React from 'react'
import Link from 'next/link'
import moment from 'moment';

const PostElement = ({ id, date, title, subtitle, category = "Todo" }) => {
    return (
        <div className="mt-6">
            <div className="max-w-4xl px-10 py-6 bg-gray-800 rounded-lg shadow-xl    animate__animated animate__fadeIn animate__fast">
                <div className="flex justify-between items-center"><span className="font-light text-gray-400">{date ? `${ moment(date.toDate()).format("DD | MM | YY")}` : 'no hay'}</span><a href="#" className="px-2 py-1 bg-gray-700 text-gray-100 font-bold rounded hover:bg-blue-600 transition-all" >{category}</a></div>
                <div className="mt-2">
                    <Link href={`blog/${id}`}>
                        <a className="text-2xl text-gray-300 font-bold hover:underline">{title}</a>
                    </Link>
                    <p className="mt-2 text-gray-500">{subtitle}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                    <div>
                        <a href="#" className="flex items-center"
                        ><img src="https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fprincerupertstower.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1231288004-850x560.jpeg" alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
                            <h1 className="text-gray-400 font-bold hover:underline">Piero Rolando</h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostElement
