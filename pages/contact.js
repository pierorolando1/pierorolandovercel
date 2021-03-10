import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import NProgress from "nprogress";
import nProgress from "nprogress";
import Head from 'next/head'
import Navbar from '../components/Navbar/navbar';

const Contact = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            console.log(url);
            NProgress.start();
        };

        router.events.on("routeChangeStart", handleRouteChange);

        router.events.on("routeChangeComplete", () => NProgress.done());

        router.events.on("routeChangeError", () => nProgress.done());

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Contacto</title>
            </Head>
            <Navbar />
            <main className="bg-gray-900 flex items-center justify-center h-screen">
                hello world
            </main>
        </>
    )
}

export default Contact