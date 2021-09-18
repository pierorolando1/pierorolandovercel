import React, { Fragment, useEffect } from 'react'
import router from 'next/router'
import styled from 'styled-components'
import { useState } from 'react'

export const AdminNavBar = () => {
    const [activeNav, setActiveNav] = useState(window.scrollY > 0)
    useEffect(() => {
        window.addEventListener('scroll', function () {
            var navbaradminactive = document.getElementById('navbaredit')
            if (window.scrollY > 115){
                setActiveNav(true)
            } else {
                setActiveNav(false)
            }
          //navbaradminactive.classList.toggle('navbaradminactive', window.scrollY > 0);
        })
    }, [])
    const NavInternal = styled.nav`
        /*position: fixed;
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
        z-index: 50;
        width: 100%;

        .navbaradminactive {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
        }*/
    `
    return (
        <NavInternal id="navbaredit" className={`transition-all fixed z-50 w-full py-14 sm:px-0 px-4 navinternal ${activeNav ? "navbaradminactive" : ""}`}>
            <div className="max-w-7xl mx-auto">
                <button className="transition-all" onClick={() => router.push("/admin")}>
                    <i className="text-gray-100 hover:text-white text-3xl fal fa-angle-left"></i>
                </button>
            </div>
        </NavInternal>
    )
}
