import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

export const ShareSelector = ({postId}) => {

    return (
        <Menu>
            <Menu.Button className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-600 hover:text-accent h-5 w-5 transition-all cursor-pointer ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 top-3 w-56 mt-2 origin-top-right bg-primary-800 bg-opacity-90 divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-4 pt-2 pb-3">
                        <h1 className="text-sm text-primary-300 font-semibold pb-2">Share in:</h1>
                        <Menu.Item>
                            {({ active }) => (
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://pierorolando.vercel.app/blog/${postId}`} target="_blank"
                                    onClick={() => { }}
                                    className={`flex rounded-md items-center w-full text-xs font-semibold hover:text-secondary mt-1 text-primary-300 transition-all`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 16" id="" fill="currentColor">
                                        <g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0656 8.04889C16.0656 3.60361 12.4692 0 8.03279 0C3.5964 0 0 3.60361 0 8.04889C0 12.0663 2.93747 15.3962 6.77766 16V10.3755H4.73809V8.04889H6.77766V6.27562C6.77766 4.25837 7.9769 3.1441 9.81177 3.1441C10.6906 3.1441 11.6099 3.3013 11.6099 3.3013V5.28208H10.597C9.5991 5.28208 9.28791 5.90252 9.28791 6.53905V8.04889H11.5158L11.1596 10.3755H9.28791V16C13.1281 15.3962 16.0656 12.0663 16.0656 8.04889Z"></path></g>
                                        <defs><clipPath id="clip0"><rect width="16" height="16" fill="white"></rect></clipPath></defs>
                                    </svg>
                                    <h1 className="pl-1 font-semibold">Facebook</h1>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a href={`https://twitter.com/intent/tweet?text=Menudo%20articulo&url=https://pierorolando.vercel.app/blog/${postId}`} target="_blank"
                                    className={`flex rounded-md items-center w-full text-xs font-semibold hover:text-blue-500 mt-3 text-primary-300 transition-all`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor"><path d="M14.3554 4.76542C14.3655 4.90649 14.3655 5.04758 14.3655 5.18865C14.3655 9.49131 11.066 14.449 5.03555 14.449C3.17767 14.449 1.45179 13.9149 0 12.9879C0.26397 13.0181 0.517752 13.0282 0.791878 13.0282C2.32485 13.0282 3.73605 12.5143 4.86296 11.6376C3.42133 11.6074 2.2132 10.6703 1.79694 9.38048C2.00001 9.4107 2.20304 9.43086 2.41626 9.43086C2.71067 9.43086 3.00511 9.39053 3.2792 9.32003C1.77666 9.01771 0.649721 7.70778 0.649721 6.12576V6.08547C1.08625 6.32731 1.59391 6.47845 2.13195 6.49858C1.24869 5.91413 0.670034 4.91657 0.670034 3.78799C0.670034 3.18341 0.832441 2.6292 1.11672 2.14552C2.73095 4.12052 5.15736 5.4103 7.87816 5.55139C7.82741 5.30955 7.79694 5.05766 7.79694 4.80575C7.79694 3.0121 9.25888 1.55102 11.0761 1.55102C12.0203 1.55102 12.8731 1.94401 13.4721 2.57883C14.2132 2.43776 14.9238 2.16568 15.5533 1.79286C15.3096 2.54862 14.7919 3.18344 14.1117 3.58647C14.7716 3.51597 15.4112 3.33455 16 3.08267C15.5534 3.72754 14.995 4.30188 14.3554 4.76542V4.76542Z"></path></svg>
                                    <h1 className="pl-1 font-semibold">Twitter</h1>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a href={`https://wa.me/?text=Wonderful%20post%20https://pierorolando.vercel.app/blog/${postId}`} target="_blank"
                                    className={`flex rounded-md items-center w-full text-xs font-semibold hover:text-green-500 mt-3 text-primary-300 transition-all`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 14 14" fill="currentColor"><path d="M12.036,1.964A6.707,6.707,0,0,0,1.42,9.944L0,14l4.056-1.42a6.707,6.707,0,0,0,7.98-10.616ZM10.609,9.2l-.774.774c-.641.641-2.461-.139-4.065-1.742S3.387,4.807,4.028,4.165L4.8,3.391a.411.411,0,0,1,.581,0l.968.968a.411.411,0,0,1,0,.581L5.77,5.52A5.7,5.7,0,0,0,8.48,8.23l.581-.581a.411.411,0,0,1,.581,0l.968.968A.411.411,0,0,1,10.609,9.2Z"></path></svg>
                                    <h1 className="pl-1 font-semibold">WhatsApp</h1>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`flex rounded-md items-center w-full text-xs font-semibold hover:text-accent mt-3 text-primary-300 transition-all`}
                                onClick={() => {
                                    navigator.clipboard.writeText(`https://pierorolando.vercel.app/blog/${postId}`).then(() => {
                                        const Toast = Swal.mixin({
                                            background: "#151a21",
                                            toast: true,
                                            position: 'top-end',
                                            showConfirmButton: false,
                                            timer: 1500,
                                            timerProgressBar: true
                                          })
                                          Toast.fire({
                                            icon: 'success',
                                            title: 'Copy successfully'
                                          })
                                    })
                                }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 699.428 699.428" fill="currentColor"><g><path d="M502.714,0.678C500.004,0.678,240.428,0,240.428,0C194.178,0,153,42.425,153,87.429l-25.267,0.59c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0.678z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715V174.857c0-32.523,26.753-43.714,65.571-43.714v393.429C153,569.576,194.178,612,240.428,612c0,0,236.975-0.24,262.482-0.24C502.91,638.295,485.513,655.715,459,655.715z M502.714,459.24H306c-12.065,0-21.857-9.77-21.857-21.836c0-12.064,9.792-21.834,21.857-21.834h196.714c12.065,0,21.857,9.77,21.857,21.834C524.571,449.471,514.779,459.24,502.714,459.24z M502.714,350.064H306c-12.065,0-21.857-9.771-21.857-21.835c0-12.065,9.792-21.835,21.857-21.835h196.714c12.065,0,21.857,9.77,21.857,21.835C524.571,340.272,514.779,350.064,502.714,350.064z M546.428,174.857c-23.277,0-43.714-21.004-43.714-43.714c0,0,0-44.283,0-86.751v-0.044L612,174.857H546.428z"></path></g></svg>
                                    <h1 className="pl-1 font-semibold">Copy link</h1>
                                </button>
                            )}
                        </Menu.Item>
                    </div>

                </Menu.Items>
            </Transition>
        </Menu>

    )
}